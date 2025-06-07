import { Result, SearchRequest, SearchResponse } from "@/types";

const BASE_URL = import.meta.env.VITE_GPS_ROUTES_API_URL as string;

const API_KEY = import.meta.env.VITE_GPS_ROUTES_API_KEY as string;

export async function getByObjectId(objectId: string): Promise<Result> {
  const response = await fetch(`${BASE_URL}/${objectId}`, {
    headers: { "X-API-Key": API_KEY },
  });
  return (await response.json()) as Result;
}

export async function search(criteria: SearchRequest): Promise<SearchResponse> {
  if (BASE_URL === undefined) {
    throw Error("No GPS Routes API URL specified");
  }

  if (API_KEY === undefined) {
    throw Error("No GPS Routes API Key specified");
  }

  const response = await fetch(`${BASE_URL}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify(criteria),
  });
  return (await response.json()) as SearchResponse;
}
