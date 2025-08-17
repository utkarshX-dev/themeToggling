function App() {
  return (
    <>
       <div className="max-w-sm rounded-2xl shadow-lg bg-white dark:bg-gray-800 p-6 m-auto mt-10">
      <div className="text-6xl mb-4">🌸</div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Card Title
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        This is a simple card with an emoji instead of an image. You can style it however you like.
      </p>
      <div className="text-center">
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Action
      </button>
      </div>
    </div>
    </>
  );
}

export default App;
