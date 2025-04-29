
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Alert = {
  id: number;
  type: string;
  location: string;
  time: string;
  message: string;
  severity: 'high' | 'medium' | 'low';
  icon: string;
};

const AlertsFeed = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 1,
      type: 'Fall',
      location: 'Living Room',
      time: '2 mins ago',
      message: 'Fall detected in Living Room. Movement detected after fall.',
      severity: 'high',
      icon: '🚨'
    },
    {
      id: 2,
      type: 'Water Leak',
      location: 'Kitchen',
      time: '10 mins ago',
      message: 'Water leakage detected in Kitchen near the sink.',
      severity: 'medium',
      icon: '⚡'
    }
  ]);
  
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const getSeverityStyles = (severity: string) => {
    switch(severity) {
      case 'high':
        return {
          bg: 'bg-red-50',
          border: 'border-red-400',
          text: 'text-red-700'
        };
      case 'medium':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-400',
          text: 'text-orange-700'
        };
      case 'low':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-400',
          text: 'text-blue-700'
        };
    }
  };
  
  const viewAlertDetails = (alert: Alert) => {
    setSelectedAlert(alert);
    setDialogOpen(true);
  };
  
  const dismissAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };
  
  // Simulate a new alert coming in
  useEffect(() => {
    const timer = setTimeout(() => {
      const newAlert = {
        id: Date.now(),
        type: 'Motion',
        location: 'Bedroom',
        time: 'Just now',
        message: 'Unusual motion detected in Bedroom during night hours.',
        severity: 'low',
        icon: '👁️'
      };
      
      setAlerts(prevAlerts => [newAlert, ...prevAlerts]);
    }, 12000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-6">
      <div className="container-elder">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Emergency Alerts</h2>
          <span className={`${alerts.length > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'} px-3 py-1 rounded-full text-sm`}>
            {alerts.length} {alerts.length === 1 ? 'Alert' : 'Alerts'}
          </span>
        </div>
        
        {alerts.length === 0 ? (
          <div className="text-center py-10 bg-elderease-gray rounded-xl">
            <p className="text-xl">No active alerts</p>
            <p className="text-muted-foreground">Everything is working fine</p>
          </div>
        ) : (
          <div className="space-y-3">
            {alerts.map(alert => {
              const styles = getSeverityStyles(alert.severity);
              return (
                <div 
                  key={alert.id}
                  className={`alert-item ${styles.bg} ${styles.border} relative ${alert.time === 'Just now' ? 'animate-fade-in' : ''}`}
                >
                  <Button 
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => dismissAlert(alert.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{alert.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className={`font-medium ${styles.text}`}>{alert.type} detected in {alert.location}</h4>
                        <span className="text-sm text-gray-500">{alert.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                      <Button 
                        variant="link" 
                        className={`px-0 ${styles.text}`}
                        onClick={() => viewAlertDetails(alert)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedAlert?.icon} Alert Details: {selectedAlert?.type}
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <div className="space-y-4">
              <div className="aspect-video bg-elderease-gray rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Camera snapshot would appear here</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Alert Information</h4>
                <ul className="space-y-1 text-sm">
                  <li><span className="font-medium">Type:</span> {selectedAlert?.type}</li>
                  <li><span className="font-medium">Location:</span> {selectedAlert?.location}</li>
                  <li><span className="font-medium">Time:</span> {selectedAlert?.time}</li>
                  <li><span className="font-medium">Message:</span> {selectedAlert?.message}</li>
                  <li>
                    <span className="font-medium">Severity:</span>{" "}
                    <span className={
                      selectedAlert?.severity === 'high' ? 'text-red-600' :
                      selectedAlert?.severity === 'medium' ? 'text-orange-600' : 'text-blue-600'
                    }>
                      {selectedAlert?.severity.charAt(0).toUpperCase() + selectedAlert?.severity.slice(1)}
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Actions Taken</h4>
                <ul className="space-y-1 text-sm">
                  <li>✅ Alert notification sent to emergency contacts</li>
                  <li>✅ Local monitoring activated</li>
                  {selectedAlert?.severity === 'high' && (
                    <li>✅ Emergency services notified</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="secondary" 
              onClick={() => setDialogOpen(false)}
            >
              Close
            </Button>
            
            {selectedAlert && (
              <Button 
                variant="destructive"
                onClick={() => {
                  dismissAlert(selectedAlert.id);
                  setDialogOpen(false);
                }}
              >
                Dismiss Alert
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AlertsFeed;
