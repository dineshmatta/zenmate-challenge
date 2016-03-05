import API from "./api";

class Server{

  findAllServer(){
    return API.fetch("nodes");
  }

  findAllEvents(){
    return API.fetch("events");
  }
}

export default new Server;
