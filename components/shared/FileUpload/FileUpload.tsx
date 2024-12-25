// // 'use client'

// // import { useState, useRef } from 'react'
// // import { FiInbox, FiLoader, FiCheck, FiX } from 'react-icons/fi'

// // interface FileUploadProps {
// //   onFileSelect?: (file: File) => void
// // }

// // type UploadStatus = 'idle' | 'uploading' | 'success' | 'error'

// // export function FileUpload({ onFileSelect, label }: FileUploadProps) {
// //   const [isDragging, setIsDragging] = useState(false)
// //   const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle')
// //   const [uploadProgress, setUploadProgress] = useState(0)
// //   const [fileName, setFileName] = useState('')
// //   const fileInputRef = useRef<HTMLInputElement>(null)

// //   const handleDragEnter = (e: React.DragEvent) => {
// //     e.preventDefault()
// //     e.stopPropagation()
// //     setIsDragging(true)
// //   }

// //   const handleDragLeave = (e: React.DragEvent) => {
// //     e.preventDefault()
// //     e.stopPropagation()
// //     setIsDragging(false)
// //   }

// //   const handleDragOver = (e: React.DragEvent) => {
// //     e.preventDefault()
// //     e.stopPropagation()
// //   }

// //   const handleDrop = async (e: React.DragEvent) => {
// //     e.preventDefault()
// //     e.stopPropagation()
// //     setIsDragging(false)

// //     const files = Array.from(e.dataTransfer.files)
// //     if (files.length > 0) {
// //       await handleFileUpload(files[0])
// //     }
// //   }

// //   const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const files = Array.from(e.target.files || [])
// //     if (files.length > 0) {
// //       await handleFileUpload(files[0])
// //     }
// //   }

// //   const handleFileUpload = async (file: File) => {
// //     setFileName(file.name)
// //     setUploadStatus('uploading')
// //     setUploadProgress(0)
// //     onFileSelect?.(file)

// //     try {
// //       // Simulating file upload with progress
// //       for (let i = 0; i <= 100; i += 10) {
// //         setUploadProgress(i)
// //         await new Promise(resolve => setTimeout(resolve, 500))
// //       }

// //       // Simulating API call
// //       await new Promise(resolve => setTimeout(resolve, 1000))

// //       setUploadStatus('success')
// //       setTimeout(() => resetUploadState(), 3000)
// //     } catch (error) {
// //       setUploadStatus('error')
// //       setTimeout(() => resetUploadState(), 3000)
// //     }
// //   }

// //   const resetUploadState = () => {
// //     setUploadStatus('idle')
// //     setUploadProgress(0)
// //     setFileName('')
// //   }

// //   const renderUploadContent = () => {
// //     switch (uploadStatus) {
// //       case 'uploading':
// //         return (
// //           <>
// //             <FiLoader className="w-12 h-12 text-blue-500 animate-spin mb-4" />
// //             <p className="text-gray-700 mb-2">Uploading {fileName}</p>
// //             <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
// //               <div
// //                 className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
// //                 style={{ width: `${uploadProgress}%` }}
// //               />
// //             </div>
// //           </>
// //         )
// //       case 'success':
// //         return (
// //           <>
// //             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
// //               <FiCheck className="w-6 h-6 text-green-500" />
// //             </div>
// //             <p className="text-gray-700">File uploaded successfully!</p>
// //           </>
// //         )
// //       case 'error':
// //         return (
// //           <>
// //             <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
// //               <FiX className="w-6 h-6 text-red-500" />
// //             </div>
// //             <p className="text-red-500">Upload failed. Please try again.</p>
// //           </>
// //         )
// //       default:
// //         return (
// //           <>
// //             <FiInbox className="w-12 h-12 text-blue-500 mb-4" />
// //             <p className="text-gray-700 mb-2">
// //               Click or drag file to this area to upload
// //             </p>
// //             <p className="text-sm text-gray-500">
// //               Support for a single upload. Uploading features image.
// //             </p>
// //           </>
// //         )
// //     }
// //   }

// //   return (
// //     <div>
// //       <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
// //         {label}
// //       </label>
// //       <div
// //         onClick={() => uploadStatus === 'idle' && fileInputRef.current?.click()}
// //         onDragEnter={handleDragEnter}
// //         onDragOver={handleDragOver}
// //         onDragLeave={handleDragLeave}
// //         onDrop={handleDrop}
// //         className={`
// //         w-full max-w-md mx-auto
// //         p-8
// //         border-2 border-dashed rounded-lg
// //         ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}
// //         ${uploadStatus === 'idle' ? 'cursor-pointer' : 'cursor-default'}
// //         transition-colors duration-200
// //         flex flex-col items-center justify-center
// //         text-center
// //       `}
// //       >
// //         {renderUploadContent()}
// //         <input
// //           ref={fileInputRef}
// //           type="file"
// //           accept="image/*"
// //           className="hidden"
// //           onChange={handleFileInput}
// //           disabled={uploadStatus !== 'idle'}
// //         />
// //       </div>
// //     </div>
// //   )
// // }


// 'use client';

// import { useState, useRef } from 'react';
// import { FiInbox, FiLoader, FiCheck, FiX } from 'react-icons/fi';

// interface FileUploadProps {
//   onFileSelect?: (file: File) => void;
//   label?: string;
// }

// type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

// export function FileUpload({ onFileSelect, label }: FileUploadProps) {
//   const [isDragging, setIsDragging] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle');
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [fileName, setFileName] = useState('');
//   const [filePreview, setFilePreview] = useState<string | null>(null); // Store the image preview URL
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleDragEnter = (e: React.DragEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e: React.DragEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);
//   };

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = async (e: React.DragEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);

//     const files = Array.from(e.dataTransfer.files);
//     if (files.length > 0) {
//       await handleFileUpload(files[0]);
//     }
//   };

//   const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
//     if (files.length > 0) {
//       await handleFileUpload(files[0]);
//     }
//   };

//   const handleFileUpload = async (file: File) => {
//     setFileName(file.name);
//     setFilePreview(URL.createObjectURL(file)); // Generate a preview URL
//     setUploadStatus('uploading');
//     setUploadProgress(0);
//     onFileSelect?.(file);

//     try {
//       // Simulating file upload with progress
//       for (let i = 0; i <= 100; i += 10) {
//         setUploadProgress(i);
//         await new Promise((resolve) => setTimeout(resolve, 500));
//       }

//       // Simulating API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       setUploadStatus('success');
//       setTimeout(() => resetUploadState(), 5000);
//     } catch (error) {
//       setUploadStatus('error');
//       setTimeout(() => resetUploadState(), 3000);
//     }
//   };

//   const resetUploadState = () => {
//     setUploadStatus('idle');
//     setUploadProgress(0);
//     setFileName('');
//     setFilePreview(null);
//   };

//   const renderUploadContent = () => {
//     switch (uploadStatus) {
//       case 'uploading':
//         return (
//           <>
//             <FiLoader className="w-12 h-12 text-blue-500 animate-spin mb-4" />
//             <p className="text-gray-700 mb-2">Uploading {fileName}</p>
//             <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
//                 style={{ width: `${uploadProgress}%` }}
//               />
//             </div>
//           </>
//         );
//       case 'success':
//         return (
//           <>
//             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
//               <FiCheck className="w-6 h-6 text-green-500" />
//             </div>
//             <p className="text-gray-700">File uploaded successfully!</p>
//             {filePreview && (
//               <img
//                 src={filePreview}
//                 alt="Uploaded file preview"
//                 className="w-32 h-32 mt-4 rounded-lg border"
//               />
//             )}
//           </>
//         );
//       case 'error':
//         return (
//           <>
//             <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
//               <FiX className="w-6 h-6 text-red-500" />
//             </div>
//             <p className="text-red-500">Upload failed. Please try again.</p>
//           </>
//         );
//       default:
//         return (
//           <>
//             <FiInbox className="w-12 h-12 text-blue-500 mb-4" />
//             <p className="text-gray-700 mb-2">
//               Click or drag file to this area to upload
//             </p>
//             <p className="text-sm text-gray-500">
//               Support for a single upload. Uploading features image.
//             </p>
//           </>
//         );
//     }
//   };

//   return (
//     <div>
//       <label
//         htmlFor="file-upload"
//         className="block text-sm font-medium text-gray-700 mb-2"
//       >
//         {label}
//       </label>
//       <div
//         onClick={() => uploadStatus === 'idle' && fileInputRef.current?.click()}
//         onDragEnter={handleDragEnter}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//         className={`
//         w-full 
//         p-8
//         border-2 border-dashed rounded-lg
//         ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}
//         ${uploadStatus === 'idle' ? 'cursor-pointer' : 'cursor-default'}
//         transition-colors duration-200
//         flex flex-col items-center justify-center
//         text-center
//       `}
//       >
//         {renderUploadContent()}
//         <input
//           ref={fileInputRef}
//           type="file"
//           accept="image/*"
//           className="hidden"
//           onChange={handleFileInput}
//           disabled={uploadStatus !== 'idle'}
//         />
//       </div>
//     </div>
//   );
// }


'use client'

import { useState, useRef } from 'react'
import { FiUpload, FiX } from 'react-icons/fi'

interface SingleImageUploadProps {
  label: string
  onFileChange?: (file: File | null) => void
}

export function SingleImageUpload({ label, onFileChange }: SingleImageUploadProps) {
  const [file, setFile] = useState<{ preview: string; file: File } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile({
        preview: URL.createObjectURL(selectedFile),
        file: selectedFile
      })
      onFileChange?.(selectedFile)
    }
  }

  const removeFile = () => {
    setFile(null)
    onFileChange?.(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="">
      <label htmlFor="single-file-upload" className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="w-full">
        {file ? (
          <div className="relative rounded-lg border border-gray-400 overflow-hidden">
            <img
              src={file.preview}
              alt="Uploaded"
              className="w-full h-64 object-cover"
            />
            <button
              onClick={removeFile}
              className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-[185px] rounded-lg border-2 border-dashed border-gray-400 flex flex-col items-center justify-center hover:border-gray-400 transition-colors"
          >
            <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">Click or drag file to upload</span>
          </button>
        )}
        <input
          ref={fileInputRef}
          id="single-file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  )
}

