import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "../features/dashboard/components"
import { DashboardProducts } from "../features/dashboard-products/components"
import { FormCreateProduct } from "../features/dashboard-products/components/form.create.products"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<DashboardProducts />} />
        <Route path="/dashboard/products/create" element={<FormCreateProduct />} />
      </Routes>
    </BrowserRouter>
  )
}
