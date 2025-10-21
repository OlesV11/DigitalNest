import { Outlet } from 'react-router-dom'

import Footer from '@/components/Footer/Footer.jsx'
import NavigationBar from '@/components/NavigationBar/NavigationBar.jsx'

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
