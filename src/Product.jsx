import { useState } from "react";
import Button from "./Button";

export default function Product({
  carts,
  productId,
  setCarts,
  recentCart,
  image,
  title,
  rating,
  cost,
}) {
  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(null);
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  function handleQuantityChange(e) {
    if (!recentCart?.products) return;

    const indexCart = carts.findIndex((c) => c.id === recentCart.id);
    if (indexCart === -1) return;

    const newCarts = [...carts];

    const updatedCart = { ...newCarts[indexCart] };

    updatedCart.products = [...updatedCart.products];

    const indexItem = updatedCart.products.findIndex(
      (p) => p.productId === productId
    );
    if (indexItem === -1) return;

    const updatedItem = { ...updatedCart.products[indexItem] };

    if (e.target.textContent === "+") {
      updatedItem.quantity++;
      setQuantity(updatedItem.quantity);
    } else {
      if (updatedItem.quantity !== 1) {
        updatedItem.quantity--;
        setQuantity(updatedItem.quantity);
      }
    }
    updatedCart.products[indexItem] = updatedItem;

    newCarts[indexCart] = updatedCart;

    setCarts(newCarts);
    localStorage.setItem("carts", JSON.stringify(newCarts));
  }

  function handleAddition(e) {
    if (!recentCart?.products) return;

    const indexCart = carts.findIndex((c) => c.id === recentCart.id);
    if (indexCart === -1) return;

    const newCarts = [...carts];

    const updatedCart = { ...newCarts[indexCart] };

    updatedCart.products = [...updatedCart.products];

    const indexItem = updatedCart.products.findIndex(
      (p) => p.productId === productId
    );
    if (indexItem === -1) {
      const updatedItem = { productId, quantity: 1 };
      setQuantity(1);

      updatedCart.products.push(updatedItem);

      newCarts[indexCart] = updatedCart;

      setAdded(true);
      setCarts(newCarts);
    } else {
      const updatedItem = { ...updatedCart.products[indexItem] };

      updatedItem.quantity++;
      setQuantity(updatedItem.quantity);

      updatedCart.products[indexItem] = updatedItem;

      newCarts[indexCart] = updatedCart;

      setAdded(true);
      setCarts(newCarts);
      localStorage.setItem("carts", JSON.stringify(newCarts));
    }
  }

  return (
    <div className="bg-white p-2 rounded-2xl grid grid-rows-2 w-64 h-96 text-center">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-48 pb-2 object-contain rounded-xl justify-self-center"
      />
      <div className="grid grid-rows-4 place-items-center">
        <span className="flex">
          {stars.map((filled, idx) =>
            filled ? (
              <svg
                key={idx}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 text-yellow-500"
              >
                <path d="M12 .587l3.668 7.431L24 9.753l-6 5.845L19.335 24 12 20.202 4.665 24 6 15.598 0 9.753l8.332-1.735L12 .587z" />
              </svg>
            ) : (
              <svg
                key={idx}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-3 h-3 text-yellow-500"
              >
                <path d="M12 .587l3.668 7.431L24 9.753l-6 5.845L19.335 24 12 20.202 4.665 24 6 15.598 0 9.753l8.332-1.735L12 .587z" />
              </svg>
            )
          )}
        </span>
        <h3 className="line-clamp-2">{title}</h3>
        <p className="font-semibold">${cost}</p>
        {added === null ? (
          <Button
            clickEvent={handleAddition}
            styles="justify-self-stretch self-stretch"
          >
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center gap-4 bg-purple-500 py-1 px-4 rounded-xl text-white/90">
            {" "}
            <button
              onClick={handleQuantityChange}
              className="cursor-pointer bg-purple-700 w-6 h-6 flex items-center justify-center rounded-full"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleQuantityChange}
              className="cursor-pointer bg-purple-700 w-6 h-6 flex items-center justify-center rounded-full"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
