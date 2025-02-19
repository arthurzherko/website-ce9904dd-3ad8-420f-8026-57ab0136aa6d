import { Typography } from "@/components/ui/typography";
import { SillyCard } from "@/components/silly-card";

export function Silly() {
  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <Typography.H1>Страница глупостей 🤡</Typography.H1>
        <Typography.Lead>
          Здесь собраны самые нелепые карточки, которые вы когда-либо видели!
        </Typography.Lead>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SillyCard
          title="Почему курица перешла дорогу?"
          content="Чтобы попасть на эту страницу! 🐔"
        />
        <SillyCard
          title="Математическая шутка"
          content="Почему 6 боится 7? Потому что 7 8 9! 🔢"
        />
        <SillyCard
          title="Программистский юмор"
          content="Почему программисты путают Хэллоуин и Рождество? Потому что 31 OCT = 25 DEC! 🎃"
        />
        <SillyCard
          title="Шутка про UI/UX"
          content="Как называется призрак веб-дизайнера? UI-привидение! 👻"
        />
        <SillyCard
          title="Компьютерный каламбур"
          content="Что сказал браузер печеньке? Ты такая сладкая! 🍪"
        />
        <SillyCard
          title="Шутка про CSS"
          content="Почему CSS не смог решить конфликт? Потому что у него проблемы со специфичностью! 😅"
        />
      </div>
    </div>
  );
}