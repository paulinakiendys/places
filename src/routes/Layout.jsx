import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CitiesProvider } from "../contexts/CitiesContext";
import { AuthProvider } from "../contexts/AuthContext";

export default function Layout() {
  return (
    <>
      <AuthProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <CitiesProvider>
            <Outlet />
          </CitiesProvider>
        </main>
      </AuthProvider>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
