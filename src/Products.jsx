import Product from "./Product";

export default function Products({
  carts,
  setCarts,
  recentCart,
  products,
  onNavigate,
}) {
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
          onClick={() => onNavigate("cart")}
          className="bg-purple-500 text-white/90 p-2 rounded-bl-xl hover:bg-pink-500 transition-colors"
        >
          Cart
        </button>
      </div>
      <main className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 mx-4 my-8 justify-items-center">
        {products.map((p) => {
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
    </>
  );
}
