
const span = document.querySelector("span")


const professions = ["Designer", "Creator", "Developer"]
const arr = professions[0].split("")



        arr.forEach((s,i)=>{

            setTimeout(() => {
                span.innerHTML = professions[0].slice(0,(i+1))
            }, 1000 * i)

            setTimeout(() => {
                span.innerHTML = professions[0].slice(0,professions[0].length-(i+1))
                console.log((1000 * (i+professions[0].length)) - (750*i));
            }, (1000 * (i+professions[0].length)) - (750*i))

        })



        setInterval(() => {

            arr.forEach((s,i)=>{

                setTimeout(() => {
                    span.innerHTML = professions[0].slice(0,(i+1))
                    console.log(1000 * i);
                }, 1000 * i)

                setTimeout(() => {
                    span.innerHTML = professions[0].slice(0,professions[0].length-(i+1))
                    console.log((1000 * (i+professions[0].length)) - (750*i));
                }, (1000 * (i+professions[0].length)) - (750*i))

            })

        }, 10750);

    
    

