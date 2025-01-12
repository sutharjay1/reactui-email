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

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const AppleReceiptEmail = ({ darkMode = false }) => {
  const theme = {
    bg: darkMode ? "bg-zinc-900" : "bg-zinc-50",
    text: darkMode ? "text-zinc-100" : "text-zinc-900",
    secondaryText: darkMode ? "text-zinc-400" : "text-zinc-600",
    sectionBg: darkMode ? "bg-zinc-800" : "bg-zinc-50",
    border: darkMode ? "border-zinc-700" : "border-zinc-200",
    link: darkMode ? "text-blue-400" : "text-blue-600",
  };

  return (
    <Html>
      <Head />
      <Preview>Receipt</Preview>

      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
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
                muted: {
                  DEFAULT: "hsl(var(--muted))",
                  foreground: "hsl(var(--muted-foreground))",
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
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
              },
            },
          },
        }}
      >
        <Body>
          <Container className={`mx-auto w-full max-w-[660px] px-5 py-8 ${theme.bg} ${theme.text}`}>
            <Section>
              <Row>
                <Column>
                  <Img src={`${baseUrl}/static/apple-logo.png`} width="42" height="42" alt="Logo" />
                </Column>
                <Column align="right" className="table-cell">
                  <Text className={`text-4xl font-light ${theme.secondaryText}`}>Receipt</Text>
                </Column>
              </Row>
            </Section>

            <Section>
              <Text className={`mb-10 mt-9 text-center text-sm font-medium ${theme.text}`}>
                Save 3% on all your purchases
                <sup className="font-light">1</sup>{" "}
                <Link href="#" className={`${theme.link}`}>
                  Apply and use in minutes
                </Link>
                <sup className="font-light">2</sup>
              </Text>
            </Section>

            <Section
              className={`border-collapse border-spacing-0 rounded-md ${theme.sectionBg} text-sm`}
            >
              <Row className="h-12">
                <Column colSpan={2}>
                  <Section>
                    <Row>
                      <Column className={`h-11 border-b px-5 ${theme.border}`}>
                        <Text className={theme.secondaryText}>ID</Text>
                        <Link href="mailto:user@example.com" className={theme.link}>
                          user@example.com
                        </Link>
                      </Column>
                    </Row>

                    <Row>
                      <Column className={`border-b px-5 ${theme.border}`}>
                        <Text className={theme.secondaryText}>DATE</Text>
                        <Text className={theme.text}>13 Jan 2025</Text>
                      </Column>
                    </Row>

                    <Row>
                      <Column className={`border-b px-5 ${theme.border}`}>
                        <Text className={theme.secondaryText}>ORDER ID</Text>
                        <Link href="#" className={theme.link}>
                          ML4F5L8522
                        </Link>
                      </Column>
                    </Row>
                  </Section>
                </Column>

                <Column colSpan={2} className="px-5">
                  <Text className={theme.secondaryText}>BILLED TO</Text>
                  <Text className={theme.text}>Card .... 7461</Text>
                  <Text className={theme.text}>John Smith</Text>
                  <Text className={theme.text}>123 Main St</Text>
                  <Text className={theme.text}>San Francisco, CA 94123</Text>
                </Column>
              </Row>
            </Section>

            <Section className="mb-3 mt-7 h-6">
              <Text className={`${theme.sectionBg} pl-3 text-sm font-medium`}>Items</Text>
            </Section>

            <Section>
              <Row>
                <Column className="w-16">
                  <div className={`h-16 w-16 rounded-lg ${theme.border} ${theme.sectionBg}`}></div>
                </Column>
                <Column className="pl-5">
                  <Text className={`text-sm font-semibold ${theme.text}`}>Product Name</Text>
                  <Text className={`text-sm ${theme.secondaryText}`}>Subscription (Monthly)</Text>
                  <Text className={`text-sm ${theme.secondaryText}`}>Renews Feb 13, 2025</Text>
                  <Link href="#" className={`text-sm ${theme.link}`}>
                    Write a Review
                  </Link>
                </Column>
                <Column className="table-cell w-[100px] pr-5 text-right">
                  <Text className={`text-sm font-semibold ${theme.text}`}>$14.99</Text>
                </Column>
              </Row>
            </Section>

            <Hr className={`mb-5 mt-8 ${theme.border}`} />

            <Section className="text-right">
              <Row>
                <Column className="table-cell text-right">
                  <Text className={`text-xs font-semibold ${theme.secondaryText}`}>TOTAL</Text>
                </Column>
                <Column className={`h-12 border-l ${theme.border}`}></Column>
                <Column className="table-cell w-[90px] pr-5 text-right">
                  <Text className={`text-lg font-semibold ${theme.text}`}>$14.99</Text>
                </Column>
              </Row>
            </Section>

            <Hr className={`mb-8 mt-0 ${theme.border}`} />

            <Text className={`text-center text-xs ${theme.secondaryText}`}>
              © 2025 Company Inc.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
