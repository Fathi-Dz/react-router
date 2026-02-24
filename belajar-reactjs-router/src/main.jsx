import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Customer from "./Customer.jsx";
import Sellers from "./Sellers.jsx"; 
import Data from "./Data.jsx";
import DataLayout from "./DataLayout.jsx";
import Image from "./Image.jsx";
import NotFound from "./NotFound.jsx";
import ProductSearch from "./ProductSearch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />} />
          <Route path="product" element={<Product />} />
          <Route path="product/search" element={<ProductSearch />} />
          <Route path="product/:id/detail/:detail/:name" element={<ProductDetail />} />
          <Route path="customers" element={<Customer />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="images/*" element={<Image />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);