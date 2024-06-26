"use client";

import { useExitModal } from "@/store/useExitModal";
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


const ExitModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useExitModal();

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
                        src="/mascot_sad.svg"
                        alt="Sad Mascot"
                        height={80}
                        width={80}
                    />
                </div>
                <DialogTitle className="text-center font-bold text-2xl">
                    Wait, don&apos;t go!
                </DialogTitle>
                <DialogDescription className="text-center text-base">
                    You&apos;re about to leave the lesson. Are you sure?
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mb-4">
                <div className="flex flex-col gap-y-4 w-full">
                    <Button 
                        onClick={close} 
                        variant="primary" 
                        className="w-full" 
                        size="lg"
                    >
                        Keep learning
                    </Button>
                    <Button 
                        onClick={() => {
                            close();
                            router.push("/learn");
                        }} 
                        variant="dangerOutline" 
                        className="w-full" 
                        size="lg"
                    >
                        End Session
                    </Button>
                </div>

            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default ExitModal