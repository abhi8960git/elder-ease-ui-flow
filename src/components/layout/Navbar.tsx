
import React, { useState } from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Bell, Calendar, Home, MessageSquare, Settings, User, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  
  const tabs = [
    { name: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
    { name: "Services", icon: <Calendar className="w-5 h-5" />, path: "/services" },
    { name: "Emergency Alerts", icon: <Bell className="w-5 h-5" />, path: "/alerts" },
    { name: "Payments", icon: <Wallet className="w-5 h-5" />, path: "/payments" },
    { name: "Settings", icon: <Settings className="w-5 h-5" />, path: "/settings" },
  ];

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
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative rounded-full" size="icon">
                  <Avatar>
                    <User className="w-6 h-6" />
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
                  <User className="w-4 h-4 mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="w-4 h-4 mr-2" /> Messages
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
