import React from "react";

import Films from "./components/layouts/films";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import NavBar from "./components/navBar";
import LoginPage from "./components/layouts/loginPage";
import MainPage from "./components/layouts/mainPage";
import FilmPage from "./components/layouts/filmPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<NavBar />}>
            <Route index element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="films" element={<Films />} />
            <Route path="films/:film" element={<FilmPage />} />
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
