import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-stone-800 text-center">
        Наслаждение Кофе
      </h1>
      <p className="text-center text-stone-600 mt-4 text-xl">
        Место, откуда не захочется уходить
      </p>
      <div className="flex justify-center mt-10">
        <Link href="/menu" className="bg-stone-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-stone-600"> Смотреть меню </Link>
      </div>
      <div className="mt-14 rounded-xl overflow-hidden">
        <img
          src="https://s0.rbk.ru/v6_top_pics/media/img/2/25/756738626058252.webp"
          alt="Кофейня"
          className="w-full h-90 object-cover rounded-xl"
        />
      </div>
    </div>
  )
}
