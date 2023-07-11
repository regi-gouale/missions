#!/bin/sh
export FLASK_APP=./api/index.py
pipenv run flask --debug run --host=0.0.0.0 --port=5002
