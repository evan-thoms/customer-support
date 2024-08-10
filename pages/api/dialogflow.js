import { SessionsClient } from '@google-cloud/dialogflow-cx';

export default async function handler(req, res) {
  const { query } = req.body;

  const projectId = 'customer-service-431816';
  const location = 'global'; 
  const agentId = '1fb8d8ae-579a-40a2-a927-58df5a94aa19';
  const languageCode = 'en';

  const client = new SessionsClient();
  const sessionId = Math.random().toString(36).substring(7);
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
    const [response] = await client.detectIntent(request);
    const result = response.queryResult.responseMessages.map(msg => msg.text?.text || '').join(' ');
    res.status(200).json({ response: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
