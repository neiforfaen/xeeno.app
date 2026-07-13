import { MoveRight, PhoneCall, User } from "lucide-react"
import { Badge } from "#/components/ui/badge"
import { Button } from "#/components/ui/button"
import { Footer } from "./_components/footer"
import { Navbar } from "./_components/nav"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="w-full">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
              <div>
                <Badge variant="outline">Free forever</Badge>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="max-w-2xl text-center font-regular text-5xl tracking-tighter md:text-7xl">
                  Master frontend through real challenges
                </h1>
                <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
                  Build skills by solving real problems. Learn how systems break,
                  how users navigate your interfaces, how performance degrades
                  under load. No tutorials. No sales calls. Just code and
                  solutions.
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <Button className="gap-4" size="lg" variant="outline">
                  Browse challenges <MoveRight className="h-4 w-4" />
                </Button>
                <Button className="gap-4" size="lg">
                  Start learning <MoveRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-start gap-4">
                <div>
                  <Badge>How it works</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
                    Everything to grow your skills
                  </h2>
                  <p className="max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
                    Built for engineers who want depth over breadth.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:aspect-auto">
                  <User className="h-8 w-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">
                      Real problems from production
                    </h3>
                    <p className="max-w-xs text-base text-muted-foreground">
                      Learn patterns that actually work. Systems fail in specific ways. We teach you how to recognize and prevent them.
                    </p>
                  </div>
                </div>
                <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
                  <User className="h-8 w-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">
                      Instant feedback
                    </h3>
                    <p className="max-w-xs text-base text-muted-foreground">
                      Write code. See results immediately. Fast iteration beats slow review every time.
                    </p>
                  </div>
                </div>

                <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
                  <User className="h-8 w-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">
                      Build your portfolio
                    </h3>
                    <p className="max-w-xs text-base text-muted-foreground">
                      Every challenge solved is proof of work. Link it. Deploy it. Let your code do the talking.
                    </p>
                  </div>
                </div>
                <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:aspect-auto">
                  <User className="h-8 w-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">
                      Learn at your pace
                    </h3>
                    <p className="max-w-xs text-base text-muted-foreground">
                      No cohorts. No deadlines. Complexity grows as you grow. Master fundamentals before moving forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
