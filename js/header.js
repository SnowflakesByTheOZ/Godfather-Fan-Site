class MyHeader extends HTMLElement{
    connectedCallback (){
        this.innerHTML = `
        <div class="fixed">
        
                <div class="top-bar">
                    <div class="vito-face-div">
                        <img class="vito-face"  src="/images/icon.png" alt="">
                    </div>
                    <div class="speech-bubble-div" >
                        <img class="speech-bubble" src="/images/speech bubble.png" alt="">
                    </div>
                    <div class="right-menu-div">
                        <ul class="unordered-list">
                            <li class="one">Reviews
                                <ul class="subgroup">
                                    <li><a href="https://www.rottentomatoes.com/m/the_godfather">Part I</a></li>
                                    <li><a href="https://www.rottentomatoes.com/m/godfather_part_ii">Part II</a></li>
                                    <li><a href="https://www.rottentomatoes.com/m/godfather_part_iii">Part III</a></li>
                                </ul>
                            </li>
                            <li>Characters</li>
                            <li>Three</li>
                    </ul>
                    </div>
                    
                
            </div>
        </div>
        `
    }
}

customElements.define('my-header', MyHeader);