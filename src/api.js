import axios from "axios";

export const fetchArticles = (params) => {
  return axios
    .get("https://encouraging-dog-pleat.cyclic.app/api/articles", {
      params: params,
    })
    .then((res) => {
      return res.data.articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://encouraging-dog-pleat.cyclic.app/api/topics")
    .then((res) => {
      return res.data.topics;
    });
};

export const fetchArticlesByTopic = (topic, params) => {
  return axios
    .get(
      `https://encouraging-dog-pleat.cyclic.app/api/articles?topic=${topic}`,
      {
        params: params,
      }
    )
    .then((res) => {
      return res.data.articles;
    });
};

export const fetchArticleById = (id) => {
  return axios
    .get(`https://encouraging-dog-pleat.cyclic.app/api/articles/${id}`)
    .then((res) => {
      return res.data.article;
    });
};

export const fetchCommentsById = (id) => {
  return axios
    .get(`https://encouraging-dog-pleat.cyclic.app/api/articles/${id}/comments`)
    .then((res) => {
      return res.data.comments;
    });
};

export const patchVotes = (id, votes) => {
  return axios
    .patch(`https://encouraging-dog-pleat.cyclic.app/api/articles/${id}`, {
      inc_votes: votes,
    })
    .then((res) => {
      return res.data.article;
    });
};

export const postComment = (article_id, comment) => {
  return axios
    .post(
      `https://encouraging-dog-pleat.cyclic.app/api/articles/${article_id}/comments`,
      comment
    )
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return axios
    .delete(
      `https://encouraging-dog-pleat.cyclic.app/api/comments/${comment_id}`
    )
    .then((res) => {
      return res.data.comment;
    });
};
