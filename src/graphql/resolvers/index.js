const Post = require('../../model/userModel');

const resolvers = {
  Query: {
    getPosts: async () => await Post.find(),
  },
  Mutation: {
    createPost: async ({title, content}) => {
      const post = new Post({title, content});
      await post.save();
      return post;
    }
  }
}

module.exports = resolvers;