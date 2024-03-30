const Post = require('../../model/userModel');

const resolvers = {
  getPosts: async () => await Post.find(),
  createPosts: async ({title, content}) => {
    const post = new Post({title, content});
    await post.save();
    return post;
  }
}

module.exports = resolvers;