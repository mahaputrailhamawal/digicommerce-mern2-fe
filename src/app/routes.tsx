import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "../features/dashboard/components"
import { Login } from "../features/authentication/components/login"
import { DashboardProducts } from "../features/dashboard-products/components"
import { FormCreateProduct } from "../features/dashboard-products/components/form.create.products"
import { Register } from "../features/authentication/components/register"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<DashboardProducts />} />
        <Route path="/dashboard/products/create" element={<FormCreateProduct />} />
      </Routes>
    </BrowserRouter>
  )
}
