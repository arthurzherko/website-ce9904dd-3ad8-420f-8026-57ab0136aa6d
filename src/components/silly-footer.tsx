import { Typography } from "@/components/ui/typography";

export function SillyFooter() {
  return (
    <footer className="border-t bg-background py-6">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <Typography.H4>
            Этот сайт создан исключительно для веселья! 🎉
          </Typography.H4>
          <Typography.Muted>
            Никакие мозговые клетки не пострадали при создании этого сайта
            (наверное)
          </Typography.Muted>
          <Typography.Small>
            © {new Date().getFullYear()} Самый глупый сайт в мире
          </Typography.Small>
        </div>
      </div>
    </footer>
  );
}