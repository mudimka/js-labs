import { UsageError, parseOptions, parsePort, requireOption } from './lib/cli.js';

const USAGE = 'Usage: node server.js --port <1-65535>';

function parseServerArgs(argv) {
  const values = parseOptions({
    port: { type: 'string', short: 'p' },
  });
  const port = parsePort(requireOption(values, 'port'));
  return { port };
}

function main() {
  let options;
  try {
    options = parseServerArgs();
  } catch (error) {
    if (!(error instanceof UsageError)) throw error;
    console.error(`Error: ${error.message}\n${USAGE}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Would listen on port ${options.port}`);
}

main();