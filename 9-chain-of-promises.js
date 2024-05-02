import fsp from 'fs/promises';

// BEGIN
export const getTypes = async (fileSources) => {
    const promises = fileSources.map(async (fileSource) => {
        try {
            const stats = await fsp.stat(fileSource);
            return stats.isDirectory() ? 'directory' : 'file';
        } catch (error) {
            return null;
        }
    });

    const results = await Promise.all(promises);
    return results;
};
// END