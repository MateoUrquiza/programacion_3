const productos = {
  1: { name: "Hamburguesa", price: "$3500" },
  2: { name: "Pizza", price: "$3000" },
  3: { name: "Pasta", price: "$3200" },
};

export default function Producto({ params }) {
  const producto = productos[params.id];

  if (!producto) {
    return <h1 className="text-center mt-20">Producto no encontrado</h1>;
  }

  return (
    <div className="py-20 px-6 text-center">
      <h1 className="text-4xl mb-6">{producto.name}</h1>
      <p className="text-neutral-400">{producto.price}</p>
    </div>
  );
}