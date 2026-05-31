import { readdirSync, writeFileSync } from 'fs'
import { resolve, parse } from 'path'
import { fileURLToPath } from 'url'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')
const certDir = resolve(__dirname, '..', 'Certification')
const output = resolve(__dirname, '..', 'certifications.json')

const files = readdirSync(certDir)
  .filter(f => f.toLowerCase().endsWith('.pdf'))
  .sort()
  .map(f => ({
    name: parse(f).name,
    file: f
  }))

writeFileSync(output, JSON.stringify(files, null, 2), 'utf-8')
console.log(`Generated certifications.json (${files.length} certifications)`)
