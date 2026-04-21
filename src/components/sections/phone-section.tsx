import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function PhoneSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96])

  return (
    <section
      ref={containerRef}
      className="bg-background px-6 py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Инструмент</p>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground leading-tight mb-6">
            Xiaomi 14 Ultra.<br />
            <em className="italic text-muted-foreground">Камера, которая видит больше.</em>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
            Оптика Leica, 1-дюймовый сенсор и телеобъектив 240мм — всё это помещается в карман.
            Каждое фото на этом сайте снято именно на него.
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Сенсор", value: "1\" Sony LYT-900" },
              { label: "Зум", value: "до 240мм" },
              { label: "Оптика", value: "Leica Summilux" },
              { label: "Диафрагма", value: "f/1.63 — f/2.5" },
            ].map((spec) => (
              <div key={spec.label} className="bg-secondary rounded-xl p-4">
                <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{spec.label}</div>
                <div className="text-foreground font-medium text-sm">{spec.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phone image */}
        <motion.div
          className="relative flex items-center justify-center"
          style={{ y, scale }}
        >
          {/* Glow behind the lens */}
          <div className="absolute w-[260px] h-[260px] rounded-full bg-gradient-to-br from-purple-400/30 via-blue-300/20 to-transparent blur-3xl pointer-events-none" />

          <motion.div
            className="relative w-[320px] md:w-[400px]"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://cdn.poehali.dev/projects/43dbe8e6-d0b4-4555-b416-1bf1c351f578/bucket/81360fa5-50c5-451d-b999-cf00ea8ff18b.jpeg"
              alt="Xiaomi 14 Ultra"
              className="w-full rounded-3xl shadow-2xl"
            />

            {/* Lens highlight ring */}
            <motion.div
              className="absolute top-[12%] left-[50%] -translate-x-1/2 w-[62%] aspect-square rounded-full border-2 border-white/30 shadow-[0_0_40px_8px_rgba(255,255,255,0.12)]"
              animate={{
                boxShadow: [
                  "0 0 30px 6px rgba(180,160,255,0.18)",
                  "0 0 60px 16px rgba(180,160,255,0.32)",
                  "0 0 30px 6px rgba(180,160,255,0.18)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Label badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-foreground tracking-wide">Снято на этот телефон</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
