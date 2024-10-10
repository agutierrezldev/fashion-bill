import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { CustomerAddPage, CustomersPage } from "../../customers"

export const ProductsRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<CustomersPage />} />
          <Route path="/add" element={<CustomerAddPage />} />

          {/* Search, Product by id */}
          {/* <Route path="/" element={<Navigate to="/customers" />} /> */}
        </Routes>
      </div>


    </>
  )
}
