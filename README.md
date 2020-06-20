# My portfolio website

This project is based on a grate boilerplate [Nuxt x Netlify](https://github.com/xdesro/nuxt-netlify-cms-starter). Also I used [Squidex](https://squidex.io) as a headless CMS for the content managing.

#### Demo

For live preview [Click here](http://nariman-work.netlify.com/)

### What you need to change

For the contact form, the message of the user will send to the telegram with a bot. The token of the bot and user ID of the receiver (your telegram account user-id) need to be changed. Modify these fields in [functions/contactForm.js](https://github.com/NarimanMov/nariman.work/blob/master/functions/contactFrom.js)

Also the [Squidex](https://squidex.io) access token are in the .env file.

### Running project

#### Development

```bash
npm install // yarn
npm run dev // yarn dev
```

#### Production

```bash
npm install // yarn
npm run build // yarn build
```
