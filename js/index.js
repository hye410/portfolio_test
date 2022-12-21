import $ from 'jquery'

$(function(){
  let windowW = $(window).width()
  // console.log(windowW)
  if(windowW >= 1160){
    nav();
    submenu()
  }
  else if(windowW < 1159 && windowW >= 980){
    nav();
    submenu()
  }
  else if(windowW < 979 && windowW >= 580){
    tNav()
  }
  else if(windowW < 579){
    tNav()
  }
  
  //공통

  //reset


})

//web용 nav
function nav(){
  $('nav li>a').on('click',function(e){
    const navA = $(this).attr('href');
    const aPos = $(navA).offset().top;
    const headerHeight = $('header').innerHeight();
    $('html,body').animate({scrollTop:aPos - headerHeight},800)
    return false;
  })
}

//테블릿,모바일용
function tNav(){
  let navW = $('nav').width()
  // .btn click
  $('header .btn').on('click',function(e){
    $(this).hide();
    $('nav').animate({left:0},500)
  })
    // scroll
    $('nav li>a').on('click',function(e){
      const tnavA = $(this).attr('href');
      const aPos = $(tnavA).offset().top;
      const headerHeight = $('header').innerHeight();
      $('html,body').animate({scrollTop:aPos - headerHeight},800);
      $('nav').css('left','-'+navW+'px');
      $('header p.btn').show();
      return false;
    })

    // close
    $('nav p.close').on('click',function(e){
      $('nav').css('left','-'+navW+'px');
      $('header .btn').show();
    })
  }

  function submenu(){
    $('#submenu li>a').on('click',function(e){
      const href = $(this).attr('href');
      const lTop = $(href).offset().top;
      $('html,body').animate({scrollTop:lTop},300);
    })
  }


// DOM object
const h4 = document.querySelector('#modal h4');
const img = document.querySelector('#modal figure>img');
const day = document.querySelector('#modal dl .year');
const program = document.querySelector('#modal dl .program');
const url = document.querySelector('#modal dl .link>a');
const cotent = document.querySelector('#modal dl .text');

// 객체 생성자 함수

function Modal(title,pic,year,program,href,text){
  this.title = title;
  this.pic = pic;
  this.year = year;
  this.program = program;
  this.href = href;
  this.text = text;
}

// 매서드
Modal.prototype.action = function(){
  h4.innerHTML = this.title;
  img.setAttribute('src',this.pic);
  day.innerHTML = this.year;
  program.innerHTML = this.program;
  url.setAttribute('href',this.href);
  url.innerHTML = this.href
  cotent.innerHTML = this.text;
}

// 인스턴스

let myModal = [
  new Modal('title01','./images/pic01.png','2022','프로그램1','http://aaa1.com','내용1'),
  new Modal('title02','./images/pic02.png','2022','프로그램2','http://aaa2.com','내용2'),
  new Modal('title03','./images/pic03.png','2022','프로그램3','http://aaa3.com','내용3'),
  new Modal('title04','./images/pic04.png','2022','프로그램4','http://aaa4.com','내용4'),
  new Modal('title05','./images/pic01.png','2022','프로그램5','http://aaa5.com','내용5'),
  new Modal('title06','./images/pic02.png','2022','프로그램6','http://aaa6.com','내용6')
]

// event -> 작업 -> click(figure or figure>img , #modal>.close)

const open = document.querySelectorAll('#all>figure');
const close = document.querySelector('#modal>.close');

const modal = document.querySelector('#modal');
// open.onclick =  ->첫번째만 선택됨

open.forEach(function(item,index){
  item.onclick = function(){
    modal.style.display='block';
    myModal[index].action();
}
})

close.onclick = function(){
  modal.style.display='none'
}
