import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function DubUpdatesEmail() {
  return (
    <Html>
      <Head />
      <Preview>New landing page, Analytics dashboard sharing, Regions analytics support</Preview>
      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
                brand: "#0a0a0a",
                muted: "#fafafa",
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
        <Body className="font-brand font-sans">
          <Container className="mx-auto my-[20px] px-4 py-5">
            <Section className="mt-2 flex w-full flex-col items-center justify-center">
              <Img
                src="https://res.cloudinary.com/sutharjay/image/upload/v1739369064/me/projects/reactui-email/dub-co.png"
                width="50"
                height="50"
                alt="Framer"
                className="mx-0 my-0 rounded-[8px]"
              />
            </Section>
            <Section className="mt-4">
              <Heading className="mx-0 mb-8 mt-2 p-0 text-lg font-normal"></Heading>
              <Text className="text-center text-[32px] font-bold leading-[2rem] text-primary">
                Dub November Product Update
              </Text>
            </Section>
            <Section className="mt-8">
              <Link href="https://ship.dub.co/home">
                <Img
                  src="https://resend-attachments.s3.amazonaws.com/r2ITq7acRxiEkBn"
                  alt="New Landing Page"
                  className="w-full cursor-pointer rounded-[8px]"
                />
              </Link>
            </Section>
            <Section className="mt-4">
              <Heading className="text-[24px] font-semibold">New landing page</Heading>

              <Text className="text-[16px] leading-6 text-primary/80">
                After almost a year, we just shipped a fresh coat of paint to{" "}
                <Link href="https://ship.dub.co/home" className="text-blue-500">
                  dub.co
                </Link>
                .
              </Text>

              <Text className="text-[16px] leading-6 text-primary/80">We did it to:</Text>

              <ul className="list-disc pl-6">
                <li className="text-[14px] leading-6 text-primary/80">
                  <strong>Highlight the scale of our link infrastructure</strong> – we&apos;ve gone
                  from serving 2M clicks/mo → 20M clicks/mo this year
                </li>
                <li className="text-[14px] leading-6 text-primary/80">
                  <strong>Feature some of our new customers</strong> – we&apos;ve been fortunate to
                  power short links for amazing companies like Viator, Product Hunt, Whop, Metabase
                  and many more.
                </li>
                <li className="text-[14px] leading-6 text-primary/80">
                  <strong>Give a sneak peek of future features</strong> – We&apos;ve also snuck in
                  some subtle hints of features that are coming to Dub soon – notably{" "}
                  <Link href="https://ship.dub.co/conversions" className="text-blue-500">
                    Dub Conversions
                  </Link>
                  . Stay tuned!
                </li>
                <li className="text-[14px] leading-6 text-primary/80">
                  <strong>Highlight SOC2 status</strong> – We&apos;ve also made a small update to
                  our footer to highlight our{" "}
                  <Link href="https://ship.dub.co/soc2" className="text-blue-500">
                    SOC 2 Type II compliance status
                  </Link>{" "}
                  – along with a few other style changes.
                </li>
              </ul>

              <Section className="mt-4 text-center">
                <table
                  style={{
                    border: "1px solid rgb(39 39 42 / 0.2)",
                    borderRadius: "8px",
                    borderCollapse: "collapse",
                    display: "flex",
                    justifyContent: "center",
                    width: "fit-content",
                    margin: "0 auto",
                    alignItems: "center",
                  }}
                >
                  <tr>
                    <td>
                      <Button
                        className="mx-auto flex w-fit items-center justify-center rounded-[8px] bg-white px-[24px] py-[12px] text-center text-[14px] font-semibold text-zinc-900"
                        href="https://ship.dub.co/home"
                      >
                        Check out our new homepage
                      </Button>
                    </td>
                  </tr>
                </table>
              </Section>
            </Section>

            <Hr className="my-[32px] h-[1px] w-full border-muted-foreground" />

            <Section>
              <Link href="https://ship.dub.co/dashboard-sharing">
                <Img
                  src="https://resend-attachments.s3.amazonaws.com/Cfmu2QLisOHVh1U"
                  alt="Public Analytics Dashboards"
                  className="w-full cursor-pointer rounded-[8px]"
                />
              </Link>

              <Heading className="mt-4 text-[20px] font-semibold">
                Public analytics dashboards
              </Heading>

              <Text className="text-[16px] leading-6 text-primary/80">
                You can now create public analytics dashboards for your Dub short links.
              </Text>

              <Text className="text-[16px] leading-6 text-primary/80">
                This allows you to share the analytics for a given short link with clients or other
                external stakeholders without having to invite them to your Dub workspace.
              </Text>

              <Section className="mt-4 text-center">
                <table
                  style={{
                    border: "1px solid rgb(39 39 42 / 0.2)",
                    borderRadius: "8px",
                    borderCollapse: "collapse",
                    display: "flex",
                    justifyContent: "center",
                    width: "fit-content",
                    margin: "0 auto",
                    alignItems: "center",
                  }}
                >
                  <tr>
                    <td>
                      <Button
                        className="mx-auto flex w-fit items-center justify-center rounded-[8px] bg-white px-[24px] py-[12px] text-center text-[14px] font-semibold text-zinc-900"
                        href="https://ship.dub.co/dashboard-sharing"
                      >
                        Read the changelog
                      </Button>
                    </td>
                  </tr>
                </table>
              </Section>
            </Section>

            <Hr className="my-[32px] h-[1px] w-full border-muted-foreground" />

            <Section>
              <Link href="https://ship.dub.co/custom-qr-logo">
                <Img
                  src="https://resend-attachments.s3.amazonaws.com/xqA8pP9aYOcAFqU"
                  alt="Custom QR Code Logos"
                  className="w-full cursor-pointer rounded-[8px]"
                />
              </Link>

              <Heading className="mt-4 text-[20px] font-semibold">
                Set custom QR code logos for your domains
              </Heading>

              <Text className="text-[16px] leading-6 text-primary/80">
                You can now customize your Dub QR code logos on a per-domain basis.
              </Text>

              <Text className="text-[16px] leading-6 text-primary/80">
                This lets you create more personalized QR codes for each of the brands/products that
                you manage on Dub.
              </Text>

              <Section className="mt-4 text-center">
                <table
                  style={{
                    border: "1px solid rgb(39 39 42 / 0.2)",
                    borderRadius: "8px",
                    borderCollapse: "collapse",
                    display: "flex",
                    justifyContent: "center",
                    width: "fit-content",
                    margin: "0 auto",
                    alignItems: "center",
                  }}
                >
                  <tr>
                    <td>
                      <Button
                        className="mx-auto flex w-fit items-center justify-center rounded-[8px] bg-white px-[24px] py-[12px] text-center text-[14px] font-semibold text-zinc-900"
                        href="https://ship.dub.co/custom-qr-logo"
                      >
                        Read the changelog
                      </Button>
                    </td>
                  </tr>
                </table>
              </Section>
            </Section>

            <Hr className="my-[32px] h-[1px] w-full border-muted-foreground" />

            <Section>
              <Link href="https://ship.dub.co/regions">
                <Img
                  src="https://resend-attachments.s3.amazonaws.com/x4tGdEHqZkTfKBd"
                  alt="Regions Analytics Support"
                  className="w-full cursor-pointer rounded-[8px]"
                />
              </Link>

              <Heading className="mt-4 text-[20px] font-semibold">
                Regions support in analytics
              </Heading>

              <Text className="text-[16px] leading-6 text-primary/80">
                You can now filter your Dub analytics by regions. This is a great way to see which
                regions within a country are driving the most traffic to your links.
              </Text>

              <Text className="text-[16px] leading-6 text-primary/80">
                You can also filter by regions when you export your analytics data.
              </Text>

              <Section className="mt-4 text-center">
                <table
                  style={{
                    border: "1px solid rgb(39 39 42 / 0.2)",
                    borderRadius: "8px",
                    borderCollapse: "collapse",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "fit-content",
                    margin: "0 auto",
                  }}
                >
                  <tr>
                    <td>
                      <Button
                        className="mx-auto flex w-fit items-center justify-center rounded-[8px] bg-white px-[24px] py-[12px] text-center text-[14px] font-semibold text-zinc-900"
                        href="https://ship.dub.co/home"
                      >
                        Read the changelog
                      </Button>
                    </td>
                  </tr>
                </table>
              </Section>
            </Section>

            <Hr className="my-[32px] h-[1px] w-full border-muted-foreground" />

            <Section>
              <Text className="text-[16px] leading-6 text-primary/80">
                Last but not least, if you&apos;ve enjoyed using Dub so far, we&apos;d{" "}
                <Link href="https://ship.dub.co/g2" className="text-blue-500">
                  really appreciate a review on G2
                </Link>{" "}
                – thank you!
              </Text>

              <Text className="mt-4 text-[14px] leading-6 text-primary/80">
                Sincerely, <br /> Steven from Dub
              </Text>
            </Section>

            <Hr className="mx-0 my-[14px] h-[1px] w-full border border-solid border-muted-foreground" />
            <Section>
              <Text className="text-[14px] leading-6 text-primary/80">
                © 2023 Dub.sh{" "}
                <Link href="https://dub.sh/unsubscribe" className="text-primary/60 underline">
                  Unsubscribe
                </Link>
              </Text>
              <Text className="text-[14px] leading-6 text-primary/80">
                {
                  "If you have any feedback or questions about this email, simply reply to it. I'd love to hear from you!"
                }
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
