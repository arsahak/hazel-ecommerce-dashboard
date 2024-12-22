'use client'

import { useState, useRef } from 'react'
import { FiPlus, FiImage, FiAlertCircle } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface UploadingFile {
  id: string
  file: File
  preview: string
  progress: number
  status: 'uploading' | 'error' | 'complete'
}

export function MultipleImageUpload({label}) {
  const [files, setFiles] = useState<UploadingFile[]>([])
  const [showWarning, setShowWarning] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const MAX_FILES = 10

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || [])
    
    if (files.length + selectedFiles.length > MAX_FILES) {
      setShowWarning(true)
      setTimeout(() => setShowWarning(false), 3000) // Hide warning after 3 seconds
      return
    }

    const newFiles = selectedFiles.map(file => ({
      id: Math.random().toString(36).substring(7),
      file,
      preview: URL.createObjectURL(file),
      progress: 0,
      status: 'uploading' as const
    }))

    setFiles(prev => [...prev, ...newFiles])

    // Simulate upload progress for each file
    newFiles.forEach(file => {
      simulateUpload(file.id)
    })
  }

  const simulateUpload = (fileId: string) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setFiles(prev => 
        prev.map(file => 
          file.id === fileId 
            ? { 
                ...file, 
                progress,
                status: progress === 100 ? 'complete' : 'uploading'
              }
            : file
        )
      )
      if (progress === 100) clearInterval(interval)
    }, 500)
  }

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId))
  }

  return (
    <div className="p-6">
      <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      {showWarning && (
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2 text-yellow-700">
          <FiAlertCircle className="w-5 h-5" />
          <span>Maximum {MAX_FILES} images allowed</span>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {files.map(file => (
          <div
            key={file.id}
            className="relative aspect-square rounded-lg border border-gray-400 overflow-hidden group"
          >
            {file.status === 'uploading' ? (
              <div className="absolute inset-0 bg-white p-4">
                <img
                  src={file.preview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg opacity-50"
                />
                <div className="absolute inset-x-4 bottom-4">
                  <div className="text-sm mb-2">Uploading...</div>
                  <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : file.status === 'error' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white">
                <FiImage className="w-8 h-8 text-red-500 mb-2" />
                <span className="text-sm text-red-500">{file.file.name}</span>
              </div>
            ) : (
              <>
                <img
                  src={file.preview}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeFile(file.id)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <RiDeleteBin6Line  className="w-4 h-4 transform " />
                </button>
              </>
            )}
          </div>
        ))}

        {files.length < MAX_FILES && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="aspect-square w-full rounded-lg border-2 border-dashed border-gray-400 flex flex-col items-center justify-center hover:border-gray-400 transition-colors"
          >
            <FiPlus className="w-6 text-gray-400" />
            <span className="text-sm text-gray-500">Upload</span>
          </button>
        )}

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  )
}

