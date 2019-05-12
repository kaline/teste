var md5 = require('md5');



console.log(process.argv[0] + "\r\n" + process.argv[1] + "\r\n" + process.argv[3] + "\r\n" + md5(process.argv[3]))
