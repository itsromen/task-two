export default function CartItem({
  recentCart,
  setCarts,
  carts,
  productId,
  title,
  count,
  quantity,
  image,
  cost,
}) {
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
    } else {
      updatedItem.quantity !== 1 && updatedItem.quantity--;
    }
    updatedCart.products[indexItem] = updatedItem;

    newCarts[indexCart] = updatedCart;

    setCarts(newCarts);
    localStorage.setItem("carts", JSON.stringify(newCarts));
  }
  return (
    <div className="max-sm:border-b w-9/10 max-sm:mx-auto sm:h-48 sm:w-96 grid grid-cols-2 gap-4">
      <img
        src={image}
        alt={title}
        className="justify-self-center self-center h-36 object-contain"
      />
      <div className="py-8 grid grid-rows-2 items-center">
        <div>
          <h3 className="font-semibold sm:truncate sm:w-96">{title}</h3>
          {count >= quantity ? (
            <p className="text-green-500 text-sm">In Stock</p>
          ) : (
            <p className="text-red-500 text-sm">Out of Stock</p>
          )}
        </div>
        <div className="flex max-sm:flex-col items-start max-sm:gap-2 sm:items-center justify-between">
          <div className="flex items-center gap-4 bg-purple-500 py-1 px-4 rounded-xl text-white/90">
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
          <span className="text-red-500 font-semibold">${cost}</span>
        </div>
      </div>
    </div>
  );
}
