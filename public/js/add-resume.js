$(document).ready(function () {
    
    
    const business = document.getElementById('business');
    const jobTitle = document.getElementById('jobTitle');
    const dateApplied = document.getElementById('dateApplied');
    const jobReq = document.getElementById('jobReq');
    const contact = document.getElementById('reqContact');
    const submit = document.getElementById('submitButton');
    
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const jobInformation = {
            'business': business.value,
            'jobTitle': jobTitle.value,
            'dateApplied': dateApplied.value,
            'jobReq':jobReq.value,
            'contact':contact.value
        }
        $.ajax({
            type: "post",
            url: "/appData",
            data: jobInformation,
            dataType: "dataType",
            success: function (res) {
                console.log(`logs res on success ${res}`);
            }
        });
        
    })
});