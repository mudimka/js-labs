function ok1() { return 'ok' };
function error1() { throw Error };
function bug() { return null.length };
function ok2() { return 'ok' };

const functions = [ok1, error1, bug, ok2]

function main() {
    let failed = 0;
    functions.forEach((fun, index) => {
        try {
            console.log(`Function №${index} return:${fun()}`)
        } catch (error) {
            console.error(`Function №${index} failed: ${error.name}: ${error.message}`)
            failed += 1;
        }
    }
    );

    console.log(`Done, failed: ${failed} of ${functions.length}`)
}

main()