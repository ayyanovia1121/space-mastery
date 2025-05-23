import { Toaster } from "sonner";


const PtotectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      {/* //TODO: Add sidebar */}
      SIDEBAR
      <section className="flex h-full flex-1 flex-col">
        {/* //TODO: MOBILE NAV */}
        MOBILE NAVIGATION
        {/* //TODO: HEADER */}
        HEADER
        <div className="main-content">{children}</div>
      </section>
      <Toaster richColors/>
    </main>
  );
}

export default PtotectedLayout