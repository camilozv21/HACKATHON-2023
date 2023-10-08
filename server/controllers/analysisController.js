const { spawn } = require('child_process');

module.exports = {
    processForm: async (req, res) => {
        const data = req.body;
        console.log(data.methodology)
        

        if (data.methodology === 'plot') {
            try {
                const path = './server/features/analize_file.py';
                const command = `echo ${data.methodology} | python ${path}`;
                const childProcess = spawn(command, { shell: true });

                childProcess.stdout.on('data', (data) => {
                    console.log(`stdout: ${data}`);
                });

                childProcess.stderr.on('data', (data) => {
                    console.error(`stderr: ${data}`);
                });

                childProcess.on('close', (code) => {
                    console.log(`Child process closed with code ${code}`);
                    // You can add additional logic here after the script execution is complete
                    res.send('Success!');
                });
            } catch (error) {
                console.error('Error executing Python script:', error);
                res.status(500).send('Internal Server Error');
            }
        }  else if (data.methodology === 'clustering') {
            try {
                const path = './server/features/analize_file.py';
                const command = `echo ${data.methodology} | python ${path}`;
                const childProcess = spawn(command, { shell: true });

                childProcess.stdout.on('data', (data) => {
                    console.log(`stdout: ${data}`);
                });

                childProcess.stderr.on('data', (data) => {
                    console.error(`stderr: ${data}`);
                });

                childProcess.on('close', (code) => {
                    console.log(`Child process closed with code ${code}`);
                    // You can add additional logic here after the script execution is complete
                    res.send('Success!');
                });
            } catch (error) {
                console.error('Error executing Python script:', error);
                res.status(500).send('Internal Server Error');
            }
        } else if (data.methodology === 'correlation') {
            try {
                const path = './server/features/analize_file.py';
                const command = `echo ${data.methodology} | python ${path}`;
                const childProcess = spawn(command, { shell: true });

                childProcess.stdout.on('data', (data) => {
                    console.log(`stdout: ${data}`);
                });

                childProcess.stderr.on('data', (data) => {
                    console.error(`stderr: ${data}`);
                });

                childProcess.on('close', (code) => {
                    console.log(`Child process closed with code ${code}`);
                    // You can add additional logic here after the script execution is complete
                    res.send('Success!');
                });
            } catch (error) {
                console.error('Error executing Python script:', error);
                res.status(500).send('Internal Server Error');
            }
        }
    }
};
