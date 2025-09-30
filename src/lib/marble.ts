import axios from "axios";
import { Post, PostsResponse } from "./types";

const url = process.env.MARBLE_API_URL;
const key = process.env.MARBLE_WORKSPACE_KEY;

export async function getPosts(): Promise<PostsResponse | undefined> {
  try {
    const response = await axios.get<PostsResponse>(`${url}/${key}/posts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSinglePost(slug: string): Promise<Post | undefined> {
  try {
    const response = await axios.get<Post>(`${url}/${key}/posts/${slug}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTags() {
  try {
    const response = await axios.get(`${url}/${key}/tags`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories() {
  try {
    const response = await axios.get(`${url}/${key}/categories`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthors() {
  try {
    const response = await axios.get(`${url}/${key}/authors`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
