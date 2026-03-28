import { Home, Pencil, PlusCircle, Projector, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";


export default function Sidebar() {
  return (
           <aside className="flex h-screen w-64 flex-col border-r bg-zinc-900 text-white">
      {/* Top navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {/* public route */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          <Projector className="h-4 w-4" />
          Project
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          <PlusCircle className="h-4 w-4" />
          Blog
        </Link>

        <div className="border-t border-zinc-700 my-4"></div>


       {/* privet route */}

        <Link
          href="/dashboard/create-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          <PlusCircle className="h-4 w-4" />
          Create Blog
        </Link>

        <Link
          href="/dashboard/update-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          <Pencil className="h-4 w-4" />
          Update Blog
        </Link>

        <Link
          href="/dashboard/create-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          <Trash className="h-4 w-4" />
          Delete Blog
        </Link>
        <Link
          href="/dashboard/create-project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          <PlusCircle className="h-4 w-4" />
          Create Project
        </Link>

        <Link
          href="/dashboard/update-project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          <Pencil className="h-4 w-4" />
          Update Project
        </Link>

        <Link
          href="/dashboard/create-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          <Trash className="h-4 w-4" />
          Delete Project
        </Link>
      </nav>

      {/* Bottom action */}
      {/* <div className="p-4 border-t border-gray-500">
        {session.status === "authenticated" && <Button
          variant="destructive"
          className="w-full justify-start gap-2 cursor-pointer"
          onClick={() => {
            signOut()
          }}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>}
      </div> */}
      <Button className="bg-indigo-600 hover:bg-indigo-700">Logout</Button>
    </aside>
  )
}
