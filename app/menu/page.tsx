'use client'

import { useState } from 'react'
import { drinks, food } from '@/data/items'
import Card from '@/components/Card'

export default function MenuPage() {
  const [show, setShow] = useState<'all' | 'drinks' | 'food'>('all')

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-stone-800 mb-8">Меню</h1>

      <div className="flex gap-3 mb-10">
        <button
          onClick={() => setShow('all')}
          className={`px-5 py-2.5 rounded-lg text-base ${
            show === 'all' ? 'bg-stone-700 text-white' : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300'
          }`}
>
          Всё меню
        </button>
        <button
          onClick={() => setShow('drinks')}
          className={`px-5 py-2.5 rounded-lg text-base ${
            show === 'drinks' ? 'bg-stone-700 text-white' : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300'
          }`}
        >
          Напитки
        </button>
        <button
          onClick={() => setShow('food')}
          className={`px-5 py-2.5 rounded-lg text-base ${
            show === 'food' ? 'bg-stone-700 text-white' : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300'
          }`}
        >
          Блюда
        </button>
      </div>

      {show === 'all' && (
        <>
          <h2 className="text-xl font-medium text-stone-700 mb-4">Напитки</h2>
          <div className="grid gap-4 mb-10">
            {drinks.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <h2 className="text-xl font-medium text-stone-700 mb-4">Блюда</h2>
          <div className="grid gap-4">
            {food.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

      {show === 'drinks' && (
        <div className="grid gap-4">
          {drinks.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}

      {show === 'food' && (
        <div className="grid gap-4">
          {food.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
