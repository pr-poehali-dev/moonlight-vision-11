import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const showcaseImages = [
  "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/3ac30f42-47c3-4019-8305-47f17d68d1f4.jpg",
  "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/7ea61cc6-6481-47b6-a916-283246f06686.jpg",
  "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/007ab989-a6ae-43b6-9d35-6f1178949371.jpg",
  "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/372658f9-850d-453b-94d1-e1fe0ed0f684.jpg",
  "https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/3d9058d4-18e8-4055-bdcd-5ace0af6ff7a.jpg",
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const y4 = useTransform(scrollYProgress, [0, 1], [120, -120])
  const y5 = useTransform(scrollYProgress, [0, 1], [60, -60])

  const yValues = [y1, y2, y3, y4, y5]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Галерея
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Каждый кадр — история
        </motion.h2>

        {/* Первый ряд: 3 фото */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {showcaseImages.slice(0, 3).map((src, i) => (
            <motion.div
              key={i}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              data-clickable
            >
              <motion.img
                src={src}
                alt={`Снимок ${i + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-medium tracking-widest uppercase">Скачать</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Второй ряд: 2 фото широкие */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {showcaseImages.slice(3).map((src, i) => (
            <motion.div
              key={i + 3}
              className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden group"
              style={{ y: yValues[i + 3] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              data-clickable
            >
              <motion.img
                src={src}
                alt={`Снимок ${i + 4}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-medium tracking-widest uppercase">Скачать</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}