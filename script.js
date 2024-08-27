function tweetMessage() {
    const message = "MIRAI TO WA NAMMONN\n#MiraitowaTH #NammonnBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 
