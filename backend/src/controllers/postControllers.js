export function getPost(req, res) {
  res.status(200).send("Test senpai 🔥");
}

export function postPost(res, req) {
  res.status(201).json({ message: "Post created successfully" });
}

export function putPost(res, req) {
  res.status(200).json({ message: "Post updated successfully" });
}

export function deletePost(res, req) {
  res.status(200).json({ message: "Post deleted successfully" });
}
