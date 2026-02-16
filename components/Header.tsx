import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-6 py-5 flex items-center gap-8">
        <Link href="/" className="font-semibold text-xl text-stone-800 hover:text-stone-600">
          Наслаждение кофе
        </Link>
        <nav className="flex gap-6 text-lg text-stone-600">
          <Link href="/" className="hover:text-stone-800">Главная</Link>
          <Link href="/menu" className="hover:text-stone-800">Меню</Link>
          <Link href="/about" className="hover:text-stone-800">О нас</Link>
          <Link href="/contacts" className="hover:text-stone-800">Где нас найти</Link>
        </nav>
      </div>
    </header>
  )
}
