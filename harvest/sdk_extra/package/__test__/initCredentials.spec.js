const sdk = require('../lib/client')

// Test should throw an error, credentials is not complete
test('Should throw an error', () => {
    try {
        sdk.init('<secret>', 'https://integrations-testing.pasarpolis.com')
    } catch (error) {
        expect(error).toBe('please check your credentials')
    }
})

// Once credentials complete, expect return as a class
test('Should return as a class', () => {
    const response = sdk.init('<partner>', '<secret>', 'https://integrations-testing.pasarpolis.com')
    expect(response).toBeInstanceOf(Function)
})

