const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { messages } = JSON.parse(event.body);

    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Invalid or empty messages array");
    }

    const thread = await openai.beta.threads.create();

    if (messages.length === 1 && messages[0].content === "INIT") {
      // Handle the INIT message
      await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content:
          "Please start the conversation with a friendly greeting and brief introduction of our company as an investment opportunity.",
      });
    } else {
      // Handle regular conversation
      for (const message of messages) {
        await openai.beta.threads.messages.create(thread.id, {
          role: message.role,
          content: message.content,
        });
      }
    }

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID,
    });

    // Wait for the run to complete
    let runStatus;
    do {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    } while (runStatus.status !== "completed" && runStatus.status !== "failed");

    if (runStatus.status === "failed") {
      throw new Error("Assistant run failed: " + runStatus.last_error?.message);
    }

    const threadMessages = await openai.beta.threads.messages.list(thread.id);
    const lastMessageForRun = threadMessages.data
      .filter(
        (message) => message.run_id === run.id && message.role === "assistant"
      )
      .pop();

    if (lastMessageForRun) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: lastMessageForRun.content[0].text.value,
        }),
      };
    } else {
      throw new Error("No response from assistant");
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred.",
        error: error.message,
      }),
    };
  }
};
