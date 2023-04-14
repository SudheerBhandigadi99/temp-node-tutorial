const {readFile, writeFileSync} = require('fs');
 

readFile('./Content/first.txt', 'utf8', (err, data) => {
  if(err){
      console.log(err);
      return err;
  }
  const first = data;
  console.log(first);
  console.log('first logged');


readFile('./Content/second.txt', 'utf8', (err, data) => {
  if(err){
      console.log(err);
      return err;
  }

  const second = data;
  console.log(second);
  console.log('Second logged');



  writeFileSync('./Content/result-async.txt',
  'Here is the result: ' + first + ' ' + second, {flag:'a'});
  console.log('Done with the task..');


});

});


readFile('./Content/result-async.txt', 'utf8', (err, data)=> {
  if(err){
      console.log(err);
      return err;
  }
  console.log(data);

});