const SparkPost = require('sparkpost');
const client = new SparkPost('06fb52507f4f2172da532b7b50509eea6fdb8bad');

const sendMail = ({ email, to }) => {
  return new Promise((resolve, reject) => {
    client.transmissions.send({
      content: {
        from: 'maude@studio550.io',
        subject: email.subject,
        html: email.html
      },
      recipients: [
        { address: to }
      ]
    }).then(data => {
      console.log('Woohoo! You just sent your first mailing!');
      console.log(data);
      resolve({ status: 200, data: data })
    }).catch(err => {
      console.log('Whoops! Something went wrong');
      console.log(err);
      reject({error: err})
    });
  });
};

module.exports = sendMail;