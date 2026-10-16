import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "@/components/Highlight";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | PotatoPi",
  description:
    "An idealist, maybe only today.",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">👋</span>

      <Heading className="font-black">
        Paishuo Zhang
      </Heading>

      <span className="text-secondary text-xs whitespace-nowrap">
          Last Updated: Oct 14, 2026
      </span>

      <Paragraph className="max-w-xl mt-4">
        I&apos;m now a junior majoring in Remote Sensing at Lanzhou Jiaotong University.
        I work on image processing and microwave remote sensing. 
      </Paragraph>

      <About />
    </Container>
  );
}
