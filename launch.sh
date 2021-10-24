#!/bin/bash

session="to_do_app"
pwd=$PWD

tmux new -s $session -d
tmux rename-window -t 0 'database_container'
tmux send-keys -t "${session}:database_container" "cd ${pwd}/server" C-m
tmux send-keys -t "${session}:database_container" "sudo docker-compose up" C-m

tmux new-window -t $session:1 -n 'server'
tmux send-keys -t "${session}:server" "cd ${pwd}/server" C-m
tmux send-keys -t "${session}:server" "node app.js" C-m

tmux new-window -t $session:2 -n 'react_app_server'
tmux send-keys -t "${session}:react_app_server" "cd ${pwd}/to_do/src" C-m
tmux send-keys -t "${session}:react_app_server" "npm start" C-m

tmux a -t ${session}
