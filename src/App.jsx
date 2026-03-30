import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CompanyLayout from './pages/company/CompanyLayout'
import CompanyOverview from './pages/company/CompanyOverview'
import CompanyWhyUs from './pages/company/CompanyWhyUs'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import IndustriesPage from './pages/IndustriesPage'
import ProductsPage from './pages/ProductsPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyLayout />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<CompanyOverview />} />
          <Route path="why-us" element={<CompanyWhyUs />} />
        </Route>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
