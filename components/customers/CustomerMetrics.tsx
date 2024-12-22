export default function CustomerMetrics() {
    return (
      <div className="grid gap-6 pt-5 md:grid-cols-4 ">
        {/* Metric Cards */}
        <div className="bg-white h-48 rounded-lg p-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <div className="text-4xl font-bold">32,987</div>
              <div className="text-gray-600 mt-1">All</div>
            </div>
          </div>
        </div>
  
        <div className="bg-white h-48 rounded-lg p-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <div className="text-4xl font-bold">17,153</div>
              <div className="text-gray-600 mt-1">New</div>
            </div>
          </div>
        </div>
  
        <div className="bg-white h-48 rounded-lg p-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-lg bg-pink-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <div className="text-4xl font-bold">7,587</div>
              <div className="text-gray-600 mt-1">Regular</div>
            </div>
          </div>
        </div>
  
        {/* Conversion Rate Section */}
        <div className="bg-white h-48 rounded-lg p-6 shadow-sm">
          <div className="space">
            <h2 className="text-xl font-semibold">Conversion Rate</h2>
            
            {/* <div className="space-y-4">
              <div className="grid grid-cols-4 text-sm text-gray-500">
                <div>YEAR</div>
                <div>CUSTOMERS</div>
                <div>TREND</div>
                <div>REVENUE</div>
              </div>
              
              <div className="grid grid-cols-4 text-sm">
                <div>2022</div>
                <div>3,234</div>
                <div>$10%</div>
                <div>$124k</div>
              </div>
              
              <div className="grid grid-cols-4 text-sm">
                <div>2023</div>
                <div>12,345</div>
                <div>$35%</div>
                <div>$32k</div>
              </div>
            </div> */}
  
            <div className="pt-4 border-t space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold">32,547</div>
                  <div className="text-sm text-gray-500">Regular</div>
                </div>
                <div className="flex items-center text-emerald-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="ml-1">+14.08%</span>
                </div>
              </div>
  
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold">+12,345</div>
                  <div className="text-sm text-gray-500">New</div>
                </div>
                <div className="flex items-center text-emerald-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="ml-1">+23%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  