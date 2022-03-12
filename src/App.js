import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
  return (
    <div className="App">
      <h2>Our Menu </h2>
      <Menu />
      <Categories />
      { console.log(items)}
    </div>
  );
}

export default App;
