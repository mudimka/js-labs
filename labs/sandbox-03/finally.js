function kek() {
    console.log(22);
}

function bad(){
    throw new Error('lol')
}

function withResource(action) {
    console.log('open')
    try {
        return action()
    } finally {
        console.log('close')
    }
}

function main() {
    try {
        return withResource(bad);
    }catch(error){
        console.log(`error: ${error.message}`)
    }

}

main();