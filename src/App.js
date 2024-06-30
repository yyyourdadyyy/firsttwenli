import {Routes, Route,} from "react-router-dom"

import {Layout} from "./components/Layout.jsx"
import {MainPage} from "./pages/MainPage.jsx"
import {CatalogPage} from "./pages/CatalogPage.jsx"
import {AboutPage} from "./pages/AboutPage.jsx"
import { LendingPage } from "./pages/lending.jsx"
import { Order } from "./pages/order.jsx"
import { Error404 } from "./pages/error404.jsx"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/lending' element={<LendingPage />} /> 
        <Route path='/order' element={<Order />} /> 
        <Route path='/error404' element={<Error404 />} /> 
      </Routes>
    </Layout>
  );
}

export default App;
