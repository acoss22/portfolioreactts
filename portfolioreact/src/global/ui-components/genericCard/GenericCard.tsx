import { CCard, CCardBody, CCardImage, CCardLink, CCardText, CCardTitle, CListGroup, CListGroupItem } from '@coreui/react';
import React from 'react';
import styles from './genericcard.module.scss'
interface Props{
    imageUrl: string;
    title: string;
    description: string;
    tags: string;
    links?: React.ReactElement<typeof CCardLink>[];
}

const GenericCardComponent: React.FC<Props> = ({imageUrl, title, description, tags, links}) => {  
    const renderChildren = (children : React.ReactElement[]) => {
        return children.map((child: React.ReactElement, index) => ({ ...child , key: index}));
    } 

    return (
        <CCard className={styles.card}>
            <div className={styles.project}>
              <CCardImage orientation="top" className={styles.img} src={imageUrl} />
              <CCardBody>
                <CCardTitle className={styles.projectName}>{title}</CCardTitle>
                <CCardText>
                  <div className={styles.description}>
                    {description}
                  </div>
                </CCardText>
              </CCardBody>
              <CListGroup flush className={styles.tagList}>
                <CListGroupItem className={styles.tags}>{tags}</CListGroupItem>
              </CListGroup>
              { links && (
                 <div className={styles.links}>
                    {renderChildren(links)}
                </div>
            )}
            </div>
          </CCard>
    );
};

export default GenericCardComponent;