const assert = require('assert')
const { THREAD, THREAD_CHANGE } = require('../core/tests/models')

module.exports = {
    test
}

async function test(server){
    describe('Thread Tests', function() {
    
        this.timeout(Infinity)
    
        this.beforeAll(async () => {
            app = await server
        })
    
        it('[POST] /threads - Create thread', async () => {
            const result = await app.inject({
                method: 'POST',
                headers,
                url: '/threads',
                payload: JSON.stringify(THREAD)
            })
            const dados = JSON.parse(result.payload)
            const statusCode = result.statusCode
            assert.deepEqual(statusCode, 200)
            assert.ok(Array.isArray(dados))
            
        })
    
        it('[GET] /threads - Get all threads', async () => {
            const result = await app.inject({
                method: 'GET',
                headers,
                url: '/threads',
            })
            const statusCode = result.statusCode
            assert.deepEqual(statusCode, 200)
        })
    
        it('[GET] /threads/:board_id - Get threads by board id', async () => {
            const result = await app.inject({
                method: 'GET',
                headers,
                url: `/threads/${THREAD.board_id}`,
            })
            const statusCode = result.statusCode
            assert.deepEqual(statusCode, 200)
        })
    
        it('[UPDATE] /threads - Update thread status', async () => {
            const result = await app.inject({
                method: 'PUT',
                headers,
                url: '/threads',
                payload: JSON.stringify(THREAD_CHANGE),
            })
            const statusCode = result.statusCode
            assert.deepEqual(statusCode, 200)
        })

        it('[DELETE] /threads - Delete thread by id and password', async () => {
            const result = await app.inject({
                method: 'DELETE',
                headers,
                url: '/threads',
                payload: JSON.stringify(THREAD_CHANGE),
            })
            const statusCode = result.statusCode
            assert.deepEqual(statusCode, 200)
        }) 
    })
}