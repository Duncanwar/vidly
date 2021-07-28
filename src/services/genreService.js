import http from "../utils/httpService";

export async function getGenres() {
  return http.get(`/genres`);
}
