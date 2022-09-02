const fs = require('fs')

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

if (!fs.existsSync('./data')) {
  fs.mkdirSync('./data')
}

const dataFile = './data/absen.json'
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, '[]', 'utf-8')
}

const makeQst = (qst) => { 
  return new Promise((resolve, reject) => { 
    rl.question(qst, (answer) => { 
      resolve(answer)
    })
  })
}

const saveData = (data) => {
  const file = JSON.parse(fs.readFileSync(dataFile, 'utf-8'))
  file.push(data)
  fs.writeFileSync(dataFile, JSON.stringify(file))
  console.log('Selamat, anda telah berhasil absen!')
  rl.close()
}

module.exports = { makeQst, saveData }