

class Ui {

  renderNodes(nodes) {

    drawTable(nodes);

  }


};


function drawTable(nodes){

  let tr, i, trClass;
   for (i = 0; i <nodes.length; i++) {
        tr = $('<tr/>');
        trClass = nodes[i].online ? 'success' : 'danger'
        tr.addClass(trClass);
        tr.append("<td>" + nodes[i].id + "</td>");
        tr.append("<td>" + nodes[i].country + "</td>");
        tr.append("<td>" + nodes[i].online + "</td>");

        $('table').find('tbody').append(tr);
  }

}

export default new Ui;
