/* @flow */
import browserEnv from 'browser-env'
import 'css-modules-require-hook/preset'
import imgHook from 'images-require-hook'

browserEnv(['window', 'document', 'navigator'])
imgHook(['.png'], '../src/images')
