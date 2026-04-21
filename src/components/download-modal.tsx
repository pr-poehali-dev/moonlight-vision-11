import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

interface DownloadModalProps {
  src: string
  filename: string
  onClose: () => void
}

const qualities = [
  { label: "Оригинал", description: "Максимальное качество", suffix: "" },
  { label: "Высокое", description: "Оптимально для печати", suffix: "?w=2048" },
  { label: "Среднее", description: "Для соцсетей и веба", suffix: "?w=1080" },
]

export function DownloadModal({ src, filename, onClose }: DownloadModalProps) {
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleDownload = async (suffix: string, label: string) => {
    setDownloading(label)
    try {
      const url = src + suffix
      const response = await fetch(url)
      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = blobUrl
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(blobUrl)
    } finally {
      setDownloading(null)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          className="relative bg-background rounded-2xl overflow-hidden w-full max-w-lg shadow-2xl"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Preview */}
          <div className="relative h-56 overflow-hidden">
            <img src={src} alt="Предпросмотр" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              data-clickable
            >
              <Icon name="X" size={16} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-serif text-xl text-foreground mb-1">Скачать фото</h3>
            <p className="text-muted-foreground text-sm mb-6">Выберите подходящее качество</p>

            <div className="space-y-3">
              {qualities.map((q) => (
                <button
                  key={q.label}
                  onClick={() => handleDownload(q.suffix, q.label)}
                  disabled={downloading !== null}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-secondary hover:bg-secondary/70 transition-colors group disabled:opacity-50"
                  data-clickable
                >
                  <div className="text-left">
                    <div className="text-foreground font-medium text-sm">{q.label}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">{q.description}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {downloading === q.label ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon name="Loader2" size={16} />
                      </motion.div>
                    ) : (
                      <Icon name="Download" size={16} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
