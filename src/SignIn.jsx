import { useState } from "react";

export default function SignIn({ users, setCurrentUser, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const user = users.find((u) => u.username === username);
    if (user?.password === password) {
      onLogin(true);
      localStorage.setItem("loggedIn", "true");
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user)); // store the whole user object
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
