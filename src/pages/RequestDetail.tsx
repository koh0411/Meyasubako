import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { StatusBadge } from '../components/StatusBadge'
import { dummyRequests, dummyMemos } from '../data'
import type { RequestStatus } from '../types'
import { useState } from 'react'

const statuses: RequestStatus[] = ['検討中', '予定', '完了']

export function RequestDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const request = dummyRequests.find((r) => r.id === id)

  const [title, setTitle] = useState(request?.title ?? '')
  const [description, setDescription] = useState(request?.description ?? '')
  const [status, setStatus] = useState<RequestStatus>(request?.status ?? '検討中')

  if (!request) {
    return (
      <div className="max-w-3xl">
        <button onClick={() => navigate(-1)} className="text-sm text-gray-500 hover:text-gray-900 mb-4 inline-flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> 戻る
        </button>
        <p className="text-gray-500">要望が見つかりません</p>
      </div>
    )
  }

  const linkedMemos = dummyMemos.filter((m) => request.memoIds.includes(m.id))

  return (
    <div className="max-w-4xl">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 hover:text-gray-900 mb-4 inline-flex items-center gap-1"
      >
        <ArrowLeft className="w-4 h-4" /> 戻る
      </button>

      <div className="flex gap-6">
        <div className="flex-1 space-y-5">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">タイトル</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full text-lg font-semibold text-gray-900 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">説明</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full text-sm text-gray-700 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 resize-none h-24"
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="text-xs text-gray-400">ステータス</label>
                <div className="flex gap-1">
                  {statuses.map((s) => (
                    <button
                      key={s}
                      onClick={() => setStatus(s)}
                      className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                        status === s
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-500 border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  <StatusBadge status={status} />
                </div>
                <span className="text-sm text-gray-400">投票数: {request.votes}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">紐づく声メモ ({linkedMemos.length})</h3>
            {linkedMemos.length === 0 ? (
              <p className="text-sm text-gray-400">紐づく声メモはありません</p>
            ) : (
              <div className="space-y-2">
                {linkedMemos.map((m) => (
                  <div key={m.id} className="bg-white border border-gray-200 rounded-lg p-3">
                    <p className="text-sm text-gray-900 mb-1">{m.body}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="px-1.5 py-0.5 bg-gray-50 rounded text-gray-500">{m.source}</span>
                      <span>{m.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-72 shrink-0">
          <div className="border border-dashed border-gray-200 rounded-lg p-4 bg-gray-50/50 sticky top-8">
            <div className="flex items-center gap-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-500">AI 思考アシスト</span>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs text-gray-400 mb-1.5">観測</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  この要望は直近2週間で投票数が急増しています。関連する声メモが{linkedMemos.length}件あり、ユーザーのニーズが高いと推測されます。
                </p>
              </div>
              <div>
                <h4 className="text-xs text-gray-400 mb-1.5">選択肢</h4>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>1. 次回リリースに含める</li>
                  <li>2. 調査フェーズとして分割</li>
                  <li>3. 類似要望と統合</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-gray-400 mb-1.5">文案たたき</h4>
                <p className="text-xs text-gray-500 leading-relaxed italic">
                  「{title}について、次回アップデートでの対応を予定しています。進捗は随時こちらに反映します。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
