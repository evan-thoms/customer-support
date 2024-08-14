import { SessionsClient } from '@google-cloud/dialogflow-cx';
import { Buffer } from 'buffer';

const sessionId = Math.random().toString(36).substring(7);

const credentials = JSON.parse(Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiY3VzdG9tZXItc2VydmljZS00MzE4MTYiLAogICJwcml2YXRlX2tleV9pZCI6ICI5MzVjNWExZjc0NWM0MTBhMGI3ZmFhMDhlODM2YWMzODUwYTdhNTg2IiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUUN6dVZnb0F1RFRRT2RjXG5DYnBEczBKWlFiUHdQcHcwUWszSThPb3hEd2REcExPd3VmS0prMXY2by8ySVd3aWY3eUwzd2JmV1JnQWRNQnlnXG5uREViZ2FUZlRvM0h1dkIwQjFuZ3A0RkRjVDZVYklXdEtpSG5WamtubEYzdlpRRUdBazI5QzhCSFB3Y1U1by9RXG5hL2dlQitPZmZGY1NoOThqa2FoVzltMURKMURHVHZPNWRzQ1lGMXlqaTE0aTIyVWg4VmNySHoyalJOMDkzcEpYXG4wVzF4QUNtWldGbWdaQ1E0Vm1heThNeFNEeXpvSGF6MGVnOVB6MlBtbVFDRjRpdTRENmMrbW8xc25TSVZPdHNKXG42Y0dkaGtKdTkxZjZWNElTQ3FoMUFoREphMWRjcG1ieEtWTU00dUpOaTFrTWZFYTNvQmpCMWI2QWRreC9veG1iXG43ZEY2c011RkFnTUJBQUVDZ2dFQVNTanJ2KzNjQTJMcVMwY1NjYmlwQzVoNVhSUy9sVzVnSjZvYVN6b281TnBJXG40Mm51Vng2TFZLNG82TGJWL2ZUa3NTSkVhWTg1UUtoekh0WTJEMUpwQVJZREZRaitGTjFoTXRnOUFHMDY0a1NDXG43Z2kyb0dzeS9PK2loVzhDU2FYcWEwZzdUMFZTNXFrc1pkVnR2UnZOQndFZ21NU0Npd0lpR3JSWnFmcDVJU0FXXG4wcnhES0ptUXFnZGdlUmVCL0t2ZWtHRGZJbGNyN29POVRhTk85bXRxMHdDOEhIZEt1bnRXQ0xIMEY5dEZ6aFFoXG53L3pJMk14NFVMK1JYYldMTjFkOWsyOW9XeVZJaHhlb3pCT3I3QVBWbUpNUHh0RGMzb0VUWTRxT1ZLMmJQdUIrXG42T3RlUmlpSDU3WGZ4V3hYczFabHpZNXhhellOMTVYT0JobExCajhHaVFLQmdRRHZ5Sy8zd2lUdXk2dWRGTFpHXG5ENkczVnBWaFhPYlBCRGVVR2p3LzZIYUtKQUpJTzNCL3FHcVhGZWJEOWcyNUJHSnMyRXUyeEtHRzdmZFpxblpGXG5rSUp5MmY5bWJwZHZORENHYlpqK2NxVzcrSmhPOTR6WkVzbWEzYzNCMDBjd2FFNmcxSVo0V3ZYT0kvZW4xWG1JXG5aaVVxSFFmQU4zbjBnRGlaWWovZWFieXp2d0tCZ1FDLzROc2w2R3Y2WTVjYnNaOE9WYU1zZkNDS1VHYmNyTVNsXG5jaVN3VHlaOExnRWRPV1JZVlppMGttTkpUbkZ3dXFsWWp6RkdNMFNUVzlxNks4bkcweTF0dGN3YzJvbzlvZXFsXG5WWU1rRnR5L2lQWTVwT3NQR3BDTDlvZmU5eG4yUjREc1dQM29lclFVRUdzbEZUR1BqUU1xQmhYMER5V0U4czkwXG5KNUdtWVVwQnV3S0JnRldqK08xbGd1bGpCdTA0aTQxa1lkN29acnY2Z1ZrbzZXelZIZlc1WWpVZWZVNHRKSllEXG5vZVpLWlR4U01qNkZpVjNVdHQ0VlJwZTVnR0dmRjFUck14d3dMaDc0bXMrVjlVcmQ5QW5WQ3NxakZFc0g4VjlLXG5iWVVKZVVhajNrWTB5dmg0VDNySENnblJJTS9wMTlsV21pbDdhdHhGTkNLV2RTQ2JUYkp6VTNsakFvR0FFelFPXG4yc0ZqSlNFWWUzWVFaQi9mLzlEQWRQZE5CQ0xxWDJDSUdYa2ljZVVzeVY3NEV2c21HRlJhU1hqblU0L3E2T2tUXG4xbUhGS0RaV01yRzFOUWZua1FaVDBrTncrSEFmQ3NML0ovcDl4MUdPeXdBZFlscVhRdHEraUdzVWx4aGE1OHlVXG5STk1hK0xNWDloTWo3YWtBT3hGMjJ3RTFFUlEzL1BrRTA3RUMvSWNDZ1lFQW84TUE4ODFZb01OUG1DYnVxYTUrXG42RkJONkZieVhTUDlaN0xQdHJJUFNPSU5hSE9FTlZyZjhTVkdYZllqV2hqNVIwVUJaZEZTaVBTZjNtRVdGaUM1XG5jQjJNVW5TMGZTamNpd2o0c0VYekh0OGJqMHFQNkJMcEpNU256dlU1OHNrMkdTMk55ZGNHZXRCcE5hZ2NZMkdZXG5scXQ0SjAwYVl2eWY4Mkc4dzRIcWU1bz1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJ2ZXJjZWxkZXBsb3lAY3VzdG9tZXItc2VydmljZS00MzE4MTYuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJjbGllbnRfaWQiOiAiMTA4NTIyNjkzMDYyMjk3NjQ3MDk1IiwKICAiYXV0aF91cmkiOiAiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgiLAogICJ0b2tlbl91cmkiOiAiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLAogICJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL2NlcnRzIiwKICAiY2xpZW50X3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS92ZXJjZWxkZXBsb3klNDBjdXN0b21lci1zZXJ2aWNlLTQzMTgxNi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQo", 'base64').toString('utf-8'));console.log("CREDS",credentials)
export default async function handler(req, res) {
  const { query } = req.body;

  

  const client = new SessionsClient({credentials:credentials,});
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
