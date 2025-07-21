import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
              DorBoard
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/create" className="btn btn-primary">
              <PlusIcon className="size-5" /> <span>Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
