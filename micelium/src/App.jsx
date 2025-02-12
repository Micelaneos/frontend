import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import SeccionHero from "./components/pages/seccionHero/SeccionHero";
import SeccionServicios from "./components/pages/seccionServices/SeccionServices";
import SeccionDatos from "./components/pages/seccionData/SeccionData";
import SeccionInformacion from "./components/pages/seccionInfo/SeccionInfo";
import SeccionTestimonios from "./components/pages/seccionTestimony/SeccionTestimony";
import SeccionClientes from "./components/pages/seccionClients/SeccionClients";

function App() {
  return (
    <div className="w-full h-screen bg-slate-100">
      <div className="pt-24">
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route element={<Footer />}>
                {/* Ruta Principal */}
                <Route
                  path="/"
                  element={
                    <>
                      <SeccionHero />
                      <SeccionServicios />
                      <SeccionDatos />
                      <SeccionInformacion />
                      <SeccionTestimonios />
                      <SeccionClientes />
                    </>
                  }
                />

                {/* Rutas personalizadas */}
                <Route path="/login" element={<h1>Login</h1>} />
              </Route>
            </Route>

            {/* Ruta por defecto */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
