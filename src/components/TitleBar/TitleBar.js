import React from 'react';

import DateTime from './DateTime';
import styles from './TitleBar.module.scss';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div className={styles.newsletterHead}>
        <div className={styles.title} id="title">
          The Newsletter
        </div>
        <div className={styles.timeStamp}>
          <DateTime />
        </div>
      </div>
    );
  }
}
