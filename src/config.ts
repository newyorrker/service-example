
import dotenv from 'dotenv-override';


import dotenvExpand from 'dotenv-expand'
import path from 'path'
import minimist from 'minimist'


function load(path: string) {
  try 
  {
    const env = dotenv.config({ path: path, override: true });
    dotenvExpand(env);
  } 
  catch(error)
  {
    console.error(error)
  }
}

const options = minimist(process.argv);
const mode = options.mode;
const localPath = path.resolve(process.cwd(), 'configuration/.env');
const modePath = path.resolve(process.cwd(), `configuration/.env${mode ? `.${mode}` : ``}`);

load(localPath);

if(mode) {
  load(modePath);
}

export default {
  someKey: process.env.NODE_APP_SOME_KEY as string,
  anotherKey: process.env.NODE_APP_ANOTHER_KEY as string,
}