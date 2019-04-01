import React from 'react';

import SourceButton from './SourceButton/SourceButton';
import style from './SourceCard.module.scss';

class SourceCard extends React.Component {
  sourceDelete = () => {
    this.props.sourceDelete(this.props.source._id);
  };
  render() {
    return (
      <section className={style.section}>
        <section className={style.nameWrapper}>
          <p onClick={this.goHome} className={style.name}>
            {this.props.source.name}
          </p>
          <p className={style.url}>{this.props.source.url}</p>
        </section>
        <section className={style.buttonsWrapper}>
          <SourceButton type="edit" postId={this.props.source._id} />
          <SourceButton type="delete" sourceDelete={this.sourceDelete} />
        </section>
      </section>
    );
  }
}

export default SourceCard;
