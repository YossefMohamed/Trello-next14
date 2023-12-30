"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetOverlay } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

function MobileSidebar() {
  const pathname = usePathname();
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);
  console.log(isOpen, "isOpen");
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4"></Menu>
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetOverlay className="bg-black/20" />
          <SheetContent side="left" className="p-2 pt-10">
            <Sidebar storageKey="t-sidebar-mobile-state" />
          </SheetContent>
        </Sheet>
      </Button>
    </>
  );
}

export default MobileSidebar;
