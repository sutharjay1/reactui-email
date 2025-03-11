import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function MynaUIVerifyEmail() {
  return (
    <Html>
      <Head />
      <Preview>Myna UI - Verify Email</Preview>
      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
                brand: "#155dfc",

                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                  DEFAULT: "#314158",
                  foreground: "hsl(var(--primary-foreground))",
                },
                accent: {
                  DEFAULT: "#314158",
                  foreground: "hsl(var(--accent-foreground))",
                },
                muted: {
                  DEFAULT: "hsl(var(--muted))",
                  foreground: "hsl(var(--muted-foreground))",
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
                text: {
                  light: "#314158",
                  dark: "#f1f5f9",
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
          <Container className="mx-auto mb-5 px-4 py-5">
            <Section className="my-8">
              <Link href="https://mynaui.com">
                <svg
                  width="120"
                  height="25"
                  className="w-50 h-auto scale-150"
                  viewBox="0 0 86 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.7671 0.577545C3.68318 0.577545 1.99384 2.2669 1.99384 4.35081V8.05376L4.63396 5.58582C6.70223 3.65245 10.0555 3.65245 12.1238 5.58582L16.08 9.28408C16.194 9.3906 16.194 9.57134 16.08 9.67787L7.79508 17.4224H15.0655C17.1494 17.4224 18.8388 15.7331 18.8388 13.6492V4.35081C18.8388 2.26689 17.1494 0.577545 15.0655 0.577545H5.7671Z"
                    fill="#020618"
                  />
                  <path d="M83.8134 2.38235V15.0161H81.1501V2.38235H83.8134Z" fill="#020618" />
                  <path
                    d="M79.547 10.4398C79.547 11.3975 79.3367 12.2384 78.9162 12.9625C78.5075 13.6866 77.9118 14.2414 77.1293 14.6268C76.3585 15.0122 75.4592 15.2049 74.4314 15.2049C73.3803 15.2049 72.4694 15.0122 71.6985 14.6268C70.9277 14.2414 70.3321 13.6866 69.9116 12.9625C69.5029 12.2384 69.2985 11.3975 69.2985 10.4398V2.46884H71.9613V10.4398C71.9613 11.2574 72.1715 11.8822 72.592 12.3144C73.0241 12.7465 73.6373 12.9625 74.4314 12.9625C75.2022 12.9625 75.8038 12.7465 76.2359 12.3144C76.668 11.8822 76.8841 11.2574 76.8841 10.4398V2.46884H79.547V10.4398Z"
                    fill="#020618"
                  />
                  <path
                    d="M67.5782 14.9248H65.038L64.9854 13.5758C64.7285 14.078 64.3606 14.4635 63.8817 14.7321C63.4028 15.0007 62.8364 15.135 62.1824 15.135C61.3415 15.135 60.6232 14.9248 60.0276 14.5043C59.4437 14.0838 58.9999 13.5116 58.6962 12.7875C58.4042 12.0517 58.2582 11.2166 58.2582 10.2823C58.2582 9.34796 58.4042 8.51874 58.6962 7.79465C58.9999 7.05886 59.4437 6.48074 60.0276 6.0603C60.6232 5.63985 61.3415 5.42963 62.1824 5.42963C62.8014 5.42963 63.3445 5.55809 63.8117 5.81503C64.2788 6.07197 64.6525 6.44571 64.9328 6.93623V5.63985H67.5782V14.9248ZM60.9561 10.2823C60.9561 11.0999 61.1313 11.7831 61.4817 12.332C61.8437 12.8693 62.3517 13.1379 63.0058 13.1379C63.4613 13.1379 63.8408 13.0094 64.1445 12.7524C64.4598 12.4955 64.6934 12.151 64.8452 11.7188C65.0088 11.275 65.0905 10.7962 65.0905 10.2823C65.0905 9.74503 65.0088 9.26042 64.8452 8.82826C64.6934 8.38447 64.4598 8.03407 64.1445 7.77713C63.8408 7.52019 63.4613 7.39172 63.0058 7.39172C62.3284 7.39172 61.8145 7.66618 61.4642 8.21511C61.1254 8.75233 60.9561 9.4414 60.9561 10.2823Z"
                    fill="#020618"
                  />
                  <path
                    d="M51.2905 5.63985L51.3955 8.35526L51.0627 8.25013C51.1911 7.25741 51.5241 6.53914 52.0613 6.09533C52.6102 5.65153 53.2993 5.42963 54.1285 5.42963C55.1329 5.42963 55.9154 5.74496 56.476 6.37563C57.0366 7.0063 57.3169 7.86472 57.3169 8.9509V14.9248H54.6891V9.82685C54.6891 9.03264 54.584 8.4487 54.3737 8.07495C54.1635 7.70122 53.7898 7.51435 53.2525 7.51435C52.7036 7.51435 52.2832 7.71289 51.9912 8.10999C51.6992 8.50704 51.5533 9.07936 51.5533 9.82685V14.9248H48.9254V5.63985H51.2905Z"
                    fill="#020618"
                  />
                  <path
                    d="M41.0615 5.6398L43.374 12.1743L45.6164 5.6398H48.1041L44.4601 15.8182C44.2382 16.4138 43.917 16.8518 43.4966 17.1321C43.0879 17.4124 42.5448 17.5525 41.8674 17.5525H40.2031V15.643H41.3768C41.6571 15.643 41.8732 15.5963 42.0251 15.5028C42.1885 15.4094 42.317 15.2459 42.4104 15.0123L42.6382 14.4517H41.9024L38.5563 5.6398H41.0615Z"
                    fill="#020618"
                  />
                  <path
                    d="M27.7133 2.38235L30.8842 11.5818L34.02 2.38235H37.5939V15.0161H34.9135V6.75966L32.0054 14.9805H29.728L26.8199 6.75966V15.0161H24.157V2.38235H27.7133Z"
                    fill="#020618"
                  />
                </svg>
              </Link>
            </Section>

            <Section className="mb-6 flex flex-col items-center justify-center rounded-[12px] bg-[hsl(240,4.8%,95.9%)]/50">
              <table
                style={{
                  border: "1px solid rgb(39 39 42 / 0.1)",
                  borderRadius: "8px",
                  borderCollapse: "collapse",
                  display: "flex",
                  justifyContent: "center",
                  width: "fit-content",
                  alignItems: "center",
                  padding: "24px",
                }}
              >
                <tr>
                  <td>
                    <Section>
                      <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                        <tr className="align-start flex items-center justify-start gap-[16px]">
                          <td className="h-[40px] w-[40px] rounded-[8px]">
                            <Section
                              className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px]"
                              style={{
                                backgroundColor: "hsl(213.8 100% 96.9%)",
                                borderRadius: "8px",
                                border: "1px solid hsl(214.3 94.6% 92.7%)",
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                stroke="hsl(221.2 83.2% 53.3%)"
                                strokeWidth="2"
                                className="text-[hsl(221.2 83.2% 53.3%)]"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8" />
                                <path d="m8.667 12.633 1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3" />
                              </svg>
                            </Section>
                          </td>

                          <td className="text-left">
                            <Text className="text-text-light dark:text-text-dark m-0 p-0 text-lg font-bold leading-tight">
                              Let&apos;s Verify!
                            </Text>
                          </td>
                        </tr>
                      </table>
                    </Section>

                    <Section>
                      <Text className="text-text-light dark:text-text-dark m-0 mt-6 p-0 text-base">
                        Your journey to effective and enjoyable bookmarking begins with a single
                        click. To ensure the security and privacy of your account, please verify
                        your email address.
                      </Text>
                    </Section>

                    <Section className="mt-4 text-center">
                      <table
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "fit-content",
                          alignItems: "center",
                        }}
                      >
                        <tr>
                          <td>
                            <Button
                              className="bg-brand mx-auto flex w-fit items-center justify-center rounded-[8px] px-[20px] py-[10px] text-center text-[14px] font-semibold text-muted"
                              href="https://mynaui.com"
                            >
                              <Row className="m-0 p-0">
                                <Column className="text-white">Click Here to Verify</Column>
                                <Column>
                                  <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    className="ml-[8px] text-white"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M4.5 12h15m0 0-5.625-6m5.625 6-5.625 6" />
                                  </svg>
                                </Column>
                              </Row>
                            </Button>
                          </td>
                        </tr>
                      </table>
                    </Section>

                    <Section>
                      <Text className="text-text-light dark:text-text-dark m-0 mt-4 p-0 text-base">
                        This link will expire in 24 hours for your protection. If you didn&apos;t
                        sign up for MynaUI, please ignore this email.
                      </Text>
                    </Section>

                    <Section className="mt-4">
                      <Text className="text-text-light dark:text-text-dark m-0 p-0 text-base">
                        Thank you for choosing MynaUI. Let&apos;s make your web experience better,
                        together.
                      </Text>
                      <Text className="text-text-light dark:text-text-dark m-0 mt-4 p-0 text-base">
                        Cheers
                      </Text>
                      <Text className="text-text-light dark:text-text-dark m-0 p-0 text-base">
                        The MynaUI Team
                      </Text>
                    </Section>
                  </td>
                </tr>
              </table>
            </Section>

            <Section className="text-text-light dark:text-text-dark mb-4 text-left text-sm">
              <Text className="m-0 p-0 text-base">
                Made with ❤️‍🔥 on 32, Park Street, Chennai by{" "}
                <Link
                  href="https://mynaui.com"
                  className="text-text-light dark:text-text-dark underline underline-offset-2"
                >
                  MynaUI
                </Link>
              </Text>
              <Text className="m-0 p-0 text-base">
                Too many emails?{" "}
                <Link
                  href="https://mynaui.com"
                  className="text-text-light dark:text-text-dark underline underline-offset-2"
                >
                  Unsubscribe
                </Link>
              </Text>
              <Section className="mt-4 text-left text-sm text-zinc-900">
                <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                  <tr>
                    <td>
                      <table cellPadding="0" cellSpacing="0">
                        <tr>
                          <td style={{ paddingRight: "16px" }}>
                            <Link href="https://x.com/praveenjuge/">
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-zinc-900"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m19 4-5.93 6.93M5 20l5.93-6.93m0 0 5.795 6.587c.19.216.483.343.794.343h1.474c.836 0 1.307-.85.793-1.435L13.07 10.93m-2.14 2.14L4.214 5.435C3.7 4.85 4.17 4 5.007 4h1.474c.31 0 .604.127.794.343l5.795 6.587" />
                              </svg>
                            </Link>
                          </td>
                          <td style={{ paddingRight: "16px" }}>
                            <Link href="https://www.instagram.com/praveenjuge/">
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-zinc-900"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm14-2.9h.5" />
                                <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026" />
                              </svg>
                            </Link>
                          </td>
                          <td style={{ paddingRight: "16px" }}>
                            <Link href="https://www.threads.net/@praveenjuge">
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-zinc-900"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.77 8.515c2.23-1.812 5.444-.845 5.823 2.135.403 3.163-.4 5.67-3.52 5.67-2.895 0-2.806-2.52-2.806-2.52 0-2.7 4.589-3.06 7.262-1.71 4.9 3.15 1.336 8.91-4.01 8.91C8.09 21 4.5 18.75 4.5 12s3.59-9 8.02-9c3.125 0 5.944 1.626 6.98 4.879" />
                              </svg>
                            </Link>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
