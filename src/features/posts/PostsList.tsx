import { useSelector } from "react-redux";

const PostsList = () => {
  const post = useSelector((state) => state.posts);
  return (
    <section>
      <h2>Posts</h2>

      {post.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
          </article>
        );
      })}
    </section>
  );
};

export default PostsList;
