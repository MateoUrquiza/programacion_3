import Image from "next/image";
import Link from "next/link";


export default function Menu() {
  return (
    <div className="py-20 px-6">

      {/* Botón carrito */}
      <div className="flex justify-end mb-6">
        <Link
          href="/menu/carrito"
          className="bg-amber-400 text-neutral-900 px-5 py-2 rounded-full font-medium hover:bg-amber-300 transition"
        >
          Ir al carrito
        </Link>
      </div>

      {/* Título */}
      <h1 className="text-4xl font-semibold text-center mb-16">
        Nuestro Menú
      </h1>

      {/* 🍔 Hamburguesas */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-amber-400">
          Hamburguesas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Clásica", price: "$3500", img: "/burger.jpg" },
            { name: "Doble Cheddar", price: "$4200", img: "/burger.jpg" },
            { name: "Bacon BBQ", price: "$4500", img: "/burger.jpg" },
          ].map((item) => (
            <div key={item.name} className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden hover:scale-105 transition">
              
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="text-neutral-400 mt-2">{item.price}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 🍕 Pizzas */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-amber-400">
          Pizzas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Muzzarella", price: "$3000", img: "/pizza.jpg" },
            { name: "Napolitana", price: "$3500", img: "/pizza.jpg" },
            { name: "Especial", price: "$4000", img: "/pizza.jpg" },
          ].map((item) => (
            <div key={item.name} className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden hover:scale-105 transition">
              
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="text-neutral-400 mt-2">{item.price}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 🍝 Pastas */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-amber-400">
          Pastas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Spaghetti", price: "$3200", img: "/pasta.jpg" },
            { name: "Ravioles", price: "$3600", img: "/pasta.jpg" },
            { name: "Lasagna", price: "$4000", img: "/pasta.jpg" },
          ].map((item) => (
            <div key={item.name} className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden hover:scale-105 transition">
              
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="text-neutral-400 mt-2">{item.price}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}