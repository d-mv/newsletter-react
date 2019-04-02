import React from 'react';

import SourceButton from './SourceButton/SourceButton';
import SourceCreate from '../../containers/Sources/SourceCreate/SourceCreate';
import style from './SourceCard.module.scss';

class SourceCard extends React.Component {
  sourceDelete = () => {
    this.props.sourceDelete(this.props.source._id);
  };
  render() {
    return (
      <section className={style.sectionWrapper}>
        <div className={style.section}>
          <section className={style.nameWrapper}>
            <p onClick={this.goHome} className={style.name}>
              {this.props.source.name}
            </p>
            <p className={style.url}>{this.props.source.url}</p>
          </section>
          <section className={style.buttonsWrapper}>
            <SourceButton type="edit" toggleEdit={this.props.toggleEdit} />
            <SourceButton type="delete" sourceDelete={this.sourceDelete} />
          </section>
        </div>
        {this.props.showEdit ? (
          <SourceCreate
            mode="edit"
            toggleEdit={this.props.toggleEdit}
            source={this.props.source}
            updateSource={this.props.updateSource}
          />
        ) : null}
      </section>
    );
  }
}

export default SourceCard;
