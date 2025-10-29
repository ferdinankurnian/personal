import type {
  MarbleAuthorListResponse,
  MarbleCategoryListResponse,
  MarblePostResponse,
  MarblePostListResponse,
  MarbleTagListResponse,
} from "@/types/marble";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const url = process.env.MARBLE_API_URL;
const key = process.env.MARBLE_WORKSPACE_KEY;

export const getPosts = createServerFn().handler(async () => {
  try {
    const raw = await fetch(`${url}/${key}/posts`);
    const data: MarblePostListResponse = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getTags = createServerFn().handler(async () => {
  try {
    const raw = await fetch(`${url}/${key}/tags`);
    const data: MarbleTagListResponse = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getSinglePost = createServerFn()
  .inputValidator(z.string())
  .handler(async ({ data: slug }) => {
    try {
      const raw = await fetch(`${url}/${key}/posts/${slug}`);
      const data: MarblePostResponse = await raw.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  });

export const getCategories = createServerFn().handler(async () => {
  try {
    const raw = await fetch(`${url}/${key}/categories`);
    const data: MarbleCategoryListResponse = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getAuthors = createServerFn().handler(async () => {
  try {
    const raw = await fetch(`${url}/${key}/authors`);
    const data: MarbleAuthorListResponse = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});
