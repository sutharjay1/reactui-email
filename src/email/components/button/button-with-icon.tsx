import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Tailwind,
} from "@react-email/components";

export default function ButtonOne() {
  return (
    <Html>
      <Head />
      <Preview>Get started with our Button Component.</Preview>
      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
                brand: "#ff6719",
                dark: "#f7f9f7",
                muted: "#738A94",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                  DEFAULT: "hsl(var(--card))",
                  foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                  DEFAULT: "hsl(var(--popover))",
                  foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                  DEFAULT: "hsl(var(--primary))",
                  foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                  DEFAULT: "hsl(var(--secondary))",
                  foreground: "hsl(var(--secondary-foreground))",
                },
                accent: {
                  DEFAULT: "hsl(var(--accent))",
                  foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                  DEFAULT: "hsl(var(--destructive))",
                  foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                  "1": "hsl(var(--chart-1))",
                  "2": "hsl(var(--chart-2))",
                  "3": "hsl(var(--chart-3))",
                  "4": "hsl(var(--chart-4))",
                  "5": "hsl(var(--chart-5))",
                },
              },
              borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 3.5px)",
                sm: "calc(var(--radius) - 4px)",
              },
            },
          },
        }}
      >
        <Body className="font-sans">
          <Container className="mx-auto flex w-full flex-col items-center justify-center px-4">
            <Row>
              <Column>
                <Button
                  className="bg-brand mx-auto flex w-full items-center justify-center rounded-[8px] px-[24px] py-[12px] text-center text-[14px] font-semibold text-zinc-50"
                  href="https://reactui.email/docs/component/button"
                >
                  <Row>
                    <Column>Button</Column>
                    <Column>
                      <svg
                        className="ml-1"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 20 20"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.5 12h15m0 0-5.625-6m5.625 6-5.625 6" />
                      </svg>
                    </Column>
                  </Row>
                </Button>
              </Column>
            </Row>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
