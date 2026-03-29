import { useState } from 'react'
import { Inbox } from 'lucide-react'
import { RequestCard } from '../components/RequestCard'
import { SubmissionModal } from '../components/SubmissionModal'
import { dummyRequests } from '../data'
import type { RequestStatus } from '../types'

const statusFilters: (RequestStatus | 'すべて')[] = ['すべて', '検討中', '予定', '完了']

export function PublicBoard() {
  const [filter, setFilter] = useState<RequestStatus | 'すべて'>('すべて')
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = dummyRequests.filter((r) => {
    if (filter !== 'すべて' && r.status !== filter) return false
    return true
  })

  const sorted = [...filtered].sort((a, b) => b.votes - a.votes)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Inbox className="w-6 h-6 text-gray-700" />
            <span className="text-lg font-semibold text-gray-900 tracking-tight">Meyasubako</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">サンプルアプリのロードマップ</h1>
          <p className="text-sm text-gray-500">
            ご要望に投票して、開発の優先順位に声を届けてください。
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1">
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
        </div>

        <div className="space-y-3">
          {sorted.map((r) => (
            <RequestCard key={r.id} request={r} showVote />
          ))}
        </div>

        <div className="mt-10 text-center border-t border-gray-100 pt-8">
          <p className="text-sm text-gray-400 mb-3">お探しの機能がありませんか？</p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            要望を送る
          </button>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-xs text-gray-300">Powered by Meyasubako</p>
        </footer>
      </div>

      <SubmissionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
