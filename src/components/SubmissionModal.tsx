import { useState } from 'react'
import { X } from 'lucide-react'

interface SubmissionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SubmissionModal({ isOpen, onClose }: SubmissionModalProps) {
  const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = () => {
    setSubmitted(true)
    setText('')
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-lg border border-gray-200 w-full max-w-md mx-4 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">要望を送る</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <p className="text-sm text-gray-600">送信しました。ありがとうございます。</p>
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-400 mb-3">
              投稿は公開されません。開発者が確認し、必要に応じて要望として追加します。
            </p>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="ご要望やフィードバックを入力してください..."
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none h-28"
            />
            <div className="flex justify-end mt-3">
              <button
                onClick={handleSubmit}
                disabled={!text.trim()}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                送信
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
