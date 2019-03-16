function compressImageFile(file:File,quality=0.7):Promise<File> {
  const oldFileSize = file.size;

  return new Promise((resolve, reject) => {
    if(file.type.startsWith('image')) {
      if(file.type.match(/jpeg|png/)) {
        const reader = new FileReader()
        reader.onload = function() {
          const oldDataURL = this.result;
          const img = new Image()
          img.onload = function() {
            const {width, height} = img
            const $canvas = document.createElement('canvas');
            $canvas.width = width
            $canvas.height = height
            const ctx = $canvas.getContext('2d')
            ctx.drawImage(img,0,0);
            $canvas.toBlob(function(blob) {
              const newFile:any = blob;
              newFile.lastModified = file.lastModified;
              newFile.name = file.name
              const newFileSize = newFile.size;
              // @ts-ignore
              const compressRate = ((oldFileSize - newFileSize) / oldFileSize).toFixed(2)*100;
              console.log(`oldFile: ${oldFileSize}byte\nnewFile: ${newFileSize}byte\ncompressRate: ${compressRate}%`)
              if(newFile.size<oldFileSize)
                resolve(newFile)
              else {
                console.warn('original image size >= compressed image size, so original image returned.')
                resolve(file)
              }
            }, file.type, quality)
          }
          img.onerror = function() {
            console.log('img onerror')
          }
          img.src = oldDataURL as string;
        }
        reader.readAsDataURL(file);
      }
      else {
        reject(new Error('Only support jpeg, jpg, png type'))
      }
    }
    else {
      reject(new Error('Not support no-image type'))
    }
  })
}

export  {compressImageFile}