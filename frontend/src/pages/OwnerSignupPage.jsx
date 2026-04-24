import React from 'react';
import Navbar from '../components/layout/Navbar';
import SignupForm from '../components/auth/SignupForm';
import { ShieldCheck, Banknote, Shield } from 'lucide-react';

const OwnerSignupPage = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-[#F8FAFC]">
      <Navbar authMode={true} />
      
      <main className="flex-grow flex flex-col pt-8 px-6 overflow-y-auto">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 mt-4">
          
          {/* Left Side Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-[#0047FF] px-4 py-1.5 rounded-full text-sm font-bold w-max mb-8">
              <ShieldCheck className="w-4 h-4" />
              Partner Program
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
              Start earning with Spotly
            </h1>
            
            <p className="text-lg text-[#64748B] mb-8 max-w-lg leading-relaxed">
              Join thousands of property owners maximizing their space. 
              Turn your unused parking spots into a steady stream of passive income.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="text-[#0047FF] mb-3">
                  <Banknote className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#1E293B] mb-2">Weekly Payouts</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Direct deposit to your bank account every Tuesday.
                </p>
              </div>
              
              <div>
                <div className="text-[#0047FF] mb-3">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#1E293B] mb-2">Insured Coverage</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Comprehensive protection for every booking on your lot.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <SignupForm type="owner" hideSocial={true} />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="max-w-6xl mx-auto w-full border-t border-gray-200 pt-8 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1E293B] mb-1">15k+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Owners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E293B] mb-1">$2.4M</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Paid to Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E293B] mb-1">450+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E293B] mb-1">99.9%</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Uptime Safety</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OwnerSignupPage;
