/**
 * This funciton normalizes API data from different sources (NewsAPI, The Guardian, NYT)
 * to a consistent format that can be used across the application.
 *
 * Normalized properties: title, author, source, publishedAt, url, category.
 */

export const normalizeData = (data, source) => {
  switch (source) {
    case "newsapi":
      return data.map((article) => ({
        title: article.title,
        author: article.author || "Unknown Arthor",
        source: article.source.name,
        publishedAt: article.publishedAt.split("T")[0], // Extract only the date part from the timestamp
        url: article.url,
        category: "Unknown Category",
      }));
    case "guardian":
      return data.map((article) => ({
        title: article.webTitle,
        author: "Unknown Arthor",
        source: "The Guardian",
        publishedAt: article.webPublicationDate.split("T")[0], // Extract only the date part from the timestamp
        url: article.webUrl,
        category: article.sectionName || "Unknown Category",
      }));
    case "nyt":
      return data.map((article) => ({
        title: article.headline.main,
        author:
          article.byline?.original?.replace(/^By\s+/i, "") || "Unknown Arthor",
        source: article.source,
        publishedAt: article.pub_date.split("T")[0],
        url: article.web_url,
        category: article.news_desk || "Unknown Category",
      }));
    default:
      return [];
  }
};

/**
 * This Function Filters the list of articles based on the selected filters (date, source, category, author).
 */
export const handleFilters = (articles, filters) => {
  return articles.filter((article) => {
    const filterByDate = filters.date
      ? article.publishedAt.includes(filters.date)
      : true;
    const filterBySource = filters.source
      ? article.source.includes(filters.source)
      : true;
    const filterByCategory = filters.category
      ? article.category.includes(filters.category)
      : true;
    const filterByAuthor = filters.author
      ? article.author.includes(filters.author)
      : true;
    return filterByDate && filterBySource && filterByCategory && filterByAuthor;
  });
};

/**
 * Initializes filter options to their default state i.e (empty strings).
 */
export const initializeFilters = () => ({
  date: "",
  source: "",
  category: "",
  author: "",
});
