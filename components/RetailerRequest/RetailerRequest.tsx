'use client'

import { useState } from 'react'
import { FiCheck, FiX, FiChevronUp, FiChevronRight } from 'react-icons/fi'
import { Pagination } from '../shared/Pagination/Pagination'

const SAMPLE_REQUESTS: Request[] = [
    {
        id: '1',
        name: 'Alice Brown',
        email: 'alice@example.com',
        status: 'pending',
        dateSubmitted: '2024-01-20',
        type: 'Retailer'
    },
    {
        id: '2',
        name: 'Bob Johnson',
        email: 'bob@example.com',
        status: 'accepted',
        dateSubmitted: '2024-01-19',
        type: 'Agent'
    },
    {
        id: '3',
        name: 'Charlie Wilson',
        email: 'charlie@example.com',
        status: 'declined',
        dateSubmitted: '2024-01-18',
        type: 'Retailer'
    },
    {
        id: '4',
        name: 'David Smith',
        email: 'david@example.com',
        status: 'pending',
        dateSubmitted: '2024-01-17',
        type: 'Agent'
    }
]

export function RetailerRequest() {
    const [requests, setRequests] = useState(SAMPLE_REQUESTS)
    const [sortField, setSortField] = useState<keyof Request>('name')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalCount, setTotalCount] = useState<number>(16);
    const [viewCount, setViewCount] = useState<number>(8);
    const totalPages = Math.ceil(totalCount / viewCount);

    const handleSort = (field: keyof Request) => {
        if (field === sortField) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field)
            setSortDirection('asc')
        }
    }

    const handleAccept = (id: string) => {
        setRequests(requests.map(request =>
            request.id === id ? { ...request, status: 'accepted' } : request
        ))
    }

    const handleDecline = (id: string) => {
        setRequests(requests.map(request =>
            request.id === id ? { ...request, status: 'declined' } : request
        ))
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'accepted':
                return 'bg-green-100 text-green-800'
            case 'declined':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-yellow-100 text-yellow-800'
        }
    }

    const sortedRequests = [...requests].sort((a, b) => {
        if (sortDirection === 'asc') {
            return a[sortField] < b[sortField] ? -1 : 1
        } else {
            return a[sortField] > b[sortField] ? -1 : 1
        }
    })

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th
                                className="px-6 py-4 text-left text-sm font-medium text-gray-500 cursor-pointer"
                                onClick={() => handleSort('name')}
                            >
                                <div className="flex items-center gap-2">
                                    NAME
                                    {sortField === 'name' && (
                                        <FiChevronUp className={`w-4 h-4 transition-transform ${sortDirection === 'desc' ? 'transform rotate-180' : ''
                                            }`} />
                                    )}
                                </div>
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">EMAIL</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">TYPE</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">STATUS</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">DATE SUBMITTED</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {sortedRequests.map((request, index) => (
                            <tr
                                key={request.id}
                                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                            >
                                <td className="px-6 py-4 text-sm text-gray-900">{request.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{request.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{request.type}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(request.status)}`}>
                                        {request.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{request.dateSubmitted}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        {request.status === 'pending' && (
                                            <>
                                                <button
                                                    onClick={() => handleAccept(request.id)}
                                                    className="p-1 rounded-full text-green-600 hover:bg-green-50"
                                                    title="Accept"
                                                >
                                                    <FiCheck className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleDecline(request.id)}
                                                    className="p-1 rounded-full text-red-600 hover:bg-red-50"
                                                    title="Decline"
                                                >
                                                    <FiX className="w-5 h-5" />
                                                </button>
                                            </>
                                        )}
                                    </div>
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

        </div>
    )
}

