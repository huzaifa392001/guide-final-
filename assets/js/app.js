var section = $("section")
var hash = window.location.hash
var chapter = $(".single-chapter")
const aboutJson = {
    "title": "About Us",
    "description": "loremjsakhfjkahskjfhasjhfjkasf",
    "img": "assets/images/home-img.jpg"
};
const guideJson ={
    "title": "Guide.Com",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quos. Quisquam voluptate doloribus, quasi optio iure saepe aperiam vel ratione?",
    "img":"assets/images/home.jpg"
}
const whyUsJson ={
    "title": "Things. Why you Consider Us!!",
    "things": [
        {
            "card-title": "Thing 1",
            "card-description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto provident corporis, eius soluta velit harum aspernatur eos magnam! Enim unde accusantium exercitationem architecto ducimus labore eligendi. Veniam quidem atque blanditiis? Sit amet cum accusamus est impedit corrupti, corporis illum fugit consequatur architecto perspiciatis eligendi harum voluptate odit voluptatem provident! Vero amet est, iure quidem iusto sed excepturi. Temporibus, tenetur exercitationem? Tempora at dicta corporis praesentium alias non dolore aperiam nobis.",
        },
        {
            "card-title": "Thing 2",
            "card-description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto provident corporis, eius soluta velit harum aspernatur eos magnam! Enim unde accusantium exercitationem architecto ducimus labore eligendi. Veniam quidem atque blanditiis? Sit amet cum accusamus est impedit corrupti, corporis illum fugit consequatur architecto perspiciatis eligendi harum voluptate odit voluptatem provident! Vero amet est, iure quidem iusto sed excepturi. Temporibus, tenetur exercitationem? Tempora at dicta corporis praesentium alias non dolore aperiam nobis.",
        },
        {
            "card-title": "Thing 3",
            "card-description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto provident corporis, eius soluta velit harum aspernatur eos magnam! Enim unde accusantium exercitationem architecto ducimus labore eligendi. Veniam quidem atque blanditiis? Sit amet cum accusamus est impedit corrupti, corporis illum fugit consequatur architecto perspiciatis eligendi harum voluptate odit voluptatem provident! Vero amet est, iure quidem iusto sed excepturi. Temporibus, tenetur exercitationem? Tempora at dicta corporis praesentium alias non dolore aperiam nobis.",
        }
    ]
}
const blogJson ={
    "title": "Blogs",
    "blogs" : [
        {
            "blog-img" : "assets/images/carousel-img-1.jpg",
            "blog-title": "blog 1",
            "blog-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "blog-update":"2 days ago"
        },
        {
            "blog-img" : "assets/images/carousel-img-1.jpg",
            "blog-title": "blog 2",
            "blog-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "blog-update":"2 days ago"

        },
        {
            "blog-img" : "assets/images/carousel-img-1.jpg",
            "blog-title": "blog 3",
            "blog-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "blog-update":"few hours ago"
        }
    ]
}
const libraryJson ={
    "title": "Library",
    "books":[
        {
            "book-img":"assets/images/book-1.jpg",
            "book-title": "book 1",
            "book-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            "book-img":"assets/images/book-1.jpg",
            "book-title": "book 2",
            "book-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            "book-img":"assets/images/book-1.jpg",
            "book-title": "book 3",
            "book-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            "book-img":"assets/images/book-1.jpg",
            "book-title": "book 4",
            "book-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            "book-img":"assets/images/book-1.jpg",
            "book-title": "book 5",
            "book-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            "book-img":"assets/images/book-1.jpg",
            "book-title": "book 6",
            "book-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            "book-img":"assets/images/book-1.jpg",
            "book-title": "book 7",
            "book-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            "book-img":"assets/images/book-1.jpg",
            "book-title": "book 8",
            "book-description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        }
    ]
}
const contactJson ={
    "title" : "Contact Us",
    "tagline" : "We will get back to you ASAP!!",
    "description" : "Guide.com is a online platform for students to get knowledge of thier selected subject!",
    "list" : [
        {
            'icon1' : 'fas fa-envelope',
            'text' : 'info@guide.com'
        },
        {
            'icon1' : 'fab fa-whatsapp',
            'text' : '123456789'
        },
        {
            'icon1' : 'fas fa-map-marker-alt',
            'text' : 'Unit No: 04 , Latifabad Hyderabad , Sindh'
        }
    ],
}
const singleBlogJson ={
    "title" : "Blog 1",
    "blog" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium inventore hic nulla minima laborum dolorem, cupiditate maxime laboriosam ut. Qui repudiandae perferendis, dolor iure nam quam, voluptatum labore dicta pariatur cum culpa tenetur. Consequuntur eum, tenetur fuga exercitationem facere aperiam veniam laborum nostrum distinctio consequatur corrupti nesciunt quasi sit veritatis molestiae nemo provident fugiat corporis perferendis fugit natus omnis quod placeat vel? Ipsum incidunt error et! Neque, deleniti. Earum quaerat ex similique reprehenderit nemo dolore nulla suscipit, eaque accusamus, alias aut laudantium harum deleniti vero natus. Consectetur repellendus, id repellat numquam veritatis et tempora, adipisci sequi, fuga deleniti fugiat. Libero accusamus, dolor sint sequi minus reprehenderit, eius harum laudantium sapiente dolores nisi quae labore maxime, similique sunt iusto delectus adipisci recusandae. Alias facilis ut laborum? Est, quas vero! Repellat facilis, labore iste totam eveniet nesciunt cupiditate at nihil fugit ducimus animi maxime! Aperiam tempora numquam quas itaque maxime velit, minima officia necessitatibus error porro dolores, amet labore dolore nulla libero sint sunt fugiat sit eveniet quam. Iure modi facilis ex sint animi doloremque. Totam praesentium magni deserunt a modi sunt similique velit repellat nostrum accusamus atque, excepturi beatae quaerat. Labore officiis eum tempora natus quia, nesciunt accusamus veritatis non dignissimos, totam aut saepe provident aliquid eligendi, adipisci recusandae aliquam? Beatae dolorum nihil sapiente magnam ullam atque suscipit ad odio aliquam sint odit maiores doloremque recusandae, unde, quod, consequuntur repellendus eveniet officia. Praesentium asperiores voluptatibus obcaecati ducimus ab possimus recusandae debitis cum ipsum facere magni, consectetur et eligendi saepe nesciunt unde, totam quaerat illum consequuntur! Porro quod molestias, eveniet quisquam non rem quas fuga dignissimos. Eligendi nobis id asperiores mollitia nisi quo vitae, placeat quam molestias ad voluptatum quae corporis ex commodi esse. Cupiditate aliquid quidem ratione soluta cum obcaecati suscipit necessitatibus amet! Similique provident facere eos omnis voluptatem nesciunt fuga voluptate ducimus! Illo nihil quas, sequi dolor tempora exercitationem maxime ipsum illum voluptatum iste deleniti quisquam ullam optio modi reiciendis labore alias ex velit fugiat suscipit quaerat reprehenderit officia perferendis nostrum? Mollitia voluptatibus nihil rem harum distinctio repudiandae? Dolorem debitis explicabo ex ea aliquam mollitia est eligendi itaque. Optio ipsum quae laborum vel tempore, harum iure iste dolore aspernatur nam, suscipit, modi dignissimos ratione deserunt eum unde saepe provident adipisci minus obcaecati. Dignissimos cumque magni quia hic explicabo voluptatem autem maxime et. Sit sunt numquam aut, asperiores quidem at assumenda eius, itaque minus neque impedit a illum, debitis eum aliquam hic similique. Natus blanditiis incidunt, neque laudantium facere atque error quae minima eum animi cumque fugiat earum soluta quasi perspiciatis fuga! Minus saepe enim consectetur harum. Fugit aut optio tempora non beatae, officia possimus consequuntur dolore, sed enim ipsa voluptatibus sit eos molestiae commodi architecto ex id nesciunt? Sequi, nemo veritatis possimus illum numquam hic, in voluptate quis, unde cum doloremque consequuntur? Minus placeat et aliquid autem, inventore maiores tempore reprehenderit, ea ipsum qui assumenda amet officia dolores enim nobis necessitatibus consectetur eaque hic! Facilis cupiditate aperiam temporibus deleniti quis, aliquam eaque magnam quam reprehenderit quas ad autem voluptatem.",
    "comments" : [
        {
            'user' : 'Talha Khalid',
            'date' : 'Feb 23, 2021 ',
            'time' : ' 5:53pm',
            'comment' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nihil voluptatibus totam a, iure laboriosam quod accusantium tempore officia voluptate fuga libero quis iste nisi perferendis eligendi quaerat quos ipsa fugiat alias sapiente, ea at voluptas! Quis voluptatum fuga expedita voluptate fugiat consequuntur doloribus omnis maiores, earum cupiditate a doloremque, porro natus eaque sapiente inventore rerum sunt tenetur numquam harum similique sequi! Vitae saepe illum ipsam, ea quibusdam iusto voluptate eos ad at dolor ex cum et dolores molestiae aperiam natus. At dignissimos aliquam mollitia voluptatum et voluptate assumenda, facere nemo dolorem. Saepe modi a sit in mollitia, esse recusandae?',
        },
        {
            'user' : 'Syed Faiz',
            'date' : 'Feb 23, 2021 ',
            'time' : ' 5:53pm',
            'comment' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nihil voluptatibus totam a, iure laboriosam quod accusantium tempore officia voluptate fuga libero quis iste nisi perferendis eligendi quaerat quos ipsa fugiat alias sapiente, ea at voluptas! Quis voluptatum fuga expedita voluptate fugiat consequuntur doloribus omnis maiores, earum cupiditate a doloremque, porro natus eaque sapiente inventore rerum sunt tenetur numquam harum similique sequi! Vitae saepe illum ipsam, ea quibusdam iusto voluptate eos ad at dolor ex cum et dolores molestiae aperiam natus. At dignissimos aliquam mollitia voluptatum et voluptate assumenda, facere nemo dolorem. Saepe modi a sit in mollitia, esse recusandae?',
        },
        {
            'user' : 'Syed Zaid Hashmi',
            'date' : 'Feb 23, 2021 ',
            'time' : ' 5:53pm',
            'comment' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nihil voluptatibus totam a, iure laboriosam quod accusantium tempore officia voluptate fuga libero quis iste nisi perferendis eligendi quaerat quos ipsa fugiat alias sapiente, ea at voluptas! Quis voluptatum fuga expedita voluptate fugiat consequuntur doloribus omnis maiores, earum cupiditate a doloremque, porro natus eaque sapiente inventore rerum sunt tenetur numquam harum similique sequi! Vitae saepe illum ipsam, ea quibusdam iusto voluptate eos ad at dolor ex cum et dolores molestiae aperiam natus. At dignissimos aliquam mollitia voluptatum et voluptate assumenda, facere nemo dolorem. Saepe modi a sit in mollitia, esse recusandae?',
        },
        {
            'user' : 'Huzaifa Iqbal',
            'date' : 'Feb 23, 2021 ',
            'time' : ' 5:53pm',
            'comment' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nihil voluptatibus totam a, iure laboriosam quod accusantium tempore officia voluptate fuga libero quis iste nisi perferendis eligendi quaerat quos ipsa fugiat alias sapiente, ea at voluptas! Quis voluptatum fuga expedita voluptate fugiat consequuntur doloribus omnis maiores, earum cupiditate a doloremque, porro natus eaque sapiente inventore rerum sunt tenetur numquam harum similique sequi! Vitae saepe illum ipsam, ea quibusdam iusto voluptate eos ad at dolor ex cum et dolores molestiae aperiam natus. At dignissimos aliquam mollitia voluptatum et voluptate assumenda, facere nemo dolorem. Saepe modi a sit in mollitia, esse recusandae?',
        }
    ]
}
const bookJson ={
    'title' : 'Book 1',
    'index' :[
        {
            "id" : "chapter-1",
            "chapterName" : "chapter 1"
        },
        {
            "id" : "chapter-2",
            "chapterName" : "chapter 2"
        },
        {
            "id" : "chapter-3",
            "chapterName" : "chapter 3"
        },
        {
            "id" : "chapter-4",
            "chapterName" : "chapter 4"
        },
        {
            "id" : "chapter-5",
            "chapterName" : "chapter 5"
        },
        {
            "id" : "chapter-6",
            "chapterName" : "chapter 6"
        },
        {
            "id" : "chapter-7",
            "chapterName" : "chapter 7"
        },
        {
            "id" : "chapter-8",
            "chapterName" : "chapter 8"
        },
        {
            "id" : "chapter-9",
            "chapterName" : "chapter 9"
        },
        {
            "id" : "chapter-10",
            "chapterName" : "chapter 10"
        },
        {
            "id" : "chapter-11",
            "chapterName" : "chapter 11"
        }
    ],
    "chapters" : [
        {
            
        }
    ]
}
if(hash){
    section.removeClass("display-show").addClass("display-hide")
    $(hash).removeClass("display-hide").addClass("display-show");
    // alert(hash) 
    if(hash == '#about'){
        $(".about-title").text(aboutJson['title'])
        $(".about-description").text(aboutJson['description'])
        $(".about-img").css("background-image" , "url("+aboutJson["img"]+")")
    }
    else if(hash == "#guide"){
        $(".guide-heading").text(guideJson['title'])
        $(".guide-description").text(guideJson['description'])
        $(".guide-img").css("background-image" , "url("+guideJson["img"]+")")
    }
    else if(hash == "#why-us"){
        $(".things-main-heading").text(whyUsJson['title']);
        $.each(whyUsJson['things'], function(key, value){
            let thingsHTML = '<div class="col-lg-4"><div class="consider-card mb-5"><div class="card-body"><i class="far fa-comment fa-3x mb-4"></i><h2 class="card-title thing-title">'+ value['card-title'] +'</h2><hr><p class="card-text thing-description">'+value['card-description']+'</p></div></div></div>';
            
            $(".things-data").append(thingsHTML);
        })
    }
    else if(hash == "#blog"){
        $(".blog-heading").text(blogJson['title']);
        $.each(blogJson['blogs'], function(key, value){
            let thingsHTML = '<div class="card mb-3"><div class="d-flex p-3"><div class="img"><div class="bg-img w-100" style="background-image: url('+ value['blog-img'] +'); height: 150px;"></div></div><div class="text"><h3 class="card-title blog-title">'+value['blog-title']+'</h3><p class="card-text blog-description">'+value['blog-description']+'</p><a href="single-blog.html#single-blog" class="btn blog-btn">Read More</a></div></div><div class="card-footer text-muted text-center">'+value['blog-update']+'</div></div>';
            
            $(".blog-data").append(thingsHTML);
        })
    }
    else if(hash == "#all-blogs"){
        $(".blog-heading").text(blogJson['title']);
        $.each(blogJson['blogs'], function(key, value){
            let thingsHTML = '<div class="card mb-3"><div class="d-flex p-3"><div class="img"><div class="bg-img w-100" style="background-image: url('+ value['blog-img'] +'); height: 150px;"></div></div><div class="text"><h3 class="card-title blog-title">'+value['blog-title']+'</h3><p class="card-text blog-description">'+value['blog-description']+'</p><a href="single-blog.html#single-blog" class="btn blog-btn">Read More</a></div></div><div class="card-footer text-muted text-center">'+value['blog-update']+'</div></div>';
            
            $(".blog-data").append(thingsHTML);
        })
    }
    else if(hash == "#library"){
        $(".library-heading").text(libraryJson['title']);
        $.each(libraryJson['books'], function(key, value){
            let thingsHTML = '<div class="col-lg-4 col-md-6 mb-4"><div class="card-book card"><div class="bg-img w-100" style="background-image: url('+ value['book-img'] +');"></div><hr><div class="book-text"><h3 class="book-title">'+ value['book-title'] +'</h3><p class="book-description">'+ value['book-description'] +'</p><a href="book.html#book" class="btn book-btn w-100">Read Book</a></div></div></div>';
            
            $(".books-data").append(thingsHTML);
        })
    }
    else if(hash == "#contact"){
        $(".contact-heading").text(contactJson['title'])
        $(".contact-tagline").text(contactJson['tagline'])
        $(".contact-description").text(contactJson['description'])
        $.each(contactJson['list'], function(key, value){
            let thingsHTML = '<li><i class="'+ value['icon1'] +'"></i>'+ value['text'] +'</li>';
            
            $(".list-data").append(thingsHTML);
        })
    }
    else if(hash == "#single-blog"){
        $(".single-blog-heading").text(singleBlogJson['title'])
        $(".single-blog-text").text(singleBlogJson['blog'])
        $.each(singleBlogJson['comments'], function(key, value){
            let thingsHTML = '<div class="single-comment w-100 mb-4"><div class="d-flex user-name"><i class="fas fa-user-circle fa-3x mr-3"></i><p class="mr-1 name">'+ value['user'] +'</p><p>Says :</p></div><div class="comment-date"><p>'+ value['date'] + value['time'] +'</p></div><div class="comment"><p class="text-justify">'+ value['comment'] +'</p></div><div class="reply"><button class="btn reply-btn">Reply</button><div class="underline"></div></div></div>';
            
            $(".comments").append(thingsHTML);
        })
    }
    else if(hash == "#book"){
        $(".book-main-heading").text(bookJson['title'])
        $.each(bookJson['index'], function(key, value){
            let thingsHTML = '<li><a class="chapter-title show-chapter" data-id="'+ value['id'] +'">'+ value['chapterName'] +'</a><div class="underline"></div></li>';
            
            $(".index-list").append(thingsHTML);
        })
    }
}else{}

// hashchange function

window.addEventListener('hashchange', function() {
    const pageHash = window.location.hash
    section.removeClass("display-show").addClass("display-hide")
    $(pageHash).removeClass("display-hide").addClass("display-show");

    if(pageHash == '#about'){
        $(".about-title").text(aboutJson['title'])
        $(".about-description").text(aboutJson['description'])
        $(".about-img").css("background-image" , "url("+aboutJson["img"]+")")
    }
    else if(pageHash == "#guide"){
        $(".guide-heading").text(guideJson['title'])
        $(".guide-description").text(guideJson['description'])
        $(".guide-img").css("background-image" , "url("+guideJson["img"]+")")
    }
    else if(pageHash == "#why-us"){
        $(".things-main-heading").text(whyUsJson['title']);
        $(".things-data").html(null);
        $.each(whyUsJson['things'], function(key, value){
            let thingsHTML = '<div class="col-lg-4"><div class="consider-card mb-5"><div class="card-body"><i class="far fa-comment fa-3x mb-4"></i><h2 class="card-title thing-title">'+ value['card-title'] +'</h2><hr><p class="card-text thing-description">'+value['card-description']+'</p></div></div></div>';
            
            $(".things-data").append(thingsHTML);
        })
    }
    else if(pageHash == "#blog"){
        $(".blog-heading").text(blogJson['title']);
        $('.blog-data').html(null);
        $.each(blogJson['blogs'], function(key, value){
            let thingsHTML = '<div class="card mb-3"><div class="d-flex p-3"><div class="img"><div class="bg-img w-100" style="background-image: url(assets/images/carousel-img-1.jpg); height: 150px;"></div></div><div class="text"><h3 class="card-title blog-title">'+value['blog-title']+'</h3><p class="card-text blog-description">'+value['blog-description']+'</p><a href="single-blog.html" class="btn blog-btn">Read More</a></div></div><div class="card-footer text-muted text-center">'+value['blog-update']+'</div></div>';
            
            $(".blog-data").append(thingsHTML);
        })
    }
    else if(pageHash == "#all-blogs"){
        $(".blog-heading").text(blogJson['title']);
        $('.blog-data').html(null);
        $.each(blogJson['blogs'], function(key, value){
            let thingsHTML = '<div class="card mb-3"><div class="d-flex p-3"><div class="img"><div class="bg-img w-100" style="background-image: url(assets/images/carousel-img-1.jpg); height: 150px;"></div></div><div class="text"><h3 class="card-title blog-title">'+value['blog-title']+'</h3><p class="card-text blog-description">'+value['blog-description']+'</p><a href="single-blog.html" class="btn blog-btn">Read More</a></div></div><div class="card-footer text-muted text-center">'+value['blog-update']+'</div></div>';
            
            $(".blog-data").append(thingsHTML);
        })
    }
    else if(pageHash == "#library"){
        $(".library-heading").text(libraryJson['title']);
        $('.books-data').html(null);
        $.each(libraryJson['books'], function(key, value){
            let thingsHTML = '<div class="col-lg-4 col-md-6 mb-4"><div class="card-book card"><div class="bg-img w-100" style="background-image: url('+ value['book-img'] +');"></div><hr><div class="book-text"><h3 class="book-title">'+ value['book-title'] +'</h3><p class="book-description">'+ value['book-description'] +'</p><a href="book.html" class="btn book-btn w-100">Read Book</a></div></div></div>';
            
            $(".books-data").append(thingsHTML);
        })
    }
    else if(pageHash == "#contact"){
        $(".contact-heading").text(contactJson['title'])
        $(".contact-tagline").text(contactJson['tagline'])
        $(".contact-description").text(contactJson['description'])
        $(".list-data").html(null);
        $.each(contactJson['list'], function(key, value){
            let thingsHTML = '<li><i class="'+ value['icon1'] +'"></i>'+ value['text'] +'</li>';
            
            $(".list-data").append(thingsHTML);
        })
    }
    else if(pageHash == "#single-blog"){
        $(".single-blog-heading").text(singleBlogJson['title'])
        $(".single-blog-text").text(singleBlogJson['blog'])
        $('.comments').html(null)
        $.each(singleBlogJson['comments'], function(key, value){
            let thingsHTML = '<div class="single-comment w-100 mb-4"><div class="d-flex user-name"><i class="fas fa-user-circle fa-3x mr-3"></i><p class="mr-1 name">'+ value['user'] +'</p><p>Says :</p></div><div class="comment-date"><p>'+ value['date'] + value['time'] +'</p></div><div class="comment"><p class="text-justify">'+ value['comment'] +'</p></div><div class="reply"><button class="btn reply-btn">Reply</button><div class="underline"></div></div></div>';
            
            $(".comments").append(thingsHTML);
        })
    }

}, false);

// faq page accordians

$('.carousel').carousel({
    interval: 2000
})

$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("fa-minus fa-plus");
});


  $( document ).ready(function() {
    $(".show-chapter").on('click',function(){
        chapter.removeClass("display-show").addClass("display-hide");
            const elementId = $(this).attr('data-id');
            $("#" + elementId).removeClass("display-hide").addClass("display-show");
    });
});

// back to top btn

var btn = $('#button');
        
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });