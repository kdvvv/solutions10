import fsp from 'fs/promises';

// BEGIN
export const exchange = async (firsPath, secondPath) => {
    const [firstData, secondData] = await Promise.all([
        fsp.readFile(firsPath, 'utf-8'),
        fsp.readFile(secondPath, 'utf-8')
    ]);

    await Promise.all([
        fsp.writeFile(firsPath, secondData),
        fsp.writeFile(secondPath, firstData)
    ]);
};
// END