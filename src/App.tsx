import { Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Landing from './pages/public/Landing'
import Home from './pages/public/Home'
import About from './pages/public/About'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import ClientDashboard from './pages/client/ClientDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import { clientNav, adminNav } from './data/nav'

export default function App() {
  return (
    <Routes>
      {/* Public marketing pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* Auth (no chrome) */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Client app */}
      <Route
        element={
          <DashboardLayout
            nav={clientNav}
            role="Client"
            name="Thandi Mokoena"
            subtitle="Royal Square client"
          />
        }
      >
        <Route path="/app" element={<ClientDashboard />} />
      </Route>

      {/* Admin app */}
      <Route
        element={
          <DashboardLayout
            nav={adminNav}
            role="Royal Square"
            name="Adv. Daniel Prinsloo"
            subtitle="Adviser · Operations"
          />
        }
      >
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
