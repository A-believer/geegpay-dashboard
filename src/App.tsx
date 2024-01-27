import { Route, Routes } from "react-router-dom"
import { Dashboard, Delivery, Ideas, Percentages, Trends, UsersProfile } from "./pages"
import { Navbar, NavbarMobile, Sidebar } from "./components"

function App() {
  
  return (

    <main className="flex w-full max-w-[1440px] mx-auto">
      <Sidebar />
      <section className="md:max-w-[1360px] max-w-full w-full mx-auto bg-sidebar-background">
        <Navbar />
        <NavbarMobile/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/trend" element={<Trends/>} />
          <Route path="/userprofile" element={<UsersProfile/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/percentages" element={<Percentages/>} />
          <Route path="/ideas" element={<Ideas/>} />
        </Routes> 
      </section>
    </main>
    
  )
}
export default App
