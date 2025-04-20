import React, { useEffect, useState } from 'react';
import { getNearExpiry } from '../api';

const NearExpiryList = () => {
  const [nearExpiry, setNearExpiry] = useState([]);

  useEffect(() => {
    const fetchNearExpiry = async () => {
      const res = await getNearExpiry();
      setNearExpiry(res.data);
    };
    fetchNearExpiry();
  }, []);

  return (
    <div>
      <h2>Items Near Expiry (Next 3 Days)</h2>
      <ul>
        {nearExpiry.map((item) => (
          <li key={item._id}>
            {item.itemName} - Exp: {new Date(item.expiryDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearExpiryList;

