const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  authenticator: new IamAuthenticator({ apikey: 'lg-FTqmHQELiLM5SR4pEwREQjf-G2ZvBtzX3TiqTFNUw' }),
  //serviceUrl: 'http://api.eu-gb.assistant.watson.cloud.ibm.com',
  //serviceUrl: 'https://api.eu-gb.assistant.watson.cloud.ibm.com',
  serviceUrl: 'http://localhost:3000',
  version: '2021-06-14'
});

assistant.message(
  {
    input: { text: "What's the weather?" },
    assistantId: '79d51c0b-f7f7-4aa2-97b1-2fd4145a4e66',
    sessionId: 'dfb09afe-e8d8-453a-9bec-de5173e0efbe',
  })
  .then(response => {
    console.log(JSON.stringify(response.result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });