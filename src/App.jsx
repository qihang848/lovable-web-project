import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { Input } from './components/ui/Input'
import { ResourceCard } from './components/ResourceCard'
import { Footer } from './components/Footer'

const resources = [
  /* 把之前你贴的 22 条对象原样粘进来 */
]

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase()
    return q
      ? resources.filter(r =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
        )
      : resources
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            资源下载中心
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="搜索资源名称或描述..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {filtered.length ? (
          <>
            <p className="text-muted-foreground mb-6">
              共找到 <span className="text-primary font-semibold">{filtered.length}</span> 个资源
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(r => <ResourceCard key={r.id} {...r} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">未找到匹配的资源</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}