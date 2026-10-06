import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "@/components/Highlight";
import { Metadata } from "next";
import AboutZh from "@/components/AboutZh";

export const metadata: Metadata = {
  title: "关于 | PotatoPi",
  description: "",
};

export default function AboutZhPage() {
  return (
    <Container>
      <span className="text-4xl">👋</span>

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4">
        <Heading className="font-black">
          Paishuo Zhang
        </Heading>

        <span className="text-secondary text-xs whitespace-nowrap">
          最近更新：2026年9月
        </span>
      </div>

      <Paragraph className="text-primary max-w-lg leading-8 mt-4">
        
        我目前是遥感科学与技术专业的一名大三学生，就读于兰州交通大学。
        我会在这个网站中记录自己的学习、生活。希望你能在这里找到感兴趣的内容，也欢迎交流和讨论。
      </Paragraph>

      <AboutZh />
    </Container>
  );
}