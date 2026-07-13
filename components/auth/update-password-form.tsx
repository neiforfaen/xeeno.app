"use client"

import { useRouter } from "next/navigation"
import { type ChangeEvent, useCallback, useState } from "react"
import { Button } from "#/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card"
import { Input } from "#/components/ui/input"
import { Label } from "#/components/ui/label"
import { createClient } from "#/lib/supabase/client"
import { cn } from "#/lib/utils"

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleForgotPassword = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const supabase = createClient()
      setIsLoading(true)
      setError(null)

      try {
        const { error: authError } = await supabase.auth.updateUser({
          password,
        })
        if (authError) {
          throw authError
        }
        // Update this route to redirect to an authenticated route. The user already has an active session.
        router.push("/dashboard")
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    },
    [password, router.push]
  )

  const handlePasswordOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
      setPassword(e.target.value),
    []
  )

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Reset Your Password</CardTitle>
          <CardDescription>
            Please enter your new password below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForgotPassword}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">New password</Label>
                <Input
                  id="password"
                  onChange={handlePasswordOnChange}
                  placeholder="New password"
                  required
                  type="password"
                  value={password}
                />
              </div>
              {typeof error === "string" && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <Button className="w-full" disabled={isLoading} type="submit">
                {isLoading ? "Saving..." : "Save new password"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
