import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import OwnerAuthForm from '../components/auth/OwnerAuthForm';
import { ShieldCheck, Banknote, ShieldHeart } from 'lucide-react';

const OwnerSignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar authMode={true} rightText="Back to Marketplace" rightLink="/" />
      
      <main className="flex-grow flex flex-col pt-12 md:pt-20 px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Left Side Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-[#0047FF] px-4 py-1.5 rounded-full text-sm font-bold w-max mb-8">
              <ShieldCheck className="w-4 h-4" />
              Partner Program
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
              Start earning with Spotly
            </h1>
            
            <p className="text-lg text-[#64748B] mb-12 max-w-lg leading-relaxed">
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
                  <ShieldHeart className="w-8 h-8" />
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
            <OwnerAuthForm />
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="max-w-6xl mx-auto w-full border-t border-gray-200 pt-16 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1E293B] mb-2">15k+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Owners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E293B] mb-2">$2.4M</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Paid to Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E293B] mb-2">450+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E293B] mb-2">99.9%</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Uptime Safety</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OwnerSignupPage;
