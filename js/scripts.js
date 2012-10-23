$(document).ready(function(){
  var first_select =["电影","音乐","读书"];
  var  select_movies = ["动作","爱情","灾难"],
      select_musics = ["古典","流行","爵士"],
      select_books = ["文学","IT","艺术"];
  var second_select = document.getElementsByClassName('second select')[0];
  // array_op = function(arr,el){
  //   show : function(arr,el){
  //     var father_el = document.getElementsByClassName(el);
  //     for (var i=0;i<arr.length;i++){
  //       father_el.innerHTML += "<li class = 'options'>"+arr[i]+"</li>";
  //     }

  //   }
  // };

  //第一层选择
  function show_arr(arr,el){
    second_select.innerHTML = "";
    //    console.log(i);
//    console.log(arr)
//      console.log(second_select)
    for(var i = 0;i<arr.length; i++){
      console.log("jiale");
      second_select.innerHTML +="<li class = 'options'>"+arr[i]+"</li>";
    }
  }
  function show_arr_pre(arr,el){
    
    if (arr == "select_movies"){
      arr = select_movies;
      show_arr(arr,el);
    }
    if (arr == "select_musics"){
      arr = select_musics;
      show_arr(arr,el);
      
    }
    if (arr == "select_books"){
      arr = select_books;
      show_arr(arr,el);
      
    }
    else{
        return false;
      console.log("oh~oh~ 没有相应的选项喔");
    }
  };
//将选择好的选项放到右边
  var selected_area = document.getElementsByClassName("select options")[0];
  put_options_to_select = function(ops)  {
    var child_op = document.createElement("button");
    child_op.setAttribute("class","close");
    child_op.innerHTML = "×";
    ops.appendChild(child_op);
    selected_area.appendChild(ops);
  };
  
//选择区域的监听函数              
    selected_area.


  $(".first.select").click(function(){
    pre_id = event.target.id;
    //    console.log(this.id)
    var change_el = "second_select_"+ pre_id,
        options = "select_" + pre_id;
    console.log(options);
//     console.log(event.target.parentNode); 
    event.target.parentNode.innerHTML = "";
    put_options_to_select(event.target);
    show_arr_pre(options,change_el);
  })
  //第二层选择
  $(".second.select").click(function(){
    event.target.parentNode.innerHTML = "";
    put_options_to_select(event.target);
    var second_options = event.target.innerText;
    console.log(event.target);
  })
});


