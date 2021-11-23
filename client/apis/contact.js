import request from 'superagent'

export const postContact = formObj => {
    return  request
      .post('/api/v1/contact')
      .send(formObj)
      .then(res => res.body)
  }