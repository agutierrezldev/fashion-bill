import { Navigate, Route, Routes } from "react-router-dom"


import { Navbar } from "../ui";


import { CustomersPage, CustomerAddPage  } from "../customers";


import { LoginPage } from "../auth/pages/LoginPage"

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="customers" element={<CustomersPage />} />
        <Route path="customer-add" element={<CustomerAddPage />} />


        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/customers" />} />
      </Routes>
    </>

  )
}
