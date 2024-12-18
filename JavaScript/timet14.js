
function getCurrentDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}.${minutes}.${seconds}`;
}

function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
        return years === 1 ? "1 year ago" : `${years} years ago`;
    }
    if (months > 0) {
        return months === 1 ? "1 month ago" : `${months} months ago`;
    }
    if (days > 0) {
        return days === 1 ? "1 day ago" : `${days} days ago`;
    }
    if (hours > 0) {
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    }
    if (minutes > 0) {
        return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    }
    return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
}


console.log("Current Date:", getCurrentDate());
console.log("Current Time:", getCurrentTime());


const postTime = new Date(); 
setTimeout(() => {
    console.log("Posted:", timeAgo(postTime)); 
}, 7000);
