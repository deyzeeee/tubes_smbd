import { useNavigate, useParams } from "react-router";
import { umkmData } from "../data";
import { ArrowLeft, Share2, Heart, Star, MapPin, Clock, Info, ShieldCheck, CheckCircle2 } from "lucide-react";

export function UMKMDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const umkm = umkmData.find(item => item.id === id);

  if (!umkm) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">UMKM Tidak Ditemukan</h2>
          <button onClick={() => navigate("/")} className="text-[var(--color-primary)] font-semibold">Kembali ke Beranda</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] pb-24 md:pb-8 flex flex-col md:flex-row gap-0 md:gap-8 max-w-6xl mx-auto md:pt-8 md:px-6">
      
      {/* Mobile Top Nav Overlay */}
      <div className="fixed top-0 w-full z-50 p-4 flex justify-between items-center md:hidden pointer-events-none">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm pointer-events-auto">
          <ArrowLeft className="w-5 h-5 text-[var(--color-text-main)]" />
        </button>
        <div className="flex gap-2 pointer-events-auto">
          <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm">
            <Share2 className="w-5 h-5 text-[var(--color-text-main)]" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm">
            <Heart className="w-5 h-5 text-[var(--color-text-main)]" />
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-1/2 md:rounded-3xl overflow-hidden relative h-[350px] md:h-[500px] shrink-0">
        <img src={umkm.image} alt={umkm.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        {umkm.isOpen && (
          <div className="absolute bottom-6 left-4 md:bottom-6 md:left-6 bg-[var(--color-secondary)] text-[var(--color-secondary-text)] px-4 py-1.5 rounded-full text-sm font-bold shadow-sm backdrop-blur-sm border border-white/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary-text)] animate-pulse"></span>
            Buka Sekarang
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="w-full md:w-1/2 bg-white md:bg-transparent -mt-6 md:mt-0 relative rounded-t-3xl md:rounded-none px-5 py-8 md:p-0 flex flex-col gap-6 shadow-[0_-8px_20px_rgba(0,0,0,0.05)] md:shadow-none z-10">
        
        {/* Header Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold px-2.5 py-1 bg-[var(--color-accent-beige)] rounded-md text-[var(--color-text-muted)]">
              {umkm.category}
            </span>
            {umkm.halal && (
              <span className="text-xs font-semibold px-2.5 py-1 bg-green-50 text-green-700 rounded-md flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Halal
              </span>
            )}
            <div className="ml-auto flex items-center gap-1 bg-orange-50 text-[var(--color-primary)] px-2.5 py-1 rounded-md">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold">{umkm.rating}</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold leading-tight mb-2">{umkm.name}</h1>
          <p className="text-2xl font-bold text-[var(--color-primary)]">{umkm.price}</p>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col gap-3 py-4 border-y border-[var(--color-border-subtle)]">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[var(--color-text-muted)] mt-0.5" />
            <div>
              <p className="text-sm font-semibold">Lokasi Stand</p>
              <p className="text-sm text-[var(--color-text-muted)]">Jln Gelap Nyawang ({umkm.distance} dari lokasi Anda)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[var(--color-text-muted)] mt-0.5" />
            <div>
              <p className="text-sm font-semibold">Jam Operasional</p>
              <p className="text-sm text-[var(--color-text-muted)]">{umkm.openTime}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <Info className="w-4 h-4 text-[var(--color-primary)]" /> Tentang UMKM Ini
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            {umkm.description}
          </p>
        </div>

        {/* Favorite Menu */}
        <div>
          <h3 className="font-bold mb-3">Menu Andalan</h3>
          <div className="flex flex-col gap-2">
            {umkm.favoriteMenu.map((menu, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] bg-[var(--color-bg-base)] px-4 py-2.5 rounded-xl border border-[var(--color-border-subtle)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                {menu}
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Delivery */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[var(--color-bg-base)] p-4 rounded-xl border border-[var(--color-border-subtle)]">
            <h4 className="text-xs font-bold text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">Mitra Delivery</h4>
            <div className="flex flex-wrap gap-2">
              {umkm.delivery.length > 0 ? umkm.delivery.map((del, i) => (
                <span key={i} className="text-xs font-semibold px-2 py-1 bg-white border border-[var(--color-border-subtle)] rounded-md shadow-sm">
                  {del}
                </span>
              )) : (
                <span className="text-xs text-gray-400">Tidak tersedia</span>
              )}
            </div>
          </div>
          <div className="bg-[var(--color-bg-base)] p-4 rounded-xl border border-[var(--color-border-subtle)]">
            <h4 className="text-xs font-bold text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">Pembayaran</h4>
            <div className="flex flex-wrap gap-2">
              {umkm.payment.map((pay, i) => (
                <span key={i} className="text-xs font-semibold px-2 py-1 bg-white border border-[var(--color-border-subtle)] rounded-md shadow-sm">
                  {pay}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[var(--color-border-subtle)] p-4 md:p-6 pb-6 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] md:relative md:border-none md:shadow-none md:bg-transparent md:p-0">
        <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-orange-500/30 transition-all active:scale-[0.98]">
          Pesan Sekarang
        </button>
      </div>

    </div>
  );
}
