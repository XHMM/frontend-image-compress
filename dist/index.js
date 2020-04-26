"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compressImageFile(file, quality) {
    if (quality === void 0) { quality = 0.7; }
    var oldFileSize = file.size;
    return new Promise(function (resolve, reject) {
        if (file.type.startsWith("image")) {
            if (file.type.match(/(jpeg)|(png)/)) {
                var reader = new FileReader();
                reader.onload = function () {
                    var oldDataURL = this.result;
                    var img = new Image();
                    img.onload = function () {
                        var width = img.width, height = img.height;
                        var $canvas = document.createElement("canvas");
                        $canvas.width = width;
                        $canvas.height = height;
                        var ctx = $canvas.getContext("2d");
                        ctx.drawImage(img, 0, 0);
                        $canvas.toBlob(function (blob) {
                            var newFile = blob;
                            newFile.lastModified = file.lastModified;
                            newFile.name = file.name;
                            var newFileSize = newFile.size;
                            var compressRate = 
                            // @ts-ignore
                            ((oldFileSize - newFileSize) / oldFileSize).toFixed(2) * 100;
                            console.log("oldFile: " + oldFileSize + "byte\nnewFile: " + newFileSize + "byte\ncompressRate: " + compressRate + "%");
                            if (newFile.size < oldFileSize)
                                resolve(newFile);
                            else {
                                console.warn("original image size >= compressed image size, so original image returned.");
                                resolve(file);
                            }
                        }, file.type, quality);
                    };
                    img.onerror = function () {
                        console.log("img onerror");
                    };
                    img.src = oldDataURL;
                };
                reader.readAsDataURL(file);
            }
            else {
                reject(new Error("Only support jpeg/png type"));
            }
        }
        else {
            reject(new Error("Not support non-image type"));
        }
    });
}
exports.compressImageFile = compressImageFile;
