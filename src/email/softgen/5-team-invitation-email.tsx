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

interface SoftgenTeamInvitationEmailProps {
  inviteeEmail?: string;
  inviterEmail?: string;
  projectName?: string;
}

export default function SoftgenTeamInvitationEmail({
  inviterEmail = "inviter@example.com",
  projectName = "My Awesome Project",
}: SoftgenTeamInvitationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Invitation to Collaborate on Softgen Project</Preview>
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
        <Body className="font-sans">
          <Container className="mx-auto px-4 py-5">
            <Section className="mt-8">
              <Link href="https://softgen.ai">
                <Img
                  src="https://res.cloudinary.com/sutharjay/image/upload/v1740686249/me/projects/reactui-email/logo/softgen-light.svg"
                  width="50"
                  height="50"
                  alt="Softgen Logo Light"
                  className="hidden dark:block"
                />
                <Img
                  src="https://res.cloudinary.com/sutharjay/image/upload/v1740686249/me/projects/reactui-email/logo/softgen-dark.svg"
                  width="50"
                  height="50"
                  alt="Softgen Logo Dark"
                  className="block dark:hidden"
                />
              </Link>
            </Section>

            <Section className="mt-8">
              <Text className="text-xl font-bold leading-tight">Project Invitation</Text>
            </Section>

            <Section className="mt-2">
              <Text className="text-base">Hello,</Text>
              <Text className="text-base">
                <span className="font-bold">{inviterEmail}</span> has invited you to collaborate on
                the project <span className="font-bold">{projectName}</span> on Softgen.
              </Text>
            </Section>

            <Section className="mt-4 text-center">
              <table
                style={{
                  border: "1px solid rgb(39 39 42 / 0.2)",
                  borderRadius: "8px",
                  borderCollapse: "collapse",
                  display: "flex",
                  justifyContent: "center",
                  width: "fit-content",
                  alignItems: "center",
                }}
              >
                <tr>
                  <td>
                    <Button
                      className="mx-auto flex w-fit items-center justify-center rounded-[8px] bg-white px-[24px] py-[12px] text-center text-[14px] font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-white"
                      href="https://softgen.ai/dashboard"
                    >
                      Access Project →
                    </Button>
                  </td>
                </tr>
              </table>
            </Section>

            <Section className="mt-4">
              <Text className="text-base">
                New to Softgen?{" "}
                <Link href="https://softgen.ai" className="text-primary underline">
                  Register here
                </Link>{" "}
                to get started.
              </Text>
              <Text className="mt-2 text-base">
                Once signed up, come back to this email and click on the{" "}
                <span className="font-semibold">Access Project</span> button below to join the
                collaboration.
              </Text>
            </Section>

            <Hr className="mb-6 mt-8 border-gray-200" />

            <Section className="text-left text-sm text-primary/80">
              <Text className="m-0 p-0 font-medium">From,</Text>
              <Text className="m-0 p-0 font-bold">Team Softgen</Text>
              <Text className="m-0 p-0">Softgen – a Kortix AI Corp Product</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
