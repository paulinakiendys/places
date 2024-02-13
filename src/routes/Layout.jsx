import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CitiesProvider } from "../contexts/CitiesContext";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <CitiesProvider>
          <Outlet />
        </CitiesProvider>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
