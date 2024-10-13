const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.handler = async function (event, context) {
  console.log("Function invoked with event:", JSON.stringify(event));

  if (event.httpMethod !== "POST") {
    console.log("Method Not Allowed:", event.httpMethod);
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { message } = JSON.parse(event.body);
    console.log("Received message:", message);

    console.log("Creating new thread");
    const thread = await openai.beta.threads.create();
    console.log("Thread created:", thread.id);

    console.log("Adding message to thread");
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    console.log("Running assistant");
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID,
    });
    console.log("Run created:", run.id);

    console.log("Checking run status");
    let runStatus;
    do {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      console.log("Current run status:", runStatus.status);
    } while (runStatus.status !== "completed" && runStatus.status !== "failed");

    if (runStatus.status === "failed") {
      console.error("Assistant run failed:", runStatus.last_error?.message);
      throw new Error("Assistant run failed: " + runStatus.last_error?.message);
    }

    console.log("Retrieving messages");
    const messages = await openai.beta.threads.messages.list(thread.id);

    console.log("Filtering assistant messages");
    const lastMessageForRun = messages.data
      .filter(
        (message) => message.run_id === run.id && message.role === "assistant"
      )
      .pop();

    if (lastMessageForRun) {
      console.log(
        "Assistant response:",
        lastMessageForRun.content[0].text.value
      );
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: lastMessageForRun.content[0].text.value,
        }),
      };
    } else {
      console.error("No response from assistant");
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "No response from assistant." }),
      };
    }
  } catch (error) {
    console.error("Error:", error);
    let errorMessage = "An error occurred.";
    let errorDetails = {};

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      errorMessage = `OpenAI API responded with non-2xx status: ${error.response.status}`;
      errorDetails = {
        data: error.response.data,
        headers: error.response.headers,
      };
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = "No response received from OpenAI API";
      errorDetails = {
        request: error.request,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage = "Error setting up the request";
      errorDetails = {
        message: error.message,
      };
    }

    console.error(
      "Detailed error:",
      JSON.stringify({
        message: errorMessage,
        error: error.message,
        details: errorDetails,
      })
    );

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: errorMessage,
        error: error.message,
        details: errorDetails,
      }),
    };
  }
};
