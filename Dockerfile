FROM python:3.11-alpine

RUN apk update
RUN pip install --no-cache-dir pipenv

WORKDIR /usr/src/app
COPY Pipfile Pipfile.lock bootstrap.sh ./
COPY api ./api

RUN pipenv install --system --deploy

EXPOSE 5002
ENTRYPOINT [ "/usr/src/app/bootstrap.sh" ]