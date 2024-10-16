
export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className="bg-orange-300 h-[100vh] flex flex-col justify-center items-center text-4xl font-extrabold">
        {children}
      </section>
    )
  }