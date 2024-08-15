import axios from "axios";
import {
  NEWS_API_KEY,
  NEWS_API_URL,
  GUARDIAN_API_KEY,
  GURD_API_URL,
  NYT_API_KEY,
  NYT_API_URL,
} from "../constants";

import { normalizeData } from "../utils.js";
export const fetchNewsAPIArticles = async (query = "bitcoin") => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        q: query,
        apiKey: NEWS_API_KEY,
      },
    });

    let data = [];
    if (response.data.articles.length > 0) {
      data = normalizeData(response.data.articles, "newsapi");
    }
    return data;
  } catch (error) {
    return [];
  }
};

export const fetchGuardianArticles = async (query = "") => {
  try {
    const response = await axios.get(GURD_API_URL, {
      params: {
        q: query,
        "api-key": GUARDIAN_API_KEY,
      },
    });
    let data = [];
    if (response.data.response.results.length > 0) {
      data = normalizeData(response.data.response.results, "guardian");
    }
    return data;
  } catch (error) {
    return [];
  }
};
export const fetchNYTArticles = async (query = "") => {
  try {
    const response = await axios.get(NYT_API_URL, {
      params: {
        q: query,
        "api-key": NYT_API_KEY,
      },
    });
    let data = [];
    if (response.data.response.docs.length > 0) {
      data = normalizeData(response.data.response.docs, "nyt");
    }

    return data;
  } catch (error) {
    return [];
  }
};
