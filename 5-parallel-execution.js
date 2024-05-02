import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (sourcePath, callback) => {
    fs.readdir(sourcePath, (readError, files) => {
        if (readError) {
            callback(readError);
            return;
        }

        let totalSize = 0;

        async.each(
            files,
            (file, eachCallback) => {
                const filePath = path.join(sourcePath, file);

                fs.stat(filePath, (statError, stats) => {
                    if (statError) {
                        eachCallback(statError);
                        return;
                    }

                    if (stats.isFile()) {
                        totalSize += stats.size;
                    }

                    eachCallback();
                });
            },
            (eachError) => {
                if (eachError) {
                    callback(eachError);
                    return;
                }

                callback(null, totalSize);
            }
        );
    });
};
// END
