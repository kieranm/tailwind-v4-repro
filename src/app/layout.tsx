"use server"

import { cn } from "@kieranm/cn"

// eslint-disable-next-line @typescript-eslint/require-await
export default async function RootLayout(props: {
  children: React.ReactElement
  params: { locale: string }
}) {
  const { children, params } = props

  return (
    <html lang={params.locale ?? "en"} suppressHydrationWarning>
      <body
        className={cn("bg-background", "text-text", "font-base", "neutral")}
      >
        <>{children}</>
      </body>
    </html>
  )
}
