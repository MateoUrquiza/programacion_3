import Link from "next/link";

export default function Home() {
  return (
    <>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-28 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
          Experiencia gastronómica premium
        </h2>
        <p className="text-neutral-400 mb-8 max-w-xl">
          Sabores únicos, ingredientes seleccionados y una presentación de alto nivel.
        </p>
        <Link href="/menu">
          <button className="bg-amber-400 text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-amber-300 transition">
            Ver menú completo
          </button>
        </Link>
      </section>

      {/* Featured Dishes */}
      <section id="featured" className="py-20 px-6">
        <h3 className="text-3xl font-semibold text-center mb-12">Platos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Hamburguesa Gourmet", desc: "Carne premium, cheddar y pan artesanal." },
            { name: "Pizza Artesanal", desc: "Masa madre, salsa casera y mozzarella." },
            { name: "Pasta Italiana", desc: "Receta tradicional con salsas frescas." },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-amber-400 transition"
            >
              <h4 className="text-xl font-medium mb-3">{item.name}</h4>
              <p className="text-neutral-400 mb-6">{item.desc}</p>
              <Link href="/menu">
                <button className="bg-neutral-800 text-neutral-200 px-5 py-2 rounded-full hover:bg-amber-400 hover:text-neutral-900 transition">
                  Ver en menú
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-neutral-900 py-20 px-6 text-center border-t border-neutral-800">
        <h3 className="text-3xl font-semibold mb-6">Sobre Nosotros</h3>
        <p className="max-w-2xl mx-auto text-neutral-400 leading-relaxed">
          Nos especializamos en ofrecer una experiencia culinaria elegante, combinando tradición
          y modernidad en cada plato.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contacto</h3>
        <p className="text-neutral-400">Email: foodapp@gmail.com</p>
      </section>

    </>
  );
}
