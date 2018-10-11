A simple tool using canvas to compress image file.

## API
### compressImageFile(params, callback):void
name | type |signature
---|--- |---
params | object | { file:File, quality:number }
callback | function | (err:Error, file:File)=>void

## Example
Below example is from `test.html`，you can download this repo and open `test.html` directly to hava a try.
```html
<input  type='file' id='test'/>
<script src="./dist/frontend-compress.js"></script>
<script>
  const $file = document.querySelector('#test');
  $file.onchange = function(e) {
    const file = e.target.files[0];
    compressImageFile({file, quality:0.5},(err, newFile) => {
      if(err) alert(err.toString())
      else alert(`original size: ${file.size}, compressed size: ${newFile.size}`)
    })
  }
</script>
```

## Build
Edit `src/frontend-compress.ts` and run `npm run build` to compile ts file