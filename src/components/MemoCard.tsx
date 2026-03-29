import type { VoiceMemo, AiSuggestion } from '../types'
import { StatusBadge } from './StatusBadge'
import { AiSuggestionPanel } from './AiSuggestionPanel'
import { Link2, Plus, Pause } from 'lucide-react'

interface MemoCardProps {
  memo: VoiceMemo
  aiSuggestion?: AiSuggestion
}

export function MemoCard({ memo, aiSuggestion }: MemoCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <p className="text-sm text-gray-900 leading-relaxed">{memo.body}</p>
        <StatusBadge status={memo.status} type="memo" />
      </div>
      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
        <span className="px-1.5 py-0.5 bg-gray-50 rounded text-gray-500">{memo.source}</span>
        <span>{memo.date}</span>
      </div>

      {memo.status !== '要望化済み' && (
        <div className="flex items-center gap-2 mb-3">
          <button className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 px-2 py-1 rounded border border-gray-200 hover:border-gray-300 transition-colors">
            <Link2 className="w-3 h-3" />
            既存要望に紐づけ
          </button>
          <button className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 px-2 py-1 rounded border border-gray-200 hover:border-gray-300 transition-colors">
            <Plus className="w-3 h-3" />
            新規要望を作成
          </button>
          <button className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 px-2 py-1 rounded border border-gray-200 hover:border-gray-300 transition-colors">
            <Pause className="w-3 h-3" />
            保留
          </button>
        </div>
      )}

      {aiSuggestion && <AiSuggestionPanel suggestion={aiSuggestion} />}
    </div>
  )
}
