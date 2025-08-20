import { useState } from 'react';
import { sampleData } from '../../Data';   // your static credential object



export default function  Analyse ()  {
  const [totalVisitors, setTotalVisitors] = useState('12,543');
  const [monthlyVisitors, setMonthlyVisitors] = useState('2,341');
  const [dailyVisitors, setDailyVisitors] = useState('89');
  const [bounceRate, setBounceRate] = useState('23%');

  const refreshData = () => {
    const newTotal = sampleData.totalVisitors[Math.floor(Math.random() * sampleData.totalVisitors.length)];
    const newMonthly = sampleData.monthlyVisitors[Math.floor(Math.random() * sampleData.monthlyVisitors.length)];
    const newDaily = sampleData.dailyVisitors[Math.floor(Math.random() * sampleData.dailyVisitors.length)];
    const newBounce = sampleData.bounceRate[Math.floor(Math.random() * sampleData.bounceRate.length)];

    setTotalVisitors(newTotal.toLocaleString());
    setMonthlyVisitors(newMonthly.toLocaleString());
    setDailyVisitors(newDaily.toString());
    setBounceRate(newBounce);

    showNotification('Data refreshed successfully!');
  };

  const exportData = () => {
    const data = { totalVisitors, monthlyVisitors, dailyVisitors, bounceRate, exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dashboard-report.json';
    link.click();
    URL.revokeObjectURL(url);
    showNotification('Report exported successfully!');
  };

  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.remove('translate-x-full'), 100);
    setTimeout(() => { notification.classList.add('translate-x-full'); setTimeout(() => document.body.removeChild(notification), 300); }, 3000);
  };

  return (
    <div className="bg-gray-50  px-6 py-8">
      {/* Header */}
      <div className="mt-8 mb-8 flex gap-4">
        <button onClick={refreshData} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Refresh Data
        </button>
        <button onClick={exportData} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Export Report
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-6 mb-8 ">
        {/* Total Visitors */}
        <div className="bg-card-bg rounded-lg shadow-sm border border-gray-200 p-6 flex justify-between items-start hover:shadow-md hover:scale-105 transition-transform">
          <div>
            <p className="text-text-secondary text-sm font-medium mb-1">Total Visitors</p>
            <p className="text-3xl font-bold text-text-primary">{totalVisitors}</p>
          </div>
          <div className="text-blue-500">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>

        {/* Monthly Visitors */}
        <div className="bg-card-bg rounded-lg shadow-sm border border-gray-200 p-6 flex justify-between items-start hover:shadow-md hover:scale-105 transition-transform">
          <div>
            <p className="text-text-secondary text-sm font-medium mb-1">Monthly Visitors</p>
            <p className="text-3xl font-bold text-text-primary">{monthlyVisitors}</p>
          </div>
          <div className="text-green-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </div>
        </div>

        {/* Daily Visitors */}
        <div className="bg-card-bg rounded-lg shadow-sm border border-gray-200 p-6 flex justify-between items-start hover:shadow-md hover:scale-105 transition-transform">
          <div>
            <p className="text-text-secondary text-sm font-medium mb-1">Daily Visitors</p>
            <p className="text-3xl font-bold text-text-primary">{dailyVisitors}</p>
          </div>
          <div className="text-purple-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </div>
        </div>

        {/* Bounce Rate */}
        <div className="bg-card-bg rounded-lg shadow-sm border border-gray-200 p-6 flex justify-between items-start hover:shadow-md hover:scale-105 transition-transform">
          <div>
            <p className="text-text-secondary text-sm font-medium mb-1">Bounce Rate</p>
            <p className="text-3xl font-bold text-text-primary">{bounceRate}</p>
          </div>
          <div className="text-orange-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};