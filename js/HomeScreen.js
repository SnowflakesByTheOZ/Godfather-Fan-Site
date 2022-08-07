import data from '/js/data.js'

const HomeScreen = {
    render : () => {
        const {posts} = data;
        return `
        <div class="post-area">
            ${posts.map(post => `
            <div class="post">
                <div class="post-photo-div">
                    <img src="${post.image}"></img>
                </div>
                <div class="post-info-div">
                    <p ><a class="post-title" href ="${post.article}">${post.post_title}</a></p>
                    <p class="preview">${post.post_preview}</p>
                </div>
                
            </div>
            
            `
                )}
            
        </div>
        
      
      </div>
        `
    }
}

export default HomeScreen