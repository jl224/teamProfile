function engineer(data) {

    return `
    <div class="card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title" style="color:blue">Engineer</h5>
            <p class="card-text">Name: ${data.name} </p>
            <p class="card-text">Email: ${data.email} </p>
            <p class="card-text">ID: ${data.id}</p>
            <p class="card-text">Office Number: ${data.github}</p>
        </div>
    </div>
    `
}

module.exports = engineer