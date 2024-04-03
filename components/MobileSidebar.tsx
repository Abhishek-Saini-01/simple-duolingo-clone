
import Sidebar from "@/components/Sidebar";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileHeader = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-white"/> 
        </SheetTrigger>
        <SheetContent 
            className="p-0 z-[100]"
            side="left"
        >
            <Sidebar />
        </SheetContent>
    </Sheet>
  )
}

export default MobileHeader