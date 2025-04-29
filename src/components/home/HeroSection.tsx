
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const HeroSection = () => {
  const [isListening, setIsListening] = useState(false);
  const [voiceDialog, setVoiceDialog] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  
  const greetingTime = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };
  
  const simulateVoiceCommand = (command: string) => {
    setIsListening(false);
    setProcessing(true);
    setRecognizedText(command);
    
    setTimeout(() => {
      setProcessing(false);
      setVoiceDialog(false);
      
      switch(command.toLowerCase()) {
        case "schedule doctor appointment":
          toast.success("Doctor appointment scheduled for tomorrow at 10:00 AM with Dr. Smith");
          break;
        case "confirm cleaning payment":
          toast.success("Cleaning payment confirmed: 0.0025 ETH");
          break;
        case "order groceries":
          toast.success("Grocery list created. Would you like to review it?");
          break;
        default:
          toast.info("I'm sorry, I didn't understand that command");
      }
    }, 1500);
  };
  
  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setRecognizedText("");
    }
  };

  return (
    <section className="py-6 md:py-12">
      <div className="container-elder">
        <div className="card-elder bg-gradient-to-r from-elderease-blue via-elderease-purple/30 to-elderease-pink/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                {greetingTime()}, John!
              </h1>
              <p className="text-xl md:text-2xl text-gray-700">
                How can I assist you today?
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Button 
                size="lg" 
                className="h-20 w-20 rounded-full bg-elderease-purple hover:bg-elderease-pink text-primary-foreground shadow-md"
                onClick={() => setVoiceDialog(true)}
              >
                <Mic className="h-8 w-8" />
              </Button>
              <span className="mt-2 text-sm text-gray-600">Voice Assistant</span>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={voiceDialog} onOpenChange={setVoiceDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              {processing ? "Processing..." : isListening ? "Listening..." : "Voice Assistant"}
            </DialogTitle>
            <DialogDescription className="text-center">
              {processing ? "Understanding your request..." : isListening ? "Speak now" : "Click the microphone to start speaking"}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center py-6">
            {processing ? (
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-20 w-20 rounded-full bg-elderease-purple flex items-center justify-center">
                  <span className="text-xl">🔄</span>
                </div>
                <p className="mt-4 text-lg">{recognizedText}</p>
              </div>
            ) : (
              <>
                <Button
                  size="lg"
                  className={`h-20 w-20 rounded-full ${
                    isListening 
                      ? "bg-red-400 hover:bg-red-500" 
                      : "bg-elderease-purple hover:bg-elderease-pink"
                  } text-primary-foreground shadow-md`}
                  onClick={toggleListening}
                >
                  {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                </Button>
                
                {recognizedText && (
                  <p className="mt-4 text-lg">{recognizedText}</p>
                )}
                
                {!isListening && !processing && (
                  <div className="mt-6 w-full">
                    <p className="text-sm text-center mb-4">Try saying one of these:</p>
                    <div className="grid grid-cols-1 gap-2">
                      <Button 
                        variant="outline" 
                        className="justify-start text-left"
                        onClick={() => simulateVoiceCommand("Schedule doctor appointment")}
                      >
                        "Schedule doctor appointment"
                      </Button>
                      <Button 
                        variant="outline" 
                        className="justify-start text-left"
                        onClick={() => simulateVoiceCommand("Confirm cleaning payment")}
                      >
                        "Confirm cleaning payment"
                      </Button>
                      <Button 
                        variant="outline" 
                        className="justify-start text-left"
                        onClick={() => simulateVoiceCommand("Order groceries")}
                      >
                        "Order groceries"
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          
          <DialogFooter>
            <Button 
              variant="secondary" 
              onClick={() => setVoiceDialog(false)}
              className="w-full"
              disabled={processing}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
