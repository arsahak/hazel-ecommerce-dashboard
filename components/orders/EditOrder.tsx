"use client";

import { useState } from "react";

const EditOrder = () => {
  const [formData, setFormData] = useState({
    customerName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    shippingAddress: '123 Main St,\nApt 4B\nNew York, NY 10001',
    orderTimeline: {
      ordered: 'Mar 15, 2024',
      processed: 'Mar 16, 2024',
      shipped: 'Mar 17, 2024',
    },
    paymentMethod: 'Credit Card',
    cardNumber: '**** 1234',
    paymentStatus: 'Paid',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested object updates for the order timeline
    if (name.includes('orderTimeline.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        orderTimeline: {
          ...prev.orderTimeline,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Order Details:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 mt-5 space-y-6">
      <h1 className="text-xl font-semibold mb-4">Edit Order Details</h1>

      <div>
        <label className="block text-sm font-medium">Customer Name</label>
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Shipping Address</label>
        <textarea
          name="shippingAddress"
          value={formData.shippingAddress}
          onChange={handleChange}
          rows={3}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Order Timeline</label>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium">Ordered</label>
            <input
              type="date"
              name="orderTimeline.ordered"
              value={formData.orderTimeline.ordered}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Processed</label>
            <input
              type="date"
              name="orderTimeline.processed"
              value={formData.orderTimeline.processed}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Shipped</label>
            <input
              type="date"
              name="orderTimeline.shipped"
              value={formData.orderTimeline.shipped}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Payment Method</label>
        <input
          type="text"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Payment Status</label>
        <select
          name="paymentStatus"
          value={formData.paymentStatus}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/80"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditOrder;
