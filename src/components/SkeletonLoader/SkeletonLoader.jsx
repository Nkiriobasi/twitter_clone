import styles from './SkeletonLoader.module.css'


const SkeletonLoader = ({ width, height, borderRadius = '0'}) => {
  return (
    <div className={styles.skeleton} style={{ width, height, borderRadius }} />
  )
}

export default SkeletonLoader