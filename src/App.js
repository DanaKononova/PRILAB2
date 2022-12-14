import './App.css';
import MainPage from "./pages/MainPage";
import {BrowserRouter, RedirectFunction, Route, Routes} from "react-router-dom";
import Navigation from "./NavigationPart/Navigation";
import List_of_arch from "./pages/List_of_arch";
import ArchitectInfo from "./pages/ArchitectInfo";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation />}>
                        <Route path="" element={<MainPage />} />
                        <Route path="architects" element={<List_of_arch />}/>
                        <Route path="architects/:id" element={<ArchitectInfo />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
