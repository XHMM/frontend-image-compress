A simple tool using canvas to compress image file.

## Example
Below example is from `example.html`，you can download this repo and open `example.html` in browser directly to have a try.
```html
<input  type='file' id='test'/>
<script src="./dist/frontend-compress.min.js"></script>
<script>
  const $file = document.querySelector('#test');
  $file.onchange = async function(e) {
    const file = e.target.files[0];
    window.Compress.compressImageFile(file,0.5).then(res=>{
      const rate = ((file.size - res.size) / file.size).toFixed(2)*100;
      alert(`original size: ${file.size} byte, compressed size: ${res.size} byte, rate: ${rate}%`)
    }).catch(err=>{
      alert(err.toString())
    })
  }
</script>
```

## CDN
https://unpkg.com/frontend-image-compress@latest/dist/frontend-compress.min.js

## API
`Compress` is just a namespace below:
### Compress.compressImageFile(file, quality):newFile
name | type  | ps
---|---| ---
file | File | from input[type="file"]
quality | number |  range: 0~1, default is 0.8
return | Promise\<File\> | compressed file

## Changelog
1. 2019-03-16 `3.0.0`：
  - \[breaking] add namespace to methods 
  - support `commonjs`