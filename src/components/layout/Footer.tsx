import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-neutral-100 mt-auto">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <span className="text-xl font-bold tracking-tighter text-neutral-900 uppercase">
            Emetor
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-medium tracking-widest text-neutral-500 uppercase">
            © 2026 EMETOR. ARCHITECTURAL PRECISION.
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
            <Link href="#" className="hover:text-neutral-900 transition-colors">Systems</Link>
            <Link href="#" className="hover:text-neutral-900 transition-colors">Protocols</Link>
            <Link href="#" className="hover:text-neutral-900 transition-colors">Privacy</Link>
            <Link href="#" className="text-neutral-900 transition-colors">Intelligence</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
