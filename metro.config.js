// Learn more https://docs.expo.io/guides/customizing-metro
const getDefaultConfig = require('expo/metro-config').getDefaultConfig;
const withNativeWind = require('nativewind/metro').withNativeWind;

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });
