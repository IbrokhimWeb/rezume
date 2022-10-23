import { Routes, Route } from "react-router-dom";
import s from './App.module.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<>Hello</>} />
            </Routes>
        </>
    );
}

export default App;
