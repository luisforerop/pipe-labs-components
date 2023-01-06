import { createReadStream, renameSync, appendFileSync } from 'fs'
import { exec, execSync } from 'child_process'

renameSync('./docs/iframe.html', './docs/iframeToDelete.html')
const stream = createReadStream('./docs/iframeToDelete.html')
stream.on('data', (chunk) => {
  const data = chunk.toString()
  const correctData = data.replace(/\/assets/g, '/docs/assets')
  appendFileSync('./docs/iframe.html', correctData)
  execSync('yarn clean:removeIframe')
})

/*





stream.on('close', (data) => {
  console.log('No hay mas')
  console.log({ data })
})
*/
/*
exec('yarn --version', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    return
  }
  console.log(`stdout: ${stdout}`)
})
*/
