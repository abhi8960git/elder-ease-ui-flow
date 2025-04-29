
import React, { useState } from 'react';
import { Calendar, Home, Refrigerator, Stethoscope, Wrench } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ServicesPanel = () => {
  const [serviceType, setServiceType] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  
  // Dummy data for different service types
  const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "General Physician", available: true },
    { id: 2, name: "Dr. Patel", specialty: "Cardiologist", available: true },
    { id: 3, name: "Dr. Johnson", specialty: "Neurologist", available: false }
  ];
  
  const groceryItems = [
    { id: 1, name: "Milk", checked: false },
    { id: 2, name: "Bread", checked: false },
    { id: 3, name: "Eggs", checked: false },
    { id: 4, name: "Apples", checked: false },
    { id: 5, name: "Tea", checked: false },
  ];
  
  const maintenanceIssues = [
    { id: 1, name: "Plumbing", description: "Leaking faucet" },
    { id: 2, name: "Electrical", description: "Light not working" },
    { id: 3, name: "HVAC", description: "Heating issues" },
    { id: 4, name: "Appliance", description: "Refrigerator not cooling" }
  ];
  
  const openServiceDialog = (type: string) => {
    setServiceType(type);
    setDialogOpen(true);
  };
  
  const handleSubmit = () => {
    toast.success(`${serviceType} service scheduled successfully!`);
    setDialogOpen(false);
  };
  
  return (
    <section className="py-6">
      <div className="container-elder">
        <h2 className="text-2xl font-semibold mb-6">Services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            className="btn-service"
            onClick={() => openServiceDialog("Home Cleaning")}
          >
            <Home className="h-10 w-10 mb-2 text-primary-foreground" />
            <span className="text-lg font-medium">Home Cleaning</span>
          </button>
          
          <button 
            className="btn-service"
            onClick={() => openServiceDialog("Medical Appointment")}
          >
            <Stethoscope className="h-10 w-10 mb-2 text-primary-foreground" />
            <span className="text-lg font-medium">Medical Appointment</span>
          </button>
          
          <button 
            className="btn-service"
            onClick={() => openServiceDialog("Groceries")}
          >
            <Refrigerator className="h-10 w-10 mb-2 text-primary-foreground" />
            <span className="text-lg font-medium">Order Groceries</span>
          </button>
          
          <button 
            className="btn-service"
            onClick={() => openServiceDialog("Maintenance")}
          >
            <Wrench className="h-10 w-10 mb-2 text-primary-foreground" />
            <span className="text-lg font-medium">Maintenance</span>
          </button>
        </div>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">{serviceType}</DialogTitle>
            <DialogDescription>
              {serviceType === "Home Cleaning" && "Schedule a cleaning service for your home"}
              {serviceType === "Medical Appointment" && "Book an appointment with a doctor"}
              {serviceType === "Groceries" && "Create a shopping list for delivery"}
              {serviceType === "Maintenance" && "Request maintenance for your home"}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            {serviceType === "Home Cleaning" && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service-type">Cleaning Type</Label>
                  <select 
                    id="service-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  >
                    <option value="deep">Deep Cleaning</option>
                    <option value="regular">Regular Cleaning</option>
                    <option value="quick">Quick Cleaning</option>
                  </select>
                </div>
              </div>
            )}
            
            {serviceType === "Medical Appointment" && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Select Doctor</Label>
                  <div className="space-y-2">
                    {doctors.map(doctor => (
                      <div 
                        key={doctor.id}
                        className={`p-3 border rounded-md ${
                          doctor.available ? "cursor-pointer hover:bg-elderease-gray" : "opacity-50 cursor-not-allowed"
                        }`}
                      >
                        <div className="font-medium">{doctor.name}</div>
                        <div className="text-sm text-muted-foreground">{doctor.specialty}</div>
                        {!doctor.available && <div className="text-sm text-red-500">Not available</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {serviceType === "Groceries" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Shopping List</Label>
                  <div className="space-y-2">
                    {groceryItems.map(item => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox id={`item-${item.id}`} />
                        <Label htmlFor={`item-${item.id}`}>{item.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="custom-item">Add Custom Item</Label>
                  <div className="flex space-x-2">
                    <input 
                      id="custom-item" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      placeholder="Enter item name"
                    />
                    <Button variant="secondary" size="sm">
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {serviceType === "Maintenance" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Issue Category</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {maintenanceIssues.map(issue => (
                      <div 
                        key={issue.id}
                        className="p-3 border rounded-md cursor-pointer hover:bg-elderease-gray"
                      >
                        <div className="font-medium">{issue.name}</div>
                        <div className="text-sm text-muted-foreground">{issue.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="issue-description">Additional Details</Label>
                  <textarea 
                    id="issue-description" 
                    className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    placeholder="Describe your issue in detail"
                  ></textarea>
                </div>
              </div>
            )}
          </div>
          
          <DialogFooter className="flex-col sm:flex-row sm:justify-between">
            <Button variant="secondary" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              Schedule Service
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesPanel;
