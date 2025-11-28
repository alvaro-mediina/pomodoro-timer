function StatsCard({ title, value }: { title: string, value: string | number }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl text-white rounded-xl p-4 text-center shadow-md border border-white/20">
      <p className="text-sm opacity-70">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  )
}

export default StatsCard;