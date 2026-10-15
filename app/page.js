"use client";

import { motion } from 'framer-motion';

export default function Home() {
  // ⬇️ حط رقم الواتساب بتاعك هنا (يبدأ بـ 20 من غير علامة +) ⬇️
  const myWhatsAppNumber = "201009084186"; 

  // الدالة اللي بتحول العميل للواتساب برسالة جاهزة
  const orderViaWhatsApp = (product) => {
    const message = `أهلاً! كنت حابب أطلب ${product.name} اللي سعرها ${product.price}. إيه هي طرق الدفع والتوصيل المتاحة؟`;
    const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    { 
      id: 1, 
      name: 'AirPods Pro (2nd Gen)', 
      category: 'Audio', 
      price: 'EGP 8,500', 
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      id: 2, 
      name: 'Rolex Submariner Date', 
      category: 'Watches', 
      price: 'EGP 45,000', 
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      id: 3, 
      name: 'Ray-Ban Classic', 
      category: 'Eyewear', 
      price: 'EGP 1,200', 
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      id: 4, 
      name: 'Apple Watch Ultra 2', 
      category: 'Watches', 
      price: 'EGP 35,000', 
      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      id: 5, 
      name: 'Cuban Silver Chain', 
      category: 'Accessories', 
      price: 'EGP 950', 
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      id: 6, 
      name: 'Leather Minimalist Wallet', 
      category: 'Accessories', 
      price: 'EGP 600', 
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      id: 7, 
      name: 'Onyx Signet Ring', 
      category: 'Accessories', 
      price: 'EGP 450', 
      image: 'https://images.unsplash.com/photo-1605100804763-247f673d3284?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      id: 8, 
      name: 'AirPods Max', 
      category: 'Audio', 
      price: 'EGP 22,000', 
      image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=600&auto=format&fit=crop' 
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans overflow-hidden">
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full z-50 flex justify-between items-center px-10 py-6 bg-black/50 backdrop-blur-xl border-b border-white/10"
      >
        <h1 className="text-xl font-bold tracking-[0.2em]">LUXE</h1>
        <ul className="hidden md:flex gap-10 text-xs tracking-widest uppercase text-gray-400">
          <li className="hover:text-white cursor-pointer transition-colors">Watches</li>
          <li className="hover:text-white cursor-pointer transition-colors">Audio</li>
          <li className="hover:text-white cursor-pointer transition-colors">Eyewear</li>
          <li className="hover:text-white cursor-pointer transition-colors">Accessories</li>
        </ul>
        <button className="text-xs uppercase tracking-widest border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
          Contact Us
        </button>
      </motion.nav>

      {/* Hero Section */}
      <header className="relative h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-6 block"
          >
            The New Standard
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl font-light mb-8 tracking-tighter"
          >
            Redefine<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Luxury.</span>
          </motion.h2>
        </div>
      </header>

      {/* Grid */}
      <section className="py-20 px-8 max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <h3 className="text-3xl font-light tracking-tight">Curated Selection</h3>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Product Image Area */}
              <div className="relative w-full h-[280px] bg-[#0a0a0a] rounded-xl mb-4 overflow-hidden border border-white/5">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* ⬇️ الجزء ده اتعدل عشان يطلب المنتج بالواتس ⬇️ */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => orderViaWhatsApp(product)}
                    className="text-[10px] font-bold tracking-[0.2em] uppercase bg-white text-black px-6 py-3 rounded-full hover:scale-110 transition-transform duration-300"
                  >
                    Order Now
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col">
                <span className="text-[9px] text-gray-500 tracking-[0.2em] uppercase mb-1">{product.category}</span>
                <h4 className="text-sm font-medium text-gray-200 mb-1 group-hover:text-white transition-colors truncate">{product.name}</h4>
                <p className="text-xs text-gray-400 tracking-wider">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-12 px-10 text-center">
        <p className="text-xs text-gray-600 tracking-widest uppercase">©️ 2026 LUXE STORE. Elevating Everyday.</p>
      </footer>

    </div>
  );
}