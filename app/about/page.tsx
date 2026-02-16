export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-stone-800 mb-8">О нас</h1>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-stone-700 mb-2">
          О кофейне
        </h2>
        <p className="text-stone-600 text-lg leading-relaxed">
          "Наслаждение кофе" — это модная и новая кофейня в красивом месте столицы. Мы открылись 
          в 2024 году и с тех пор радуем гостей свежей выпечкой и вкусным кофе </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-stone-700 mb-2"> История и концепция </h2>
        <p className="text-stone-600 text-lg leading-relaxed"> Наша идея для кофейни: открыть место, где каждый будет чувствовать 
          себя уютно, сидя за столиком с чашечкой вкусного кофе </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-stone-700 mb-2"> Ценности и подход к кофе </h2>
        <p className="text-stone-600 text-lg leading-relaxed">
          Мы выбираем зёрна высших сортов и лучшего качества.
          Каждая чашка - это внимание к деталям. Наша выпечка готовится по утрам нашими пекарями, чтобы вы 
          кушали только самые свежие блюда </p>
      </section>
    </div>
  )
}
