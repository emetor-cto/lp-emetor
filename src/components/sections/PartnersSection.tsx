"use client"

export function PartnersSection() {
  const stacks = [
    "AWS", "Google Cloud", "Stripe", "OpenAI", "Nest.js", "Prisma", "PostgreSQL"
  ]

  return (
    <section className="w-full bg-white border-b border-neutral-100 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <small className="mb-14 text-neutral-400 block text-center uppercase tracking-widest">
            Nossas Stacks de Performance
          </small>

          <div className="w-full max-w-6xl">
            <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-20 gap-y-10">
              {stacks.map((name) => (
                <div
                  key={name}
                  className="group relative flex flex-col items-center opacity-30 hover:opacity-100 transition-all duration-700 cursor-default"
                >
                  <span className="text-xl md:text-2xl font-bold tracking-tighter text-neutral-900 transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
