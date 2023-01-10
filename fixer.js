import { createReadStream, renameSync, appendFileSync } from 'fs'
import { exec, execSync } from 'child_process'
import yargs from 'yargs/yargs'

const { argv } = yargs(process.argv.slice(2)).option('e', {
  alias: 'environment',
  type: 'string',
})

const assetsPath =
  argv.e === 'gh-pages' ? '/pipe-labs-components/assets' : '/docs/assets'

renameSync('./docs/iframe.html', './docs/iframeToDelete.html')
const stream = createReadStream('./docs/iframeToDelete.html')
stream.on('data', (chunk) => {
  const data = chunk.toString()
  const correctData = data.replace(/\/assets/g, assetsPath)
  appendFileSync('./docs/iframe.html', correctData)
  execSync('yarn clean:removeIframe')
})
