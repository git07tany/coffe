import Link from 'next/link'
import type { Item } from '@/data/items'

type Props = {
  item: Item
}

export default function Card({ item }: Props) {
  return (
    <Link
      href={`/menu/${item.id}`}
      className="block p-5 bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-sm transition"
    >
      <div className="font-medium text-stone-800 text-lg">{item.name}</div>
      <div className="text-stone-600 mt-1">{item.price} ₽</div>
      <div className="text-stone-500 mt-2 text-base">{item.desc}</div>
    </Link>
  )
}
