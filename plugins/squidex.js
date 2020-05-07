const CONFIG = {
  url: 'https://cloud.squidex.io',
  appName: process.env.APP_NAME,
  clientId: process.env.SQUIDEX_CLIENT_ID,
  clientSecret: process.env.SQUIDEX_CLIENT_SECRET
}

function getBearerToken() {
  if (process.client) return localStorage.getItem('token')
  else {
    const fs = require('fs')
    return fs.readFileSync('./store/squidexToken.txt')
  }
}

function setBearerToken(token) {
  if (process.client) localStorage.setItem('token', token)
  else {
    const fs = require('fs')
    return fs.writeFileSync('./store/squidexToken.txt', token, 'utf8')
  }
}

function clearBearerToken() {
  if (process.client) localStorage.removeItem('token')
  else {
    const fs = require('fs')
    return fs.writeFileSync('./store/squidexToken.txt', '')
  }
}

async function fetchBearerToken() {
  // Check if we have already a bearer token in local store.

  let token;

  /*
  * for netlify generate, I prefer to comment this code

  token = getBearerToken()

  if (token && token.length) {
    return token
  }
  */
  const axios = require('axios').default
  const qs = require('querystring')
  let response = await axios.post(
    buildUrl('identity-server/connect/token'),
    qs.stringify({
      grant_type: 'client_credentials',
      client_id: CONFIG.clientId,
      client_secret: CONFIG.clientSecret,
      scope: 'squidex-api'
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
  if (response.status !== 200) {
    throw new Error(`Failed to retrieve token, got ${response.statusText}`)
  }
  token = response.data.access_token

  // Cache the bearer token in the local store.
  setBearerToken(token)

  return token
}

export async function runQuary(quaryObj) {
  const token = await fetchBearerToken()
  let { query } = require('gql-query-builder')
  const q = query(quaryObj)
  const axios = require('axios').default
  let response = await axios.post(
    'https://cloud.squidex.io/api/content/' + CONFIG.appName + '/graphql',
    q,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  )
  return response.data
}

export async function getContentInternal(retry) {
  // Fetch the bearer token.
  const token = await fetchBearerToken()

  const response = await fetch(buildUrl(url), {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  if (!response.ok) {
    if (response.status === 403 || response.status === 401) {
      // If we get an error we clear the bearer token and retry the request.
      clearBearerToken()

      if (retry) {
        return getContentInternal(url)
      }
    }

    throw new Error(`Failed to retrieve content, got ${response.statusText}`)
  }

  return await response.json()
}

function buildUrl(url) {
  if (url.length > 0 && url.startsWith('/')) {
    url = url.substr(1)
  }

  const result = `${CONFIG.url}/${url}`

  return result
}
