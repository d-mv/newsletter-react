import React from 'react';

import style from './SourceCreate.module.scss';

class SourceCreate extends React.Component {
  render() {
    return (
      <div className={style.createForm}>
        <form className={style.form}>
          <div>
            <input />
          </div>
          <div>
            <input />
          </div>
          <div>
            <input />
          </div>
        </form>
      </div>
    );
  }
}

export default SourceCreate;
