// import { x } from 'module'

async function lamdaFunction(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: "Your function executed successfully"
    })
  })
}

export const handler = lamdaFunction