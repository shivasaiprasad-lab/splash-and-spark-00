module.exports = {
  apps: [
    {
      name: "inclusive-us",
      script: "npx",
      args: "vite preview --port 8040 --host 0.0.0.0",
      cwd: "/srv2/inclusive_us",
      max_memory_restart: "1G",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
