A simple function using canvas to compress image file.


## Usage
### using cdn
```html
<input  type='file' id='test'/>
<script src="https://unpkg.com/frontend-image-compress@latest/dist/index.min.js"></script>
<script>
  const $file = document.querySelector('#test');
  $file.onchange = async function(e) {
    const file = e.target.files[0];
    window.Compress.compressImageFile(file).then(compressedFile=>{}).catch(err=>{
      alert(err.toString())
    })
  }
</script>
```
### using npm or yarn
- yarn: `yarn add frontend-image-compress`
- npm: `npm i frontend-image-compress`
```js
import { compressImageFile } from 'frontend-image-compress'

const $file = document.querySelector('#test');
$file.onchange = async function(e) {
  const file = e.target.files[0];
  const compressedFile = await compressImageFile(file)
}
```

## API
when using script tag, you need to use `window.Compress.xx`, `Compress` is just a namespace
### compressImageFile(file, quality):newFile
name | type  | description
---|---| ---
file | File | from input[type="file"]
quality | number |  range: 0~1, default is 0.7(decrease this value if you got console warning)
return | Promise\<File\> | compressed file

## Changelog
1. 2020-4-26 `3.0.1`：
    - \[breaking] filename changed when using cdn (from `frontend-image-compress.min.js` to `index.min.js`) 
      
1. 2019-03-16 `3.0.0`：
  - \[breaking] add namespace to methods 
  - support `commonjs`
