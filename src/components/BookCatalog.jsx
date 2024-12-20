import React from "react";
import ReactDOM from "react-dom";
import BooksCatalog from "./components/BooksCatalog";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Книжный магазин</h1>
      <BooksCatalog />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
