import 'dotenv/config';
import app from './app.js';

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`)
})