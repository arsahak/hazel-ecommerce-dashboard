"use server";

import { auth } from "@/auth";

export async function addProductCategory(
  formData: Record<string, string>
): Promise<any> {
  const session = await auth();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/create-categories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `${session?.user?.accessToken || ""}`,
        },
        body: JSON.stringify(formData),
      }
    );
    revalidateTag("category");

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to create category.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      ...data.payload,
    };
  } catch (error) {
    console.error("Error creating category:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function getProductCategory(
  search: string = "",
  page: number = 1,
  limit: number = 5
): Promise<any> {
  try {
    const query = new URLSearchParams({
      search,
      page: page.toString(),
      limit: limit.toString(),
    }).toString();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories?${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { tags: ["category-delete"], revalidate: 3600 },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to fetch categories.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      categories: data.payload.categories,
      pagination: data.payload.pagination,
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}

export async function productCategoryDelete(id: string = ""): Promise<any> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/delete-category/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("category-delete");

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData?.message || "Failed to delete category.",
        ok: false,
      };
    }

    const data = await response.json();
    return {
      ok: true,
      message: data?.message || "Category deleted successfully.",
    };
  } catch (error) {
    console.error("Error deleting category:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      ok: false,
    };
  }
}
