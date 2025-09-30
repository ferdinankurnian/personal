// Based on Marble CMS API docs
interface Author {
  id: string;
  name: string;
  // Other properties might exist
}

interface Category {
  id:string;
  name: string;
  slug: string;
  // Other properties might exist
}

interface Tag {
  id: string;
  name: string;
  slug: string;
  // Other properties might exist
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  description: string;
  coverImage: string; // This is a URL string
  publishedAt: string; // ISO date string
  authors: Author[];
  category: Category;
  tags: Tag[];
}

export interface PostsResponse {
  posts: Post[];
  pagination: {
    limit: number | string;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    totalPages: number;
    totalItems: number;
  };
}
