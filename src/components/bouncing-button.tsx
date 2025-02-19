import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function BouncingButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState(0);

  const handleMouseEnter = () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);
    setPosition({ x, y });
  };

  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };

  return (
    <div className="relative h-[400px]">
      <div className="mb-4 text-center">
        <Typography.H3>Поймай меня если сможешь!</Typography.H3>
        <Typography.P>Количество пойманных раз: {clicks}</Typography.P>
      </div>
      <Button
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        variant="secondary"
        className="h-12 w-48"
      >
        Попробуй поймать!
      </Button>
    </div>
  );
}