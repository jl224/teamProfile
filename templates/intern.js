function intern(data) {

    return `
    <div class="card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title" style="color:green">Intern</h5>
            <p class="card-text">Name: ${data.name} </p>
            <p class="card-text">Email: ${data.email} </p>
            <p class="card-text">ID: ${data.id}</p>
            <p class="card-text">Office Number: ${data.school}</p>
       
        </div>
    </div>
    `
}

module.exports = intern