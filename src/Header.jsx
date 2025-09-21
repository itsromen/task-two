import Brands from "./Brands";
import HeroCTA from "./HeroCTA";
import HeroStats from "./HeroStats";
import NavBar from "./NavBar";

export default function Header({ onNavigate, onLogout }) {
  return (
    <header className="h-screen flex flex-col items-center">
      <NavBar onNavigate={onNavigate} onLogout={onLogout} />
      <div className="w-[80%] max-sm:gap-8 h-full flex flex-col sm:grid sm:grid-cols-2">
        <HeroCTA />
        <HeroStats />
      </div>
      <Brands />
    </header>
  );
}
