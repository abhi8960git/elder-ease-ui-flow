
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Payment = {
  id: string;
  service: string;
  status: 'pending' | 'in-progress' | 'completed';
  amount: string;
  currency: 'ETH' | 'USDC';
  date: string;
  txHash?: string;
  provider?: string;
};

const PaymentsDashboard = () => {
  const [payments, setPayments] = useState<Payment[]>([
    {
      id: '1',
      service: 'Home Cleaning',
      status: 'pending',
      amount: '0.0025',
      currency: 'ETH',
      date: '2025-04-30',
      provider: 'CleanCo Services'
    },
    {
      id: '2',
      service: 'Medical Checkup',
      status: 'completed',
      amount: '50',
      currency: 'USDC',
      date: '2025-04-25',
      txHash: '0x3a8d...4f2e',
      provider: 'Dr. Smith'
    },
    {
      id: '3',
      service: 'Grocery Delivery',
      status: 'in-progress',
      amount: '0.0012',
      currency: 'ETH',
      date: '2025-04-28',
      provider: 'FreshMart'
    }
  ]);
  
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [voiceConfirmDialog, setVoiceConfirmDialog] = useState(false);
  const [processingVoice, setProcessingVoice] = useState(false);
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'pending':
        return <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs">Pending Approval</span>;
      case 'in-progress':
        return <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">In Progress</span>;
      case 'completed':
        return <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Completed</span>;
    }
  };
  
  const confirmPayment = (id: string) => {
    const updatedPayments = payments.map(payment => 
      payment.id === id ? { ...payment, status: 'completed', txHash: `0x${Math.random().toString(16).substring(2, 10)}...${Math.random().toString(16).substring(2, 6)}` } : payment
    );
    
    setPayments(updatedPayments);
    toast.success("Payment confirmed successfully!");
    setConfirmDialog(false);
  };
  
  const simulateVoiceConfirmation = () => {
    setProcessingVoice(true);
    
    setTimeout(() => {
      setProcessingVoice(false);
      setVoiceConfirmDialog(false);
      confirmPayment(selectedPayment?.id || '');
      toast.success("Payment confirmed via voice authorization");
    }, 2000);
  };
  
  return (
    <section className="py-6">
      <div className="container-elder">
        <h2 className="text-2xl font-semibold mb-6">Payments Dashboard</h2>
        
        <div className="space-y-4">
          {payments.map(payment => (
            <Card key={payment.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{payment.service}</CardTitle>
                    <CardDescription>Provider: {payment.provider}</CardDescription>
                  </div>
                  {getStatusBadge(payment.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">{payment.amount}</span>
                    <span className="ml-1 text-gray-600">{payment.currency}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(payment.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                {payment.txHash && (
                  <div className="mt-2 text-sm">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="text-muted-foreground underline">
                          Transaction: {payment.txHash}
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View on blockchain explorer</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t pt-3 flex justify-end">
                {payment.status === 'pending' && (
                  <>
                    <Button
                      variant="outline"
                      className="flex items-center gap-1.5 mr-2"
                      onClick={() => {
                        setSelectedPayment(payment);
                        setVoiceConfirmDialog(true);
                      }}
                    >
                      <Mic className="h-4 w-4" />
                      <span>Confirm via Voice</span>
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedPayment(payment);
                        setConfirmDialog(true);
                      }}
                    >
                      Approve Payment
                    </Button>
                  </>
                )}
                
                {payment.status === 'in-progress' && (
                  <Button variant="outline">View Progress</Button>
                )}
                
                {payment.status === 'completed' && (
                  <Button variant="outline">View Receipt</Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <Dialog open={confirmDialog} onOpenChange={setConfirmDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Payment</DialogTitle>
            <DialogDescription>
              You are about to approve the payment for {selectedPayment?.service}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="space-y-3">
              <div className="bg-elderease-gray p-3 rounded-md">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-medium">{selectedPayment?.amount} {selectedPayment?.currency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span>{selectedPayment?.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Provider:</span>
                  <span>{selectedPayment?.provider}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Payment Process</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-2">✓</span>
                    <span>Service Scheduled</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-2">→</span>
                    <span>Payment Authorization</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 mr-2">...</span>
                    <span>Service Verification</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 mr-2">...</span>
                    <span>Payment Release</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex-col sm:flex-row sm:justify-between">
            <Button variant="secondary" onClick={() => setConfirmDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => confirmPayment(selectedPayment?.id || '')}>
              Confirm Payment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Dialog open={voiceConfirmDialog} onOpenChange={setVoiceConfirmDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Voice Authorization</DialogTitle>
            <DialogDescription>
              Please confirm the payment using your voice
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="flex flex-col items-center py-6">
              {processingVoice ? (
                <div className="animate-pulse flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-elderease-purple flex items-center justify-center">
                    <span className="text-xl">🔄</span>
                  </div>
                  <p className="mt-4 text-lg">Processing voice authorization...</p>
                </div>
              ) : (
                <>
                  <Button
                    size="lg"
                    className="h-20 w-20 rounded-full bg-elderease-purple hover:bg-elderease-pink text-primary-foreground shadow-md"
                    onClick={simulateVoiceConfirmation}
                  >
                    <Mic className="h-8 w-8" />
                  </Button>
                  
                  <p className="mt-4 text-lg">Say "Yes, confirm payment for {selectedPayment?.service}"</p>
                  
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground text-center">
                      Your voice pattern will be matched with your stored biometric authorization template
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              variant="secondary" 
              onClick={() => setVoiceConfirmDialog(false)}
              className="w-full"
              disabled={processingVoice}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PaymentsDashboard;
