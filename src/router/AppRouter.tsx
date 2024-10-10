import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { ProductsRoutes } from "../products";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/customers" element={<ProductsRoutes />} />
      </Routes>
    </>

  )
}
