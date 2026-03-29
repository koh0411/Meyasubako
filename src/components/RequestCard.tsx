import type { Request } from '../types'
import { StatusBadge } from './StatusBadge'
import { VoteButton } from './VoteButton'

interface RequestCardProps {
  request: Request
  showVote?: boolean
  onClick?: () => void
}

export function RequestCard({ request, showVote = false, onClick }: RequestCardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-4 ${
        onClick ? 'cursor-pointer hover:border-gray-300 transition-colors' : ''
      }`}
      onClick={onClick}
    >
      {showVote && (
        <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
          <VoteButton count={request.votes} />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-sm font-medium text-gray-900 truncate">{request.title}</h3>
          <StatusBadge status={request.status} />
        </div>
        <p className="text-sm text-gray-500 line-clamp-2">{request.description}</p>
      </div>
      {!showVote && (
        <div className="shrink-0 text-right">
          <p className="text-sm font-medium text-gray-900">{request.votes}</p>
          <p className="text-xs text-gray-400">投票</p>
        </div>
      )}
    </div>
  )
}
