import React, { useState, useEffect } from 'react';
import { 
  Download, Plus, CalendarDays, IndianRupee, Clock, 
  Filter, MoreVertical, Calendar, ChevronLeft, ChevronRight,
  TrendingUp, BarChart2
} from 'lucide-react';
import OwnerSidebar from '../../components/owner/OwnerSidebar';
import OwnerHeader from '../../components/owner/OwnerHeader';
import Footer from '../../components/layout/Footer';
import { getCurrentUser } from '../../services/authService';

const OwnerBookings = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('All Bookings');

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  const stats = [
    { 
      title: 'Total Bookings Today', 
      value: '42', 
      trend: '+12% vs last week', 
      trendColor: 'text-green-600', 
      trendBg: 'bg-green-100',
      icon: CalendarDays, 
      iconColor: 'text-blue-500', 
      iconBg: 'bg-blue-50' 
    },
    { 
      title: 'Revenue This Month', 
      value: '₹2,840.00', 
      trend: '+8% growth', 
      trendColor: 'text-green-600', 
      trendBg: 'bg-green-100',
      icon: IndianRupee, 
      iconColor: 'text-emerald-500', 
      iconBg: 'bg-emerald-50' 
    },
    { 
      title: 'Avg. Duration', 
      value: '3.5 hrs', 
      trend: 'Steady', 
      trendColor: 'text-gray-500', 
      trendBg: 'bg-gray-100',
      icon: Clock, 
      iconColor: 'text-orange-500', 
      iconBg: 'bg-orange-50' 
    },
  ];

  const bookings = [
    {
      id: 1,
      user: { name: 'Sarah Miller', email: 'sarah.m@gmail.com', initials: 'SM', color: 'bg-blue-100 text-blue-600' },
      spot: { name: 'Downtown Plaza', slot: 'Slot #B-24' },
      timeFrame: { date: 'Oct 24, 2023', time: '09:00 AM - 05:00 PM' },
      status: 'Active',
      amount: '₹24.00'
    },
    {
      id: 2,
      user: { name: 'James Donovan', email: 'j.donovan@corp.co', initials: 'JD', color: 'bg-gray-100 text-gray-600' },
      spot: { name: 'Riverside Heights', slot: 'Slot #A-05' },
      timeFrame: { date: 'Oct 24, 2023', time: '11:30 AM - 02:00 PM' },
      status: 'Completed',
      amount: '₹12.50'
    },
    {
      id: 3,
      user: { name: 'Elena Vance', email: 'elena.v@outlook.com', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40&q=80' },
      spot: { name: 'Downtown Plaza', slot: 'Slot #C-12' },
      timeFrame: { date: 'Oct 24, 2023', time: '04:00 PM - 10:00 PM' },
      status: 'Active',
      amount: '₹18.00'
    },
    {
      id: 4,
      user: { name: 'Robert King', email: 'rob.king@techmail.net', initials: 'RK', color: 'bg-purple-100 text-purple-600' },
      spot: { name: 'Greenway Mall', slot: 'Slot #M-101' },
      timeFrame: { date: 'Oct 25, 2023', time: '08:00 AM - 12:00 PM' },
      status: 'Upcoming',
      amount: '₹10.00'
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Active':
        return <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full flex items-center gap-1.5 w-fit"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Active</span>;
      case 'Completed':
        return <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full flex items-center gap-1.5 w-fit"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Completed</span>;
      case 'Upcoming':
        return <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full flex items-center gap-1.5 w-fit"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Upcoming</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <OwnerSidebar activePage="bookings" />
      
      <div className="flex-1 flex flex-col min-w-0">
        <OwnerHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8 max-w-[1400px] mx-auto space-y-8 pb-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-[#1E293B] mb-2">Bookings Management</h1>
                <p className="text-sm font-medium text-gray-500">
                  Oversee all your parking spot reservations and active sessions.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-2 md:mt-0">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-all shadow-sm">
                  <Download className="w-4 h-4" /> Export CSV
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0047FF] text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]">
                  <Plus className="w-4 h-4" /> Manual Booking
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${stat.iconBg} ${stat.iconColor} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${stat.trendBg} ${stat.trendColor}`}>
                      {stat.trend}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.title}</p>
                    <h3 className="text-3xl font-black text-[#1E293B]">{stat.value}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Table Area */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              
              {/* Table Controls */}
              <div className="p-4 md:p-6 border-b border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl w-full sm:w-auto">
                  {['All Bookings', 'Active', 'Upcoming'].map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex-1 sm:flex-none ${
                        activeTab === tab 
                          ? 'bg-white text-[#0047FF] shadow-sm' 
                          : 'text-gray-500 hover:text-[#1E293B]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                  <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#1E293B] transition-colors">
                    <Filter className="w-4 h-4" /> Filters
                  </button>
                  <p className="text-sm text-gray-500">
                    Showing <span className="font-bold text-[#1E293B]">1-10</span> of <span className="font-bold text-[#1E293B]">128</span> entries
                  </p>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">User</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Spot / Slot</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Time Frame</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Amount</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {booking.user.avatar ? (
                              <img src={booking.user.avatar} alt={booking.user.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                            ) : (
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ${booking.user.color}`}>
                                {booking.user.initials}
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-bold text-[#1E293B]">{booking.user.name}</p>
                              <p className="text-xs font-medium text-gray-400">{booking.user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-bold text-[#1E293B]">{booking.spot.name}</p>
                          <p className="text-xs font-bold text-[#0047FF] mt-0.5">{booking.spot.slot}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm font-bold text-[#1E293B] mb-1">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" /> {booking.timeFrame.date}
                          </div>
                          <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                            <Clock className="w-3.5 h-3.5 text-gray-400" /> {booking.timeFrame.time}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(booking.status)}
                        </td>
                        <td className="px-6 py-4 text-sm font-black text-[#1E293B]">
                          {booking.amount}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 text-gray-400 hover:text-[#1E293B] hover:bg-gray-100 rounded-lg transition-colors">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-6 border-t border-gray-50 flex items-center justify-between">
                <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <div className="flex items-center gap-1">
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0047FF] text-white text-sm font-bold shadow-md shadow-blue-500/20">1</button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-50 text-sm font-bold transition-colors">2</button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-50 text-sm font-bold transition-colors">3</button>
                  <span className="w-9 h-9 flex items-center justify-center text-gray-400 font-bold">...</span>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-50 text-sm font-bold transition-colors">12</button>
                </div>
                <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>

            {/* Bottom Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Occupancy Forecast */}
              <div className="lg:col-span-2 bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-[#1E293B] mb-2">Occupancy Forecast</h3>
                    <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-sm">
                      Based on your booking history, we expect 95% occupancy this weekend due to the local sports event.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-[10px] font-black tracking-widest uppercase mb-2">
                        <span className="text-[#1E293B]">Downtown Plaza</span>
                        <span className="text-[#0047FF]">88%</span>
                      </div>
                      <div className="w-full h-2 bg-blue-50 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0047FF] rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-black tracking-widest uppercase mb-2">
                        <span className="text-[#1E293B]">Riverside Heights</span>
                        <span className="text-[#0047FF]">62%</span>
                      </div>
                      <div className="w-full h-2 bg-blue-50 rounded-full overflow-hidden">
                        <div className="h-full bg-[#3B82F6] rounded-full" style={{ width: '62%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 bg-[#F4F7FF] rounded-3xl p-6 relative overflow-hidden flex items-end">
                  <div className="absolute top-4 left-4 text-[#0047FF]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  {/* Decorative Chart Bars */}
                  <div className="w-full h-32 flex items-end justify-between gap-2 z-10">
                    {[40, 60, 45, 80, 75].map((height, i) => (
                      <div key={i} className="w-full bg-[#0047FF]/80 rounded-t-sm" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                  {/* Dotted pattern overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0047FF_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>
                </div>
              </div>

              {/* Maximize Earnings */}
              <div className="bg-[#0047FF] rounded-[2rem] p-6 md:p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-lg shadow-blue-500/20">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 right-0 opacity-20">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L30 90L60 110L120 40V120H0Z" fill="white"/>
                    <path d="M0 110L30 80L60 100L120 30" stroke="white" strokeWidth="4"/>
                  </svg>
                </div>
                
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-black">Maximize Earnings</h3>
                  <p className="text-sm font-medium text-blue-100 leading-relaxed">
                    Demand for Downtown Plaza is high. Increase your hourly rate by ₹2.00 to match local trends.
                  </p>
                </div>
                
                <button className="relative z-10 mt-8 w-full py-3.5 bg-white text-[#0047FF] rounded-xl text-sm font-bold shadow-md hover:bg-gray-50 transition-colors active:scale-[0.98]">
                  Apply Dynamic Pricing
                </button>
              </div>

            </div>

          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default OwnerBookings;
