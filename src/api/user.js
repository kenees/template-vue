import request from '../util/request';

export const login = data => request.post('/api/login', data)