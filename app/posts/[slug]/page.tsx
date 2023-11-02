import { PostArticle } from '@/components/post/post-article';
import { getPostBySlug, getPosts } from '@/lib/post';
import type { PostDetailPageParams } from './slug.model';
import { notFound } from 'next/navigation';
import { TOC } from '@/components/toc';

export const generateStaticParams = async () => {
  const posts = await getPosts();

  return posts;
};

const PostDetailPage = async ({ params }: PostDetailPageParams) => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PostArticle {...post} />
      <TOC headings={post.headings} />
    </>
  );
};

export default PostDetailPage;
