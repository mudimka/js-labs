function parsePort(value) {
  const port = Number(value);
  if (!/^\d+$/.test(value) || port < 1 || port > 65535) {
    throw new Error(`Port must be an integer from 1 to 65535, got "${value}"`);
  }
  return port
}

const inputs = ['5000', '1', '65535', '0', '65536', 'abc', '', ' 80', '5.5', '1e3', '0x50', '-1'];

for (const input of inputs){
  try{
    console.log(`${JSON.stringify(input).padEnd(8)} → ${parsePort(input)}`);
  } catch (error)
  {
    console.log(`${JSON.stringify(input).padEnd(8)} → ${error.message}`);
  }
}