# Use a lighter version of Node as a parent image
FROM node:12.2.0-alpine
# Set the working directory to /api
WORKDIR /app
# copy package.json into the container at /api
COPY package.json /app/package.json
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /api
COPY . /app/
# Make port 80 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]