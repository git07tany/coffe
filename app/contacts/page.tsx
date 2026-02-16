export default function ContactsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-stone-800 mb-8">
        Где нас найти
      </h1>

      <div className="grid gap-6 mb-8">
        <section>
          <h2 className="text-lg font-medium text-stone-700 mb-1">Адрес</h2>
          <p className="text-stone-600 text-lg"> г. Москва, ул. Кофейная, д. 1 </p>
          <p className="text-sm text-stone-500 mt-1"> Рядом с метро «Центральная», 3 минуты пешком </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-stone-700 mb-1"> Часы работы </h2>
          <p className="text-stone-600 text-lg">Пн – Пт: 8:00 – 22:00 </p>
          <p className="text-stone-600 text-lg">Сб – Вс: 9:00 – 23:00 </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-stone-700 mb-1"> Контакты </h2>
          <p className="text-stone-600 text-lg">Телефон: +7 (999) 123-45-67 </p>
          <p className="text-stone-600 text-lg">Почта: kaif_coffee@mail.ru </p>
        </section>
      </div>

      <section>
        <h2 className="text-xl font-medium text-stone-700 mb-3">Мы на карте</h2>
        <div className="rounded-xl overflow-hidden border border-stone-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10082.456880226737!2d37.537839881443084!3d55.747871143473695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1771280396958!5m2!1sru!2sru" width="100%" height="450"  loading="lazy"
            style={{ border: 0 }}
            title="Карта"
            className="block"/>
        </div>
      </section>
    </div>
  )
}
