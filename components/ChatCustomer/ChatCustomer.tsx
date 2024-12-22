"use client"

import { useState } from 'react'
// import { MoreVertical, Paperclip, Send, Smile } from 'lucide-react'
import Image from 'next/image'
import { CgMoreVertical } from 'react-icons/cg'
import { GiPaperClip } from 'react-icons/gi'
import { BiSend, BiSmile } from 'react-icons/bi'
import { messages } from '@/config/messages'
import { SearchChat } from './SearchMessage'

interface Message {
    id: string
    text: string
    time: string
    type: 'sent' | 'received'
    attachment?: {
        name: string
        size: string
    }
}

export default function ChatInterface() {

    return (
        <div className='flex gap-5 justify-between  mt-5'>
            <SearchChat/>
            <div className="max-w-2xl mx-auto h-screen bg-white flex flex-col">
                {/* Header */}
                <div className="flex items-center p-4 border-b">
                    <div className="flex items-center flex-1">
                        <Image
                            src="/assets/images.png"
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="ml-3">
                            <h2 className="text-sm font-semibold">Nika Jerrardo</h2>
                            <p className="text-xs text-gray-500">Last active 5 hours ago</p>
                        </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <CgMoreVertical className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                        >
                            {message.type === 'received' && (
                                <Image
                                    src={message.img}
                                    alt="Profile"
                                    width={32}
                                    height={32}
                                    className="rounded-full mr-2 self-end"
                                />
                            )}
                            <div
                                className={`max-w-[80%] ${message.type === 'sent'
                                        ? 'bg-[#0D7AFF] text-white rounded-t-2xl rounded-bl-2xl'
                                        : 'bg-gray-100 text-gray-900 rounded-t-2xl rounded-br-2xl'
                                    } p-3`}
                            >
                                {message.attachment ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                            <GiPaperClip className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{message.attachment.name}</p>
                                            {message.attachment.size && (
                                                <p className="text-xs opacity-70">{message.attachment.size}</p>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-sm">{message.text}</p>
                                )}
                                <p
                                    className={`text-xs mt-1 ${message.type === 'sent' ? 'text-blue-100' : 'text-gray-500'
                                        }`}
                                >
                                    {message.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t">
                    <div className="flex items-center bg-gray-100 rounded-full p-1">
                        <div className="flex space-x-1 px-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <GiPaperClip className="w-5 h-5 text-gray-500" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <BiSmile className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Type a message here"
                            className="flex-1 bg-transparent px-2 py-1.5 focus:outline-none text-sm"
                        />
                        <button className="w-8 h-8 bg-[#0D7AFF] text-white rounded-full flex items-center justify-center">
                            <BiSend className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

