import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '@/components/Layout/Layout.jsx'
import AboutPage from '@/pages/About.jsx'
import BlogsPage from '@/pages/Blogs.jsx'
import CareersPage from '@/pages/Careers.jsx'
import ContactPage from '@/pages/Contact.jsx'
import Home from '@/pages/Home.jsx'
import ProjectsPage from '@/pages/Projects.jsx'
import ServicesPage from '@/pages/Services.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
