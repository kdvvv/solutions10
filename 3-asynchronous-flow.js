import fs from 'fs';

// BEGIN
export const compareFileSizes = (fileSrc1, fileSrc2, callback) => {
    fs.stat(fileSrc1, (error, size1) => {
        if (error) {
            callback(error);
            return;
        }
        fs.stat(fileSrc2, (error, size2) => {
            if (error) {
                callback(error);
                return;
            }
            const compare = Math.sign(size1.size - size2.size);
            callback(undefined, compare);
        })
    })

}
// END