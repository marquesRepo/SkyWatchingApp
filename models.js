const mongoose = require('mongoose');
const astroItemSchema = mongoose.Schema({
  thumbnail: {
    image: URL,
    description: String
  },
  title: {type: String, required: true},
  content: {type: String},
  created: {type: Date, default: Date.now}
});

astroItemSchema('thumbnailItem').get(function() {
  return `${this.thumbnail.image} ${this.thumbnail.description}`.trim();
});

astroItemSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    image: URL,
    content: this.content,
    title: this.title,
    created: this.created
  };
}

const astroItem = mongoose.model('astroItem', astroItemSchema);

module.exports = {astroItem};
function StorageException(message) {
   this.message = message;
   this.name = "StorageException";
}

const astroItems = {
  create: function(title, content, author, publishDate) {
    const post = {
      id: uuid.v4(),
      title: title,
      content: content
    };
    this.posts.push(post);
    return post;
  },
  get: function(id=null) {
    if (id !== null) {
      return this.posts.find(post => post.id === id);
    }
    return this.posts.sort(function(a, b) {
      return b.publishDate - a.publishDate
    });
  },
  delete: function(id) {
    const postIndex = this.posts.findIndex(
      post => post.id === id);
    if (postIndex > -1) {
      this.posts.splice(postIndex, 1);
    }
  },
  update: function(updatedPost) {
    const {id} = updatedPost;
    const postIndex = this.posts.findIndex(
      post => post.id === updatedPost.id);
    if (postIndex === -1) {
      throw new StorageException(
        `Can't update item \`${id}\` because doesn't exist.`)
    }
    this.posts[postIndex] = Object.assign(
      this.posts[postIndex], updatedPost);
    return this.posts[postIndex];
  }
};

function createAstroItemModel() {
  const storage = Object.create(BlogPosts);
  storage.posts = [];
  return storage;
}


module.exports = {astroItem: createAstroItemModel()};