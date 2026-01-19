interface VisionMeetsCraftsmanshipProps {
  projects: string[]
}

export default function VisionMeetsCraftsmanship({ projects }: VisionMeetsCraftsmanshipProps) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-medium mb-12">
          <span className="text-pca-primary">Where Vision</span> Meets Craftsmanship
        </h2>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-6 gap-4 w-full max-w-[1600px] h-[400px] md:h-[800px]">
            <div className="col-span-4 row-span-3 rounded-xl overflow-hidden">
              <img src={projects[0]} className="w-full h-full object-cover" alt="Project 1" />
            </div>

            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
              <img src={projects[1]} className="w-full h-full object-cover" alt="Project 2" />
            </div>

            <div className="col-span-2 row-span-3 rounded-xl overflow-hidden">
              <img src={projects[2]} className="w-full h-full object-cover" alt="Project 3" />
            </div>

            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
              <img src={projects[3]} className="w-full h-full object-cover" alt="Project 4" />
            </div>

            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
              <img src={projects[4]} className="w-full h-full object-cover" alt="Project 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
