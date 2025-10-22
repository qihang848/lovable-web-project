import { Download } from 'lucide-react'

export const ResourceCard = ({ title, description, version, size, downloadUrl }) => (
  <div className="rounded-xl border bg-card text-card-foreground shadow hover:shadow-lg transition-shadow p-4 flex flex-col justify-between h-full">
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span>版本：{version}</span>
        <span>大小：{size}</span>
      </div>
    </div>
    <a
      className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90"
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Download className="h-4 w-4" />
      立即下载
    </a>
  </div>
)