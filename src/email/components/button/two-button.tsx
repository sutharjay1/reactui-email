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
          <Container className="mx-auto w-full px-4 py-5">
            <Row>
              <Column align="center">
                <Row>
                  <td align="center" className="w-1/2" colSpan={1}>
                    <Button
                      className="bg-brand rounded-[8px] px-[24px] py-[12px] text-center text-[14px] font-semibold text-zinc-50"
                      href="#"
                    >
                      Get Started
                    </Button>
                  </td>
                  <td align="center" className="w-1/2" colSpan={1}>
                    <Button
                      className="rounded-[8px] border-[1px] border-zinc-200 bg-white px-[24px] py-[12px] text-center text-[14px] font-semibold text-zinc-950"
                      href="#"
                    >
                      Sign Up
                    </Button>
                  </td>
                </Row>
              </Column>
            </Row>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
