import { Outlet, useLocation, useNavigate } from "react-router";
import { Search, Map, Home as HomeIcon, Heart, User, MapPin } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-main)] font-sans pb-20 md:pb-0">
      {/* Desktop Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-border-subtle)] hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center shadow-sm">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-xl leading-tight">StreetFood</h1>
              <p className="text-xs text-[var(--color-text-muted)] font-medium">Gelap Nyawang</p>
            </div>
          </div>

          <nav className="flex items-center gap-8">
            <a href="/" className={`font-medium transition-colors ${location.pathname === '/' ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'}`}>Beranda</a>
            <a href="#jelajah" className="font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">Jelajah</a>
            <a href="#statistik" className="font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">Statistik</a>
            <a href="#peta" className="font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">Peta</a>
            <a href="#favorit" className="font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">Favorit</a>
          </nav>

          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md">
            Masuk
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-[var(--color-border-subtle)] flex items-center justify-around h-16 z-50 pb-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button onClick={() => navigate("/")} className={`flex flex-col items-center justify-center w-16 h-full gap-1 ${location.pathname === '/' ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'}`}>
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-full gap-1 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Jelajah</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-full gap-1 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
          <Map className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Peta</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-full gap-1 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
          <Heart className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Favorit</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-full gap-1 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Akun</span>
        </button>
      </nav>
    </div>
  );
}
