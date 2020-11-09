const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')
    ;
(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
                "name": "Foo",
                "id": 123,
                "profession": "Javascript Developer",
                "birthDay": 1995
            },
            {
                "name": "Bar",
                "id": 321,
                "profession": "Go Developer",
                "birthDay": 1940
            },
            {
                "name": "Baz",
                "id": 231,
                "profession": "Rust Developer",
                "birthDay": 1990
            }
        ]

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))

    }
})()