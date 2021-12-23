// app.post('/api' , async (req, res) => {
//     const { task } = req.body;
//     const data0 = "import api\n\n";
//     const main_task = `task = ${String(task)}\n`
//     const data1 = "api.runai(task)\n";
//     const apiCallData = data0.concat(main_task, data1);
    

//     if(task == undefined) {
//         return res.status(404).json({success: false, error: "Empty task body"})
//     }

//     const filepath = await generateFileOpenai(apiCallData)
//     const output = await executePy(filepath);
//     return res.json({ filepath, output });
// })