import Hero from "@/components/hero/hero";
import Header from "@/components/header/header";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Cards from "@/components/exprerience/cards";
import Experience from "@/components/exprerience/experience";
import Work from "@/components/work/work";
import Footer from "@/components/footer/footer";
import Contact from "@/components/footer/contact";

const experiences = [
  {
    text: "Senior engineer",
    companyLogo: "/image/Group.png",
    jobRoles: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
  },
  {
    text: "teamlead engineer",
    companyLogo: "/image/Group.png",
    jobRoles: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
  },
  {
    text: "junior engineer",
    companyLogo: "/image/Group.png",
    jobRoles: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <div className="bg-gray-50 pb-12">
        {experiences.map((experience) => (
          <Cards
            title={experience.text}
            companyLogo={experience.companyLogo}
            jobRoles={experience.jobRoles}
          />
        ))}
      </div>
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
