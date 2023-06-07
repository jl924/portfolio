import Image from "next/image"
import photo from "./photo.jpg"

export default function Home() {
  return (
    <main className="home">
      <div className="main">
        <div className="photoSide">
          <Image
            src={photo}
            width={400}
            height={400}
            alt="Picture of the author"
            className="profilePhoto"
          />
        </div>
        <div className="aboutMeSection">
          <h1 className="aboutMe">About Me</h1>
          <p className="firstPara">
            Hello! My name is Jae, a software engineer with a passion for
            front-end development. My aim is to apply my proficiency and
            knowledge to improve the productivity and performance of a company.
            I'm currently on the lookout for an organization that values
            innovation and encourages growth, where I can utilize my skills to
            make a meaningful impact.
          </p>
          <p className="secondPara">
            I believe that two of my greatest strengths are adaptability and
            effective teamwork. Having been born in Korea, raised in Japan, and
            later moving to New York at the age of nine, I quickly learned how
            to adapt to new environments. This meant learning new languages,
            such as Japanese and English, and adjusting to different cultural
            settings. These experiences have been helpful in my software
            engineering career, where I effortlessly acquired and efficiently
            utilized programming languages like JavaScript and React. Therefore,
            I am highly confident in my ability to swiftly master and
            effectively use new tech languages when presented with future
            opportunities, such as learning a new language for a job or project.
          </p>
          <p>
            Furthermore, my adaptability has proven instrumental in thriving
            within team dynamics. Whether participating in multiple musical
            bands or contributing to group projects, I quickly grasp the
            requirements of the task at hand, execute my responsibilities, and
            even assist teammates who may need additional support.
          </p>
        </div>
      </div>
    </main>
  )
}
