import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { selectPost } from '../../actions';
import { selectModule } from '../../actions';

import PostButton from './PostButton/PostButton';
import dateTime from '../../modules/date_time';
import style from './PostCard.module.scss';

class PostCard extends React.Component {
  handleClick = () => {
    this.props.selectPost(this.props.post);
    this.props.selectModule('show');
  };
  render() {
    const text = this.props.post.text
      .substring(0, 800)
      .replace(/<(?:.|\n)*?>/gm, '');
    let bodyClass = '';
    if (this.props.post.read) {
      bodyClass = style.bodyRead;
    } else {
      bodyClass = style.body;
    }
    const publishedDate = dateTime(new Date(this.props.post.published));
    const readTime = Math.round((this.props.post.text.length / 3000) * 2);
    return (
      <article className={bodyClass}>
        <header className={style.title} onClick={this.handleClick}>
          {this.props.post.title}
        </header>
        <section className={style.secondLine}>
          <div className={style.source}>@ {this.props.post.source}</div>
          <PostButton
            type="star"
            value={this.props.post.star}
            postId={this.props.post._id}
          />
        </section>
        <section
          className={style.text}
          onClick={this.handleClick}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <footer className={style.statusLine}>
          <div>{publishedDate}</div>
          <div>~ {readTime} mins</div>
        </footer>
        <div className={style.divider} />
      </article>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { selectPost: selectPost, selectModule: selectModule },
    dispatch
  );
};

// ! changed selectedPost to selectPost
const mapStateToProps = state => {
  return {
    selectPost: state.selectPost,
    selectModule: state.selectModule
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCard);
