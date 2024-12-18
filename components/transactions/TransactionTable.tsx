import { transactions } from "@/config/transactions"
import { useState } from "react"
import { Pagination } from "../shared/Pagination/Pagination"

export default function TransactionTable() {
    const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 2 
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Here you would typically fetch data for the new page
  }
  
    return (
      <div className="w-full overflow-x-auto bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="py-4 px-4 font-medium text-blue-600">DATE & TIME</th>
              <th className="py-4 px-4 font-medium">SELLER</th>
              <th className="py-4 px-4 font-medium">SKU</th>
              <th className="py-4 px-4 font-medium">TYPE</th>
              <th className="py-4 px-4 font-medium">STATUS</th>
              <th className="py-4 px-4 font-medium">CURR</th>
              <th className="py-4 px-4 font-medium">FEE</th>
              <th className="py-4 px-4 font-medium">TAX</th>
              <th className="py-4 px-4 font-medium">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t border-gray-100">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <svg 
                      className="w-4 h-4 text-blue-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <div>
                      <div>{transaction.date}</div>
                      <div className="text-sm text-gray-500">at {transaction.time}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    {/* <img
                      src={transaction.seller.logo}
                      alt={transaction.seller.name}
                      className="w-8 h-8 rounded-full"
                    /> */}
                    <span>{transaction.seller.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {transaction.sku}
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {transaction.type}
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    transaction.status === 'APPROVED' ? 'bg-blue-600 text-white' :
                    transaction.status === 'WAITING' ? 'bg-emerald-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {transaction.currency}
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {transaction.fee}
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {transaction.tax}
                </td>
                <td className="py-4 px-4 font-medium">
                  ${transaction.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-t">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    )
  }
  
  