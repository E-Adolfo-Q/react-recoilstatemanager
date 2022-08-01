import { useRecoilState } from "recoil";
import { postListState } from '../atoms/PostListState';

export function PostItem({ post }){
  const [ postList,setPostList ] = useRecoilState(postListState)  
  return (
    <li className="postItem">
      {post}
      <button
       onClick={() => setPostList((prev) => prev.filter(p => p !== post))}
      >
        Delete
      </button>
    </li>
  )
}