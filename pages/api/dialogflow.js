import { SessionsClient } from '@google-cloud/dialogflow-cx';
import { Buffer } from 'buffer';
// require('dotenv').config();
// const fs = require('fs');

// const googleCredentialsBase64 = process.env.GOOGLE_APPLICATION_CREDENTIALS;
//   console.log("INPUT CREDENTIALS: ", googleCredentialsBase64)
//   const googleCredentials = Buffer.from(googleCredentialsBase64, 'base64').toString('utf8');
//   console.log("Decoded Credentials:", googleCredentials);
//   const credentials = JSON.parse(googleCredentials);
//   console.log("CREDSSSS", credentials)

//   fs.writeFileSync('gcloud-credentials.json', JSON.stringify(credentials));

// // Set the environment variable to point to the newly created file
// process.env.GOOGLE_APPLICATION_CREDENTIALS = path.join(__dirname, 'gcloud-credentials.json');
const sessionId = Math.random().toString(36).substring(7);
export default async function handler(req, res) {
  const { query } = req.body;

  

  const client = new SessionsClient();
  const projectId = 'customer-service-431816';
  const location = 'global'; 
  const agentId = '1fb8d8ae-579a-40a2-a927-58df5a94aa19';
  const languageCode = 'en';



  
  const sessionPath = client.projectLocationAgentSessionPath(
    projectId,
    location,
    agentId,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
      },
      languageCode,
    },
  };

  try {
    console.log("THE REQUEST: ", request)
    const [response] = await client.detectIntent(request);
    console.log("Full API Response:", response); // Log the full response object
    const result = response.queryResult.responseMessages.map(msg => msg.text?.text || '').join(' ');
    console.log("Processed Result:", result);
    res.status(200).json({ response: result });
  } catch (error) {
    console.log("API Error:", error);
    res.status(500).json({ error: error.message });
  }
}
