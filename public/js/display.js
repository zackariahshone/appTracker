// const API = require('../utils/API.js');
$(document).ready(function () {
    console.log('document firing');
    // $.get('/getData' , (data)=>{
    //     console.log(`data from DB ${JSON.parse(data)}`);
    // })
const appContainer = document.getElementById('appRow');


// card.append            

$.ajax({
    type: "get",
    url: "/getData",
    data: "data",
    dataType: "json",
    success: (response)=> {
        response.forEach(app => {
            console.log(app);
            const cardBody = $('<div>').addClass('card-body');
            const remove = $('<h5>').addClass('remove').text('X');
            const cardHeader = $('<div>').addClass('card-header').text(`${app.AppName} \n Date Applied: ${app.dateApplied}`);
            const cardTitle = $('<h5>').addClass('card-title').text(`Recrutor Name: ${app.RecrutorName}`);
            const cardContext = $('<p>').addClass('card-text').text(`${app.jobDescription}`);
            const cardFooter = $('<div>').addClass('card-footer').text(`Recrutor Email: ${app.recrutorEmail}`);
            const col = $('<div>').addClass('col-xs-12 col-md-4')
            const card = $('<div>').addClass('card');
            // card.addId(`${app.}`)
            $('.row').append(col);
            col.append(card);
            cardHeader.append(remove);
            card.append(cardHeader);
            card.append(cardBody);
            card.append(cardTitle);
            card.append(cardContext);
            card.append(cardFooter);

            remove.click(()=>{
                console.log(`application id ${app.id}`);
                const appId = {
                    id: app.id
                }
                $.ajax({
                    type: "delete",
                    url: "/deletedata",
                    data: appId,
                    dataType: "dataType",
                    success: function (res) {
                            console.log('after delete', res);
                    }
                });
                location.reload();
            })
        });
        }
    });


});