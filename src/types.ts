export type RequestStatus = '検討中' | '予定' | '完了'
export type MemoStatus = '未整理' | '保留' | '要望化済み'
export type MemoSource = 'App Store' | 'X' | 'Discord' | 'DM' | 'ユーザー投稿' | 'GitHub'

export interface Request {
  id: string
  title: string
  description: string
  status: RequestStatus
  votes: number
  memoIds: string[]
  createdAt: string
}

export interface VoiceMemo {
  id: string
  body: string
  source: MemoSource
  date: string
  status: MemoStatus
  linkedRequestId?: string
}

export interface AiSuggestion {
  summary: string
  similarRequests: string[]
  recommendedAction: string
}

export type PlanTier = 'Free' | 'Pro' | 'Business'
