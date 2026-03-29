import { useNavigate } from 'react-router-dom'
import { MessageSquareText, Inbox, TrendingUp, Plus } from 'lucide-react'
import { TopHeader } from '../components/TopHeader'
import { SummaryCard } from '../components/SummaryCard'
import { RequestCard } from '../components/RequestCard'
import { dummyRequests, dummyMemos } from '../data'

export function Dashboard() {
  const navigate = useNavigate()

  const unprocessedSubmissions = dummyMemos.filter((m) => m.source === 'ユーザー投稿' && m.status === '未整理').length
  const unorganizedMemos = dummyMemos.filter((m) => m.status === '未整理').length
  const trendingRequests = dummyRequests.filter((r) => r.votes >= 25).length

  const recentRequests = [...dummyRequests].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 4)
  const recentMemos = [...dummyMemos].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4)

  return (
    <div className="max-w-5xl">
      <TopHeader
        title="ダッシュボード"
        description="全体の状況を確認"
        actions={
          <div className="flex gap-2">
            <button
              onClick={() => navigate('/requests')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              要望を追加
            </button>
            <button
              onClick={() => navigate('/memos')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              声メモを追加
            </button>
          </div>
        }
      />

      <div className="grid grid-cols-3 gap-4 mb-8">
        <SummaryCard
          label="未処理の投稿"
          value={unprocessedSubmissions}
          icon={<Inbox className="w-5 h-5" />}
        />
        <SummaryCard
          label="未整理の声メモ"
          value={unorganizedMemos}
          icon={<MessageSquareText className="w-5 h-5" />}
        />
        <SummaryCard
          label="投票が伸びている要望"
          value={trendingRequests}
          icon={<TrendingUp className="w-5 h-5" />}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium text-gray-900">最近の要望</h2>
            <button
              onClick={() => navigate('/requests')}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              すべて見る →
            </button>
          </div>
          <div className="space-y-2">
            {recentRequests.map((r) => (
              <RequestCard key={r.id} request={r} onClick={() => navigate(`/requests/${r.id}`)} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium text-gray-900">最近の声メモ</h2>
            <button
              onClick={() => navigate('/memos')}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              すべて見る →
            </button>
          </div>
          <div className="space-y-2">
            {recentMemos.map((m) => (
              <div key={m.id} className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-gray-900 mb-1.5 line-clamp-2">{m.body}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="px-1.5 py-0.5 bg-gray-50 rounded text-gray-500">{m.source}</span>
                  <span>{m.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
