import fsp from 'fs/promises';

// BEGIN
export const touch = async (path) => {
    try {
        await fsp.access(path);
    } catch {
        await fsp.writeFile(path, '');
    }
};
// END