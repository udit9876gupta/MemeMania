const links = [
    "https://static.pupperish.com/images/lUGfphKWonTe_3322_700.jpg",
    "https://static.pupperish.com/images/cebiMmLCFNto_3322_700.jpg",
    "https://static.pupperish.com/images/slzKJLWrpxNT_3322_700.jpg",
    "https://static.pupperish.com/images/MjdrguCXDaNv_3322_700.jpg",
    "https://static.pupperish.com/images/hJNCDatLEqYz_3322_700.jpg",
    "https://static.pupperish.com/images/eMjZduALaKWD_3322_700.jpg",
    "https://static.pupperish.com/images/lurMhSEWZdBa_3322_700.jpg",
    "https://static.pupperish.com/images/tfrsRHNODqAS_3322_700.jpg",
    "https://static.pupperish.com/images/BlmjtxNORWnI_3322_700.jpg",
    "https://static.pupperish.com/images/aBVAWdlUrsum_3322_700.jpg",
    "https://static.pupperish.com/images/zdhiOZLeHoQV_3322_700.jpg",
    "https://static.pupperish.com/images/lGjzbUoXyQCw_3322_700.jpg",
    "https://static.pupperish.com/images/XKivWznZBlrO_3322_700.jpg",
    "https://static.pupperish.com/images/JugrbdeWiOTL_3322_700.jpg",
    "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/2019-03/Screen%20Shot%202019-03-14%20at%2010.53.38%20AM.webp",
    "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/ca5.webp",
    "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/586.webp",
    "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/weird-flex-but-ok-copy.webp",
    "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/32jtrM8.webp",
    "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/793.webp",
    "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/2019-03/Screen%20Shot%202019-03-14%20at%2011.06.54%20AM.webp",
    "https://cdn.broadbandsearch.net/images/blogs/most-popular-internet-memes-in-history/you-understand-now.jpg",
    "https://cdn.broadbandsearch.net/images/blogs/most-popular-internet-memes-in-history/harambe.jpg",
    "https://cdn.broadbandsearch.net/images/blogs/most-popular-internet-memes-in-history/willy-wonka.jpg",
    "https://cdn.broadbandsearch.net/images/blogs/most-popular-internet-memes-in-history/squinting-fry.jpg",
    "https://cdn.broadbandsearch.net/images/blogs/most-popular-internet-memes-in-history/success-baby-spaghetti.jpg",
    "https://cdn.broadbandsearch.net/images/blogs/most-popular-internet-memes-in-history/most-interesting-man-facebook-comments.jpg",
    "https://cdn.broadbandsearch.net/images/blogs/most-popular-internet-memes-in-history/scumbag-steve.jpg",


];
const random = document.getElementById("random");
const nextt = document.getElementById("nextt");

function next() {
    const linkSrc = Math.floor(Math.random() * (links.length));
    random.src = links[linkSrc];
}

next()

nextt.onclick = function () {
    next();
}