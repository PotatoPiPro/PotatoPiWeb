import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | PotatoPi",
  description:
    "Something to share.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">🐾</span>
      <Heading className="font-black mb-10">
        {" "}
        Blogs
      </Heading>

      <Paragraph className="max-w-xl">
        New blogs are coming soon~
      </Paragraph>

    </Container>
  );
}
