import express from 'express';
import mongoose from 'mongoose';


const router = express.Router(); // eslint-disable-line new-cap
const postSchema = mongoose.Schema({ // eslint-disable-line new-cap
  title: String,
  content: String,
});
const Post = mongoose.model('Post', postSchema);

Post.remove({}, () => {
  for (let i = 0; i < 100; i += 1) {
    const post = new Post({
      title: `${i} Post title`,
      content: `${i} content`,
    });
    post.save();
  }
});

router.get('/posts', (req, res) => {
  Post
    .find({})
    .select({
      content: 0,
      __v: 0,
      updatedAt: 0,
      createdAt: 0,
    })
    .limit(100)
    .sort({
      createdAt: -1,
    })
    .exec((err, posts) => {
      if (err) {
        res.status(500).json({
          message: 'Could not retrieve posts',
        });
      } else {
        res.json(posts);
      }
    });
});

router.get('/posts/:id', (req, res) => {
  Post.findById({
    _id: req.params.id,
  }, (err, post) => {
    if (err) {
      res.status(500).json({
        message: 'Could not retrieve post w/ that id',
      });
    } else if (!post) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json(post);
    }
  });
});

export default router;
