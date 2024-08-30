const fs = require('fs');
const { google } = require('googleapis');
// const apikeys = require('../clientDriveApi.json');
const SCOPE = ['https://www.googleapis.com/auth/drive'];

async function authorize() {
  const jwtClient = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
   process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    SCOPE
  );

  await jwtClient.authorize();
  return jwtClient;
}

async function uploadFile(authClient) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: 'v3', auth: authClient });
console.log('get uplloaded')
    const fileMetaData = {
      name: 'test.txt',
      parents: ['1W6Wy0PlsLWKZbGWGBUU2eaYRI8NCQvPp']
    };

    drive.files.create({
      resource: fileMetaData,
      media: {
        body: fs.createReadStream('test.txt'),
        mimeType: 'text/plain'
      },
      fields: 'id'
    }, (error, file) => {
      if (error) {
        return reject(error);
      }
      resolve(file);
    });
  });
}

module.exports = { authorize, uploadFile };
