let team = [{
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'picture': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'picture': 'angela-caroll-chief-editor.jpg'
    },
    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'picture': 'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'picture': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'picture': 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'picture': 'barbara-ramos-graphic-designer.jpg'
    },

];

for (var key in team) {
    document.getElementById("container").innerHTML += `
    <div class="col text-center py-4  " >
    <div class="card mx-auto" style="width: 18rem;">
            <img src="./asset/img/${team[key]["picture"]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${team[key]["name"]}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${team[key]["role"]}</li>
              
            </ul>
           
          </div>
    </div>
          `

}