import { NavLink } from 'react-router-dom'
import { LayoutDashboard, ListChecks, MessageSquareText, Globe, Settings, Inbox } from 'lucide-react'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'ダッシュボード' },
  { to: '/requests', icon: ListChecks, label: '要望' },
  { to: '/memos', icon: MessageSquareText, label: '声メモ' },
  { to: '/board', icon: Globe, label: '公開ボード' },
  { to: '/settings', icon: Settings, label: '設定 / プラン' },
]

export function AppSidebar() {
  return (
    <aside className="w-56 shrink-0 border-r border-gray-200 bg-white flex flex-col h-screen sticky top-0">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-200">
        <Inbox className="w-5 h-5 text-gray-700" />
        <span className="font-semibold text-sm text-gray-900 tracking-tight">Meyasubako</span>
      </div>
      <nav className="flex-1 px-3 py-3 space-y-0.5">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`
            }
          >
            <Icon className="w-4 h-4" />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-3 border-t border-gray-200">
        <p className="text-xs text-gray-400">Free プラン</p>
      </div>
    </aside>
  )
}
