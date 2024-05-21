module.exports = (time) => {
    try {
        let timeConvert = time.toUpperCase()
        let period = timeConvert.includes('PM') ? 'PM' : 'AM'
        const timeSplit = timeConvert.split(period);
        let [hours, minutes, seconds] = timeSplit[0].split(":");

        if (period === "PM" && hours !== "12") {
            hours = parseInt(hours + 12).toString();
        }

        if (period === "AM" && hours === "12") {
            hours = "00";
        }

        return `${hours}:${minutes}:${seconds}`
    } catch (error) {
        return 'Waktu yang diinput tidak sesuai.'
    }
    
}