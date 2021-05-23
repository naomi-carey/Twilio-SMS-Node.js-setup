require("dotenv").load();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is a twilio sms sent from node.js app",
    from: process.env.MY_TWILIO_PHONE_NUMBER,
    to: process.env.MY_TEST_PHONE_NUMBER,
  })
  .then((message) => console.log(message.sid));
