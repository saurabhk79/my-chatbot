import Head from "next/head";

const Home = () => {
  function setThrottle(fun, delay) {
    let timeout;

    return function () {
      if (!timeout) {
        timeout = setTimeout(() => {
          fun.apply(this, arguments);
          timeout = null;
        }, delay);
      }
    };
  }

  async function main() {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.",
          },
          {
            role: "user",
            content:
              "Compose a poem that explains the concept of recursion in programming.",
          },
        ],
      }),
    });
    const data = await res.json();

    console.log(data);
  }

  const throttle = setThrottle(main, 1000);
  throttle();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-4 px-6">
        Chat with GPT-3
      </header>

      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="lg:w-3/4 bg-white flex-1 overflow-y-auto p-4">
          <div className="flex justify-end mb-4">
            <div className="flex flex-col max-w-xs rounded-lg overflow-hidden shadow-lg">
              <div className="px-4 py-2 bg-blue-600 text-white rounded-t-lg">
                <p>Hello, how can I help you?</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start mb-4">
            <div className="flex flex-col max-w-xs rounded-lg overflow-hidden shadow-lg">
              <div className="px-4 py-2 bg-gray-200 rounded-t-lg">
                <p>Sure, let me assist you with that.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 bg-gray-200 p-4">
          <div className="overflow-y-auto">
            <div className="flex mb-4">
              <div className="bg-white p-2 rounded-lg">
                <p className="text-gray-800">
                  Sure, let me assist you with that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="bg-white p-4 flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Home;
