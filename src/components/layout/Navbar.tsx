
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Bell, 
  Calendar, 
  Home, 
  LogOut, 
  Menu, 
  MessageSquare, 
  Settings, 
  User, 
  UserRound, 
  Wallet, 
  X 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const tabs = [
    { name: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
    { name: "Services", icon: <Calendar className="w-5 h-5" />, path: "/services" },
    { name: "Emergency Alerts", icon: <Bell className="w-5 h-5" />, path: "/alerts" },
    { name: "Payments", icon: <Wallet className="w-5 h-5" />, path: "/payments" },
    { name: "Settings", icon: <Settings className="w-5 h-5" />, path: "/settings" },
  ];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b shadow-sm">
      <div className="container-elder py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/placeholder.svg" 
              alt="ElderEase Logo" 
              className="w-8 h-8" 
            />
            <h1 className="text-xl font-semibold">
              <span className="text-primary-foreground">Eth</span> ElderEase
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <nav className="flex space-x-1">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.path}
                  className={`flex items-center px-4 py-2 text-base rounded-full transition-all ${
                    activeTab === tab.name
                      ? "bg-elderease-purple text-primary-foreground font-medium"
                      : "text-gray-600 hover:bg-elderease-gray"
                  }`}
                  onClick={() => handleTabClick(tab.name)}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Mobile hamburger menu */}
          <div className="flex md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-2" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col gap-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/placeholder.svg" 
                        alt="ElderEase Logo" 
                        className="w-7 h-7" 
                      />
                      <h2 className="text-lg font-semibold">ElderEase</h2>
                    </div>
                    <SheetClose className="rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {tabs.map((tab) => (
                      <SheetClose key={tab.name} asChild>
                        <Link
                          to={tab.path}
                          className={`flex items-center px-4 py-3 text-base rounded-md transition-all ${
                            activeTab === tab.name
                              ? "bg-elderease-purple text-primary-foreground font-medium"
                              : "text-gray-600 hover:bg-elderease-gray"
                          }`}
                          onClick={() => handleTabClick(tab.name)}
                        >
                          {tab.icon}
                          <span className="ml-3">{tab.name}</span>
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative rounded-full" size="icon">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="John Doe" />
                    <AvatarFallback>
                      <UserRound className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">Age: 74</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserRound className="w-4 h-4 mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="w-4 h-4 mr-2" /> Messages
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="w-4 h-4 mr-2" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
