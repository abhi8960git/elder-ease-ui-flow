
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { User, Phone, Wallet } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from '../../hooks/use-mobile';

const SettingsSection = () => {
  const [voiceAssistant, setVoiceAssistant] = useState(true);
  const [textSize, setTextSize] = useState("normal");
  const isMobile = useIsMobile();
  
  const emergencyContacts = [
    { id: 1, name: "Sarah Doe", relation: "Daughter", phone: "555-123-4567" },
    { id: 2, name: "Michael Doe", relation: "Son", phone: "555-987-6543" }
  ];
  
  const saveSettings = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <section className="py-4 md:py-6">
      <div className="container-elder">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Settings</h2>
        
        <div className="space-y-4 md:space-y-8">
          <div className="card-elder">
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">Preferences</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div className="space-y-0.5">
                  <Label htmlFor="voice-assistant">Voice Assistant</Label>
                  <p className="text-sm text-muted-foreground">Enable or disable voice assistant functionality</p>
                </div>
                <Switch
                  id="voice-assistant"
                  checked={voiceAssistant}
                  onCheckedChange={setVoiceAssistant}
                />
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <div>
                  <Label>Text Size</Label>
                  <p className="text-sm text-muted-foreground">Adjust the size of text throughout the application</p>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <Button
                    variant={textSize === "normal" ? "default" : "outline"}
                    onClick={() => setTextSize("normal")}
                    size={isMobile ? "sm" : "default"}
                  >
                    Normal
                  </Button>
                  <Button
                    variant={textSize === "large" ? "default" : "outline"}
                    onClick={() => setTextSize("large")}
                    size={isMobile ? "sm" : "default"}
                  >
                    Large
                  </Button>
                  <Button
                    variant={textSize === "extra-large" ? "default" : "outline"}
                    onClick={() => setTextSize("extra-large")}
                    size={isMobile ? "sm" : "default"}
                  >
                    Extra Large
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-elder">
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">Payment Settings</h3>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-elderease-gray p-3 rounded-lg">
              <div className="flex items-center mb-2 sm:mb-0">
                <Wallet className="text-primary-foreground mr-3" />
                <div>
                  <p className="font-medium">MetaMask Connected</p>
                  <p className="text-sm text-muted-foreground">0x1234...5678</p>
                </div>
              </div>
              <Button variant="outline" size={isMobile ? "sm" : "default"}>
                Change
              </Button>
            </div>
          </div>
          
          <div className="card-elder">
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">Emergency Contacts</h3>
            
            <div className="space-y-3 md:space-y-4">
              {emergencyContacts.map(contact => (
                <div key={contact.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-elderease-gray p-3 rounded-lg">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <User className="text-primary-foreground mr-3" />
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">{contact.relation}</p>
                    </div>
                  </div>
                  <div className="flex items-center pl-6 sm:pl-0">
                    <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm">{contact.phone}</span>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full" size={isMobile ? "sm" : "default"}>
                Add Emergency Contact
              </Button>
            </div>
          </div>
          
          <div className="card-elder">
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">Privacy & Security</h3>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div className="space-y-0.5">
                  <Label htmlFor="data-sharing">Data Sharing</Label>
                  <p className="text-sm text-muted-foreground">Share anonymous usage data to improve services</p>
                </div>
                <Switch id="data-sharing" defaultChecked={true} />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Emergency Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send notifications to emergency contacts</p>
                </div>
                <Switch id="notifications" defaultChecked={true} />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button size={isMobile ? "default" : "lg"} onClick={saveSettings}>
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsSection;
