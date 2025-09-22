import Button from "./Button";

export default function CartCalculations({
  carts,
  setCarts,
  recentCart,
  itemPrices,
}) {
  const total = itemPrices + 25;

  function handleClear() {
    if (!recentCart?.products) return;

    const indexCart = carts.findIndex((c) => c.id === recentCart.id);
    if (indexCart === -1) return;

    const newCarts = [...carts];

    const updatedCart = { ...newCarts[indexCart], products: [] };

    newCarts[indexCart] = updatedCart;

    setCarts(newCarts);
    localStorage.setItem("carts", JSON.stringify(newCarts));
  }

  return (
    <div className="justify-self-center sm:w-96 flex flex-col gap-6 p-4">
      <h2 className="text-3xl ">Order Summary</h2>
      <div className="border-b pb-6">
        <div className="flex items-center justify-between">
          <h3>Subtotal</h3>
          <p>${itemPrices.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <h3>Shipping</h3>
          <p>$25</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl">Total</h3>
        <p>${total.toFixed(2)}</p>
      </div>
      <div className="grid grid-rows-2 gap-2">
        <Button fill={false}>Checkout</Button>
        <Button clickEvent={handleClear}>Clear Cart</Button>
      </div>
    </div>
  );
}
