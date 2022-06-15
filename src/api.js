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

export const fetchArticleById = (id) => {
  return axios
    .get(`https://trickmirror.herokuapp.com/api/articles/${id}`)
    .then((res) => {
      return res.data.article;
    });
};

export const fetchCommentsById = (id) => {
  return axios
    .get(`https://trickmirror.herokuapp.com/api/articles/${id}/comments`)
    .then((res) => {
      return res.data.comments;
    });
};

export const patchVotes = (id, votes) => {
  return axios
    .patch(`https://trickmirror.herokuapp.com/api/articles/${id}`, {
      inc_votes: votes,
    })
    .then((res) => {
      return res.data.article;
    });
};

export const postComment = (article_id, comment) => {
  return axios
    .post(
      `https://trickmirror.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then((res) => {
      return res.data.comment;
    });
};
