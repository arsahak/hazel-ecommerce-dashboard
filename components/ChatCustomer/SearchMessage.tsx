'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiSearch, FiChevronDown, FiMic, FiImage } from 'react-icons/fi'
// import { Chat } from '@/types/chat'
export interface Message {
    id: string
    content: string
    timestamp: string
    type: 'text' | 'voice' | 'photo'
    attachments?: {
      type: 'voice' | 'photo'
      duration?: string
    }[]
  }
  
  export interface ChatUser {
    id: string
    name: string
    avatar: string
    status?: string
    lastSeen?: string
  }
  
  export interface Chat {
    id: string
    user: ChatUser
    lastMessage: Message
    isActive?: boolean
  }

const SAMPLE_CHATS: Chat[] = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Luy Robin',
      avatar: '/assets/images.png', 
      status: 'writes'
    },
    lastMessage: {
      id: '1',
      content: 'Most of its text is made up from sections 1.10.32-3 of Cicero\'s De finibus bonorum et malorum (On the boundaries of Good and Evil; finibus may also be translated as purposes).',
      timestamp: '1 minute ago',
      type: 'text'
    }
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Jared Sunn',
      avatar: '/assets/images.png',
      status: 'records voice message'
    },
    lastMessage: {
      id: '2',
      content: 'Voice message',
      timestamp: '1 minute ago',
      type: 'voice',
      attachments: [
        { type: 'voice', duration: '01:15' },
        { type: 'photo' }
      ]
    }
  },
  {
    id: '3',
    user: {
      id: '3',
      name: 'Nika Jerrardo',
      avatar: '/assets/images.png',
      lastSeen: '3 hours ago'
    },
    lastMessage: {
      id: '3',
      content: 'Cicero famously orated against his political opponent Lucius Sergius Catilina.',
      timestamp: '3 days ago',
      type: 'text'
    },
    isActive: true
  }
]

export function SearchChat() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredChats, setFilteredChats] = useState(SAMPLE_CHATS)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filtered = SAMPLE_CHATS.filter(chat => 
      chat.user.name.toLowerCase().includes(query.toLowerCase()) ||
      chat.lastMessage.content.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredChats(filtered)
  }

  return (
    <div className="lg:w-[50%] bg-white rounded-2xl shadow-sm">
      <div className="p-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
            <span className="text-sm">Messages</span>
            <FiChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`p-3 rounded-xl transition-colors ${
                chat.isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex gap-3">
                <Image
                  src={chat.user.avatar}
                  alt={chat.user.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${chat.isActive ? 'text-white' : 'text-gray-900'}`}>
                        {chat.user.name}
                      </span>
                      {chat.user.status && (
                        <span className={`text-xs ${chat.isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                          {chat.user.status}
                        </span>
                      )}
                    </div>
                    <span className={`text-xs ${chat.isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                      {chat.lastMessage.timestamp}
                    </span>
                  </div>
                  <p className={`text-sm truncate ${chat.isActive ? 'text-blue-50' : 'text-gray-600'}`}>
                    {chat.lastMessage.content}
                  </p>
                  {chat.lastMessage.attachments && (
                    <div className="flex gap-2 mt-2">
                      {chat.lastMessage.attachments.map((attachment, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-1 px-2 py-1 rounded ${
                            chat.isActive ? 'bg-blue-400' : 'bg-gray-100'
                          }`}
                        >
                          {attachment.type === 'voice' && (
                            <>
                              <FiMic className="w-4 h-4" />
                              <span className="text-xs">{attachment.duration}</span>
                            </>
                          )}
                          {attachment.type === 'photo' && <FiImage className="w-4 h-4" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

