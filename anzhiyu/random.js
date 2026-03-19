var posts=["2021/04/10/English Word/","2021/04/11/Phonics/","2021/09/11/FSTOOL/","2021/03/14/MC-LJXHaK/","2021/03/21/MC-Command/","2021/09/09/9-9/","2021/04/10/chemistry/","2021/04/10/English-grammar/","2023/01/14/Q/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };