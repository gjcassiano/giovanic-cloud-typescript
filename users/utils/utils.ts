export class Utils {
    
    constructor(){}

    public static printUsedMemory(): void {
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`Server with memory used approximately ${Math.round(used * 100) / 100} MB`);
    }
}