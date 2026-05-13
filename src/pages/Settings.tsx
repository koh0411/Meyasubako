import { TopHeader } from '../components/TopHeader'
import { PlanCard } from '../components/PlanCard'

export function Settings() {
  return (
    <div className="max-w-4xl">
      <TopHeader title="設定 / プラン" description="プランの確認とアカウント設定" />

      <div className="bg-white border border-gray-200 rounded-lg p-5 mb-8">
        <h2 className="text-sm font-medium text-gray-900 mb-1">現在のプラン</h2>
        <p className="text-sm text-gray-500">Free プランをご利用中です</p>
      </div>

      <h2 className="text-sm font-medium text-gray-900 mb-4">プラン比較</h2>
      <div className="grid grid-cols-3 gap-4">
        <PlanCard
          tier="Free"
          price="¥0"
          isCurrent
          features={[
            '要望 10 件まで',
            '声メモ管理',
            '公開ボード',
            'Meyasubako ロゴ表示',
          ]}
        />
        <PlanCard
          tier="Pro"
          price="¥980 / 月"
          features={[
            '要望数 無制限',
            'ユーザー投稿 ON',
            'ロゴ非表示',
            'AI 提案機能',
            'メール通知',
          ]}
        />
        <PlanCard
          tier="Business"
          price="¥2,980 / 月"
          features={[
            'Pro のすべて',
            '管理者 複数名',
            'CSV エクスポート',
            '操作ログ',
            'API アクセス',
            '優先サポート',
          ]}
        />
      </div>
    </div>
  )
}
