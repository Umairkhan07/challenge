import { useQueries } from "@tanstack/react-query";
import {
  fetchGuardianArticles,
  fetchNewsAPIArticles,
  fetchNYTArticles,
} from "../services";

const useFetchAllArticles = (query) => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["nytArticles", query],
        queryFn: () => fetchNYTArticles(query),
      },
      {
        queryKey: ["guardianArticles", query],
        queryFn: () => fetchGuardianArticles(query),
      },
      {
        queryKey: ["newsapiArticles", query],
        queryFn: () => fetchNewsAPIArticles(query),
      },
    ],
  });

  const allArticles = results
    ?.filter((result) => result.data)
    .flatMap((result) => result.data);

  const isLoading = results.some((result) => result.isLoading);
  const error = results.find((result) => result.error)?.error;

  return { allArticles, isLoading, error };
};

export default useFetchAllArticles;
