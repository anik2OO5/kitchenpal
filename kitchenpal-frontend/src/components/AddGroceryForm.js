import React, { useState } from 'react';
import { addGrocery } from '../api';

const AddGroceryForm = () => {
  const [form, setForm] = useState({
    itemName: '',
    quantity: '',
    expiryDate: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addGrocery(form);
      alert('Item added!');
      setForm({ itemName: '', quantity: '', expiryDate: '' });
    } catch (err) {
      alert('Error adding item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="itemName" placeholder="Item Name" value={form.itemName} onChange={handleChange} required />
      <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
      <input name="expiryDate" type="date" value={form.expiryDate} onChange={handleChange} required />
      <button type="submit">Add Grocery</button>
    </form>
  );
};

export default AddGroceryForm;
