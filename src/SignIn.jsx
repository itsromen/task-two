import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn({ users, setCurrentUser, onLogin, isLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate("/home");
  }, [isLoggedIn, navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    setError(null);

    try {
      const user = users.find((u) => u.username === username);
      if (!user || user.password !== password)
        throw new Error("Invalid credentials");

      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("Failed to fetch JWT");

      const data = await res.json();
      const token = data.token;

      onLogin(true);
      setCurrentUser(user);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("jwtToken", token);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold">Login Page</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col border rounded-xl p-12"
      >
        <label htmlFor="username">Username</label>
        <input
          value={username}
          type="text"
          name="username"
          id="username"
          className="border rounded-xl mb-4 py-1 px-4"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          name="password"
          id="password"
          className="border rounded-xl mb-8 py-1 px-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="border rounded-xl py-1 hover:bg-black hover:text-white">
          Login
        </button>
      </form>
    </main>
  );
}
