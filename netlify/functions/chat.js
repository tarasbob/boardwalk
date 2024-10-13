const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages } = JSON.parse(event.body);

    const response = await openai.createChatCompletion({
      model: 'gpt-4', // Use 'gpt-3.5-turbo' if 'gpt-4' is not available
      messages: messages,
    });

    const assistantMessage = response.data.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: assistantMessage })
    };

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred.', error: error.message })
    };
  }
};
