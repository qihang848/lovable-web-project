import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/ResourceCard";
import { Footer } from "@/components/Footer";

const resources = [/* 你的资源数组，略 */];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = useMemo(() => {
    if (!searchQuery.trim()) return resources;
    const query = searchQuery.toLowerCase();
    return resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-primary bg-clip-text text-transparent">
            资源下载中心
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索资源名称或描述..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-card border-border/50 focus:border-primary transition-colors"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {filteredResources.length > 0 ? (
          <>
            <p className="text-muted-foreground mb-6">
              共找到 <span className="text-primary font-semibold">{filteredResources.length}</span> 个资源
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} {...resource} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">未找到匹配的资源</p>
            <p className="text-muted-foreground mt-2">请尝试其他关键词</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
