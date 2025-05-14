"use client";

import { Plane } from "lucide-react";
import { useState, useEffect } from "react";

export default function BoardingPass() {
  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: "#FF8A00" }}>
      <div className="w-full max-w-2xl relative shadow-2xl">
        {/* Boarding Pass Card */}
        <div className="flex bg-white rounded-lg overflow-hidden">
          
          {/* Left Section - QR Code */}
          <div className="p-6 flex items-center justify-center w-1/4">
            <div className="w-full aspect-square flex items-center justify-center">
              {/* QR code - using an actual QR pattern instead of solid color */}
              <div className="w-5/6 aspect-square bg-white border border-gray-200 p-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Simple QR code pattern */}
                  <rect x="0" y="0" width="100" height="100" fill="white" />
                  <rect x="10" y="10" width="20" height="20" fill="#0c1253" />
                  <rect x="35" y="10" width="20" height="20" fill="#0c1253" />
                  <rect x="60" y="10" width="20" height="20" fill="#0c1253" />
                  <rect x="10" y="35" width="20" height="20" fill="#0c1253" />
                  <rect x="60" y="35" width="20" height="20" fill="#0c1253" />
                  <rect x="10" y="60" width="20" height="20" fill="#0c1253" />
                  <rect x="35" y="60" width="20" height="20" fill="#0c1253" />
                  <rect x="60" y="60" width="20" height="20" fill="#0c1253" />
                  <rect x="15" y="15" width="10" height="10" fill="white" />
                  <rect x="65" y="15" width="10" height="10" fill="white" />
                  <rect x="15" y="65" width="10" height="10" fill="white" />
                  <rect x="35" y="35" width="20" height="20" fill="#0c1253" />
                  <rect x="40" y="40" width="10" height="10" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Dotted Separator Line */}
          <div className="relative flex items-center">
            <div className="absolute top-0 bottom-0 border-l border-dashed border-gray-300"></div>
            <div className="absolute -top-3 w-6 h-6 rounded-full bg-orange-500"></div>
            <div className="absolute -bottom-3 w-6 h-6 rounded-full bg-orange-500"></div>
          </div>
          
          {/* Right Section - Flight Details */}
          <div className="flex-1 p-6 flex flex-col">
            {/* Cities & Flight Code */}
            <div className="mb-2">
              <div className="flex justify-between">
                <div className="text-gray-600 text-xs font-medium">
                  Mumbai,<br />India
                </div>
                <div className="text-gray-600 text-xs text-right font-medium">
                  Amsterdam,<br />Netherlands
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-2 relative">
                <div className="text-[#0c1253] text-3xl font-black">BOM</div>
                {/* Dotted line with airplane - adjusted to match image better */}
                <div className="absolute left-14 right-14 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-auto">
                  <div className="border-t border-dashed border-gray-300 w-full absolute"></div>
                  <div className="bg-white px-2 z-10 flex items-center justify-center">
                    <Plane size={16} className="text-gray-400 z-10" />
                  </div>
                </div>
                <div className="text-[#0c1253] text-3xl font-black">AMS</div>
              </div>
              
              {/* Date & Time */}
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                <div>
                  Wed, July 27<sup>th</sup><br />
                  1:00 AM
                </div>
                <div className="text-right">
                  Thu, July 27<sup>th</sup><br />
                  8:30 AM
                </div>
              </div>
            </div>
            
            {/* Passenger Details Table */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-5 gap-2 text-xs">
                <div className="text-gray-400 font-medium">Passenger</div>
                <div className="text-gray-400 font-medium">Seat</div>
                <div className="text-gray-400 font-medium">Terminal</div>
                <div className="text-gray-400 font-medium">Gate</div>
                <div className="text-gray-400 font-medium">Boarding</div>
                
                <div className="font-bold text-[#0c1253]">Nikita Sharma</div>
                <div className="font-bold text-[#0c1253]">4A</div>
                <div className="font-bold text-[#0c1253]">D</div>
                <div className="font-bold text-[#0c1253]">32</div>
                <div className="font-bold text-[#0c1253]">12:40 PM</div>
              </div>
            </div>
          </div>
          
          {/* Right Side Blue Bar - Precisely matched to image */}
          <div className="w-12 bg-[#0c1253] flex flex-col items-center justify-between relative rounded-r-lg">
            {/* Boarding Pass Text */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -rotate-90 whitespace-nowrap text-[7px] font-bold text-white tracking-wider">
              Boarding Pass
            </div>
            
            {/* Jet Airways Logo and Text */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-400 mb-1"></div>
              <div className="transform -rotate-90 whitespace-nowrap text-[8px] text-white">
              JET AIRWAYS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}