const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");

const dirCodes = path.join(__dirname, "apiCalls");

if(!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, {recursive: true});
}

const generateFileOpenai = async (content) => {
    const jobId = uuid();
    const filename = `${jobId}.py`
    const filepath = path.join(dirCodes, filename);
    await fs.writeFileSync(filepath, content);
    return filepath;
}

module.exports = {
    generateFileOpenai,
}