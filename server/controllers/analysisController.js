const { spawn } = require('child_process');
const Analysis = require('../database/models/Analysis');

module.exports = {
    processForm: async (req, res) => {
        const data = req.body;
        const filePath = req.file.destination + '/' + req.file.filename.trim();
        
        if (data.methodology === 'plot') {
            try {
                const path = './server/features/analize_file.py';
                const command = `echo ${filePath} | python ${path}`;
                const childProcess = spawn(command, { shell: true });

                const newAnalysis = new Analysis({
                    filename: req.file.filename,
                    methodology: data.methodology,
                });
              
                await newAnalysis.save();

                let cleanedNames;

                childProcess.stdout.on('data', (data) => {
                    const varpython = data.toString().trim()
                    cleanedNames = varpython.split(',').slice(2).join(',');
                });

                childProcess.stderr.on('data', (data) => {
                    console.error(`stderr: ${data}`);
                });

                childProcess.on('close', async (code) => {
                    newAnalysis.cleanedNames = cleanedNames;
                    await newAnalysis.save();

                    res.send('Success!');
                });
            } catch (error) {
                console.error('Error executing Python script:', error);
                res.status(500).send('Internal Server Error');
            }
        }  else if (data.methodology === 'clustering') {
            try {
                const path = './server/features/analize_file.py';
                const command = `echo ${filePath} | python ${path}`;
                const childProcess = spawn(command, { shell: true });

                const newAnalysis = new Analysis({
                    filename: req.file.filename,
                    methodology: data.methodology,
                    clusterCount: data.clusterCount
                });
              
                await newAnalysis.save();

                let cleanedNames;

                childProcess.stdout.on('data', (data) => {
                    const varpython = data.toString().trim()
                    cleanedNames = varpython.split(',').slice(2).join(',');
                });

                childProcess.stderr.on('data', (data) => {
                    console.error(`stderr: ${data}`);
                });

                childProcess.on('close', async (code) => {
                    newAnalysis.cleanedNames = cleanedNames;
                    await newAnalysis.save();

                    res.send('Success!');
                });
            } catch (error) {
                console.error('Error executing Python script:', error);
                res.status(500).send('Internal Server Error');
            }
        } else if (data.methodology === 'correlation') {
            try {
                const path = './server/features/analize_file.py';
                const command = `echo ${filePath} | python ${path}`;
                const childProcess = spawn(command, { shell: true });

                const newAnalysis = new Analysis({
                    filename: req.file.filename,
                    methodology: data.methodology,
                });
              
                await newAnalysis.save();

                let cleanedNames;

                childProcess.stdout.on('data', (data) => {
                    const varpython = data.toString().trim()
                    cleanedNames = varpython.split(',').slice(2).join(',');
                });

                childProcess.stderr.on('data', (data) => {
                    console.error(`stderr: ${data}`);
                });

                childProcess.on('close', async (code) => {
                    newAnalysis.cleanedNames = cleanedNames;
                    await newAnalysis.save();

                    res.send('Success!');
                });
            } catch (error) {
                console.error('Error executing Python script:', error);
                res.status(500).send('Internal Server Error');
            }
        }
    },
    getAnalysisById: async (req, res) => {
        const analysisId = req.params.id;

        try {
            const analysis = await Analysis.findById(analysisId);

            if (!analysis) {
                return res.status(404).json({ error: 'Análisis no encontrado' });
            }

            res.json(analysis);
        } catch (error) {
            console.error('Error al obtener el análisis por ID:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
};
