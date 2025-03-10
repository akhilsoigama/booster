const Post = require("../../../model/post/post");

const Posts = async (req, res) => {
  const { title, content, auther, image, User_id } = req.body; 

  try {
    const createPost = new Post({
      title,
      content,
      auther, 
      image,
      User_id,
    });

    await createPost.save();
    res.status(201).json({ message: "Post has been created", createPost });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = Posts;