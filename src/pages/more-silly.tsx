import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Baby, Crown, Star } from "lucide-react";

export function MoreSilly() {
  const [danceLevel, setDanceLevel] = useState(0);
  const [partyMode, setPartyMode] = useState(false);

  const handleDance = () => {
    setDanceLevel((prev) => prev + 1);
    if (danceLevel > 9) {
      setPartyMode(true);
    }
  };

  return (
    <div
      className={`container py-8 transition-colors duration-500 ${
        partyMode ? "animate-pulse bg-secondary" : ""
      }`}
    >
      <div className="mb-8 text-center">
        <Typography.H1>Ещё больше глупостей! 🎪</Typography.H1>
        <Typography.Lead>
          Вы думали предыдущая страница была глупой? Вы ещё это не видели!
        </Typography.Lead>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6 text-center">
          <Typography.H3 className="mb-4">
            Танцевальная вечеринка! 💃
          </Typography.H3>
          <div className="mb-4 flex justify-center gap-4">
            <Baby
              className={`h-12 w-12 ${
                danceLevel > 3 ? "animate-bounce text-primary" : ""
              }`}
            />
            <Crown
              className={`h-12 w-12 ${
                danceLevel > 6 ? "animate-spin text-secondary" : ""
              }`}
            />
            <Star
              className={`h-12 w-12 ${
                danceLevel > 9 ? "animate-pulse text-accent" : ""
              }`}
            />
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="animate-bounce"
            onClick={handleDance}
          >
            Танцевать! ({danceLevel}/10)
          </Button>
          {partyMode && (
            <Typography.H2 className="mt-4 animate-bounce text-primary">
              🎉 РЕЖИМ ВЕЧЕРИНКИ АКТИВИРОВАН! 🎉
            </Typography.H2>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-6 text-center">
        <Typography.Blockquote>
          "Это самая глупая страница, которую я когда-либо видел!" - Случайный
          посетитель
        </Typography.Blockquote>
        <Typography.Muted>
          Примечание: Ни одна анимация не пострадала при создании этой страницы
        </Typography.Muted>
      </div>
    </div>
  );
}