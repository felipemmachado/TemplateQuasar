const url = {
  development: () => ({
    url: 'https://localhost:5001',
  }),
  production: () => ({
    url: 'https://services.followair.com.br/api',
  }),
  homolog: () => ({
    url: '',
  }),
};

export default url;
