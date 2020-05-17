
const sleep = (n) => new Promise(resolve => setTimeout(resolve, n))

// sleep(1000).then(()=> console.log("Hello World"));

const posts = [
  {
    id: 1,
    title: "리덕스 떵크 미들웨어",
    body: "리덕스 떵크 미들웨어 본문 내용 111"
  },
  {
    id: 2,
    title: "리덕스 떵크 미들웨어 222",
    body: "리덕스 떵크 미들웨어 본문 본문 내용 222"
  },
  {
    id: 3,
    title: "리덕스 떵크 미들웨어 333",
    body: "리덕스 떵크 미들웨어 본문 본문 내용 333"
  }
]

export const getPosts = async () => {
  await sleep(500);
  return posts;
};
export const getPostById = async (id) => {
  await sleep(500);
  return posts.find(post => post.id === id);
};

