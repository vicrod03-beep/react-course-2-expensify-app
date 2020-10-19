import authReducer from '../../reducers/auth'

test('should set auth default state', () => {
    const state = authReducer(undefined, { type: '@@INIT '})
    expect(state).toEqual({})
})

test('should set uid for login', () => {
    const action = {        
        type: 'LOGIN',
        uid: '12345'
    }
    
    const state = authReducer({}, action)
    expect(state).toEqual({uid: action.uid})
})

test('should clear uid for logout', () => {
    const action = {        
        type: 'LOGOUT'
    }
    
    const state = authReducer({uid: 'anything'}, action)
    expect(state).toEqual({})
})