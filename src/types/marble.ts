import { z } from 'zod';

export const SocialPlatformSchema = z.enum([
  "x",
  "github",
  "facebook",
  "instagram",
  "youtube",
  "tiktok",
  "linkedin",
  "website",
  "onlyfans",
  "discord",
  "bluesky"
]);
export type SocialPlatform = z.infer<typeof SocialPlatformSchema>;

export const SocialSchema = z.object({
  url: z.string(),
  platform: SocialPlatformSchema,
});
export type Social = z.infer<typeof SocialSchema>;

export const AuthorSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  image: z.string().nullable(),
  bio: z.string().nullable(),
  role: z.string().nullable(),
  socials: z.array(SocialSchema),
});
export type Author = z.infer<typeof AuthorSchema>;

export const TagSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable(),
    count: z.object({
        posts: z.number(),
    }),
});
export type Tag = z.infer<typeof TagSchema>;

export const CategorySchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable(),
    count: z.object({
        posts: z.number(),
    }),
});
export type Category = z.infer<typeof CategorySchema>;

export const PostSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  featured: z.boolean(),
  description: z.string(),
  coverImage: z.string().url(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  authors: z.array(AuthorSchema),
  category: CategorySchema.omit({ count: true }),
  tags: z.array(TagSchema.omit({ count: true })),
  attribution: z.object({
    author: z.string(),
    url: z.string().url(),
  }).nullable(),
});
export type Post = z.infer<typeof PostSchema>;

export const PaginationSchema = z.object({
  limit: z.number(),
  currentPage: z.number(),
  nextPage: z.number().nullable(),
  previousPage: z.number().nullable(),
  totalItems: z.number(),
  totalPages: z.number(),
});
export type Pagination = z.infer<typeof PaginationSchema>;

export const MarblePostListResponseSchema = z.object({
    posts: z.array(PostSchema),
    pagination: PaginationSchema,
});
export type MarblePostListResponse = z.infer<typeof MarblePostListResponseSchema>;

export const MarblePostResponseSchema = z.object({
    post: PostSchema,
});
export type MarblePostResponse = z.infer<typeof MarblePostResponseSchema>;

export const MarbleTagResponseSchema = z.object({
    tag: TagSchema,
});
export type MarbleTagResponse = z.infer<typeof MarbleTagResponseSchema>;

export const MarbleTagListResponseSchema = z.object({
    tags: z.array(TagSchema),
    pagination: PaginationSchema,
});
export type MarbleTagListResponse = z.infer<typeof MarbleTagListResponseSchema>;

export const MarbleCategoryResponseSchema = z.object({
    category: CategorySchema,
});
export type MarbleCategoryResponse = z.infer<typeof MarbleCategoryResponseSchema>;

export const MarbleCategoryListResponseSchema = z.object({
    categories: z.array(CategorySchema),
    pagination: PaginationSchema,
});
export type MarbleCategoryListResponse = z.infer<typeof MarbleCategoryListResponseSchema>;

export const MarbleAuthorResponseSchema = z.object({
    author: AuthorSchema,
});
export type MarbleAuthorResponse = z.infer<typeof MarbleAuthorResponseSchema>;

export const MarbleAuthorListResponseSchema = z.object({
    authors: z.array(AuthorSchema),
    pagination: PaginationSchema,
});
export type MarbleAuthorListResponse = z.infer<typeof MarbleAuthorListResponseSchema>;