import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Heart, HeartCrack } from "lucide-react";

interface SillyCardProps {
  title: string;
  content: string;
}

export function SillyCard({ title, content }: SillyCardProps) {
  const [isLoved, setIsLoved] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleLove = () => {
    setIsLoved(!isLoved);
    setRotation(rotation + 360);
  };

  return (
    <Card
      style={{ transform: `rotate(${rotation}deg)` }}
      className="transition-transform duration-1000"
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLove}
            className="text-foreground"
          >
            {isLoved ? (
              <Heart className="h-6 w-6 text-secondary animate-bounce" />
            ) : (
              <HeartCrack className="h-6 w-6 animate-pulse" />
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Typography.P>{content}</Typography.P>
      </CardContent>
    </Card>
  );
}