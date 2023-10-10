import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';

const Experience = () => {
  
const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Starbucks",

    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "I provide MERN development services, using MongoDB, Express, React and Node to create user-friendly , fully start to end , responsive web interfaces."
    ],
  },
  {
    title: "E-Commerce Website",
    company_name: "Tesla",

    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Integration of eCommerce payment gateways (stripe) custom product templates many more."
   ],
  },
  {
    title: "Mobile responsive",
    company_name: "Shopify",

    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
    "I can make web application in to mobile responsive using css framework like Bootstrap, react bootstrap and TailwindCSS ." 
    ],
  },
  {
    title: "Convert UI / UX To Website",
    company_name: "Meta",
  
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
    "Convert Figma, Xd, & Photoshop Design to react Clean, modern designs optimized" 
    ],
  },
];

  return (
    <div>
    <div className="my-10">
      <p className={`${styles.sectionSubText} text-center`}>What I can do</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Services</h2>
    </div>
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#383E56", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #383E56" }}
          // date={experience.date}
          iconStyle={{ background: experience.iconBg, color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-3xl font-bold">{experience.title}</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">{experience.company_name}</h4> */}
          <ul className={styles.timelinePoints}>
            {experience.points.map((point, i) => (
              <li key={i} className=' text-[13px] my-2 font-semibold'>* {point}</li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
  )
}

export default Experience