A simple tool using canvas to compress image file.

## Example
Below example is from `test.html`，you can download this repo and open `test.html` directly to hava a try.
```html
<input  type='file' id='test'/>
<script src="./dist/frontend-compress.min.js"></script>
<script>
  const $file = document.querySelector('#test');
  $file.onchange = async function(e) {
    const file = e.target.files[0];
    compressImageFile(file,0.5).then(res=>{
      alert(`original size: ${file.size}, compressed size: ${res.size}`)
    }).catch(err=>{
      alert(err.toString())
    })
  }
</script>
```

## CDN
https://unpkg.com/frontend-image-compress@latest/dist/frontend-compress.min.js

## API
### compressImageFile(file, quality):Promise
name | type  | ps
---|---| ---
file | File | from input[type="file"]
quality | number |  range: 0~1, default is 0.92
return | Promise<File> | compressed file

## Build
Edit `src/frontend-compress.ts` and run `npm run build` to compile ts file