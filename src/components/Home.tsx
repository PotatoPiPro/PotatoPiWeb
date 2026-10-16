import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/Heading";

const posts = [
  {
    title: "Hello World!",
    date: "2026.10.04",
    description:
      "First blog of mine, and Welcome to my website! ",
    image: "/images/Hi.png",
    href: "/posts/Hello-World",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl">
      <span className="text-4xl">🌏</span>
      <Heading className="font-black mb-10">
        {" "}
        Home
      </Heading>

      <div className="mt-8 space-y-8">
        {posts.map((post) => (
          <Link
                key={post.title}
                href={post.href}
                className="group block"
>
            <article
                className="
                flex flex-col sm:flex-row gap-6
                p-5
                rounded-xl
                border border-neutral-200
                bg-white
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-lg
                hover:border-neutral-300
                "
            >

              {/* 图片 */}
              <div className="relative w-full sm:w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* 文字 */}
              <div className="flex flex-col justify-center">
                <p className="text-secondary text-xs">
                  {post.date}
                </p>

                <h2 className="mt-2 text-xl font-bold text-primary group-hover:text-blue-600 transition">
                  {post.title}
                </h2>

                <p className="mt-2 text-secondary text-sm leading-7 max-w-xl">
                  {post.description}
                </p>
              </div>

            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}