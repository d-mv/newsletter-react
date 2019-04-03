import React from 'react';

import DateTime from '../DateTime';
import styles from './TitleBar.module.scss';

export default class TitleBar extends React.Component {
  showHome = () => {
    this.props.toggle('Home');
  };
  render() {
    return (
      <header className={styles.newsletterHead}>
        <div className={styles.title} onClick={this.showHome} id="title">
          The Newsletter
        </div>
        <time className={styles.timeStamp}>
          <DateTime />
        </time>
      </header>
    );
  }
}
