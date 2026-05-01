import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "FoodApp",
  description: "App de comida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-neutral-200">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 bg-neutral-900 border-b border-neutral-800">

          <Link href="/" className="text-2xl font-semibold tracking-wide" >
            <h1>FoodApp</h1>
          </Link>
          <div className="space-x-6 text-sm">
            <Link href="/menu" className="hover:text-amber-400 transition">
              Menú
            </Link>
            <Link href="#about" className="hover:text-amber-400 transition">
              Nosotros
            </Link>
            <Link href="#contact" className="hover:text-amber-400 transition">
              Contacto
            </Link>
          </div>
        </nav>

        {/* CONTENIDO DE CADA PÁGINA */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-neutral-900 text-neutral-500 text-center py-6 border-t border-neutral-800">
          <p>© 2026 FoodApp - Todos los derechos reservados</p>
        </footer>

      </body>
    </html>
  );
}