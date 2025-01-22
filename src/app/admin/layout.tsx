import AdminSidebar from "@/components/Sidebar/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex gap-10">
      <nav>
        <AdminSidebar />
      </nav>
      {children}
    </main>
  );
}
