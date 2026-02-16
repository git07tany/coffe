// данные для меню блюда и напитки

export type Item = {
  id: string
  name: string
  price: number
  desc: string
  img: string
  type: 'food' | 'drink'
}

export const items: Item[] = [
  {
    id: '1',
    name: 'Капучино',
    price: 180,
    desc: 'Классический кофе с молочной пенкой. Нежный и ароматный.',
    img: '/img/kapuch.jpg',
    type: 'drink',
  },
  {
    id: '2',
    name: 'Латте',
    price: 200,
    desc: 'Эспрессо с большим количеством молока. Мягкий вкус.',
    img: '/img/latte.jpg',
    type: 'drink',
  },
  {
    id: '3',
    name: 'Американо',
    price: 150,
    desc: 'Эспрессо с горячей водой. Для любителей крепкого кофе.',
    img: '/img/americano.jpg',
    type: 'drink',
  },
  {
    id: '4',
    name: 'Чай зелёный',
    price: 120,
    desc: 'Ароматный зелёный чай. Без сахара, можно добавить мёд.',
    img: '/img/green.jpg',
    type: 'drink',
  },
  {
    id: '5',
    name: 'Смузи ягодный',
    price: 220,
    desc: 'Свежие ягоды, йогурт, лёд. Освежающий напиток.',
    img: '/img/smuzi.jpg',
    type: 'drink',
  },
  {
    id: '6',
    name: 'Сырники',
    price: 250,
    desc: 'Домашние сырники со сметаной и ягодами. Порция 4 шт.',
    img: '/img/sirniki.jpg',
    type: 'food',
  },
  {
    id: '7',
    name: 'Круассан',
    price: 140,
    desc: 'Свежий французский круассан. Можно с джемом или шоколадом.',
    img: '/img/kruassan.jpg',
    type: 'food',
  },
  {
    id: '8',
    name: 'Сэндвич с авокадо',
    price: 280,
    desc: 'Хлеб, авокадо, яйцо, зелень. Сытный завтрак.',
    img: '/img/sandwich.jpg',
    type: 'food',
  },
  {
    id: '9',
    name: 'Чизкейк',
    price: 220,
    desc: 'Классический чизкейк. Нежный творожный вкус.',
    img: '/img/chizkeik.jpg',
    type: 'food',
  },
  {
    id: '10',
    name: 'Брауни',
    price: 180,
    desc: 'Шоколадный брауни. Подаётся тёплым.',
    img: '/img/brownies.jpg',
    type: 'food',
  },
]

export function getItem(id: string): Item | undefined {
  return items.find((x) => x.id === id)
}

export const drinks = items.filter((x) => x.type === 'drink')
export const food = items.filter((x) => x.type === 'food')
