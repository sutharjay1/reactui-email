import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function HeaderTwo() {
  return (
    <Html>
      <Head />
      <Preview>Header Preview</Preview>
      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
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
            <Section className="mt-2 flex w-full flex-col items-center justify-center">
              <Img
                src="https://cdn.brandfetch.io/idZ_aiFAYa/w/128/h/128/theme/dark/logo.png?c=1bfwsmEH20zzEfSNTed"
                width="50"
                height="50"
                alt="Framer"
                className="mx-0 my-0"
              />
            </Section>
            <Hr className="my-4 border-primary" />
            <Section className="my-2">
              <table className="w-full" cellPadding="0" cellSpacing="0" role="presentation">
                <tr>
                  <td>
                    <Row>
                      <Column align="left" style={{ width: "25%" }}>
                        <Link
                          href="https://reactui.email"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Text className="m-0 text-center text-sm font-semibold text-primary">
                            Docs
                          </Text>
                        </Link>
                      </Column>
                      <Column align="center" style={{ width: "25%" }}>
                        <Link
                          href="https://reactui.email"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Text className="m-0 text-center text-sm font-semibold text-primary">
                            Blog
                          </Text>
                        </Link>
                      </Column>
                      <Column align="right" style={{ width: "25%" }}>
                        <Link
                          href="https://reactui.email"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Text className="m-0 text-center text-sm font-semibold text-primary">
                            Help
                          </Text>
                        </Link>
                      </Column>
                    </Row>
                  </td>
                </tr>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
