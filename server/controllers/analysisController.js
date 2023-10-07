const { spawn } = require('child_process');

module.exports = {
    processForm: async (req, res) => {
        const data = req.body;
        
        if (data.methodology) {
            const path = '../features/analize_file.py';
            const childProcess = spawn('python', [path]);

            childProcess.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
              });
              
              childProcess.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
              });
              
              childProcess.on('close', (code) => {
                console.log(`Proceso hijo cerrado con código ${code}`);
              });
        }
        res.send('succes!')
    }
}