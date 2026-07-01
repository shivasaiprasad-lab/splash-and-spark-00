module.exports = {
  apps: [
    {
      name: "inclusive-global", // PM2 process name
      script: "npx", // launcher
      args: "vite preview --port 8080 --host 0.0.0.0", // production preview, port 8080 (matches nginx upstream for inclusive.com.cn /)
      cwd: "/srv2/inclusive-global", // working directory on Aliyun
      max_memory_restart: "1G", // auto-restart on OOM
      log_date_format: "YYYY-MM-DD HH:mm:ss", // log timestamp format
      env: {
        NODE_ENV: "production" // run mode
      }
    }
  ]
};
