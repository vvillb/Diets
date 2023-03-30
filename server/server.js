const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/calculate-macros', (req, res) => {
    const { carbs_pasta, protein_pasta, fat_pasta, carbs_chicken, protein_chicken, fat_chicken, carbs_mozzarella, protein_mozzarella, fat_mozzarella, carbs_goal, protein_goal, fat_goal } = req.body;
  
    const pythonProcess = spawn('python', ['../python/macroCalculator.py', carbs_pasta, protein_pasta, fat_pasta, carbs_chicken, protein_chicken, fat_chicken, carbs_mozzarella, protein_mozzarella, fat_mozzarella, carbs_goal, protein_goal, fat_goal]);
  
    pythonProcess.stdout.on('data', (data) => {
      const result = data.toString();
      res.send(result);
    });
  
    pythonProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
  
  });
  
  app.listen(port, () => console.log(`Server started on port ${port}`));