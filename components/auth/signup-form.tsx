"use client"

import Link from "next/link"
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

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignUp = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const supabase = createClient()
      setIsLoading(true)
      setError(null)

      if (password !== repeatPassword) {
        setError("Passwords do not match")
        setIsLoading(false)
        return
      }

      try {
        const { error: authError } = await supabase.auth.signUp({
          email,
          options: {
            emailRedirectTo: `${window.location.origin}/protected`,
          },
          password,
        })
        if (authError) {
          throw authError
        }
        router.push("/auth/sign-up-success")
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    },
    [email, password, repeatPassword, router.push]
  )

  const handleEmailOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
      setEmail(e.target.value),
    []
  )
  const handlePasswordOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
      setPassword(e.target.value),
    []
  )
  const handleRepeatPasswordOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
      setRepeatPassword(e.target.value),
    []
  )

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  onChange={handleEmailOnChange}
                  placeholder="m@example.com"
                  required
                  type="email"
                  value={email}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  onChange={handlePasswordOnChange}
                  required
                  type="password"
                  value={password}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="repeat-password">Repeat Password</Label>
                </div>
                <Input
                  id="repeat-password"
                  onChange={handleRepeatPasswordOnChange}
                  required
                  type="password"
                  value={repeatPassword}
                />
              </div>
              {typeof error === "string" && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <Button className="w-full" disabled={isLoading} type="submit">
                {isLoading ? "Creating an account..." : "Sign up"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link className="underline underline-offset-4" href="/auth/login">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
