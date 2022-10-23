import { Routes, Route } from "react-router-dom";
import s from './App.module.css';

// Import Components
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


// Import Routes
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Rezume from "./routes/rezume/Rezume";
import Contact from "./routes/contact/Contact";

function App() {
    return (
        <>
            <Header />
            {/* <Navbar />  */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rezume" element={<Rezume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <Footer /> */}
        </>
    );
}

export default App;
