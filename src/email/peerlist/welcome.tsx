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

export default function WelcomeEmail() {
  return (
    <Html>
      <Head />
      <Preview>Your Peerlist journey begins here!</Preview>

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
              <Text className="text-base">Hey there,</Text>
              <Text className="text-base">
                Your Peerlist profile is now complete, and you&apos;re all set to fully utilize the
                platform. Here&apos;s what you can do next:
              </Text>
            </Section>

            <Section className="mt-8">
              <Heading className="mb-4 text-xl font-bold">
                Discover and launch side-projects:
              </Heading>
              <Img
                src="http://cdn.mcauto-images-production.sendgrid.net/d60e16665ddff5a7/c8b3423e-a746-4651-924e-91b603d6b7e7/1200x630.png"
                width="600"
                alt="Project Spotlight"
                className="mb-4"
              />
              <Text>
                Project Spotlight is a weekly launchpad for side-projects. Find and explore great
                side projects every week. Launch window is open through Mondays, starting 12 am GMT.
              </Text>
              <Section className="flex justify-center">
                <Button
                  className="bg-brand mt-4 rounded-md px-6 py-4 font-semibold text-white"
                  href="https://peerlist.io/projects"
                >
                  Launch your side-project →
                </Button>
              </Section>
            </Section>

            <Section className="mt-8">
              <Heading className="mb-4 text-xl font-bold">Hire and get hired:</Heading>
              <Img
                src="http://cdn.mcauto-images-production.sendgrid.net/d60e16665ddff5a7/dbd58d7c-34f3-4987-9e83-ff0524b67dcb/1200x630.png"
                width="600"
                alt="Jobs Platform"
                className="mb-4"
              />
              <Text>
                Find hundreds of opportunities at the best tech startups and unicorns. Peerlist also
                has an incredible pool of candidates with proof-of-work so if you&apos;re hiring,
                post a job today!
              </Text>
              <Section className="flex justify-center">
                <Button
                  className="bg-brand mt-4 rounded-md px-6 py-3 font-medium text-white"
                  href="https://peerlist.io/jobs"
                >
                  Find Jobs →
                </Button>
              </Section>
            </Section>

            <Section className="mt-8">
              <Heading className="mb-4 text-xl font-bold">Find your tribe!</Heading>
              <Img
                src="http://cdn.mcauto-images-production.sendgrid.net/d60e16665ddff5a7/01bcfa0c-24f6-4ca8-bc75-5660ac19c3a8/1200x630.png"
                width="600"
                alt="Community"
                className="mb-4"
              />
              <Text>
                Share what you&apos;re working on, ask and answer questions, and connect with
                like-minded individuals to expand your network.
              </Text>
              <Section className="flex justify-center">
                <Button
                  className="bg-brand mt-4 rounded-md px-6 py-3 font-medium text-white"
                  href="https://peerlist.io/feed"
                >
                  Share your thoughts →
                </Button>
              </Section>
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
