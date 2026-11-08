import { parseArgs } from "node:util";

const USAGE = "Usage: node greet.js --name <name> [--times <1-10>] [--shout]";

class UserError extends Error { };

function parseArgsUser() {
    let values;
    try {
        ({ values } = parseArgs({
            options: {
                name: { type: 'string' },
                times: { type: 'string', default: '1' },
                shout: { type: 'boolean', short: 's', default: false },
                help: { type: 'boolean', short: 'h', default: false }
            }
        }));
    }
    catch (error) {
        throw new UserError(error.message);
    }

    if (!values.name) {
        throw new UserError('Option --name is required');
    }

    if (!/^\d+$/.test(values.times) || values.times < 1 || values.times > 10) {
        throw new UserError('Option --times must be a integer (1 - 10)');
    }

    if (values.help) {
        return { help: true };
    }

    return values;

}

function main() {
    let options;
    try {
        options = parseArgsUser(process.argv.slice(2));
    } catch (error) {
        if (!(error instanceof UserError)) {
            throw error;
        }
        console.error(`Error: ${error.message}\n${USAGE}`);
        process.exitCode = 1;
        return;
    }

    if (options.help) {
        console.log(USAGE)
        return; 
    }

    const greeting = `Hello, ${options.name}!`
    for (let i = options.times; i != 0; i--){
        console.log( options.shout ? greeting.toUpperCase() : greeting)
    }

}

main()

