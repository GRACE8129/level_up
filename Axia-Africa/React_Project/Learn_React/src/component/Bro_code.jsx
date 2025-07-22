import React, { useState } from "react";

const OnChange = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [Shipping, setShipping] = useState("");

  const handleTextChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSelectionChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <>
      <div className="onchange">
        <div>
          <input
            type="text"
            value={name}
            onChange={handleTextChange}
            placeholder="write your name"
          />
          <p>Name: {name}</p>
        </div>
        <div>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <p>Quantity: {quantity}</p>
        </div>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="write your comment"
        />
        <p>comment: {comment}</p>

        <select value={payment} onChange={handleSelectionChange}>
          <option value="">select an option</option>
          <option value="visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>payment: {payment}</p>

        <label>
          <input
            type="radio"
            onChange={handleShippingChange}
            value="pickup"
            checked={Shipping === "pickup"}
          />
          pick up
        </label>

        <label>
          <input
            type="radio"
            onChange={handleShippingChange}
            value="delivery"
            checked={Shipping === "delivery"}
          />
          delivery
        </label>
      </div>
    </>
  );
};

export default OnChange;
