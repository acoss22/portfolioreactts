import React from "react";
import styles from "./genericlist.module.scss";

interface Props {
  title: string;
  items: string[];
}

const GenericListComponent: React.FC<Props> = ({ title, items }) => {
  const renderChildren = (children: string[]) => {
    return children.map((child: string, index) => ({
      ...(<div className={styles.item}>{child}</div>),
      key: index,
    }));
  };

  return (
    <div className={styles.column}>
      <div className={styles.title}>
        {title}
        </div>
        <div className={styles.items}>
        {renderChildren(items)}
        </div>
    </div>
  );
};

export default GenericListComponent;
