interface CompressParams {
  file:File
  quality:number
}

function compressImageFile({file,quality=0.92}:CompressParams, callback:(err:Error,file:File)=>void) {
  if(file.type.startsWith('image')) {
    if(file.type.match(/jpeg|png/)) {
      const reader = new FileReader()
      reader.onload = function() {
        const dataURL = this.result;
        const img = new Image()
        img.onload = function() {
          const {width, height} = img
          const $canvas = document.createElement('canvas');
          $canvas.width = width
          $canvas.height = height
          const ctx = $canvas.getContext('2d')
          ctx.drawImage(img,0,0)
          const newDataURL = $canvas.toDataURL('image/jpeg', quality);
          callback(null, dataURLtoFile(newDataURL,file.name))
        }
        img.src = dataURL as string;
      }
      reader.readAsDataURL(file);
    }
    else {
      callback(new Error('Only support jpeg|jpg|png type'), null)
    }
  }
  else {
    callback(new Error('Not support no-image type'), null)
  }
}
function dataURLtoFile(dataURL:string, filename:string):File {
  const arr = dataURL.split(',')
  const type = arr[0].match(/:(.*?);/)[1]
  const data = atob(arr[1])
  const u8arr = new Uint8Array(data.length);
  u8arr.forEach((item,idx)=>{
    item = data[idx].charCodeAt(0)
  })
  return new File([u8arr], filename, {type:type});
}