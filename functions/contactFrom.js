const { Validator } = require('node-input-validator')
const TOKEN = '294830180:AAGXaCF1DlSqE8Lyk9VYbzYYKRMfBA5RHUw'
const ADMIN_USERID = 69367395
const rp = require('request-promise')
exports.handler = async (event, context) => {
  if (event.httpMethod == 'POST') {
    try {
      try {
        event.queryStringParameters.specialties = JSON.parse(
          event.queryStringParameters.specialties
        )
      } catch (err) {
        event.queryStringParameters.specialties = {}
      }
      const v = new Validator(event.queryStringParameters, {
        email: 'required|email|string',
        message: 'required|maxLength:1000|minLength:10|string'
      })
      let validation = await v.check()
      if (!validation)
        return {
          statusCode: 400,
          headers: { 'Content-Type': 'json/application' },
          body: JSON.stringify({ ok: false, error: v.errors })
        }
      let date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Tehran' })
      let trueDate = date.split(',')[0]
      trueDate = trueDate.split('/')
      let tmp = trueDate[0]
      trueDate[0] = trueDate[1]
      trueDate[1] = tmp
      date = trueDate.join('/') + ' ' + date.split(',')[1]
      let text = 'nariman.work #Contact_Form\n'
      text += '⏰ ' + date + '\n'
      text += '📧 Email: ' + event.queryStringParameters.email + '\n'
      text += '📬 Message:\n' + event.queryStringParameters.message
      await rp({
        url: 'https://api.telegram.org/bot' + TOKEN + '/sendMessage',
        qs: { chat_id: ADMIN_USERID, text: text }
      })
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'json/application' },
        body: JSON.stringify({ ok: true })
      }
    } catch (err) {}
  } else {
    return {
      statusCode: 200,
      body: 'Not allowed'
    }
  }
}
