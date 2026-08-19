#!/bin/sh
# 凯奇官网本地预览 · 常驻看门狗
# -----------------------------------------------
# 每 10 秒检查 3400 端口，挂了就自动重启。
# 用 nohup 脱离会话，会话空闲不会被回收。
#
# 管理：
#   启动：nohup sh keiqi-serve.sh >/dev/null 2>&1 & disown
#   停止：sh keiqi-serve.sh stop
#   状态：sh keiqi-serve.sh status
#   日志：tail -f .keiqi-server.log

WEB_DIR="/Users/LEE/WorkBuddy/2026-08-15-14-34-02/KEIQI-Design-OS/web"
NODE_BIN="/Users/LEE/.workbuddy/binaries/node/versions/22.22.2/bin"
PORT=3400
PID_FILE="$WEB_DIR/.keiqi.pid"
LOG="$WEB_DIR/.keiqi-server.log"
ERR="$WEB_DIR/.keiqi-server.err.log"
export PATH="$NODE_BIN:/usr/local/bin:/usr/bin:/bin"
export PORT
export NODE_OPTIONS=

case "$1" in
  stop)
    if [ -f "$PID_FILE" ]; then
      kill "$(cat "$PID_FILE")" 2>/dev/null
      pkill -f "next-server.*$PORT" 2>/dev/null
      pkill -f "keiqi-serve.sh" 2>/dev/null
      rm -f "$PID_FILE"
      echo "已停止凯奇预览服务"
    else
      echo "服务未在运行"
    fi
    exit 0
    ;;
  status)
    code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/" 2>/dev/null)
    if [ "$code" = "200" ]; then
      echo "运行中 ✓  http://localhost:$PORT  (HTTP $code)"
    else
      echo "未运行 ✗  (HTTP $code)"
    fi
    exit 0
    ;;
esac

# 看门狗主循环
echo "[$(date '+%H:%M:%S')] 凯奇预览看门狗启动，端口 $PORT" >>"$LOG"

while true; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/" 2>/dev/null)
  if [ "$code" != "200" ]; then
    echo "[$(date '+%H:%M:%S')] 端口无响应($code)，(重新)启动 Next.js…" >>"$LOG"
    # 杀掉残留
    pkill -f "next-server.*$PORT" 2>/dev/null
    sleep 1
    cd "$WEB_DIR" || exit 1
    nohup npm run start >>"$LOG" 2>>"$ERR" &
    echo $! >"$PID_FILE"
    echo "[$(date '+%H:%M:%S')] 已拉起，PID $(cat "$PID_FILE")" >>"$LOG"
    sleep 8  # 等待 Next.js 启动
  fi
  sleep 10
done
