import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World!",
  description: "My first post.",
};

export default function HelloWorldPage() {
  return (
    <Container>
      <article className="max-w-3xl">

        {/* Title */}
        <Heading className="font-black">
          Hello World!
        </Heading>

        {/* Introduction */}
        <Paragraph className="mt-6 text-lg leading-8">
          Welcome to my website!
        </Paragraph>

        {/* Post information */}
        <div className="mt-6 space-y-1 text-sm text-secondary">
          <p>
            Posted <strong>Oct. 4, 2026</strong>
          </p>

          <p>
            By{" "}
            <a
              href="#"
              className="font-semibold italic text-primary hover:text-blue-600 transition-colors"
            >
              PotatoPi
            </a>
          </p>

          <p>
            <em>1 min</em> read
          </p>
        </div>

        {/* Abstract */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-primary">
            Point
          </h2>

          <Paragraph className="mt-4 leading-8">
            First blog of mine, and Welcome to my website!
          </Paragraph>

          <Paragraph className="mt-4 leading-8">
          The reason I call it PotatoPi is that there is a <em>Pi</em> in my name and I like eating <em>potato</em> so much. I hope it can be a place displaying my experiences, and also recording my life.
           </Paragraph>

          <Paragraph className="mt-4 leading-8">
            (I haven't decided yet which language to use for this site; for now, I've chosen English because it's really difficult to choose a proper font for Chinese...)
          </Paragraph>
        </section>


      </article>
    </Container>
  );
}