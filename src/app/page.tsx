import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-9xl mb-8">The Edge of Humanity</h1>
        <p className="max-w-prose mx-auto leading-relaxed text-muted-foreground text-lg">
          From synthetic consciousness to the pursuit of immortality, emerging
          technologies challenge the very definition of being human. Innovation
          promises power, but it also demands reflection. Who controls these
          tools? Who benefits? And at what cost? As we push the boundaries
          between soul and machine, the line between progress and loss grows
          increasingly thin
        </p>

        <div className="flex items-center justify-center gap-2 mt-7">
          <Button size={"sm"} className="cursor-pointer">
            Enter
          </Button>
          <Button size={"sm"} className="cursor-pointer" variant={"ghost"}>
            Reflect Within
          </Button>
        </div>
      </div>
      <ThemeSwitcher />
    </main>
  );
}
