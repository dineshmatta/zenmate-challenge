import Server from "./server";
import ui from "./ui";

Server.findAllServer().then(ui.renderNodes);
