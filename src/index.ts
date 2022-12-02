/*=============================================
                    Main
=============================================*/
export const getEnvironmentVariable = (
    variable: string,
    defaultValue?: string,
  ): string => {
    const value = process.env[variable];
    if (value) {
        return value;
    }
    if (defaultValue !== undefined) {
        console.info(`Environment variable ${variable} was not set. Using default: ${defaultValue}`);
        return defaultValue;
    }
    throw new Error(`Mandatory environment variable ${variable} was not set.`)  
}
/*=============================================
                    Export
=============================================*/
export default getEnvironmentVariable