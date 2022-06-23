import devConfiguration from './configuration.development';
import prodConfiguration from './configuration.production';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default NODE_ENV === 'development'
    ? devConfiguration
    : prodConfiguration;
