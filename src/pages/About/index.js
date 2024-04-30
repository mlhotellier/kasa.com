import './styles.scss'
import Banner from '../../components/Banner'
import ImgForBanner from '../../assets/mountain.png'
import CollaspeItem from '../../components/CollapseItem'
import aboutData from '../../datas/about.json'

// See about datas
console.log(aboutData)

function About() {
  return (
    <section className="about">
      <Banner title="" background={ImgForBanner} />
      <div>
        {aboutData.map((item, index) => (
          <CollaspeItem
            key={`${index}-${item.title}`}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  )
}
export default About
