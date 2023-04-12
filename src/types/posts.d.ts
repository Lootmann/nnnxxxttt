type TPost = {
  id: number;
  title: string;
  content: string;
  author: TUser;
};

type TPostForm = {
  title: string;
  content: string;
  authorId: number;
};
