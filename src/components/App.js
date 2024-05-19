import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const App = () => {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About />
      <main>
        <ArticleList />
      </main>
    </div>
  );
};

export default App;
