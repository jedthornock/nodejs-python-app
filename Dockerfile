###################################################################################
##  Commands                                                                     ##
##  --------                                                                     ##
##  build command: docker build -t nodejs-python:latest .                        ##
##  run command: docker run -it -p 3000:3000 --name nodejs-python nodejs-python  ##
###################################################################################

FROM python:3.8.5

# Install the core packages
RUN apt-get update && apt-get install -y \
	curl apt-transport-https debconf-utils ca-certificates g++ python-dev unixodbc-dev nodejs npm python-pip \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /work/

COPY ./src/package.json /work/package.json
RUN npm install
COPY ./src/ /work/

CMD node .