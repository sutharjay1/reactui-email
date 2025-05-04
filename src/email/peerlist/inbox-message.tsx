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

export default function PeerlistMessageEmail() {
  return (
    <Html>
      <Head />
      <Preview>Harshit sent you a message on Peerlist</Preview>
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
          <Container className="mx-auto my-[20px] max-w-[600px] px-4 py-8">
            <Section className="mb-8">
              <Img
                src="https://dqy38fnwh4fqs.cloudfront.net/UHDNK79BK6LA89DCMPRQGEGQOGGO/hdnk79bk6la89dcmprqgegqoggo-profile.webp"
                alt="Akash Bhadange"
                width="48"
                height="48"
                className="rounded-full"
              />
            </Section>

            <Section className="mb-6">
              <Text className="m-0 text-2xl font-bold text-primary">Akash Bhadange</Text>
              <Text className="m-0 text-base text-primary/80">sent you a message on Peerlist.</Text>
            </Section>

            <Section className="bg-brand mb-8 rounded-[4px]">
              <Text className="px-[24px] italic text-white dark:text-primary/80">
                Thanks for featuring Peerlist emails! 💚
              </Text>
            </Section>

            <Button
              className="bg-brand mt-4 flex w-fit items-center gap-2 rounded-[6px] px-[16px] py-[16px] font-semibold text-white"
              href="https://peerlist.io/scroll"
            >
              Go to Inbox →
            </Button>

            <Hr className="mb-[16px] mt-[32px] h-[1px] w-full border-muted-foreground" />

            <Section className="text-left">
              <Text className="text-sm text-primary/80">
                You can unsubscribe and manage email notifications from{" "}
                <Link href="https://peerlist.io/settings" className="text-green-600 underline">
                  your profile
                </Link>
                .
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
