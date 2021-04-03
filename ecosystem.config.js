module.exports = {
    apps: [
      {
        name: 'next-app',
        exec_mode: 'cluster',
        instances: 'max',
        script: './node_modules/next/dist/build/index.js',
        args: 'start'
      }
    ]
}