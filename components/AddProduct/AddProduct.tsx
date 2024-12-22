"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MultipleImageUpload } from '../shared/MultipleImageUpload/MultipleImageUpload'
import { FileUpload } from '../shared/FileUpload/FileUpload'
import ColorPicker from '../shared/ui/ColorPicker'

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }))
    }
  }

  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file)
    // Here you would typically handle the actual file upload to your server
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    router.push('/products')
  }

  return (
    <div className=" mt-10 p-6 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
          <FileUpload onFileSelect={handleFileSelect} label="Feature Image"/>
          </div>
          <div>
          <MultipleImageUpload label="Gallery Images"/>
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
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
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
          </div>

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

          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Size</label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select a size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>

          <div>
            <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">Color</label>
            <ColorPicker />
          </div>

          {/* <div className="">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
              multiple={true}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div> */}
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

