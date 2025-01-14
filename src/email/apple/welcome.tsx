import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function AppleWelcomeTemplate() {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Apple</Preview>
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
        <Body className="font-sans">
          <Container className="mx-auto w-full max-w-full px-8 py-12">
            <Section>
              <Row>
                <Column>
                  <Img
                    src="https://cdn.brandfetch.io/idnrCPuv87/theme/light/logo.svg?c=1bfwsmEH20zzEfSNTed"
                    width="42"
                    height="42"
                    alt="Apple"
                    className="my-4 dark:invert"
                  />
                </Column>
              </Row>
            </Section>

            <Section className="mt-8">
              <Text className="text-3xl font-light text-foreground dark:text-zinc-100">
                Welcome to Apple
              </Text>
              <Text className="mt-4 text-base leading-6 text-muted-foreground dark:text-zinc-300">
                Thank you for creating an Apple ID. Your account gives you access to all of
                Apple&#39;s services, including the App Store, Apple Music, iCloud, and more.
              </Text>
            </Section>

            <Section className="mt-8">
              <Text className="text-xl font-light text-foreground dark:text-zinc-100">
                Get started with your Apple ID
              </Text>

              <div className="mt-6 space-y-4">
                <Row>
                  <Column className="rounded-lg bg-muted p-4 dark:bg-zinc-800">
                    <Text className="text-base font-medium text-foreground dark:text-zinc-100">
                      🔒 Secure your account
                    </Text>
                    <Text className="text-sm text-muted-foreground dark:text-zinc-300">
                      Enable two-factor authentication to add an extra layer of security to your
                      Apple ID.
                    </Text>
                    <Link
                      href="#"
                      className="mt-2 text-sm text-primary hover:underline dark:text-blue-400"
                    >
                      Set up now →
                    </Link>
                  </Column>
                </Row>

                <Row>
                  <Column className="rounded-lg bg-muted p-4 dark:bg-zinc-800">
                    <Text className="text-base font-medium text-foreground dark:text-zinc-100">
                      ☁️ Set up iCloud
                    </Text>
                    <Text className="text-sm text-muted-foreground dark:text-zinc-300">
                      Keep your photos, files, and more synced across all your devices with iCloud.
                    </Text>
                    <Link
                      href="#"
                      className="mt-2 text-sm text-primary hover:underline dark:text-blue-400"
                    >
                      Get started →
                    </Link>
                  </Column>
                </Row>

                <Row>
                  <Column className="rounded-lg bg-muted p-4 dark:bg-zinc-800">
                    <Text className="text-base font-medium text-foreground dark:text-zinc-100">
                      🎵 Try Apple Music
                    </Text>
                    <Text className="text-sm text-muted-foreground dark:text-zinc-300">
                      Get 6 months of Apple Music free with your new Apple ID.
                    </Text>
                    <Link
                      href="#"
                      className="mt-2 text-sm text-primary hover:underline dark:text-blue-400"
                    >
                      Activate offer →
                    </Link>
                  </Column>
                </Row>
              </div>
            </Section>

            <Section className="mt-8">
              <Text className="text-base text-muted-foreground dark:text-zinc-300">
                For your security, we recommend using a strong password and enabling two-factor
                authentication. If you need help, visit{" "}
                <Link
                  href="https://support.apple.com"
                  className="text-primary hover:underline dark:text-blue-400"
                >
                  Apple Support
                </Link>
                .
              </Text>
            </Section>

            <Section className="mt-12 border-t border-border pt-8 dark:border-zinc-700">
              <Text className="text-xs text-muted-foreground dark:text-zinc-400">
                This email was sent to you because you created an Apple ID. If you have questions,
                please visit our{" "}
                <Link href="#" className="text-primary hover:underline dark:text-blue-400">
                  Privacy Policy
                </Link>{" "}
                or{" "}
                <Link href="#" className="text-primary hover:underline dark:text-blue-400">
                  contact us
                </Link>
                .
              </Text>
              <Text className="mt-4 text-xs text-muted-foreground dark:text-zinc-400">
                Copyright © 2025 Apple Inc. All rights reserved. Apple Inc., One Apple Park Way,
                Cupertino, CA 95014, United States
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
