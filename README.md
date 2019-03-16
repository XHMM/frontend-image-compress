A simple tool using canvas to compress image file.


## Usage
### using cdn
```html
<input  type='file' id='test'/>
<script src="https://unpkg.com/frontend-image-compress@latest/dist/frontend-image-compress.min.js"></script>
<script>
  const $file = document.querySelector('#test');
  $file.onchange = async function(e) {
    const file = e.target.files[0];
    window.Compress.compressImageFile(file).then(res=>{
      
    }).catch(err=>{
      alert(err.toString())
    })
  }
</script>
```
### using npm or yarn
- yarn: `yarn add frontend-image-compress`
- npm: `npm i frontend-image-compress`
```js
import {compressImageFile} from 'frontend-image-compress'

const $file = document.querySelector('#test');
$file.onchange = async function(e) {
  const file = e.target.files[0];
  const compressedFile = await compressImageFile(file)
}
```

## API
when using script tag, you need to use `window.Compress.xx`, `Compress` is just a namespace
### compressImageFile(file, quality):newFile
name | type  | ps
---|---| ---
file | File | from input[type="file"]
quality | number |  range: 0~1, default is 0.7(decrease this value if you get console warning)
return | Promise\<File\> | compressed file

## Changelog
1. 2019-03-16 `3.0.0`：
  - \[breaking] add namespace to methods 
  - support `commonjs`