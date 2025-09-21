import { useState, useEffect } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import InstructorPerks from "./InstructorPerks.jsx";
import PopularCourses from "./PopularCourses.jsx";
import SearchCourses from "./SearchCourses.jsx";
import Subscribe from "./Subscribe.jsx";
import Testimonials from "./Testimonials.jsx";
import SignIn from "./SignIn.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";

export default function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const recentCart = currentUser
    ? carts
        ?.filter((c) => c.userId === currentUser.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))[0]
    : null;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!recentCart || !products.length) return;

    const items = products.reduce((acc, p) => {
      const item = recentCart.products.find((i) => i.productId === p.id);
      if (item) acc.push({ ...p, quantity: item.quantity });
      return acc;
    }, []);

    setCartItems(items);
  }, [recentCart, products]);

  const itemPrices = cartItems.reduce((acc, p) => {
    const totalItem = p.quantity * p.price;
    return acc + totalItem;
  }, 0);

  useEffect(() => {
    async function fetchData() {
      try {
        const [usersRes, productsRes, cartsRes] = await Promise.all([
          fetch("https://fakestoreapi.com/users"),
          fetch("https://fakestoreapi.com/products"),
          fetch("https://fakestoreapi.com/carts"),
        ]);

        if (!usersRes.ok || !productsRes.ok || !cartsRes.ok) {
          throw new Error("Failed to fetch one or more endpoints");
        }

        const [usersData, productsData, cartsData] = await Promise.all([
          usersRes.json(),
          productsRes.json(),
          cartsRes.json(),
        ]);

        setUsers(usersData);
        setProducts(productsData);
        setCarts(JSON.parse(localStorage.getItem("carts")) || cartsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {!isLoggedIn && (
        <SignIn
          users={users}
          setCurrentUser={setCurrentUser}
          onLogin={setIsLoggedIn}
        />
      )}

      {isLoggedIn && page === "products" && (
        <>
          <Products
            products={products}
            onNavigate={setPage}
            carts={carts}
            setCarts={setCarts}
            recentCart={recentCart}
          />
          <Footer styles="bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500" />
        </>
      )}

      {isLoggedIn && page === "cart" && recentCart && (
        <>
          <Cart
            onNavigate={setPage}
            cartItems={cartItems}
            carts={carts}
            setCarts={setCarts}
            itemPrices={itemPrices}
            recentCart={recentCart}
            currentUser={currentUser}
          />
          <Footer styles="bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500" />
        </>
      )}

      {isLoggedIn && page === "home" && (
        <main>
          <Header onLogout={setIsLoggedIn} onNavigate={setPage} />
          <SearchCourses />
          <PopularCourses />
          <InstructorPerks />
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500">
            <Testimonials />
            <Subscribe />
            <Footer />
          </div>
        </main>
      )}
    </>
  );
}
