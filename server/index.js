const express = require('express');
const cors = require('cors');
const { generateFile } = require('./generateFile')
const { generateFileOpenai } = require('./openai/generateFileOpenai')
const { executePy } = require('./executePy')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.post('/run', async (req, res) => {
    const { language = 'py', code } = req.body;

    if (code == undefined) {
        return res.status(404).json({ success: false, error: "Empty code body" })
    }

    const filepath = await generateFile(language, code)
    const output = await executePy(filepath);
    return res.json({ filepath, output });
})

app.post('/api', async (req, res) => {
    try {
        const { task } = req.body;
        String(task)
        const data0 = "import api\n\n";
        const main_task = `task = \'${task}\'\n`
        const data1 = "api.runai(task)\n";
        const apiCallData = data0.concat(main_task, data1);


        if (task == undefined) {
            return res.status(404).json({ success: false, error: "Empty task body" })
        }

        const filepath = await generateFileOpenai(apiCallData)
        const output = await executePy(filepath);
        return res.json({ filepath, output });
    } catch (err) {
        console.error(err)
    }
})


app.listen(5000, () => {
    console.log('listening on port 5000...')
});