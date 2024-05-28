import {Routes, Route,} from "react-router-dom"

import {Layout} from "./components/Layout.jsx"
import {MainPage} from "./pages/MainPage.jsx"
import {CatalogPage} from "./pages/CatalogPage.jsx"
import {AboutPage} from "./pages/AboutPage.jsx"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
