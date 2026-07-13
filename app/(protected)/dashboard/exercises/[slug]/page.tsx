import { notFound } from "next/navigation"

const validatePath = (value: string) => {
  switch (value) {
    case "react":
      return

    default:
      return notFound()
  }
}

export default async function ExercisePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  validatePath(slug)

  return <div>{slug}</div>
}
