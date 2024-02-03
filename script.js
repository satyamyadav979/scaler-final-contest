const tweetForm = document.getElementById("tweet-form");
const tweetInput = document.getElementById("tweet-input");
const tweetContainer = document.getElementById("tweet-container");

tweetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const tweetText = tweetInput.value;
    if (!tweetText) return;
    const tweet = createTweet(tweetText);
    tweetContainer.appendChild(tweet);
    tweetInput.value = "";
    saveTweets();
});

function createTweet(text) {
    const tweet = document.createElement("div");
    tweet.classList.add("tweet");
    tweet.innerHTML = `<p>${text}</p><span class="delete">X</span><span class="like">♥</span><span class="comment">C</span>`;
    tweet.querySelector(".delete").addEventListener("click", () => {
        tweet.remove();
        saveTweets();
    });
    tweet.querySelector(".like").addEventListener("click", () => {
        tweet.classList.toggle("liked");
        saveTweets();
    });
    tweet.querySelector(".comment").addEventListener("click", () => {
        const comment = prompt("Enter your comment:");
        if (!comment) return;
        const newComment = document.createElement("p");
        newComment.textContent = comment;
        tweet.querySelector(".comments").appendChild(newComment);
        saveTweets();
    });
    tweet.appendChild(createComments());
    return tweet;
}

function createComments() {
    const comments = document.createElement("div");
    comments.classList.add("comments");
    return comments;
}

function likeTweet() {

    var likeIcon = $(this);

    var liked = likeIcon.attr("data-liked");

    if (liked === "false") {
        likeIcon.attr("data-liked", true);

        likeIcon.attr("src", "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455");
    } else {
        likeIcon.attr("data-liked", false);
        likeIcon.attr("src", "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679");
    }
}