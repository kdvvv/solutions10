import fs from 'fs';

// BEGIN
const watch = (soursePath, interval, callback) => {

    let lastTimeChecked = Date.now();

    const newCheck = () => {

        fs.stat(soursePath, (statError, stats) => {

            if (statError) {
                callback(statError);
                clearInterval(startInterval);
                return;
            }

            if (lastTimeChecked && stats.mtimeMs > lastTimeChecked) {
                callback(null);
            }

            lastTimeChecked = stats.mtimeMs;

        })
    }

    newCheck();
    const startInterval = setInterval(newCheck, interval)
    return startInterval;
}



export default watch;
// END
