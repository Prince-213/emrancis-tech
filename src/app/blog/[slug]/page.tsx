

import Image from "next/image";
import type { Metadata } from "next";
import { Suspense } from "react";
import BlogDetail from "@/lib/components/blog-detail";
import BlogDetailSkeleton from "@/lib/components/blog-detail-skeleton";

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.slug}`,
  };
};

export default function Page({ params }: Props) {
  const { slug } = params;

  return (
    <>
      <Suspense fallback={<BlogDetailSkeleton />}>
        <BlogDetail blogId={slug} />
      </Suspense>
    </>
  );
}
