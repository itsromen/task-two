import { useState } from "react";
import Product from "./Product";

export default function Products({
  carts,
  setCarts,
  recentCart,
  products,
  onNavigate,
}) {
  const [isOpen, setOpen] = useState(false);
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <>
      <div className="flex justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="bg-purple-500 text-white/90 p-2 rounded-br-xl hover:bg-pink-500 transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-500 text-white/90 p-2 rounded-bl-xl rounded-br-xl hover:bg-pink-500 transition-colors"
        >
          Filter By Category
        </button>
        <button
          onClick={() => onNavigate("cart")}
          className="bg-purple-500 text-white/90 p-2 rounded-bl-xl hover:bg-pink-500 transition-colors"
        >
          Cart
        </button>
      </div>
      <main className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 mx-4 my-8 justify-items-center">
        {category
          ? filteredProducts.map((p) => {
              return (
                <Product
                  key={p.id}
                  productId={p.id}
                  carts={carts}
                  setCarts={setCarts}
                  recentCart={recentCart}
                  image={p.image}
                  title={p.title}
                  rating={p.rating.rate}
                  cost={p.price}
                />
              );
            })
          : products.map((p) => {
              return (
                <Product
                  key={p.id}
                  productId={p.id}
                  carts={carts}
                  setCarts={setCarts}
                  recentCart={recentCart}
                  image={p.image}
                  title={p.title}
                  rating={p.rating.rate}
                  cost={p.price}
                />
              );
            })}
      </main>
      {isOpen && (
        <div
          className="flex justify-center items-center fixed z-1 inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-8 bg-white rounded-4xl w-2/5 h-2/5"
          >
            <label htmlFor="category">Filter by Category:</label>
            <select
              value={category}
              name="category"
              id="category"
              onChange={(e) => {
                if (e.target.value !== "---") {
                  setCategory(e.target.value);
                }
              }}
            >
              <option>---</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <optgroup label="Clothing">
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
              </optgroup>
            </select>
            <button
              onClick={() => setCategory("")}
              className="bg-black/50 px-4 py-2"
            >
              Reset Filter
            </button>
          </div>
        </div>
      )}
    </>
  );
}
