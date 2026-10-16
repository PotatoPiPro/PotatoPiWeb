import { Paragraph } from "@/components/Paragraph";
import { Heading } from "@/components/Heading";

export default function About() {
  return (
    <div className="max-w-4xl">
      
      {/* Interests */}
      <section className="mt-14">
        <Heading
          as="h2"
          className="font-black text-xl md:text-xl lg:text-xl"
        >
          Study Interests
        </Heading>

        <Paragraph className="mt-4">
          Computer Vision
          <br />
          Physics
          <br />
          Microwave Remote Sensing
        </Paragraph>
      </section>

 {/* Experience */}
      <section className="mt-14">
  <Heading
    as="h2"
    className="font-black text-xl md:text-xl lg:text-xl"
  >
    Experience
  </Heading>

  <div className="mt-6">
    <div className="flex items-start gap-4">
      
      {/* School Logo */}
      <img
        src="/images/lzjtu-logo.png"
        alt="Lanzhou Jiaotong University"
        className="w-12 h-12 object-contain flex-shrink-0"
      />

      {/* Experience Information */}
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-bold text-primary">
            Lanzhou Jiaotong University · Faculty of Geomatics
          </p>

          <p className="text-secondary text-xs whitespace-nowrap">
            2024 – Present
          </p>
        </div>

        <p className="text-secondary text-sm mt-1">
          B.E. in Remote Sensing
        </p>
      </div>

    </div>
  </div>
</section>

       {/* Awards */}
      <section className="mt-14">
        <Heading
          as="h2"
          className="font-black text-xl md:text-xl lg:text-xl"
        >
          Awards
        </Heading>

        <div className="mt-6 space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-primary">
              National Scholarship for Undergraduate Student
            </p>

            <p className="text-secondary text-xs whitespace-nowrap">
              2026
            </p>
          </div>

         <div className="flex items-baseline justify-between gap-4">
          <p className="text-primary">
            Lanzhou Jiaotong University Merit Student Scholarship
          </p>

          <p className="text-secondary text-xs whitespace-nowrap">
            2026
          </p>
         </div>

         <div className="flex items-baseline justify-between gap-4">
          <p className="text-primary">
            Lanzhou Jiaotong University First-Class Scholarship
          </p>

          <p className="text-secondary text-xs whitespace-nowrap">
            2025
          </p>
         </div>
       </div>
      </section>

      

      {/* Ongoing Study */}
      <section className="mt-14">
  <Heading
    as="h2"
    className="font-black text-xl md:text-xl lg:text-xl"
  >
    Ongoing Study (Year 3  Semester 1)
  </Heading>

  <div className="mt-6 space-y-2">
    <p>Digital Photogrammetry</p>
    <p>LiDAR Remote Sensing</p>
    <p>
      Remote Sensing Image Processing Algorithms
    </p>
    <p>GNSS Principles and Applications</p>
    <p>
      Error Theory and Surveying Adjustment
    </p>
    <p>Drone-based Engineering Inspection</p>
    <p>English for Geomatics Engineering</p>
    <p>Physics Laboratory Training</p>
    <p>
          <span className="text-blue-600 italic">Informal: </span>
          Machine Learning , Fundamentals of Remote Sensing Physics
    </p>
  </div>
</section>

{/* Previous Semesters */}
<section className="mt-14">
  <Heading
    as="h2"
    className="font-black text-xl md:text-xl lg:text-xl"
  >
    Previous Semesters (Selected)
  </Heading>

  <div className="mt-6 space-y-3">

    {/* 2025-2026 */}
<details className="group border-b border-neutral-200 pb-3">
  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-2">
    <span className="font-bold text-primary">
      2025–2026 (Year 2)
    </span>

    <span className="text-secondary text-sm transition-transform group-open:rotate-180">
      ↓
    </span>
  </summary>

  <div className="mt-4 ml-1 space-y-6 text-sm text-secondary">


    <div>

      <div className="space-y-2">
        <p>Probability and Mathematical Statistics</p>
        <p>Fundamentals of Programming(C#)</p>
        <p>Python Programming</p>
        <p>Data Structures and Algorithms</p>
        <p>GIS Application Software Development</p>
        <p>Principles and Applications of Remote Sensing</p>
        <p>Principles and Applications of GIS</p>
        <p>Digital Image Processing for Remote Sensing</p>
        <p>Photogrammetry</p>
        <p>Computer-aided cartography</p>
        <p>Cartography</p>
        <p>
          Transportation Engineering Surveying (with{" "}
          <a
            href="/pdfs/交通工程测量作业（终）.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Homework Summary
          </a>
          )
        </p>
        <p>
          <span className="text-blue-600 italic">Audited: </span>
          English Listening (Native-speaking Instructor)
        </p>
      </div>
    </div>

  </div>
</details>

    {/* 2024-2025 */}
    <details className="group border-b border-neutral-200 pb-3">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-2">
        <span className="font-bold text-primary">
          2024–2025 (Year 1)
        </span>

        <span className="text-secondary text-sm transition-transform group-open:rotate-180">
          ↓
        </span>
      </summary>

      <div className="mt-4 ml-1 space-y-6 text-sm text-secondary">

        <div>
          <div className="space-y-2">
            <p>Advanced Mathematics</p>
            <p>Linear Algebra</p>
            <p>University Physics</p>
            <p>University Physics Laboratory</p>
            <p>Introduction to Geomatics Science</p>
            <p>Fundamentals of Surveying</p>

          </div>
        </div>

      </div>
    </details>

  </div>
</section>
    </div>
  );
}