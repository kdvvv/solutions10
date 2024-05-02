import fs from 'fs/promises';
// BEGIN
export const reverse = async (fileSource) => {
    try {
        const fileContent = await fs.readFile(fileSource, 'utf-8');
        const reversedContent = fileContent.split('\n').reverse().join('\n');
        await fs.writeFile(fileSource, reversedContent);
    } catch (error) {
    }
};

// END