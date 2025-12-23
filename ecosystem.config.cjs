module.exports = {
  apps: [
    {
      name: "inclusive-global", // 进程名
      script: "npm", // 执行的程序
      args: "run dev", // 程序参数
      cwd: "/srv2/inclusive-global", // 工作目录
      max_memory_restart: "1G", // 内存超过1G自动重启（可选，防止内存溢出）
      log_date_format: "YYYY-MM-DD HH:mm:ss", // 日志时间格式（可选）
      env: {
        NODE_ENV: "development" // 环境变量（可选）
      }
    }
  ]
};