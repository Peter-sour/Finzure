import React from 'react';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden sm:block">
        <div className="p-6">
          <h2 className="text-xl font-bold text-blue-600">Finzure</h2>
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-700 hover:text-blue-600">🏠 Dashboard</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">📊 Reports</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">👤 Profile</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">⚙️ Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
          <p className="text-gray-600">Here's an overview of your activities.</p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-700">Users</h2>
            <p className="text-3xl font-bold text-blue-600">1,245</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
            <p className="text-3xl font-bold text-green-500">$12,430</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-700">Tasks</h2>
            <p className="text-3xl font-bold text-yellow-500">37</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-sm text-gray-400 text-center">
          © 2025 Finzure. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
