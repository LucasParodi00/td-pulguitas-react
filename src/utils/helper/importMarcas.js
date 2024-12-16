


export const importLogos = async () => {
    const LogoModules = import.meta.glob('/public/marcas/*.png');
    const LogoImports = await Promise.all(
        Object.keys(LogoModules).map(path => LogoModules[path]())
    );

    return LogoImports.map(module => module.default);
}