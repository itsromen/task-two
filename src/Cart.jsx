import { Link } from "react-router-dom";
import CartCalculations from "./CartCalculations.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart({
  recentCart,
  cartItems,
  itemPrices,
  carts,
  setCarts,
}) {
  return (
    <div className="flex-1">
      <div className="flex justify-between">
        <Link to="/home">
          <button className="bg-purple-500 text-white/90 p-2 rounded-br-xl hover:bg-pink-500 transition-colors">
            Home
          </button>
        </Link>
        <Link to="/products">
          <button className="bg-purple-500 text-white/90 p-2 rounded-bl-xl hover:bg-pink-500 transition-colors">
            Products
          </button>
        </Link>
      </div>
      <main className="flex-auto flex grid xl:grid-cols-2">
        <div>
          {cartItems.map((i) => (
            <CartItem
              key={i.id}
              productId={i.id}
              recentCart={recentCart}
              setCarts={setCarts}
              carts={carts}
              title={i.title}
              count={i.rating.count}
              quantity={i.quantity}
              image={i.image}
              cost={i.price}
            />
          ))}
        </div>
        <CartCalculations
          carts={carts}
          setCarts={setCarts}
          recentCart={recentCart}
          itemPrices={itemPrices}
        />
      </main>
    </div>
  );
}
