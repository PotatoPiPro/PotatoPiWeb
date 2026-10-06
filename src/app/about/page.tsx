import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "@/components/Highlight";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Paishuo Zhang",
  description:
    "Paishuo Zhang is a junior at Lanzhou Jiaotong University majoring in Remote Sensing.",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">👋</span>

      <Heading className="font-black">
        Paishuo Zhang
      </Heading>

      <span className="text-secondary text-xs whitespace-nowrap">
          Last Updated: Sep 25, 2026
      </span>

      <Paragraph className="max-w-xl mt-4">
        I&apos;m now a junior majoring in Remote Sensing at Lanzhou Jiaotong University.
         I record my study and life here, hope you will find them interesting and feel free to contact. 
      </Paragraph>

      <About />
    </Container>
  );
}
