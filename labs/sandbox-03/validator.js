class ValidatonError extends Error {
    constructor(field, message, options) {
        super(message, options)
        this.field = field;
    }

}

function parseUser(json) {
    let person;
    try {
        person = JSON.parse(json);
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new ValidatonError(null, 'User must be valid JSON');
        }
    }

    if (!("name" in person) || !(person?.name)) {
        throw new ValidatonError('names', 'Name is required');
    }

    if (!("age" in person) || Number(person.age) < 0 || !(Number.isInteger(person.age))) {
        throw new ValidatonError('age', 'Age must be a non-negative integer');
    }

    return person;
}

let test = 'fefe'

try{
    console.log("OK:", parseUser(test))
} catch(error){
    console.log(error)
}

