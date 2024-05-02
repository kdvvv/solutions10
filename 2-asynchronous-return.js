import fs from 'fs';

// BEGIN
const write = (filePath, data, callback) => {
    fs.writeFileSync(filePath, data);
    callback();
}

export default write;
// END