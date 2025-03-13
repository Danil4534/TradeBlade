import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./faq.module.css";
import chevronDown from "../../assets/icons/accordionIcon.svg";

function FAQ() {
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <img
            className={styles.chevron}
            src={chevronDown}
            alt="Chevron Down"
          />
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );
  return (
    <div className={styles.accordionContainer}>
      <h1 className={styles.title}>часто задаваемые вопросы</h1>
      <div className={styles.accordion}>
        <Accordion transition transitionTimeout={250}>
          <AccordionItem header="Что такое TradeBlade" initialEntered>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance. <br />{" "}
            <br />
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </AccordionItem>

          <AccordionItem header="Что TradeBlade предлагает инвесторам">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            libero adipisci repudiandae recusandae ullam vero quam praesentium
            doloribus numquam. Ad nobis blanditiis consequatur rem? Aliquam
            labore illo excepturi voluptatem cumque.
          </AccordionItem>

          <AccordionItem header="Должен ли я перевести свои средства на TradeBlade">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            temporibus cupiditate id necessitatibus, maiores quos illo nesciunt
            nam rerum ut aliquam odio. Aliquam debitis modi accusamus minus
            consequatur, asperiores ratione?
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
