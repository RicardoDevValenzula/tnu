const Content = () => {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center">
        <h1 className="flex text-4xl">Lorem impson</h1>
        <div>
          <button className="px-20 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Mas informacion
          </button>
        </div>
      </div>
      <img
        src="images/placeholder.png"
        style={{ width: "800px", height: "600px" }}
      ></img>
    </div>
  );
};

export default Content;
