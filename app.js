console.log("Welcome to NEWs")
// 0afcf09243f4400bb31f2756d499fe4c
let apiKey = '0afcf09243f4400bb31f2756d499fe4c';


//Grab the container
let newzaccordion = document.getElementById('newzaccordion');


// Create an AJAX get Request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,true);


xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml='';

        articles.forEach(element => {
            
        
        
            // console.log(element);

            let news = `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            ${element["title"]}
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                ${element["description"]}. <a href="${element["url"]}" target="_blank">Read more>></a>
                            </div>
                        </div>
                    </div>
                `;
                newsHtml+=news;

            });
        newzaccordion.innerHTML=newsHtml;
    }else{
        console.log('Some error Occured');
    }
}

xhr.send();


let news = `
<div class="accordion-item">
<h2 class="accordion-header" id="panelsStayOpen-headingOne">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
    Accordion Item #1
  </button>
</h2>
<div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
  <div class="accordion-body">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
  </div>
</div>
</div>
`;

