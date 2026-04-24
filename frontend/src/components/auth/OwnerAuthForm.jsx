import React from 'react';
import { Link } from 'react-router-dom';

const OwnerAuthForm = () => {
  return (
    <div className="bg-white rounded-[2rem] p-10 lg:p-12 border border-[#E2E8F0] shadow-xl shadow-gray-200/50 w-full max-w-lg relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-2">Owner Portal</h2>
        <p className="text-[#64748B]">Sign in or create your owner account</p>
      </div>

      <div className="space-y-6">
        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-bold text-[#1E293B]">
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="Google" 
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="text-xs font-bold text-gray-400 tracking-widest lowercase">
            or email
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Email Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold text-[#1E293B] mb-2 uppercase tracking-wide">
              Work Email
            </label>
            <input 
              type="email" 
              placeholder="name@company.com"
              className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-[#0047FF] outline-none transition-all text-[#1E293B]"
            />
          </div>

          <button className="w-full bg-[#0047FF] hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]">
            Continue
          </button>
        </form>

        {/* Terms */}
        <p className="text-center text-xs text-[#64748B] mt-8 pt-6 border-t border-gray-100">
          By continuing, you agree to Spotly's{' '}
          <Link to="/terms" className="text-[#0047FF] hover:underline">Terms of Service</Link>
          {' '}and{' '}
          <Link to="/privacy" className="text-[#0047FF] hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
};

export default OwnerAuthForm;
