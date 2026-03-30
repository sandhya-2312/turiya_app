import Navbar from '../Navbar'
import Footer from '../Footer'

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[50vh]">{children}</main>
      <Footer />
    </>
  )
}
