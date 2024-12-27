// "use client"

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { MultipleImageUpload } from '../shared/MultipleImageUpload/MultipleImageUpload'
// import { SingleImageUpload } from '../shared/FileUpload/FileUpload'
// import ColorPicker from '../shared/ui/ColorPicker'

// interface FormData {
//   title: string
//   description: string
//   regularPrice: string
//   discountPrice: string
//   retailPrice: string
//   category: string
//   quantity: string
//   sold: string
//   shipping: string
//   image: File | null
//   laborCost: string
//   shippingCost: string
//   fabricAPrice: string
//   fabricBPrice: string
//   articleNumber: string
//   size: string
//   color: string
// }

// export default function AddProduct() {
//   const router = useRouter()
//   const [formData, setFormData] = useState<FormData>({
//     title: '',
//     description: '',
//     regularPrice: '',
//     discountPrice: '',
//     retailPrice: '',
//     category: '',
//     quantity: '',
//     sold: '',
//     shipping: '',
//     image: null,
//     laborCost: '',
//     shippingCost: '',
//     fabricAPrice: '',
//     fabricBPrice: '',
//     articleNumber: '',
//     size: '',
//     color: '',
//   })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     router.push('/products')
//   }

//   const [multipleFiles, setMultipleFiles] = useState<File[]>([])
//   const [singleFile, setSingleFile] = useState<File | null>(null)
//   const [sizes, setSizes] = useState([]);
//   const [quantities, setQuantities] = useState({});
//   const [colors, setColors] = useState([]);
//   const [colorCode, setColorCode] = useState('#000000');
//   const [colorName, setColorName] = useState('');
//   const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

//   const handleMultipleFilesChange = (files: File[]) => {
//     setMultipleFiles(files)
//     console.log('Multiple files updated:', files)
//   }

//   const handleSingleFileChange = (file: File | null) => {
//     setSingleFile(file)
//     console.log('Single file updated:', file)
//   }

//   const handleColorAdd = () => {
//     if (colorCode && colorName && !colors.some(c => c.code === colorCode)) {
//       setColors([...colors, { code: colorCode, name: colorName }]);
//       setColorCode('#000000');
//       setColorName('');
//     }
//   };

//   const handleColorRemove = (colorToRemove) => {
//     setColors(colors.filter(color => color.code !== colorToRemove.code));
//   };

//   const handleSizeChange = (size) => {
//     const updatedSizes = sizes.includes(size)
//       ? sizes.filter(s => s !== size)
//       : [...sizes, size];
//     setSizes(updatedSizes);

//     const newQuantities = { ...quantities };
//     if (!sizes.includes(size)) {
//       newQuantities[size] = 0;
//     } else {
//       delete newQuantities[size];
//     }
//     setQuantities(newQuantities);
//   };

//   const handleQuantityChange = (size, value) => {
//     setQuantities(prev => ({
//       ...prev,
//       [size]: parseInt(value, 10) || 0
//     }));
//   };


//   return (
//     <div className="p-6 bg-white rounded-lg shadow">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//           {/* <FileUpload onFileSelect={handleFileSelect} label="Feature Image"/> */}
//           <SingleImageUpload 
//               label="Upload Feature Image" 
//               onFileChange={handleSingleFileChange}
//             />
//           </div>
//           <div>
//           {/* <MultipleImageUpload label="Gallery Images"/> */}
//           <MultipleImageUpload 
//               label="Upload Gallery Images" 
//               maxFiles={10}
//               onFilesChange={handleMultipleFilesChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="articleNumber" className="block text-sm font-medium text-gray-700 mb-1">Article Number</label>
//             <input
//               type="text"
//               id="articleNumber"
//               name="articleNumber"
//               value={formData.articleNumber}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               rows={4}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="regularPrice" className="block text-sm font-medium text-gray-700 mb-1">Regular Price</label>
//             <input
//               type="number"
//               id="regularPrice"
//               name="regularPrice"
//               value={formData.regularPrice}
//               onChange={handleInputChange}
//               step="0.01"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700 mb-1">Discount Price</label>
//             <input
//               type="number"
//               id="discountPrice"
//               name="discountPrice"
//               value={formData.discountPrice}
//               onChange={handleInputChange}
//               step="0.01"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>

//           <div>
//             <label htmlFor="retailPrice" className="block text-sm font-medium text-gray-700 mb-1">Retail Price</label>
//             <input
//               type="number"
//               id="retailPrice"
//               name="retailPrice"
//               value={formData.retailPrice}
//               onChange={handleInputChange}
//               step="0.01"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//             <select
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             >
//               <option value="">Select a category</option>
//               <option value="clothing">Clothing</option>
//               <option value="accessories">Accessories</option>
//               <option value="footwear">Footwear</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
//             <input
//               type="number"
//               id="quantity"
//               name="quantity"
//               value={formData.quantity}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="sold" className="block text-sm font-medium text-gray-700 mb-1">Sold</label>
//             <input
//               type="number"
//               id="sold"
//               name="sold"
//               value={formData.sold}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="shipping" className="block text-sm font-medium text-gray-700 mb-1">Shipping</label>
//             <input
//               type="text"
//               id="shipping"
//               name="shipping"
//               value={formData.shipping}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="laborCost" className="block text-sm font-medium text-gray-700 mb-1">Labor Cost</label>
//             <input
//               type="number"
//               id="laborCost"
//               name="laborCost"
//               value={formData.laborCost}
//               onChange={handleInputChange}
//               step="0.01"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="shippingCost" className="block text-sm font-medium text-gray-700 mb-1">Shipping Cost</label>
//             <input
//               type="number"
//               id="shippingCost"
//               name="shippingCost"
//               value={formData.shippingCost}
//               onChange={handleInputChange}
//               step="0.01"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="fabricAPrice" className="block text-sm font-medium text-gray-700 mb-1">Fabric A Price</label>
//             <input
//               type="number"
//               id="fabricAPrice"
//               name="fabricAPrice"
//               value={formData.fabricAPrice}
//               onChange={handleInputChange}
//               step="0.01"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="fabricBPrice" className="block text-sm font-medium text-gray-700 mb-1">Fabric B Price</label>
//             <input
//               type="number"
//               id="fabricBPrice"
//               name="fabricBPrice"
//               value={formData.fabricBPrice}
//               onChange={handleInputChange}
//               step="0.01"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Size</label>
//             <select
//               id="size"
//               name="size"
//               value={formData.size}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             >
//               <option value="">Select a size</option>
//               <option value="XS">XS</option>
//               <option value="S">S</option>
//               <option value="M">M</option>
//               <option value="L">L</option>
//               <option value="XL">XL</option>
//               <option value="XXL">XXL</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">Color</label>
//             <ColorPicker />
//           </div>
//         </div>

//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold mb-4">Size Management</h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Available Sizes</label>
//             <div className="flex flex-wrap gap-2">
//               {sizeOptions.map(size => (
//                 <button
//                   key={size}
//                   type="button"
//                   onClick={() => handleSizeChange(size)}
//                   className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     sizes.includes(size)
//                       ? 'bg-blue-500 text-white'
//                       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {sizes.length > 0 && (
//             <div>
//               <h4 className="text-sm font-medium text-gray-700 mb-2">Quantity per Size</h4>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {sizes.map(size => (
//                   <div key={size} className="flex items-center space-x-2">
//                     <span className="w-10">{size}:</span>
//                     <input
//                       type="number"
//                       min="0"
//                       value={quantities[size] || 0}
//                       onChange={(e) => handleQuantityChange(size, e.target.value)}
//                       className="flex-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Color Management */}
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold mb-4">Color Management</h3>
//           <div className="flex flex-col space-y-4 mb-4">
//             <div className="flex items-center space-x-2">
//               <input
//                 type="color"
//                 value={colorCode}
//                 onChange={(e) => setColorCode(e.target.value)}
//                 className="w-10 h-10 rounded-md border border-gray-300"
//               />
//               <input
//                 type="text"
//                 placeholder="Color code"
//                 value={colorCode}
//                 onChange={(e) => setColorCode(e.target.value)}
//                 className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Color name"
//               value={colorName}
//               onChange={(e) => setColorName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               onClick={handleColorAdd}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Add Color
//             </button>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {colors.map((color, index) => (
//               <div
//                 key={index}
//                 className="flex items-center space-x-1 px-2 py-1 rounded-full"
//                 style={{
//                   backgroundColor: color.code,
//                   color: getContrastColor(color.code)
//                 }}
//               >
//                 <span className="inline-block w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color.code }} />
//                 <span>{color.name} ({color.code})</span>
//                 <button
//                   type="button"
//                   onClick={() => handleColorRemove(color)}
//                   className="ml-2 text-xs font-bold"
//                 >
//                   &times;
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-end space-x-4">
//           <button
//             type="button"
//             onClick={() => router.push('/products')}
//             className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:border-primary focus:outline-none hover:text-primary"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary"
//           >
//             Add Product
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }



"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MultipleImageUpload } from '../shared/MultipleImageUpload/MultipleImageUpload'
import { SingleImageUpload } from '../shared/FileUpload/FileUpload'
import ColorPicker from '../shared/ui/ColorPicker'
import { FaMinus, FaPlus } from 'react-icons/fa'

interface FormData {
  title: string
  description: string
  regularPrice: string
  discountPrice: string
  retailPrice: string
  category: string
  quantity: string
  sold: string
  shipping: string
  image: File | null
  laborCost: string
  shippingCost: string
  fabricAPrice: string
  fabricBPrice: string
  articleNumber: string
  size: string
  color: string
}

export default function AddProduct() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    regularPrice: '',
    discountPrice: '',
    retailPrice: '',
    category: '',
    quantity: '',
    sold: '',
    shipping: '',
    image: null,
    laborCost: '',
    shippingCost: '',
    fabricAPrice: '',
    fabricBPrice: '',
    articleNumber: '',
    size: '',
    color: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    router.push('/products')
  }

  const [multipleFiles, setMultipleFiles] = useState<File[]>([])
  const [singleFile, setSingleFile] = useState<File | null>(null)
  const [sizes, setSizes] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [colors, setColors] = useState([]);
  const [colorCode, setColorCode] = useState('#000000');
  const [colorName, setColorName] = useState('');
  const [quantity, setQuantity] = useState('');
  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const [sizeGroups, setSizeGroups] = useState<SizeGroup[]>([])

  const addSizeGroup = () => {
    setSizeGroups([...sizeGroups, { size: '', details: [{ colorName: '', colorCode: '', quantity: '' }] }])
  }

  const addColorToSize = (sizeIndex: number) => {
    const newSizeGroups = [...sizeGroups]
    newSizeGroups[sizeIndex].details.push({ colorName: '', colorCode: '', quantity: '' })
    setSizeGroups(newSizeGroups)
  }

  const updateSizeGroup = (index: number, field: keyof SizeGroup, value: string) => {
    const newSizeGroups = [...sizeGroups]
    if (field === 'size') {
      newSizeGroups[index].size = value
    }
    setSizeGroups(newSizeGroups)
  }

  const updateColorDetail = (sizeIndex: number, colorIndex: number, field: keyof ColorDetail, value: string) => {
    const newSizeGroups = [...sizeGroups]
    newSizeGroups[sizeIndex].details[colorIndex][field] = value
    setSizeGroups(newSizeGroups)
  }

  const removeColorDetail = (sizeIndex: number, colorIndex: number) => {
    const newSizeGroups = [...sizeGroups]
    newSizeGroups[sizeIndex].details.splice(colorIndex, 1)
    setSizeGroups(newSizeGroups)
  }

  const removeSizeGroup = (index: number) => {
    const newSizeGroups = [...sizeGroups]
    newSizeGroups.splice(index, 1)
    setSizeGroups(newSizeGroups)
  }

  const handleMultipleFilesChange = (files: File[]) => {
    setMultipleFiles(files)
    console.log('Multiple files updated:', files)
  }

  const handleSingleFileChange = (file: File | null) => {
    setSingleFile(file)
    console.log('Single file updated:', file)
  }


  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {/* <FileUpload onFileSelect={handleFileSelect} label="Feature Image"/> */}
            <SingleImageUpload
              label="Upload Feature Image"
              onFileChange={handleSingleFileChange}
            />
          </div>
          <div>
            {/* <MultipleImageUpload label="Gallery Images"/> */}
            <MultipleImageUpload
              label="Upload Gallery Images"
              maxFiles={10}
              onFilesChange={handleMultipleFilesChange}
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="articleNumber" className="block text-sm font-medium text-gray-700 mb-1">Article Number</label>
            <input
              type="text"
              id="articleNumber"
              name="articleNumber"
              value={formData.articleNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="regularPrice" className="block text-sm font-medium text-gray-700 mb-1">Regular Price</label>
            <input
              type="number"
              id="regularPrice"
              name="regularPrice"
              value={formData.regularPrice}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700 mb-1">Discount Price</label>
            <input
              type="number"
              id="discountPrice"
              name="discountPrice"
              value={formData.discountPrice}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="retailPrice" className="block text-sm font-medium text-gray-700 mb-1">Retail Price</label>
            <input
              type="number"
              id="retailPrice"
              name="retailPrice"
              value={formData.retailPrice}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select a category</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="footwear">Footwear</option>
            </select>
          </div>

          <div>
            <label htmlFor="sold" className="block text-sm font-medium text-gray-700 mb-1">Sold</label>
            <input
              type="number"
              id="sold"
              name="sold"
              value={formData.sold}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div> */}

          <div>
            <label htmlFor="shipping" className="block text-sm font-medium text-gray-700 mb-1">Shipping</label>
            <input
              type="text"
              id="shipping"
              name="shipping"
              value={formData.shipping}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="laborCost" className="block text-sm font-medium text-gray-700 mb-1">Labor Cost</label>
            <input
              type="number"
              id="laborCost"
              name="laborCost"
              value={formData.laborCost}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="shippingCost" className="block text-sm font-medium text-gray-700 mb-1">Shipping Cost</label>
            <input
              type="number"
              id="shippingCost"
              name="shippingCost"
              value={formData.shippingCost}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="fabricAPrice" className="block text-sm font-medium text-gray-700 mb-1">Fabric A Price</label>
            <input
              type="number"
              id="fabricAPrice"
              name="fabricAPrice"
              value={formData.fabricAPrice}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="fabricBPrice" className="block text-sm font-medium text-gray-700 mb-1">Fabric B Price</label>
            <input
              type="number"
              id="fabricBPrice"
              name="fabricBPrice"
              value={formData.fabricBPrice}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Size & Color Management</h2>
          <button
            onClick={addSizeGroup}
            className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/80"
          >
            <FaPlus className="w-4 h-4" />
            Add Size 
          </button>
        </div>

        {sizeGroups.map((sizeGroup, sizeIndex) => (
          <div key={sizeIndex} className="border rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-4">
              <select
                value={sizeGroup.size}
                onChange={(e) => updateSizeGroup(sizeIndex, 'size', e.target.value)}
                className="border rounded-lg px-3 py-2 w-32"
              >
                <option value="">Select Size</option>
                <option value="2xl">2XL</option>
                <option value="xl">XL</option>
                <option value="l">L</option>
                <option value="m">M</option>
                <option value="s">S</option>
              </select>
              <button
                onClick={() => removeSizeGroup(sizeIndex)}
                className="text-red-600 hover:text-red-700 border border-red-600 rounded-full p-2"
              >
                <FaMinus className="" />
              </button>
            </div>

            {sizeGroup.details.map((detail, colorIndex) => (
              <div key={colorIndex} className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Color Name"
                  value={detail.colorName}
                  onChange={(e) => updateColorDetail(sizeIndex, colorIndex, 'colorName', e.target.value)}
                  className="border rounded-lg px-3 py-2 flex-1"
                />
                {/* <input
                  type="text"
                  placeholder="Color Code"
                  value={detail.colorCode}
                  onChange={(e) => updateColorDetail(sizeIndex, colorIndex, 'colorCode', e.target.value)}
                  className="border rounded-lg px-3 py-2 w-32"
                /> */}
                <ColorPicker/>
                <input
                  type="number"
                  placeholder="Quantity"
                  value={detail.quantity}
                  onChange={(e) => updateColorDetail(sizeIndex, colorIndex, 'quantity', e.target.value)}
                  className="border rounded-lg px-3 py-2 w-32"
                />
                <button
                  onClick={() => removeColorDetail(sizeIndex, colorIndex)}
                  className="text-red-600 hover:text-red-700 border border-red-600 rounded-full p-2"
                >
                  <FaMinus className="" />
                </button>
              </div>
            ))}

            <button
              onClick={() => addColorToSize(sizeIndex)}
              className="text-blue-500 flex items-center gap-2 hover:text-blue-700"
            >
              <FaPlus className="w-4 h-4" />
              Add Color
            </button>
          </div>
        ))}
      </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.push('/products')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:border-primary focus:outline-none hover:text-primary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  )
}

