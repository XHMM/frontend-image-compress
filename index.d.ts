declare module "frontend-compress" {
    function compressImageFile(file: File, quality?: number): Promise<File>;
    export { compressImageFile };
}
