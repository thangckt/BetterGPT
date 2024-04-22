export const officialAPIEndpoint = 'https://api.openai.com/v1/chat/completions';
const customAPIEndpoint =
  import.meta.env.VITE_CUSTOM_API_ENDPOINT || 'https://chatgpt-api.shn.hk/v1/';

const localhostAPIEndpoint = 'http://127.0.0.1:8080/v1/chat/completions'

export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || localhostAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint, customAPIEndpoint, localhostAPIEndpoint];
