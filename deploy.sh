#!/usr/bin/env bash

if [[ "$1" != "test" ]] && [[ "$1" != "stable" ]]; then
  echo $1 "mode isn't supported"
  exit 1
fi

rm -r build/
cp config/.env.${1} .env
cp config/.firebaserc.${1} .firebaserc
yarn deploy
