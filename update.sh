#!/usr/bin/env bash

set -e

git pull
npm i
sudo systemctl restart kees-kluskens-bot
