<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function App() {
  return (
    <Container>
      <Header />

      {/* outlet is main */}
      <Outlet />

      <Footer />
=======
import { Outlet } from "react-router-dom"
import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export function App() {
  return (
      <Container>
        <Header/>

        {/* outler is main */}
          <Outlet />

        <Footer/>
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
    </Container>
  );
}
