const mode = process.argv[2] ?? 'code';
setTimeout(() => console.log('cleanup done'), 100);
if (mode === 'exit') {
  process.exit(1);
} else {
  process.exitCode = 1;
}