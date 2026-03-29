import { HashRouter, Routes, Route } from 'react-router-dom'
import { AdminLayout } from './components/AdminLayout'
import { Dashboard } from './pages/Dashboard'
import { VoiceMemos } from './pages/VoiceMemos'
import { Requests } from './pages/Requests'
import { RequestDetail } from './pages/RequestDetail'
import { Settings } from './pages/Settings'
import { PublicBoard } from './pages/PublicBoard'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/board" element={<PublicBoard />} />
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/requests/:id" element={<RequestDetail />} />
          <Route path="/memos" element={<VoiceMemos />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
