import { Typography } from "@/components/ui/typography";
import { BouncingButton } from "@/components/bouncing-button";

export function Home() {
  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <Typography.H1>Добро пожаловать на самый глупый сайт! 🎈</Typography.H1>
        <Typography.Lead>
          Здесь нет ничего полезного, и это прекрасно!
        </Typography.Lead>
      </div>

      <div className="mb-12">
        <BouncingButton />
      </div>

      <div className="grid gap-6 text-center">
        <Typography.H2>Почему этот сайт такой глупый? 🤔</Typography.H2>
        <Typography.P>
          Потому что иногда нужно просто повеселиться! Здесь вы найдёте:
        </Typography.P>
        <Typography.List>
          <li>Кнопки, которые убегают от курсора</li>
          <li>Карточки, которые крутятся без причины</li>
          <li>Смайлики, которые меняют настроение</li>
          <li>И много другой ерунды!</li>
        </Typography.List>
      </div>
    </div>
  );
}