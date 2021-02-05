import app from './App';
import './database';

app.listen(app.get('port'),()=> {
    console.log('Server on port:', app.get('port'))
})


//