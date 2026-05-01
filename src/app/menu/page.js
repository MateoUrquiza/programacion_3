import Image from "next/image";

export default function Menu() {
  return (
    <div className="py-20 px-6">
      
      {/* Título */}
      <h1 className="text-4xl font-semibold text-center mb-16">
        Nuestro Menú
      </h1>

      {/* Hamburguesas */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-amber-400">
          Hamburguesas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Clásica", price: "$3500", img: "https://source.unsplash.com/400x300/?burger" },
            { name: "Doble Cheddar", price: "$4200", img: "https://source.unsplash.com/400x300/?cheeseburger" },
            { name: "Bacon BBQ", price: "$4500", img: "https://source.unsplash.com/400x300/?bacon-burger" },
          ].map((item) => (
            <div key={item.name} className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
              <Image src={item.img} alt={item.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="text-neutral-400 mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pizzas */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-amber-400">
          Pizzas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Muzzarella", price: "$3000", img: "https://source.unsplash.com/400x300/?pizza" },
            { name: "Napolitana", price: "$3500", img: "https://source.unsplash.com/400x300/?neapolitan-pizza" },
            { name: "Especial", price: "$4000", img: "https://source.unsplash.com/400x300/?pepperoni-pizza" },
          ].map((item) => (
            <div key={item.name} className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
              <Image src={item.img} alt={item.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="text-neutral-400 mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pastas */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-amber-400">
          Pastas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Spaghetti", price: "$3200", img: "https://source.unsplash.com/400x300/?spaghetti" },
            { name: "Ravioles", price: "$3600", img: "https://source.unsplash.com/400x300/?ravioli" },
            { name: "Lasagna", price: "$4000", img: "https://source.unsplash.com/400x300/?lasagna" },
          ].map((item) => (
            <div key={item.name} className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
              <Image src={item.img} alt={item.name} width={400} height={300} className="w-full h-48 object-cover" />
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