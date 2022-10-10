module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')

  const name = req.query.name || (req.body && req.body.name)
  const responseMessage = name
    ? 'Hello, ' + name + '. I am the title.'
    : 'I am the loaded title. Yeah!'

  context.res.json({ responseMessage })
}
