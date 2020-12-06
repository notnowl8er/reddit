export const redditAPI = async (subreddit) => {
  try {
    const fetchReddit = await fetch(
      `https://www.reddit.com/r/${subreddit}/.json`
    );
    const reddit = await fetchReddit.json();
    return reddit.data.children;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
