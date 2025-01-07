import { Result } from "@/types";

const BASE_URL = import.meta.env.VITE_GPS_ROUTES_API_URL;

export async function getByObjectId(objectId: string): Promise<Result> {
  const response = await fetch(`${BASE_URL}/${objectId}`);
  return (await response.json()) as Result;
}
