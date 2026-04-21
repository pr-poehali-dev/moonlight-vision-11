import { motion } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const articles = [
  {
    slug: "street-mobile",
    title: "Как снимать уличную фотографию на телефон",
    category: "Техника",
    date: "18 апреля 2026",
    readTime: "5 мин",
    cover: "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/3ac30f42-47c3-4019-8305-47f17d68d1f4.jpg",
    excerpt: "Улица не ждёт. Здесь нет второго дубля, нет студийного света и нет времени на настройку. Именно поэтому смартфон — идеальный инструмент для уличной съёмки.",
  },
  {
    slug: "light-shadow",
    title: "Свет и тень: магия естественного освещения",
    category: "Свет",
    date: "15 апреля 2026",
    readTime: "4 мин",
    cover: "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/7ea61cc6-6481-47b6-a916-283246f06686.jpg",
    excerpt: "Золотой час, пасмурный день, тень от листьев — природный свет создаёт настроение, которое не повторить в студии. Рассказываю, как им пользоваться.",
  },
  {
    slug: "travel-camera",
    title: "Почему смартфон — лучшая камера для путешествий",
    category: "Снаряжение",
    date: "10 апреля 2026",
    readTime: "6 мин",
    cover: "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/007ab989-a6ae-43b6-9d35-6f1178949371.jpg",
    excerpt: "Лучшая камера — та, что всегда с тобой. За три года путешествий с Xiaomi 14 Ultra я убедился: мобильная фотография давно перестала быть компромиссом.",
  },
  {
    slug: "unexpected-frame",
    title: "Найти кадр там, где его не ждут",
    category: "Взгляд",
    date: "5 апреля 2026",
    readTime: "3 мин",
    cover: "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/372658f9-850d-453b-94d1-e1fe0ed0f684.jpg",
    excerpt: "Лишайник на коре, самолёт в сером небе, отражение в луже — красота прячется в деталях. Нужно только замедлиться и посмотреть.",
  },
]

export default function Articles() {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background min-h-screen">
        <CustomCursor />

        {/* Header */}
        <div className="px-6 pt-16 pb-8 max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-12"
            data-clickable
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>

          <motion.p
            className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Все статьи
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-serif text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Заметки о фотографии
          </motion.h1>
        </div>

        {/* Articles grid */}
        <div className="px-6 pb-32 max-w-6xl mx-auto">
          {/* Featured — first article big */}
          <motion.article
            className="group cursor-pointer mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            data-clickable
          >
            <div className="relative h-[400px] md:h-[560px] rounded-2xl overflow-hidden mb-6">
              <motion.img
                src={articles[0].cover}
                alt={articles[0].title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs text-white/60 uppercase tracking-wider">{articles[0].category}</span>
                <h2 className="text-white font-serif text-3xl md:text-4xl mt-2 leading-snug">{articles[0].title}</h2>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">{articles[0].excerpt}</p>
            <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
              <span>{articles[0].date}</span>
              <span>·</span>
              <span>{articles[0].readTime} чтения</span>
            </div>
          </motion.article>

          {/* Rest — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(1).map((article, i) => (
              <motion.article
                key={article.slug}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                data-clickable
              >
                <div className="relative h-[220px] rounded-xl overflow-hidden mb-4">
                  <motion.img
                    src={article.cover}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{article.category}</span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </LenisProvider>
  )
}
