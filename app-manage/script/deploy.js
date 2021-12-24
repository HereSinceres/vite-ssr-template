const chokidar = require('chokidar')
const path = require('path')
const fse = require('fs-extra')

// One-liner for current directory
console.log(process.cwd())
chokidar.watch(path.join(process.cwd(), '.')).on('all', async (event, filePath) => {
  const pagesPath = path.join(process.cwd(), '/pages')

  if (filePath.indexOf(pagesPath) > -1) {
    moveFiles(path.join(process.cwd(), '/pages'), path.join(process.cwd(), '../runtime/app/pages/star-wars'))
  }
})
const moveFiles = (srcDir, destDir) => {
  fse.moveSync(srcDir, destDir, function (err) {
    // To move a file permanently from a directory
    if (err) {
      console.error(err)
    } else {
      console.log('success!')
    }
  })
}
