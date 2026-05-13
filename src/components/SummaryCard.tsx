interface SummaryCardProps {
  label: string
  value: number
  icon: React.ReactNode
}

export function SummaryCard({ label, value, icon }: SummaryCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-gray-400">{icon}</span>
      </div>
      <p className="text-2xl font-semibold text-gray-900 tracking-tight">{value}</p>
    </div>
  )
}
