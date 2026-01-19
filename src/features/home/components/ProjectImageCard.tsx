interface ProjectImageCardProps {
  title: string
  imageUrl?: string
}

export default function ProjectImageCard({ title, imageUrl }: ProjectImageCardProps) {
  return (
    <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden group cursor-pointer">
      {imageUrl ? (
        <>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        </>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-pca-primary to-pca-tan">
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-2xl font-bold group-hover:text-white/40 transition-colors">
            {title}
          </div>
        </div>
      )}
    </div>
  )
}
