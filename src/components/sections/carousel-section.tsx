import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/3ac30f42-47c3-4019-8305-47f17d68d1f4.jpg",
  "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/7ea61cc6-6481-47b6-a916-283246f06686.jpg",
  "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/007ab989-a6ae-43b6-9d35-6f1178949371.jpg",
  "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/372658f9-850d-453b-94d1-e1fe0ed0f684.jpg",
  "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/3d9058d4-18e8-4055-bdcd-5ace0af6ff7a.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Снято на смартфон. Без компромиссов.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}