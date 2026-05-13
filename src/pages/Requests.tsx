import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopHeader } from '../components/TopHeader'
import { StatusBadge } from '../components/StatusBadge'
import { EmptyState } from '../components/EmptyState'
import { dummyRequests } from '../data'
import type { RequestStatus } from '../types'
import { Plus } from 'lucide-react'

const statusFilters: (RequestStatus | 'すべて')[] = ['すべて', '検討中', '予定', '完了']

export function Requests() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<RequestStatus | 'すべて'>('すべて')

  const filtered = dummyRequests.filter((r) => {
    if (filter !== 'すべて' && r.status !== filter) return false
    return true
  })

  return (
    <div className="max-w-5xl">
      <TopHeader
        title="要望管理"
        description="公開する要望を作成・編集・管理"
        actions={
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            新規要望
          </button>
        }
      />

      <div className="flex gap-1 mb-5">
        {statusFilters.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
              filter === s
                ? 'bg-gray-900 text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState message="要望がありません" />
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left font-medium text-gray-500 px-4 py-3">タイトル</th>
                <th className="text-left font-medium text-gray-500 px-4 py-3">ステータス</th>
                <th className="text-right font-medium text-gray-500 px-4 py-3">投票数</th>
                <th className="text-right font-medium text-gray-500 px-4 py-3">声メモ</th>
                <th className="text-left font-medium text-gray-500 px-4 py-3">作成日</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr
                  key={r.id}
                  onClick={() => navigate(`/requests/${r.id}`)}
                  className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3">
                    <span className="text-gray-900 font-medium">{r.title}</span>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={r.status} />
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">{r.votes}</td>
                  <td className="px-4 py-3 text-right text-gray-600">{r.memoIds.length}</td>
                  <td className="px-4 py-3 text-gray-400">{r.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
