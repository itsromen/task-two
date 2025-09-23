import { useEffect, useMemo, useState } from "react";
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
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [sortBy, setSortBy] = useState(["", false]);
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(
    () =>
      category
        ? sortedProducts.filter((p) => p.category === category)
        : [...sortedProducts],
    [sortedProducts, category]
  );

  const searchedProducts = useMemo(
    () =>
      search
        ? filteredProducts.filter((p) =>
            p.title.toLowerCase().startsWith(search.toLowerCase())
          )
        : [...filteredProducts],
    [search, filteredProducts]
  );

  useEffect(() => {
    sortBy[0] === "price" &&
      sortBy[1] === false &&
      setSortedProducts([...products].sort((a, b) => a.price - b.price));
    sortBy[0] === "price" &&
      sortBy[1] === true &&
      setSortedProducts([...products].sort((a, b) => b.price - a.price));
    sortBy[0] === "rating" &&
      sortBy[1] === false &&
      setSortedProducts(
        [...products].sort((a, b) => a.rating.rate - b.rating.rate)
      );
    sortBy[0] === "rating" &&
      sortBy[1] === true &&
      setSortedProducts(
        [...products].sort((a, b) => b.rating.rate - a.rating.rate)
      );
    sortBy[0] === "" && setSortedProducts([...products]);
  }, [sortBy[0], sortBy[1]]);

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
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          name="search"
          id="search"
          placeholder="Search here..."
          className="bg-purple-500 text-white/90 p-2 rounded-bl-xl rounded-br-xl"
        />
        <button
          onClick={() => onNavigate("cart")}
          className="bg-purple-500 text-white/90 p-2 rounded-bl-xl hover:bg-pink-500 transition-colors"
        >
          Cart
        </button>
      </div>
      <main className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 mx-4 my-8 justify-items-center">
        {searchedProducts.map((p) => {
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
            className="flex flex-col items-start pl-24 justify-center gap-8 bg-white rounded-4xl w-2/5 h-2/5"
          >
            <div>
              <label htmlFor="sort">Sort By:</label>
              <select
                value={sortBy[0]}
                name="sort"
                id="sort"
                onChange={(e) => {
                  if (e.target.value !== "---") {
                    setSortBy((sortBy) => [e.target.value, sortBy[1]]);
                  }
                }}
              >
                <option>---</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
              <button
                onClick={() => {
                  setSortBy((sortBy) => [sortBy[0], !sortBy[1]]);
                }}
                className="bg-black/50 px-4 py-2"
              >
                {sortBy[1] ? "asc" : "dsc"}
              </button>
            </div>
            <div>
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
            </div>

            <button
              onClick={() => {
                setSortBy(["", false]);
                setCategory("");
              }}
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
