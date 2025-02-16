import {
  Body,
  Container,
  Head,
  Heading,
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
      <Preview>Welcome to Supabase - Your open source Firebase alternative!</Preview>

      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
                brand: "#34B27B",
                muted: "#4B5563",
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
          <Container className="mx-auto my-[20px] px-4 py-5">
            <Section className="mt-2">
              <Link href="https://supabase.com">
                <Img
                  src="https://res.cloudinary.com/sutharjay/image/upload/v1739700369/me/projects/reactui-email/logo/supabase.svg"
                  width="32"
                  height="32"
                  alt="Supabase Logo"
                />
              </Link>
            </Section>
            <Section className="mt-8">
              <Text className="text-base">Hey there,</Text>
              <Text className="text-base">
                Welcome to Supabase, the open source Firebase alternative.
              </Text>
              <Text className="text-base">
                Supabase gives you all the backend features you need to build a product: Database,
                Authentication, Storage, Realtime API, Edge Functions, Serverless APIs, and more.
              </Text>
            </Section>

            <Section className="mt-2">
              <Heading className="mb-2 text-xl font-bold">Here are some useful resources:</Heading>

              <ul className="list-disc pl-6">
                <li className="text-[14px] leading-6 text-primary/80">
                  <Link href="https://supabase.com/docs" className="text-brand">
                    Read our docs
                  </Link>
                </li>
                <li className="text-[14px] leading-6 text-primary/80">
                  <Link
                    href="https://github.com/supabase/supabase/tree/master/examples"
                    className="text-brand"
                  >
                    Check out some examples
                  </Link>
                </li>
                <li className="text-[14px] leading-6 text-primary/80">
                  Have a question? Want to meet the community?{" "}
                  <Link href="https://discord.supabase.com" className="text-brand">
                    Hop into our Discord
                  </Link>
                </li>
                <li className="text-[14px] leading-6 text-primary/80">
                  Ready to build?{" "}
                  <Link href="https://app.supabase.com" className="text-brand">
                    Start by creating a new organization
                  </Link>
                </li>
              </ul>
            </Section>

            <Section className="mt-8">
              <Text className="m-0 p-0 text-base">
                Feel free to reach out if you have any questions or feedback.
              </Text>

              <Text className="m-0 p-0 font-bold">Paul, CEO and Co-Founder @ Supabase</Text>
              <Text className="text-[0.75rem]">
                Supabase lnc, 3500 S. DuPont Highway, Kent 19901, Dover, Delaware, USA
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
