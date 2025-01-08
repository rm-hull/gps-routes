import { Result, SearchRequest, SearchResponse } from "@/types";

const BASE_URL = import.meta.env.VITE_GPS_ROUTES_API_URL;

export async function getByObjectId(objectId: string): Promise<Result> {
  const response = await fetch(`${BASE_URL}/${objectId}`);
  return (await response.json()) as Result;
}

export async function search(criteria: SearchRequest): Promise<SearchResponse> {
  const response = await fetch(`${BASE_URL}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(criteria),
  });
  return (await response.json()) as SearchResponse;
}