import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://trickmirror.herokuapp.com/api/articles")
    .then((res) => {
      return res.data.articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://trickmirror.herokuapp.com/api/topics")
    .then((res) => {
      return res.data.topics;
    });
};


export const fetchArticlesByTopic = (topic) => {
  return axios
    .get(`https://trickmirror.herokuapp.com/api/articles?topic=${topic}`)
    .then((res) => {
      return res.data.articles;
    });
};


