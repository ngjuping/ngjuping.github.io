    
        window.onload=function(){
            //buttons
            var laptop = document.querySelector(".laptop");
            var accessors =  [document.querySelector(".intro"),
                laptop,
                document.querySelector(".review"),
                document.querySelector(".author")];
            const introText = document.querySelector(".introText");
            const laptopDes = document.querySelector(".laptopDes");
            const reviewDet = document.querySelector(".reviewDet");
            const authorRef = document.querySelector(".authorRef");
            //introduction attributes
            var accordions = Array.from(document.getElementsByClassName("accordion"));
        console.log(accordions);
            //laptop description attributes
             //Interswitching between Description and Benchmark results
            var des_bcm_arr = [document.querySelector(".Des"),document.querySelector(".BCM")];
            var des_bcm_switch = Array.from(document.querySelectorAll(".switch>div"));
            var delay = 1000;
            var captions = Array.from(document.getElementsByClassName("caption"));
                //Magnified images interface
                var magPanel = document.querySelector(".magImges");
                var closeBtn = document.getElementById("closeMag");
                var BCMtopics = Array.from(document.querySelectorAll(".BCMtopic>h2"));
                var magImages = Array.from(document.querySelectorAll(".magImges>img"));
                var images = Array.from(document.querySelectorAll(".BCMtopic .gallery>img"));
            //review details attributes
            var reviewPanels = Array.from(document.querySelectorAll(".reviewPanel"));
            var cards = Array.from(document.getElementsByClassName("container"));
            var imgCollections = reviewPanels.map((c)=>{return Array.from(c.querySelector(".imgCollection").children)});
            var imgIndicators = Array.from(document.getElementById("accessories").querySelectorAll(".textBox .aspects"));
            console.log(imgIndicators);
            var imgCollectionOf_accessories = Array.from(document.getElementById("accessories").querySelectorAll(".imgCollection >img"));
            console.log(imgCollectionOf_accessories);
            //interswitching between main topics
            var bigTopics = [introText,laptopDes,reviewDet,authorRef];
        
            //----------------------------------------------------------------------------------------------------------------------------
            //All the logics lie below
            function isElementNode(item)
            {
                return item.nodeType==1;
            }
            function hideOthers(arr,index)
            {
                if(!isElementNode(arr[index]) && (arr[index][Symbol.iterable]||arr[index] instanceof Array))
                {
                    //The if statement checks if the item to be hidden is not an element but is iterable or is an object
                    for(var item in arr)
                    {
                        arr[item].forEach((hideitem)=>{hideitem.classList.add("hidden")});
                    }
                    arr[index].forEach((item)=>{item.classList.remove("hidden")});
                }
                else{
                arr.slice(0,index).concat(arr.slice(index+1,arr.length)).forEach((hideElem)=>{hideElem.classList.add("hidden")});
                arr[index].classList.remove("hidden");
                }
            }
            //hide the previous all other opened panels
            accessors.forEach((c,index)=>{c.addEventListener("click",()=>{hideOthers(bigTopics,index)})});
        
            des_bcm_switch.forEach((c,index)=>{c.addEventListener("click",()=>{hideOthers(des_bcm_arr,index)})})
        
            function addFadeIn(){
                captions.forEach(function(c){
                let id = setTimeout(()=>{c.classList.add("fadeIn");},delay);
                delay+=1000;
                console.log(delay);
            }); 
            laptop.removeEventListener("click",addFadeIn);//Remove this listener function after first click
            }
            //Make captions fadeout
            laptop.addEventListener("click",addFadeIn);
        
            
           
            accordions.forEach(function(c){c.addEventListener("click",function(){
                    let panel = this.nextElementSibling;
                    
                    panel.style.maxHeight == `${panel.scrollHeight}px`?
                    panel.style.maxHeight = `0px`: panel.style.maxHeight = `${panel.scrollHeight}px`;
                });
            });
        
            BCMtopics.forEach(function(c){c.addEventListener("click",(e)=>{
                if(e.target.nextElementSibling.tagName == "DIV"){
                    e.target.nextElementSibling.classList.toggle("hidden");
                }
                
            })})
        
            images.forEach((c,index)=>{c.addEventListener("click",(e)=>{
                var halfPanelHeight = parseInt(window.getComputedStyle(magPanel)["height"])/2;
                magPanel.style.top = `${e.pageY-halfPanelHeight}px`
                magPanel.classList.add("fadeIn");
                hideOthers(magImages,index);
            })});
           
            closeBtn.addEventListener("click",()=>{magPanel.classList.remove("fadeIn")});
        
            cards.forEach(function(c,index){
                c.addEventListener("click",()=>{
                    hideOthers(reviewPanels,index);
                })});
            imgCollections.forEach((arr)=>{arr.forEach((img,index,imgarr)=>{img.addEventListener("click",function(){
                this.classList.add("hidden");
                if(index==imgarr.length-1)
                {
                    imgarr[0].classList.remove("hidden");
                }
                else{
                
                this.nextElementSibling.classList.remove("hidden");
                }
            })})});
        
            imgIndicators.forEach((c,index)=>{c.addEventListener("click",function(){hideOthers(imgCollectionOf_accessories,index)})});
            
            }
        
        



