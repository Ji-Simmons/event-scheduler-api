require('dotenv').config();
const DBNAME = 'tododb';
module.exports= {
   // remove process when localhost, add when live.
   PORT: /* process.env.PORT || */ 5556,
   DBNAME,
   APPNAME: 'Calendar',
   DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@blog-z710y.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,  
}