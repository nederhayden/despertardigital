import styles from "./Video.module.css";

export default function Video() {
  return (
    <iframe
      className={styles.video}
      src="https://www.youtube.com/embed/iYOK7qd8Phc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
