import Link from "next/link"
import { ArrowLeft, House, Search } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_28%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-12 shadow-2xl shadow-black/10 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-4 py-2 text-sm text-muted-foreground">
              <Search className="h-4 w-4 text-primary" />
              Page not found
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              The page you requested does not exist.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              This can happen if the URL was typed incorrectly or a page moved. Use the links below to continue browsing
              the site.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <House className="mr-2 h-4 w-4" />
                Go to homepage
              </Link>
              <Link
                href="/examples"
                className="inline-flex items-center justify-center rounded-xl border border-border/50 bg-background/50 px-6 py-3 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse examples
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                ["/examples", "Browse examples"],
                ["/", "Go to homepage"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl border border-border/40 bg-background/60 px-4 py-4 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
