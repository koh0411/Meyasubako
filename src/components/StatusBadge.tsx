import type { RequestStatus, MemoStatus } from '../types'

const requestColors: Record<RequestStatus, string> = {
  '検討中': 'bg-amber-50 text-amber-700 border-amber-200',
  '予定': 'bg-blue-50 text-blue-700 border-blue-200',
  '完了': 'bg-green-50 text-green-700 border-green-200',
}

const memoColors: Record<MemoStatus, string> = {
  '未整理': 'bg-gray-50 text-gray-600 border-gray-200',
  '保留': 'bg-amber-50 text-amber-700 border-amber-200',
  '要望化済み': 'bg-green-50 text-green-700 border-green-200',
}

interface StatusBadgeProps {
  status: RequestStatus | MemoStatus
  type?: 'request' | 'memo'
}

export function StatusBadge({ status, type = 'request' }: StatusBadgeProps) {
  const colors = type === 'memo'
    ? memoColors[status as MemoStatus]
    : requestColors[status as RequestStatus]

  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded border ${colors}`}>
      {status}
    </span>
  )
}
