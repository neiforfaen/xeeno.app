import Link from "next/link"

export const Footer = () => {
  const navigationItems = [
    {
      description: "",
      href: "/",
      title: "Home",
    },
    {
      description: "Managing a small business today is already tough.",
      items: [
        {
          href: "/reports",
          title: "Reports",
        },
        {
          href: "/statistics",
          title: "Statistics",
        },
        {
          href: "/dashboards",
          title: "Dashboards",
        },
        {
          href: "/recordings",
          title: "Recordings",
        },
      ],
      title: "Product",
    },
    {
      description: "Managing a small business today is already tough.",
      items: [
        {
          href: "/about",
          title: "About us",
        },
        {
          href: "/fundraising",
          title: "Fundraising",
        },
        {
          href: "/investors",
          title: "Investors",
        },
        {
          href: "/contact",
          title: "Contact us",
        },
      ],
      title: "Company",
    },
  ]

  return (
    <footer className="w-full bg-foreground py-20 text-background lg:py-40">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
                TWBlocks™
              </h2>
              <p className="max-w-lg text-left text-background/75 text-lg leading-relaxed tracking-tight">
                Managing a small business today is already tough.
              </p>
            </div>
            <div className="flex flex-row gap-20">
              <div className="flex max-w-lg flex-col text-left text-background/75 text-sm leading-relaxed tracking-tight">
                <p>1 Tailwind Way</p>
                <p>Menlo Park</p>
                <p>CA 94025</p>
              </div>
              <div className="flex max-w-lg flex-col text-left text-background/75 text-sm leading-relaxed tracking-tight">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-3">
            {navigationItems.map((item) => (
              <div
                className="flex flex-col items-start gap-1 text-base"
                key={item.title}
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      className="flex items-center justify-between"
                      href={item.href}
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {Array.isArray(item.items) &&
                    item.items.map((subItem) => (
                      <Link
                        className="flex items-center justify-between"
                        href={subItem.href}
                        key={subItem.title}
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
