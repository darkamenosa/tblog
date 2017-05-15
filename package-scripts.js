const {
  concurrent,
  series,
  runInNewWindow,
  crossEnv,
  rimraf,
  commonTags,
  ifWindows,
  copy
} = require('nps-utils')

const {oneLine} = commonTags

module.exports = {
  scripts: {
    nps: 'nps',
    install: {
      default: {
        description: 'Install dependencies for both web client and server',
        script: concurrent.nps('install.webclient', 'install.server'),
      },
      webclient: {
        script: series('cd webclient', 'npm install'),
        description: 'install dependencies for web client',
      },
      server: {
        script: series('cd server', 'npm install'),
        description: 'install dependencies for server',
      }
    },
    build: {
      default: {
        description: 'Build both the web client and the server',
        script: series(
          concurrent.nps('build.webclient', 'build.server'),
          copy('webclient/build/* server/build/public --recursive')
        )
      },
      webclient: {
        script: series('cd webclient', 'npm run build'),
        description: 'run the web client build',
      },
      server: {
        script: series('cd server', 'npm run prod:build'),
        description: 'run the server build',
      }
    },
    test: {
      default: {
        description: 'Test both the web client and the server',
        script: concurrent.nps('test.webclient', 'test.server'),
      },
      webclient: {
        script: series('cd webclient', 'npm run test'),
        description: 'run the web client test',
      },
      server: {
        script: series('cd server', 'npm run test'),
        description: 'run the server test',
      }
    },
    coveralls: {
      default: {
        description: 'Run coveralls for both client and server',
        script: 'cat webclient/coverage/lcov.info server/coverage/lcov.info | coveralls',
      }
    },
    prod: {
      default: {
        description: oneLine`
          Start production server. 
          Run: [yarn start build] or [npm run start build] before run this command
        `,
        script: series('cd server', 'npm run prod:start'),
      },
      stop: {
        description: 'Stop production server',
        script: series('cd server', 'npm run prod:stop'),
      }
    },
    dev: {
      default: {
        description: 'Starts everything in dev mode',
        script: concurrent.nps('dev.webclient', 'dev.server'),
      },
      webclient: {
        description: 'Starts web client in dev mode',
        script: series('cd webclient', 'npm run start'),
      },
      server: {
        description: 'Starts server in dev mode',
        script: series('cd server', 'npm run start'),
      }
    }
  }
};
