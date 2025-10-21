const ResourceCard = ({ title, description, version, size, downloadUrl }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2 text-primary">{title}</h2>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="text-sm text-muted-foreground mb-2">
        <strong>版本：</strong> {version}
      </div>
      <div className="text-sm text-muted-foreground mb-4">
        <strong>大小：</strong> {size}
      </div>
      <a
        href={downloadUrl}
        className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
      >
        下载
      </a>
    </div>
  );
};

export { ResourceCard };
