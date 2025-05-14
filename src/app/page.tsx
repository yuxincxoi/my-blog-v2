import { getNotionPages } from "../lib/notion";
import { BlogPost } from "@/types/post";
import { ResponseResult } from "@/types/response";

export default async function Home() {
  const responseResults =
    (await getNotionPages()) as unknown as ResponseResult[];

  const posts: BlogPost[] = responseResults.map((item) => ({
    id: item.id,
    title: item.properties.제목.title[0]?.plain_text ?? "제목 없음",
    category: item.properties.카테고리.select.name,
    author: item.properties.작성자.created_by.name,
    createdAt: item.properties.게시일.created_time,
  }));

  return (
    <div>
      <h1>{`Yujin's Blog`}</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.category}</p>
          <p>{post.author}</p>
          <p>{post.createdAt}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
