import fs from 'fs';

// BEGIN
export const move = (path, dest, callback) => {
    fs.readFile(path, (error, data) => {
        if (error) {
            callback(error);
            return;
        }

        fs.writeFile(dest, data, (error) => {

            if (error) {
                callback(error);
                return;

            }

            fs.unlink(path, (error) => {

                if (error) {
                    callback(error);
                    return;
                }

                callback(null);
            });

        });
    });
};

// END
