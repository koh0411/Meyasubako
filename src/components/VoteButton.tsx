import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

interface VoteButtonProps {
  count: number
}

export function VoteButton({ count }: VoteButtonProps) {
  const [voted, setVoted] = useState(false)
  const [displayCount, setDisplayCount] = useState(count)

  const handleVote = () => {
    if (voted) {
      setVoted(false)
      setDisplayCount(displayCount - 1)
    } else {
      setVoted(true)
      setDisplayCount(displayCount + 1)
    }
  }

  return (
    <button
      onClick={handleVote}
      className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-md border text-sm font-medium transition-colors ${
        voted
          ? 'bg-gray-900 text-white border-gray-900'
          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      }`}
    >
      <ChevronUp className="w-4 h-4" />
      <span className="text-xs">{displayCount}</span>
    </button>
  )
}
