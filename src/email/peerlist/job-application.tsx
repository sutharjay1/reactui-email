import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function PeerlistJobApplication() {
  return (
    <Html>
      <Head />
      <Preview>✅ You applied for a job at ReactUI Email</Preview>

      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
                brand: "#212121",
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
          <Container className="mx-auto px-4 py-5">
            <Section className="mt-8">
              <Link href="https://peerlist.io">
                <Img
                  src="http://cdn.mcauto-images-production.sendgrid.net/d60e16665ddff5a7/3f676a00-5763-44d7-a004-4323eabb2ff9/2180x560.png"
                  width="124"
                  height="32"
                  alt="Peerlist Logo"
                />
              </Link>
            </Section>

            <Section className="mt-8">
              <Text className="text-xl font-bold leading-tight">
                Peerlist received your application!
              </Text>
            </Section>

            <Section className="mt-2">
              <Text className="text-base">Hey Jay 👋,</Text>
              <Text className="text-base">
                You have successfully applied for the{" "}
                <span className="text-base font-bold">Full Stack Intern</span> role at{" "}
                <span className="text-base font-bold">Peerlist</span>. Someone from the recruitment
                team will get back to you shortly with an update to your application.
              </Text>
            </Section>

            <Section>
              <Text className="text-base">We wish you all the best with your job hunting! 💚</Text>
            </Section>

            <Section className="flex justify-center">
              <Button
                className="bg-brand mt-4 flex items-center gap-2 rounded-md px-6 py-4 font-semibold text-white"
                href="https://peerlist.io"
              >
                Explore more jobs →
              </Button>
            </Section>

            <Hr className="mb-6 mt-8 border-gray-200" />

            <Section className="text-left text-sm text-muted">
              <Text className="m-0 p-0 font-medium">From,</Text>
              <Text className="m-0 p-0 font-bold">Team Peerlist</Text>
              <Text className="m-0 p-0">
                Peerlist Inc. 447 Broadway, 2nd Floor Suite #385, New York, NY 10013
              </Text>

              <Text>
                <Link href="https://pl.st/android" className="hover:text-brand text-muted">
                  Android App ↗
                </Link>{" "}
                {" • "}{" "}
                <Link href="https://pl.st/ios" className="hover:text-brand text-muted">
                  iOS App ↗
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
