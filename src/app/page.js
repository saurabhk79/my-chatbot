import Head from "next/head";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-16 bg-gray-800 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-gray-800 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 text-white flex items-center justify-between px-4 py-2">
          <button
            className="text-white hover:text-gray-300"
          >
            Open Sidebar
          </button>
          <h1 className="text-xl font-bold">ChatGPT</h1>
          <button className="text-white hover:text-gray-300">New Chat</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* Chats go here */}
      </div>

      <div className="h-16 bg-gray-200 flex items-center justify-between px-4 gap-4 w-[960px] mx-auto mb-8 rounded-xl">
        <textarea
          rows={1}
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Send
        </button>
      </div>
    </div>
  );
};

export default Home;
