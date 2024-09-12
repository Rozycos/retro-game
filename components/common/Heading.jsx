import styles from "../../styles/elements/Page.module.scss";

export default function Heading({ text = 'heading text' }) {
  return (
    <h1>
      <p className={`dual-color-text page__text ${styles['page__text--shadow']}`} data-text={text}>
        {text}
      </p>
    </h1>
  );
}
