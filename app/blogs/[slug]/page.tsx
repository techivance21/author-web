// app/blogs/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPostBySlug } from "@/app/lib/posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.seoKeywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

const BLUE = "#0A2342";

type ContentBlock = { type: "heading" | "paragraph"; content: string };

function buildContentBlocks(text: string): ContentBlock[] {
  const lines = text.split("\n");
  const blocks: ContentBlock[] = [];
  let paragraphBuffer: string[] = [];

  const pushParagraph = () => {
    if (!paragraphBuffer.length) return;
    const paragraph = paragraphBuffer.join(" ").replace(/\s+/g, " ").trim();
    if (paragraph) {
      blocks.push({ type: "paragraph", content: paragraph });
    }
    paragraphBuffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      pushParagraph();
      continue;
    }

    const words = line.split(/\s+/).length;
    const isHeadingCandidate =
      words <= 12 &&
      /^[A-Z0-9][A-Za-z0-9\s'&-]*$/.test(line) &&
      !/[.?!:,;]$/.test(line);

    if (!paragraphBuffer.length && isHeadingCandidate) {
      blocks.push({ type: "heading", content: line });
    } else {
      paragraphBuffer.push(line);
    }
  }

  pushParagraph();
  return blocks;
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const contentBlocks = buildContentBlocks(post.content);
  const firstParagraphIndex = contentBlocks.findIndex(
    (block) => block.type === "paragraph",
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="relative h-[28vh] min-h-[280px] w-full sm:h-[36vh] sm:min-h-[320px] md:h-[44vh] md:min-h-[360px] lg:h-[50vh]">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${BLUE} 0%, #6aa3d6 100%)`,
              }}
            />
          )}
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 h-full">
            <div className="mx-auto flex h-full w-full max-w-5xl items-end px-4 pb-10 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8">
              <div className="w-full">
                <Link
                  href="/blogs"
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20 sm:text-sm"
                >
                  Back to Blog
                </Link>

                {post.category ? (
                  <span className="mt-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm">
                    {post.category}
                  </span>
                ) : null}

                <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[56px]">
                  {post.title}
                </h1>
                {post.subtitle ? (
                  <p className="mt-3 max-w-3xl text-sm text-white/85 sm:text-base md:text-lg">
                    {post.subtitle}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 pb-16 pt-12 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-3xl bg-white px-5 py-8 shadow-xl ring-1 ring-black/5 sm:px-8 sm:py-12 md:px-12 md:py-14">
            <div className="space-y-6 text-base leading-relaxed text-slate-700 sm:space-y-7 sm:text-[17px] md:space-y-8 md:text-lg">
              {contentBlocks.map((block, index) =>
                block.type === "heading" ? (
                  <h2
                    key={`heading-${index}`}
                    className={`text-2xl font-semibold text-slate-900 sm:text-3xl${
                      index !== 0 ? " pt-1" : ""
                    }`}
                  >
                    {block.content}
                  </h2>
                ) : (
                  <p
                    key={`paragraph-${index}`}
                    className={`leading-relaxed text-slate-700 ${
                      index === firstParagraphIndex
                        ? "text-lg font-medium text-slate-800 sm:text-xl sm:leading-9"
                        : "text-[15.5px] sm:text-base md:text-[18px]"
                    }`}
                  >
                    {block.content}
                  </p>
                ),
              )}
            </div>
          </article>

          <div className="mt-12 flex justify-center">
            <Link
              href="/blogs"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
