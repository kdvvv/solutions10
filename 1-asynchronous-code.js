import fs from 'fs';

// BEGIN
const print = (src) => {
    fs.readFile(src, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
};
export default print;
// END
