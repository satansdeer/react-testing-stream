import { useState, useEffect } from "react"
import { getProducts } from "../utils/api"
import { Category } from "../shared/types"

export const useProducts = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        setCategories(data.categories || [])
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }
    fetchProducts()
  }, [])

  return { categories, isLoading, error }
}
