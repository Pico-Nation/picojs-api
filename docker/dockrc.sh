
function clpico() {
  docker-compose exec kpicod clpico -u http://nodpicod:8888 --wallet-url http://localhost:8900 "$@"
}

function kpicod() {
  docker exec docker_nodpicod_1 kpicod "$@"
}

function pkill() {
  docker exec docker_nodpicod_1 pkill "$@"
}
