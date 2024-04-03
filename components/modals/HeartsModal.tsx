"use client";

import { useHeartsModal } from "@/store/useHeartsModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "../ui/dialog";


const HeartsModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useHeartsModal();

    const onClick = () => {
        close();
        router.push("/shop");
    }

    //Mouting -> to avoi₫ hidreation effect
    useEffect(()=>setIsClient(true),[]);
    if(!isClient) {
        return null;
    }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="max-w-md">
            <DialogHeader>
                <div className="flex items-center w-full justify-center mb-5">
                    <Image 
                        src="/mascot_bad.svg"
                        alt="Bad Mascot"
                        height={80}
                        width={80}
                    />
                </div>
                <DialogTitle className="text-center font-bold text-2xl">
                    You ran out of hearts!
                </DialogTitle>
                <DialogDescription className="text-center text-base">
                    Get pro for unlimited hearts, or purchase them in the store.
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mb-4">
                <div className="flex flex-col gap-y-4 w-full">
                    <Button 
                        onClick={onClick} 
                        variant="primary" 
                        className="w-full" 
                        size="lg"
                    >
                        Get unlimited hearts
                    </Button>
                    <Button 
                        onClick={close} 
                        variant="primaryOutline" 
                        className="w-full" 
                        size="lg"
                    >
                        No thanks
                    </Button>
                </div>

            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default HeartsModal