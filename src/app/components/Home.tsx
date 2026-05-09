import { Search, MapPin, Navigation, Star, Clock, Map as MapIcon } from "lucide-react";
import { umkmData } from "../data";
import { useNavigate } from "react-router";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const analyticsData = {
  peakHours: [
    { time: "16:00", visitors: 120 },
    { time: "18:00", visitors: 350 },
    { time: "20:00", visitors: 580 },
    { time: "22:00", visitors: 420 },
    { time: "00:00", visitors: 150 },
  ],
  categories: [
    { name: "Pedas", value: 45, color: "#FF7A00" },
    { name: "Gurih", value: 30, color: "#F5A623" },
    { name: "Manis", value: 25, color: "#E06C00" },
  ],
  delivery: [
    { name: "GoFood", value: 450 },
    { name: "GrabFood", value: 320 },
    { name: "ShopeeFood", value: 210 },
  ],
  payments: [
    { name: "QRIS", value: 65, color: "#4CAF50" },
    { name: "Cash", value: 25, color: "#9E9E9E" },
    { name: "Transfer", value: 10, color: "#2196F3" },
  ]
};

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full pb-8">
      {/* 2. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-6 z-10">
          <div className="inline-flex items-center gap-2 bg-[var(--color-accent-cream)] border border-[var(--color-primary)]/20 px-3 py-1.5 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
            </span>
            <span className="text-xs font-semibold text-[var(--color-primary)]">Live: Street Food Gelap Nyawang</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            Jelajahi Street Food <br/> <span className="text-[var(--color-primary)]">terbaik</span> di Gelap Nyawang
          </h1>
          <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed max-w-lg">
            Kumpulan UMKM kuliner kaki lima di sekitar ITB Ganesha. Enak, terjangkau, dan selalu ada yang baru setiap malamnya.
          </p>

          <div className="relative mt-2 w-full max-w-lg">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              className="w-full pl-12 pr-4 py-4 bg-white border border-[var(--color-border-subtle)] rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all text-sm md:text-base"
              placeholder="Cari makanan, minuman, atau nama UMKM..."
            />
            <button className="absolute inset-y-2 right-2 bg-[var(--color-primary)] text-white px-6 rounded-xl font-semibold text-sm hover:bg-[var(--color-primary-hover)] transition-colors hidden md:block">
              Cari
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-sm text-[var(--color-text-muted)] mr-2">Populer:</span>
            {["Seblak", "Sosis Bakar", "Cilok", "Es Teh Jumbo", "Mie Pedas"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white border border-[var(--color-border-subtle)] rounded-full text-xs font-medium text-[var(--color-text-main)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
          <div className="relative aspect-[4/3] md:aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1762049213151-9e1ffd491481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0cmVldCUyMGZvb2QlMjBuaWdodCUyMG1hcmtldCUyMHN0YWxsfGVufDF8fHx8MTc3ODMwMzA3OXww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Gelap Nyawang Night Market" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 transition-transform hover:-translate-y-1 border border-[var(--color-border-subtle)]">
            <div className="bg-[var(--color-accent-beige)] p-3 rounded-full">
              <MapPin className="text-[var(--color-primary)] w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sm">Jln Gelap Nyawang</p>
              <p className="text-xs text-[var(--color-text-muted)]">(Dekat ITB Ganesha)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK STATS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total UMKM", value: "48+", icon: "🏪" },
            { label: "Buka Sekarang", value: "32", icon: "🔥" },
            { label: "Bersertifikasi Halal", value: "100%", icon: "✅" },
            { label: "Mitra Delivery", value: "3", icon: "🛵" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-[var(--color-border-subtle)] shadow-sm flex flex-col gap-2 hover:shadow-md transition-shadow">
              <div className="text-2xl">{stat.icon}</div>
              <div>
                <h4 className="text-3xl font-bold text-[var(--color-text-main)]">{stat.value}</h4>
                <p className="text-sm text-[var(--color-text-muted)] font-medium mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FILTER SECTION */}
      <section id="jelajah" className="max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-6 w-full sticky top-[72px] md:top-20 z-40 bg-[var(--color-bg-base)]/90 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
          <h2 className="text-2xl font-bold">Rekomendasi UMKM</h2>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button className="flex-shrink-0 px-4 py-2 bg-[var(--color-secondary)] text-[var(--color-secondary-text)] rounded-full text-sm font-semibold border border-[var(--color-secondary-text)]/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-secondary-text)]"></span>
              Buka Sekarang
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-white border border-[var(--color-border-subtle)] rounded-full text-sm font-medium hover:border-[var(--color-primary)] transition-colors">
              Harga
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-white border border-[var(--color-border-subtle)] rounded-full text-sm font-medium hover:border-[var(--color-primary)] transition-colors">
              Kategori Rasa
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-white border border-[var(--color-border-subtle)] rounded-full text-sm font-medium hover:border-[var(--color-primary)] transition-colors">
              Halal
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-white border border-[var(--color-border-subtle)] rounded-full text-sm font-medium hover:border-[var(--color-primary)] transition-colors">
              Metode Pembayaran
            </button>
            <button className="flex-shrink-0 px-5 py-2 bg-[var(--color-primary)] text-white rounded-full text-sm font-semibold shadow-sm hover:bg-[var(--color-primary-hover)] transition-colors flex items-center gap-2">
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* 4. REKOMENDASI UMKM GRID */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 w-full mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {umkmData.map(item => (
            <div 
              key={item.id} 
              onClick={() => navigate(`/umkm/${item.id}`)}
              className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.isOpen ? (
                  <div className="absolute top-4 left-4 bg-[var(--color-secondary)] text-[var(--color-secondary-text)] px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm border border-white/20">
                    Buka
                  </div>
                ) : (
                  <div className="absolute top-4 left-4 bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm border border-white/20">
                    Tutup
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-text-main)] px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-[var(--color-primary)]" />
                  {item.distance}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg leading-tight line-clamp-1">{item.name}</h3>
                  <div className="flex items-center gap-1 bg-orange-50 text-[var(--color-primary)] px-2 py-0.5 rounded-md">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs font-bold">{item.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium px-2 py-1 bg-[var(--color-accent-beige)] rounded-md text-[var(--color-text-muted)]">
                    {item.category}
                  </span>
                  {item.halal && (
                    <span className="text-xs font-medium px-2 py-1 bg-green-50 text-green-700 rounded-md">
                      Halal
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                  <div className="font-bold text-[var(--color-primary)] text-lg">
                    {item.price}
                  </div>
                  <div className="flex -space-x-2">
                    {item.delivery.map((del, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[8px] font-bold overflow-hidden shadow-sm">
                        {del === 'GoFood' ? <span className="text-red-500">Go</span> : 
                         del === 'GrabFood' ? <span className="text-green-500">Gr</span> : 
                         <span className="text-orange-500">Sh</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PETA INTERAKTIF */}
      <section id="peta" className="bg-white border-y border-[var(--color-border-subtle)] py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Peta Gelap Nyawang</h2>
            <p className="text-[var(--color-text-muted)]">Cari lokasi UMKM favoritmu dengan mudah.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 h-[500px]">
            {/* Map Area */}
            <div className="flex-grow bg-[#E5E3DF] rounded-2xl overflow-hidden relative border border-[var(--color-border-subtle)] h-full">
              {/* Fake Map Background using generic map pattern style */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
              
              {/* Map UI Elements */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="bg-white p-2 rounded-lg shadow-md"><Search className="w-5 h-5 text-gray-600"/></button>
                <button className="bg-white p-2 rounded-lg shadow-md"><MapIcon className="w-5 h-5 text-gray-600"/></button>
              </div>

              {/* Markers */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded text-[10px] font-bold shadow-md whitespace-nowrap">Lokasi Anda</div>
              </div>

              <div className="absolute top-[30%] left-[40%]">
                <div className="w-8 h-8 bg-[var(--color-secondary-text)] rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>
              <div className="absolute top-[45%] left-[60%]">
                <div className="w-8 h-8 bg-[var(--color-secondary-text)] rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>
              <div className="absolute top-[60%] left-[30%]">
                <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>
            </div>

            {/* Sidebar Nearest */}
            <div className="w-full lg:w-80 flex flex-col gap-4 overflow-y-auto pr-2">
              <h3 className="font-bold text-lg mb-2">UMKM Terdekat</h3>
              {umkmData.slice(0, 4).map(item => (
                <div key={item.id} className="bg-[var(--color-bg-base)] p-3 rounded-xl border border-[var(--color-border-subtle)] flex gap-3 hover:bg-white transition-colors cursor-pointer" onClick={() => navigate(`/umkm/${item.id}`)}>
                  <img src={item.image} className="w-16 h-16 rounded-lg object-cover" alt={item.name} />
                  <div className="flex flex-col justify-center w-full">
                    <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-1 text-[var(--color-text-muted)] text-xs">
                        <Navigation className="w-3 h-3" /> {item.distance}
                      </div>
                      <div className="flex items-center gap-1 text-[var(--color-primary)] text-xs font-bold">
                        <Star className="w-3 h-3 fill-current" /> {item.rating}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-[10px] text-[var(--color-text-muted)]">
                      <Clock className="w-3 h-3" /> {item.openTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DASHBOARD ANALYTICS */}
      <section id="statistik" className="max-w-7xl mx-auto px-4 md:px-6 py-16 w-full">
         <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Statistik Area</h2>
            <p className="text-[var(--color-text-muted)]">Data keramaian dan tren kuliner di Gelap Nyawang.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chart 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border-subtle)] shadow-sm">
              <h3 className="font-bold text-lg mb-6">Jam Paling Ramai</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analyticsData.peakHours}>
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#666'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#666'}} />
                    <Tooltip cursor={{fill: '#F7F5F2'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
                    <Bar dataKey="visitors" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border-subtle)] shadow-sm">
              <h3 className="font-bold text-lg mb-6">Kategori Rasa Terpopuler</h3>
              <div className="h-64 flex items-center justify-center relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analyticsData.categories}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {analyticsData.categories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="absolute flex flex-col gap-2 pointer-events-none">
                   {analyticsData.categories.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: entry.color}}></div>
                      <span className="text-xs font-medium text-[var(--color-text-muted)]">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chart 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border-subtle)] shadow-sm">
              <h3 className="font-bold text-lg mb-6">Tren Mitra Delivery</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData.delivery}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#666'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#666'}} />
                    <Tooltip cursor={{fill: '#F7F5F2'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
                    <Line type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={3} dot={{r: 6, fill: 'var(--color-primary)', strokeWidth: 2, stroke: '#fff'}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 4 */}
            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border-subtle)] shadow-sm">
              <h3 className="font-bold text-lg mb-6">Metode Pembayaran (%)</h3>
              <div className="h-64 flex items-center justify-center relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analyticsData.payments}
                      innerRadius={0}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {analyticsData.payments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="absolute top-0 right-0 flex flex-col gap-2 pointer-events-none">
                   {analyticsData.payments.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: entry.color}}></div>
                      <span className="text-xs font-medium text-[var(--color-text-muted)]">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </section>

    </div>
  );
}
