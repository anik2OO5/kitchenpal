import React, { useEffect, useState } from 'react';
import { getGroceries } from '../api';

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getGroceries();
      setGroceries(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Groceries</h2>
      <ul>
        {groceries.map((item) => (
          <li key={item._id}>
            {item.itemName} - {item.quantity} - Exp: {new Date(item.expiryDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
