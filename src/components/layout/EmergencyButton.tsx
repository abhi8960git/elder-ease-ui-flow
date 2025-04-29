
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EmergencyButton = () => {
  const [open, setOpen] = useState(false);
  
  const handleEmergency = (type: string) => {
    toast.success(`Emergency alert sent: ${type}`);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button 
            size="lg" 
            className="rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl border-2 border-white h-16 w-16 p-0"
          >
            <span className="animate-pulse-soft font-bold">Help!</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-red-500">What's the emergency?</DialogTitle>
            <DialogDescription className="text-center text-lg pt-2">
              Select the type of emergency you're experiencing
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <Button 
              variant="outline" 
              className="h-24 flex flex-col border-2 text-lg"
              onClick={() => handleEmergency("Fall")}
            >
              <span className="text-3xl mb-2">🚨</span>
              Fall
            </Button>
            <Button 
              variant="outline" 
              className="h-24 flex flex-col border-2 text-lg"
              onClick={() => handleEmergency("Intruder")}
            >
              <span className="text-3xl mb-2">👤</span>
              Intruder
            </Button>
            <Button 
              variant="outline" 
              className="h-24 flex flex-col border-2 text-lg"
              onClick={() => handleEmergency("Fire")}
            >
              <span className="text-3xl mb-2">🔥</span>
              Fire
            </Button>
            <Button 
              variant="outline" 
              className="h-24 flex flex-col border-2 text-lg"
              onClick={() => handleEmergency("Medical")}
            >
              <span className="text-3xl mb-2">🏥</span>
              Medical
            </Button>
          </div>
          <DialogFooter>
            <Button 
              variant="secondary" 
              onClick={() => setOpen(false)} 
              className="w-full text-lg"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmergencyButton;
