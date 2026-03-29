import { useState } from 'react'
import { TopHeader } from '../components/TopHeader'
import { MemoCard } from '../components/MemoCard'
import { EmptyState } from '../components/EmptyState'
import { dummyMemos, dummyAiSuggestions } from '../data'
import type { MemoStatus } from '../types'
import { Search, Plus } from 'lucide-react'

const statusFilters: (MemoStatus | 'すべて')[] = ['すべて', '未整理', '保留', '要望化済み']

export function VoiceMemos() {
  const [filter, setFilter] = useState<MemoStatus | 'すべて'>('すべて')
  const [search, setSearch] = useState('')

  const filtered = dummyMemos.filter((m) => {
    if (filter !== 'すべて' && m.status !== filter) return false
    if (search && !m.body.includes(search) && !m.source.includes(search)) return false
    return true
  })

  return (
    <div className="max-w-4xl">
      <TopHeader
        title="声メモ"
        description="ユーザーの声やフィードバックを整理"
        actions={
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            声メモを追加
          </button>
        }
      />

      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="検索..."
            className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
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

      {filtered.length === 0 ? (
        <EmptyState message="声メモがありません" />
      ) : (
        <div className="space-y-3">
          {filtered.map((m) => (
            <MemoCard key={m.id} memo={m} aiSuggestion={dummyAiSuggestions[m.id]} />
          ))}
        </div>
      )}
    </div>
  )
}
