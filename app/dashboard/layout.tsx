import Sidebar from "@/components/Sidebar"; // <--- Importamos el componente inteligente

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      

      <Sidebar />


      <main className="flex-1 ml-64 p-8">
        {children}
      </main>

    </div>
  );
}