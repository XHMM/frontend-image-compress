function compressImageFile(file, quality) {
    if (quality === void 0) { quality = 0.92; }
    return new Promise(function (resolve, reject) {
        if (file.type.startsWith('image')) {
            if (file.type.match(/jpeg|png/)) {
                var reader = new FileReader();
                reader.onload = function () {
                    var dataURL = this.result;
                    var img = new Image();
                    img.onload = function () {
                        var width = img.width, height = img.height;
                        var $canvas = document.createElement('canvas');
                        $canvas.width = width;
                        $canvas.height = height;
                        var ctx = $canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        var newDataURL = $canvas.toDataURL('image/jpeg', quality);
                        resolve(dataURLtoFile(newDataURL, file.name));
                    };
                    img.src = dataURL;
                };
                reader.readAsDataURL(file);
            }
            else {
                reject(new Error('Only support jpeg, jpg, png type'));
            }
        }
        else {
            reject(new Error('Not support no-image type'));
        }
    });
}
function dataURLtoFile(dataURL, filename) {
    var arr = dataURL.split(',');
    var type = arr[0].match(/:(.*?);/)[1];
    var data = atob(arr[1]);
    var u8arr = new Uint8Array(data.length);
    u8arr.forEach(function (item, idx) {
        item = data[idx].charCodeAt(0);
    });
    return new File([u8arr], filename, { type: type });
}
