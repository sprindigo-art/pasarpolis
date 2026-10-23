const sdk = require('../lib/client')

// Should throw TypeError, due not init sdk with credentials first
test('Should throw a TypeError', () => {
    try {
        sdk.getPolicyStatus('48fc2801e487af79ef311621f63e4133c5318b99')
    } catch (error) {
        expect(error).toBe('please check your credentials')
    }
})

// Custom expect
expect.extend({
    toContainObject(received, argument) {
  
        const pass = this.equals(received, 
            expect.arrayContaining([
            expect.objectContaining(argument)
            ])
        )
    
        if (pass)
            return {
                message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
                pass: true
            }
        else
            return {
                message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
                pass: false
            }
    }
})

// init sdk with credetentials first
const client = sdk.init('<partner>', '<secret>', 'https://integrations-testing.pasarpolis.com')

// Get status should be containt status = 'COMPLETED'
test('Should success get status', (done) => {
    const status = client.getPolicyStatus('48fc2801e487af79ef311621f63e4133c5318b99')
    status
        .then(response => {
            expect(response).toContainObject({ status: 'COMPLETED' })
            expect(response).not.toContainObject({ status: 'PENDING' })
            done()
        })
        .catch(err => console.log(err))
})

// Get status should be containt status = 'COMPLETED'
test('Should return empty array', (done) => {
    const status = client.getPolicyStatus('xxx')
    status
        .then(response => {
            expect(response).toHaveLength(0)
            done()
        })
        .catch(err => console.log(err))
})