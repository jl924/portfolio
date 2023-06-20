import Image from "next/image"
import photo from "./photo.jpg"

const front: string[] = [
  "JavaScript",
  "React",
  "TypeScript",
  "Next.JS",
  "HTML5",
  "CSS3",
  "Sass",
  "Redux",
]

const back: string[] = [
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "RESTful API",
]

const others: string[] = [
  "Jest",
  "Mocha",
  "Chai",
  "Artillery",
  "AWS:EC2",
  "RDS",
]

export default function Home() {
  return (
    <main className="home">
      <div className="main">
        <div className="photoSide">
          <Image
            src={photo}
            width={400}
            height={400}
            alt="Jaes photo"
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
            utilized programming languages like JavaScript, React, Python, and
            many more. Therefore, I am highly confident in my ability to swiftly
            master and effectively use new tech languages when presented with
            future opportunities, such as learning a new language for a job or
            project.
          </p>
          <p>
            Furthermore, my adaptability has proven instrumental in thriving
            within team dynamics. Whether participating in multiple musical
            bands or contributing to group projects, I quickly grasp the
            requirements of the task at hand, execute my responsibilities, and
            even assist teammates who may need additional support.
          </p>
        </div>
        <div className="techStackSection">
          <h1 className="aboutMe">Tech Stack</h1>
          <h4>Front End:</h4>
          <ul className="techGrid">
            {front.map((stack) => {
              return <li className="techStack">{stack}</li>
            })}
          </ul>
          <h4>Back End:</h4>
          <ul className="techGrid">
            {back.map((stack) => {
              return <li className="techStack">{stack}</li>
            })}
          </ul>
          <h4>Testing/Deployment:</h4>
          <ul className="techGrid">
            {others.map((stack) => {
              return <li className="techStack">{stack}</li>
            })}
          </ul>
        </div>
      </div>
    </main>
  )
}
