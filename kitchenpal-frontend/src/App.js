import React from 'react';
import AddGroceryForm from './components/AddGroceryForm';
import GroceryList from './components/GroceryList';
import NearExpiryList from './components/NearExpiryList';

function App() {
  return (
    <div className="App">
      <h1>KitchenPal 🧑‍🍳</h1>
      <AddGroceryForm />
      <GroceryList />
      <NearExpiryList />
    </div>
  );
}

export default App;

