export const redditAPI = async (subreddit, sort) => {
  try {
    const fetchReddit = await fetch(
      `https://www.reddit.com/r/${subreddit}/${sort}/.json`
    );
    const reddit = await fetchReddit.json();
    return reddit.data.children;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
