import timeFormat from '../utils/time'

class Comments {
  constructor(config, comments) {
    this.config = config
    this.comments = comments
  }

  comment(data) {
    const {
      bodyHTML,
      updatedAt,
      user: { url, login, avatarUrl }
    } = data

    return `
      <li>
        <a href="${url}" class="author">
          <img src="${avatarUrl}" alt="${login}" />
        </a>
        <div class="comment-body">
          <a target="_blank" href="${url}">${login}</a>
          <span>on ${timeFormat(updatedAt)}</span>
          <div class="markdown-body">${bodyHTML}</div>
        </div>
      </li>
    `
  }

  render() {
    return `
      <ul class="comment-list">
        ${this.comments.map(comment => this.comment(comment)).join('')}
      </ul>
    `
  }
}