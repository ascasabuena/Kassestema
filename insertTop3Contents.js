function Findcontent1(top1) {
        loop: { // label
            for(var i=0; i<descriptions.length; i++) {
                if (descriptions[i].name == top1) {
                   
                    /*create contents*/
                    const desc = document.querySelector(".desc");

                    let desc_tag = 
                    '<h4>'+ descriptions[i].name +'</h4>' +
                        '<p>'+ descriptions[i].desc +'</p>'+
                        '<h6 class="m-0">UNIVERSITIES THAT OFFERS ' + descriptions[i].name + ':</h6>' +
                        '(For more information about the university, click on the respective icons.)<br>'+
                        '<a href="'+ descriptions[i].links[0] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[0] +'" class="img-fluid" alt="" style="width: 50px"></a>' + 
                        '<a href="'+ descriptions[i].links[1] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[1] +'" class="img-fluid" alt="" style="width: 50px"></a>' +
                        '<a href="'+ descriptions[i].links[2] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[2] +'" class="img-fluid" alt="" style="width: 50px"></a>' +
                        '<a href="'+ descriptions[i].links[3] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[3] +'" class="img-fluid" alt="" style="width: 50px"></a>'+
                        '<a href="'+ descriptions[i].links[4] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[4] +'" class="img-fluid" alt="" style="width: 50px"></a>' +
                        '<a href="'+ descriptions[i].links[5] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[5] +'" class="img-fluid" alt="" style="width: 50px"></a>' ;

                    /*'<span>'+ descriptions[i].name + ". " + descriptions[i].desc +'</span>';
                    let img_course = '<span>'+ descriptions[i].images +'</span>';*/

                    localStorage.setItem("top1_desc",desc_tag)
                    

                    //desc.innerHTML = desc_tag;

                    break loop;
                }
            }
            console.log("No course found.");
        }
        console.log("DONE");
    }

    function Findcontent2(top2) {
        loop: { // label
            for(var i=0; i<descriptions.length; i++) {
                if (descriptions[i].name == top2) {
                   
                    /*create contents*/
                    const desc2 = document.querySelector(".desc2");

                    let desc_tag2 = /*'<img src="online-course.png" class="img-fluid animated" alt="" style="width: 300px">';*/
                    '<h4>'+ descriptions[i].name +'</h4>' +
                        '<p>'+ descriptions[i].desc +'</p>'+
                        '<h6 class="m-0">UNIVERSITIES THAT OFFERS ' + descriptions[i].name + ':</h6>' +
                        '(For more information about the university, click on the respective icons.)<br>'+
                        '<a href="'+ descriptions[i].links[0] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[0] +'" class="img-fluid" alt="" style="width: 50px"></a>' + 
                        '<a href="'+ descriptions[i].links[1] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[1] +'" class="img-fluid" alt="" style="width: 50px"></a>' +
                        '<a href="'+ descriptions[i].links[2] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[2] +'" class="img-fluid" alt="" style="width: 50px"></a>' +
                        '<a href="'+ descriptions[i].links[3] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[3] +'" class="img-fluid" alt="" style="width: 50px"></a>'+
                        '<a href="'+ descriptions[i].links[4] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[4] +'" class="img-fluid" alt="" style="width: 50px"></a>' +
                        '<a href="'+ descriptions[i].links[5] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[5] +'" class="img-fluid" alt="" style="width: 50px"></a>' ;

                    /*'<span>'+ descriptions[i].name + ". " + descriptions[i].desc +'</span>';
                    let img_course = '<span>'+ descriptions[i].images +'</span>';*/
                    localStorage.setItem("top2_desc",desc_tag2)
                    //desc2.innerHTML = desc_tag2;

                    break loop;
                }
            }
            console.log("No course found.");
        }
        console.log("DONE");
    }

    function Findcontent3(top3) {
        loop: { // label
            for(var i=0; i<descriptions.length; i++) {
                if (descriptions[i].name == top3) {
                   
                    /*create contents*/
                    const desc3 = document.querySelector(".desc3");

                    let desc_tag3 = /*'<img src="online-course.png" class="img-fluid animated" alt="" style="width: 300px">';*/
                    '<h4>'+ descriptions[i].name +'</h4>' +
                        '<p>'+ descriptions[i].desc +'</p>'+
                        '<h6 class="m-0">UNIVERSITIES THAT OFFERS ' + descriptions[i].name + ':</h6>' +
                        '(For more information about the university, click on the respective icons.)<br>'+
                        '<a href="'+ descriptions[i].links[0] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[0] +'" class="img-fluid" alt="" style="width: 50px"></a>' + 
                        '<a href="'+ descriptions[i].links[1] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[1] +'" class="img-fluid" alt="" style="width: 50px"></a>' +
                        '<a href="'+ descriptions[i].links[2] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[2] +'" class="img-fluid" alt="" style="width: 50px"></a>' +
                        '<a href="'+ descriptions[i].links[3] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[3] +'" class="img-fluid" alt="" style="width: 50px"></a>'+
                        '<a href="'+ descriptions[i].links[4] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[4] +'" class="img-fluid" alt="" style="width: 50px"></a>' +
                        '<a href="'+ descriptions[i].links[5] +'"target="_blank" rel="noopener noreferrer"><img src="'+ descriptions[i].images[5] +'" class="img-fluid" alt="" style="width: 50px"></a>' ;

                    /*'<span>'+ descriptions[i].name + ". " + descriptions[i].desc +'</span>';
                    let img_course = '<span>'+ descriptions[i].images +'</span>';*/
                    localStorage.setItem("top3_desc",desc_tag3)
                    //desc3.innerHTML = desc_tag3;

                    break loop;
                }
            }
            console.log("No course found.");
        }
        console.log("DONE");
    }