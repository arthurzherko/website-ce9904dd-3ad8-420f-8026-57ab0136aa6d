import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Smile, Frown, Baby } from "lucide-react";

export function SillyHeader() {
  const [mood, setMood] = useState<"happy" | "sad" | "silly">("happy");

  const toggleMood = () => {
    if (mood === "happy") setMood("sad");
    else if (mood === "sad") setMood("silly");
    else setMood("happy");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-14 w-14 rounded-full text-foreground"
            onClick={toggleMood}
          >
            {mood === "happy" && <Smile className="h-8 w-8 animate-bounce" />}
            {mood === "sad" && <Frown className="h-8 w-8 animate-pulse" />}
            {mood === "silly" && <Baby className="h-8 w-8 animate-spin" />}
          </Button>
          <Typography.H2>Самый глупый сайт</Typography.H2>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-lg font-medium text-foreground hover:text-primary"
          >
            Главная
          </Link>
          <Link
            to="/silly"
            className="text-lg font-medium text-foreground hover:text-primary"
          >
            Глупости
          </Link>
          <Link
            to="/more-silly"
            className="text-lg font-medium text-foreground hover:text-primary"
          >
            Ещё глупее
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}