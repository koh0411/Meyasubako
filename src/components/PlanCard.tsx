import type { PlanTier } from '../types'

interface PlanCardProps {
  tier: PlanTier
  price: string
  features: string[]
  isCurrent?: boolean
}

export function PlanCard({ tier, price, features, isCurrent = false }: PlanCardProps) {
  return (
    <div
      className={`border rounded-lg p-6 ${
        isCurrent ? 'border-gray-900 bg-white' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{tier}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-1">{price}</p>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((f) => (
          <li key={f} className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-gray-400 mt-0.5">–</span>
            {f}
          </li>
        ))}
      </ul>
      {isCurrent ? (
        <div className="text-center text-sm text-gray-500 py-2 border border-gray-200 rounded-md">
          現在のプラン
        </div>
      ) : (
        <button className="w-full text-center text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 py-2 rounded-md transition-colors">
          アップグレード
        </button>
      )}
    </div>
  )
}
