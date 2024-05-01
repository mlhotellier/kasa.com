import './styles.scss'
import Banner from '../../components/Banner'
import ImgForBanner from '../../assets/mountain.png'
import CollaspeItem from '../../components/CollapseItem'
import aboutData from '../../datas/about.json'

function About() {
  return (
    <section className="about">
      <Banner background={ImgForBanner} />
      <div className="about__collapse">
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
