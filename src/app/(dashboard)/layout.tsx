import { Navbar } from "./_components/Navbar"
import { OrgSidebar } from "./_components/Org-Sidebar"
import { Sidebar } from "./_components/sidebar"


interface DashboardLayoutProps{
  children: React.ReactNode
}
export const metadata = {
  title: "Sketch Hub",
  description: "Sketch Hub is a visual workspace for innovation where teams manage projects, design products, and build the future together. Join 60M+ users from around the world"
}
const DashboardLayout = ({children}: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout