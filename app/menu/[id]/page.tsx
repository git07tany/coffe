import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getItem } from '@/data/items'

type Props = {
  params: { id: string }
}

export default function DishPage({ params }: Props) {
  const item = getItem(params.id)
  if (!item) redirect('/menu')

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-stone-800 mb-5">{item.name}</h1>

      <div className="w-full min-h-64 bg-stone-100 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="max-w-full max-h-96 object-contain"
        />
      </div>

      <p className="text-stone-600 text-lg mb-4"> {item.desc} </p>
      <p className="text-xl font-medium text-stone-700 mb-6"> {item.price} ₽ </p>

      <Link href="/menu" className="inline-block bg-stone-700 text-white px-5 py-2.5 rounded-lg text-base hover:bg-stone-600"> 
      Назад в меню </Link>
    </div>
  )
}
