export interface Post {
  title: string,
  permalink: string,
  category: {
    categoryId: string,
    category: string
  }
  postImgPath: string,
  excerpt: string,
  content: string,
  isFeatured: boolean,
  views: number,
  status: string,
  createdAt: Date
}
// interface Post {
//   id: string;
//   data: {
//     category: {
//       category: string;
//       categoryId: string;
//     };
//     content: string;
//     createdAt: {
//       seconds: number;
//       nanoseconds: number;
//     };
//     excerpt: string;
//     isFeatured: boolean;
//     permalink: string;
//     postImgPath: string;
//     status: string;
//     title: string;
//     views: number;
//   };
// }

