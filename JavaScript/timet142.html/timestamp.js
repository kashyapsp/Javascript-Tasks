
function getFormattedDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
}


function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}.${minutes}.${seconds}`;
}


function getRelativeTime(timestamp) {
    const now = new Date();
    const secondsAgo = Math.floor((now - timestamp) / 1000);
    
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(secondsAgo / 3600);
    const daysAgo = Math.floor(secondsAgo / 86400);
    const monthsAgo = now.getMonth() - timestamp.getMonth() + (12 * (now.getFullYear() - timestamp.getFullYear()));
    
    if (secondsAgo < 60) {
        return `${secondsAgo} seconds ago`;
    } else if (minutesAgo < 60) {
        return `${minutesAgo} min ago`;
    } else if (hoursAgo < 24) {
        return `${hoursAgo} hours ago`;
    } else if (monthsAgo < 12) {
        return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`;
    } else {
        return `${Math.floor(now.getFullYear() - timestamp.getFullYear())} year${now.getFullYear() - timestamp.getFullYear() !== 1 ? 's' : ''} ago`;
    }
}

document.getElementById('dd-mm-yyyy').innerText = getFormattedDate();
document.getElementById('hh-mm-ss').innerText = getFormattedTime();


const exampleTimestamp = new Date(Date.now() -120 * 1000); 
document.getElementById('relative-time').innerText = getRelativeTime(exampleTimestamp);
