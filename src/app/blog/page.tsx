import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passages | PotatoPi",
  description: "The boundary of the language, is the boundary of the world.",
};

const collections = [
  {
    title: "细节与勇气——乙巳年末回顾 (2026.02)",
    href: "/pdfs/细节与勇气——乙巳年末回顾.pdf",
    description: "湖海江山。",
  },
  {
    title: "向边界去——写在大二始 (2025.09)",
    href: "/pdfs/向边界去——写在大二始.pdf",
    description: "No More Freshman.",
  },
  {
    title: "独立三边静——高中后记 (2024.09)",
    href: "/pdfs/独立三边静 —— 高考后记.pdf",
    description: "高中回忆。",
  },
];

const highlights = [
  {
    title: "好的，坏的，我们的足球——写在新泽西前 (2026.07)",
    href: "/pdfs/我们的足球 ——写在新泽西前.pdf",
    description: "To Let a Good Thing Die.",
  },
];

export default function Blog() {
  return (
    <Container>
      <span className="text-4xl">📝</span>

      <Heading className="font-black pb-4">
        Passages
      </Heading>

      <Paragraph className="max-w-xl">
        写的一些文字，大多关于生活记录。有想过文笔是否太幼稚，不过既然是自己的真实想法，于是就都完整放上来了。希望你读的开心！
      </Paragraph>

      {/* Summary */}
      <section className="mt-14">
        <Heading
          as="h2"
          className="font-black text-xl md:text-xl lg:text-xl"
        >
          Summary
        </Heading>

        <div className="mt-6 space-y-7">
          {collections.map((passage) => (
            <div key={passage.title}>
              <a
                href={passage.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:underline underline-offset-4"
              >
                {passage.title}
              </a>

              <p className="text-secondary text-sm mt-2">
                {passage.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Thoughts */}
      <section className="mt-14">
        <Heading
          as="h2"
          className="font-black text-xl md:text-xl lg:text-xl"
        >
          Thoughts
        </Heading>

        <div className="mt-6 space-y-7">
          {highlights.map((passage) => (
            <div key={passage.title}>
              <a
                href= {passage.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:underline underline-offset-4"
              >
                {passage.title}
              </a>

              <p className="text-secondary text-sm mt-2">
                {passage.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}