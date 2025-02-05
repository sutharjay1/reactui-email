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

export default function NotionTeamspacesEmail() {
  return (
    <Html>
      <Head />
      <Preview>Introducing Notion Teamspaces - Organize your workspace better</Preview>
      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
                brand: "#000000",
                muted: "#ffffff",
                base: "#5a96c3",
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
          <Container className="mx-auto px-4 py-[20px]">
            <Section className="mt-[32px]">
              <Img
                src="https://res.cloudinary.com/sutharjay/image/upload/v1738771211/me/notion-light.svg"
                width="45"
                height="45"
                alt="Notion Logo"
                className="mb-2"
              />
            </Section>

            <Section className="mb-[20px]">
              <Text className="text-base text-primary/80">Hi Kevin,</Text>
              <Text className="text-base text-primary/80">
                {"Cluttered sidebar with pages that don't apply to everyone?"}
              </Text>
              <Text className="text-base text-primary/80">
                {
                  "Now folks can join the teamspaces that interest them, and skip the ones that don't."
                }
                {
                  "In other words, your colleagues can tailor Notion to only show the teams and projects that reflect their priorities."
                }
              </Text>
              <Section className="mx-auto my-[2px] flex w-full items-center justify-center">
                <Button
                  className="bg-base rounded-[4px] px-[18px] py-[8px] text-center text-[14px] font-semibold text-zinc-50"
                  href="https://notion.so/teamspaces"
                >
                  Learn about teamspaces
                </Button>
              </Section>
            </Section>

            <Img
              src="https://res.cloudinary.com/sutharjay/image/upload/v1738772914/me/notion/cj0s7gerhzt8yy45x3cc.png"
              alt="Teamspaces"
              className="w-full cursor-pointer rounded-[8px] shadow-xl"
            />

            <Hr className="mb-[20px] mt-[32px] border-gray-200" />

            <Section className="mb-[32px]">
              <Heading className="mb-4 text-xl font-bold text-primary">How does it work?</Heading>
              <ul className="list-disc pl-6 text-base text-primary/80">
                <li className="mb-3">
                  Customize the level of view or edit access to teamspace content for owners,
                  members, and everyone else in your workspace.
                </li>
                <li className="mb-3">
                  Choose between Open or Closed privacy settings to determine whether people can add
                  themselves to teamspaces, or if access should be more controlled.
                </li>
                <li className="mb-3">
                  Enterprise Plan workspaces gain even more security and permission controls, and
                  Private teamspaces that only specific members can see.
                </li>
              </ul>
            </Section>

            <Img
              src="https://res.cloudinary.com/sutharjay/image/upload/v1738773066/me/notion/qyteyymlartgjwblfjva.png"
              alt="Teamspaces"
              className="w-full cursor-pointer rounded-[8px] shadow-xl"
            />

            <Hr className="mb-[20px] mt-[32px] border-gray-200" />

            <Section className="mb-[20px]">
              <Heading className="mb-4 text-xl font-bold text-primary">
                How do I get started?
              </Heading>
              <ul className="list-disc pl-6 text-base text-primary/80">
                <li className="mb-3">
                  All the content from your Workspace section is in a new teamspace called General.
                  This is your company-wide teamspace.
                </li>
                <li className="mb-3">
                  See the All teamspaces button at the top of your sidebar? Click the + button to
                  the right to create a new teamspace from scratch.
                </li>
                <li className="mb-3">
                  {
                    "Have an existing page that you'd like to turn into a teamspace? Click the ••• to the right of its name in the sidebar, then Turn into teamspace."
                  }
                </li>
              </ul>
            </Section>

            <Img
              src="https://res.cloudinary.com/sutharjay/image/upload/v1738773066/me/notion/qyteyymlartgjwblfjva.png"
              alt="Teamspaces"
              className="w-full cursor-pointer rounded-[8px] shadow-xl"
            />

            <Hr className="mb-[20px] mt-[32px] border-gray-200" />

            <Section className="mb-[16px]">
              <Text className="text-base text-primary/80">
                {
                  "Whether you're on a team of five or 5,000, teamspaces make sure that every project, working group and department have their own dedicated area of Notion. We hope this makes your workspace feel a bit cozier — a place for you and your colleagues to do your best work, together."
                }
              </Text>
            </Section>

            <Section>
              <Text className="mb-4 text-base text-primary/80">
                Warmest regards,
                <br />
                The Notion team
              </Text>
              <Text className="text-sm text-primary/80">
                P.S. More of a visual learner?{" "}
                <Link href="https://www.youtube.com" className="text-base">
                  Watch the YouTube video here
                </Link>
                .
              </Text>
            </Section>

            <Section className="mb-[32px]">
              <Img
                src="https://res.cloudinary.com/sutharjay/image/upload/v1738771211/me/notion-light.svg"
                width="32"
                height="32"
                alt="Notion Logo"
                className="mb-2"
              />
              <Text className="text-sm font-medium text-primary">Notion – the all-in-one</Text>
              <Text className="text-sm text-primary/80">
                workspace for your notes, tasks,
                <br />
                wikis, and databases.
              </Text>
              <div className="mt-4">
                <Link href="https://notion.so/unsubscribe" className="text-sm">
                  Unsubscribe
                </Link>{" "}
                <Link href="https://notion.so" className="text-sm">
                  View in browser
                </Link>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
