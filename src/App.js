import './App.css';
import MainPage from "./pages/MainPage";
import {BrowserRouter, RedirectFunction, Route, Routes} from "react-router-dom";
import Navigation from "./NavigationPart/Navigation";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation />}>
                        <Route path="" element={<MainPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
