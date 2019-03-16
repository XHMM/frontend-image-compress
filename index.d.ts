declare module "frontend-image-compress" {
    function compressImageFile(file: File, quality?: number): Promise<File>;
    export { compressImageFile };
}
