"use client"

import { cn } from "@kieranm/cn"
import { Button } from "@kieranm/components"
import "../styles/main.css"

export default async function Page() {
  return (
    <div
      className={cn(
        "w-full h-full",
        "flex flex-col items-center justify-center",
      )}
    >
      <div className={cn("w-80", "flex flex-col items-center justify-center")}>
        <h1 className={cn("mb-2", "text-heading text-test")}>Welcome</h1>
        <p className={cn("text-body text-text", "text-center")}>
          Choose a sign-in method to continue
        </p>
        <div
          className={cn(
            "w-80",
            "mt-8",
            "space-y-4",
            "flex flex-col items-center justify-center",
          )}
        >
          <Button variant="outline" className={cn("w-full", "justify-center")}>
            Sign in with Google
          </Button>
          <Button variant="outline" className={cn("w-full", "justify-center")}>
            Sign in with Apple
          </Button>
          <Button variant="outline" className={cn("w-full", "justify-center")}>
            Sign in with Email
          </Button>
        </div>
      </div>
    </div>
  )
}
