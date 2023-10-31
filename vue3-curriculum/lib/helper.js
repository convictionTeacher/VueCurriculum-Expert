export const getPageLink = (tag, page) => {
  return tag ? `/posts/tag/${tag}/page/${page}` : `/posts/page/${page}`;
}