import type { AiSuggestion } from '../types'
import { Sparkles } from 'lucide-react'

interface AiSuggestionPanelProps {
  suggestion: AiSuggestion
}

export function AiSuggestionPanel({ suggestion }: AiSuggestionPanelProps) {
  return (
    <div className="border border-dashed border-gray-200 rounded-md p-3 bg-gray-50/50">
      <div className="flex items-center gap-1.5 mb-2">
        <Sparkles className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-xs font-medium text-gray-500">AI 提案</span>
      </div>
      <div className="space-y-1.5 text-xs text-gray-500">
        <div>
          <span className="text-gray-400">要約: </span>
          {suggestion.summary}
        </div>
        {suggestion.similarRequests.length > 0 && (
          <div>
            <span className="text-gray-400">類似要望: </span>
            {suggestion.similarRequests.join(', ')}
          </div>
        )}
        <div>
          <span className="text-gray-400">推奨: </span>
          {suggestion.recommendedAction}
        </div>
      </div>
    </div>
  )
}
