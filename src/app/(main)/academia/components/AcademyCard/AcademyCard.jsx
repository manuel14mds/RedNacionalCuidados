import styles from './styles/AcademyCard.module.css'
import { dateFormat } from '../../utils/dateFormat'

const AcademyCard = ({data}) => {
  return (
    <div className={styles.cardContainer}>
      <iframe 
      className={styles.cardImage} 
      width={100} height={100} 
      src={data.materialURL} 
      title="YouTube video player"
      frameBorder="0"
      allowFullScreen 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
      referrerPolicy="no-referrer"
      >
      </iframe>

      <div className={styles.textBox}>
        <h4 className={styles.title}>{data.title}</h4>
        <h6 className={styles.description}>
          {data.description}
        </h6>
        <p className={styles.duration}>
          Duración: <span className={styles.durationSpan}>{`${data.duration} minutos`}</span>
        </p>
        <p className={styles.date}>{dateFormat(data.createdAt)}</p>
      </div>
    </div>

  )
}

export default AcademyCard
