// ------------------------------------------------ ---
// Tác giả: kimidev
// Url: https://www.kimidev.site/
// Phiên bản: 1.5k
// Ngày: 26/03/2005
// ------------------------------------------------ ---

   var postTitle = new Array (); // mảng các tiêu đề
   var postUrl = new Array (); // mảng posturls
   var postDate = new Array (); // mảng ngày xuất bản bài đăng
   var postSum = new Array (); // mảng tóm tắt bài đăng
   var postLabels = new Array (); // mảng nhãn bài

// biến toàn cục
   var sortBy = "datenewest"; // giá trị mặc định để sắp xếp ToC
   var tocLoaded = false; // true nếu nguồn cấp dữ liệu được đọc và ToC có thể được hiển thị
   var numChars = 250; // số ký tự trong phần tóm tắt bài đăng
   var postFilter = ''; // giá trị bộ lọc mặc định
   var tocdiv = document.getElementById ("bp_toc"); // container toc
   var totalEntires = 0; // Các mục nhập được lấy cho đến bây giờ
   var totalPosts = 0; // Tổng số bài viết trong blog.

// hàm gọi lại chính

hàm loadtoc (json) {

   function getPostData () {
   // hàm này đọc tất cả postdata từ json-feed và lưu trữ nó trong các mảng
      if ("entry" trong json.feed) {
         var numEntries = json.feed.entry.length;
         totalEntires = totalEntires + numEntries;
         totalPosts = json.feed.openSearch $ totalResults. $ t
         if (totalPosts> totalEntires)
         {
         var nextjsoncall = document.createElement ('script');
         nextjsoncall.type = 'text / javascript';
         startindex = totalEntires + 1;
         nextjsoncall.setAttribute ("src", "/ feeds / posts / Summary? start-index =" + startindex + "& max-results = 500 & alt = json-in-script & callback = loadtoc");
         tocdiv.appendChild (nextjsoncall);
         }
      // vòng lặp chính nhận tất cả các mục từ nguồn cấp dữ liệu
         for (var i = 0; i <numEntries; i ++) {
         // lấy mục nhập từ nguồn cấp dữ liệu
            var entry = json.feed.entry [i];

         // lấy tiêu đề từ mục nhập
            var posttitle = entry.title. $ t;

         // lấy ngày đăng từ mục nhập
            var postdate = entry.published. $ t.substring (0,10);

         // lấy url bài đăng từ mục nhập
            var posturl;
            for (var k = 0; k <entry.link.length; k ++) {
               if (entry.link [k] .rel == 'alternate') {
               posturl = entry.link [k] .href;
               nghỉ;
               }
            }

         // lấy nội dung bài đăng từ mục nhập
         // loại bỏ tất cả các ký tự html và giảm nó thành một bản tóm tắt
            if ("nội dung" trong mục nhập) {
               var postcontent = entry.content. $ t;}
            khác
               if ("tóm tắt" trong mục nhập) {
                  var postcontent = entry.summary. $ t;}
               else var postcontent = "";
         // loại bỏ tất cả các thẻ html
            var re = / <\ S [^>] *> / g; 
            postcontent = postcontent.replace (lại, "");
         // giảm nội dung sau thành số ký tự, rồi cắt nó ở toàn bộ từ cuối cùng
            if (postcontent.length> numChars) {
               postcontent = postcontent.substring (0, numChars);
               var quoteEnd = postcontent.lastIndexOf ("");
               postcontent = postcontent.substring (0, quoteEnd) + '...';
            }

         // lấy nhãn bài đăng từ mục nhập
            var pll = '';
            if ("thể loại" trong mục nhập) {
               for (var k = 0; k <entry.category.length; k ++) {
                  pll + = '<a href = "javascript: filterPosts (\' '+ entry.category [k] .term +' \ ');" title = "Nhấp vào đây để chọn tất cả các bài đăng có nhãn \ '' + entry.category [k] .term + '\'"> '+ entry.category [k] .term +' </a>, ';
               }
            var l = pll.lastIndexOf (',');
            if (l! = -1) {pll = pll.substring (0, l); }
            }

         // thêm dữ liệu bài đăng vào các mảng
            postTitle.push (posttitle);
            postDate.push (ngày đăng);
            postUrl.push (posturl);
            postSum.push (nội dung sau);
            postLabels.push (pll);
         }
      }
      if (totalEntires == totalPosts) {tocLoaded = true; showToc ();}
   } // kết thúc getPostData

// phần bắt đầu của nội dung hàm showtoc
// lấy số mục nhập có trong nguồn cấp dữ liệu
// numEntries = json.feed.entry.length;

// lấy postdata từ nguồn cấp dữ liệu
   getPostData ();

// sắp xếp các mảng
   sortPosts (sortBy);
   tocLoaded = true;
}



// chức năng lọc và sắp xếp


function filterPosts (bộ lọc) {
// Hàm này thay đổi bộ lọc
// và hiển thị danh sách các bài đăng đã lọc
  // document.getElementById ("bp_toc"). scrollTop = document.getElementById ("bp_toc"). offsetTop ;;
   postFilter = bộ lọc;
   displayToc (postFilter);
} // end filterPosts

function allPosts () {
// Hàm này đặt lại bộ lọc
// và hiển thị tất cả các bài đăng

   postFilter = '';
   displayToc (postFilter);
} // kết thúc allPosts

function sortPosts (sortBy) {
// Hàm này là một quy trình sắp xếp bong bóng đơn giản
// sắp xếp các bài viết

   function swapPosts (x, y) {
   // Hoán đổi 2 mục nhập ToC bằng cách hoán đổi tất cả các phần tử mảng
      var temp = postTitle [x];
      postTitle [x] = postTitle [y];
      postTitle [y] = temp;
      var temp = postDate [x];
      postDate [x] = postDate [y];
      postDate [y] = temp;
      var temp = postUrl [x];
      postUrl [x] = postUrl [y];
      postUrl [y] = temp;
      var temp = postSum [x];
      postSum [x] = postSum [y];
      postSum [y] = temp;
      var temp = postLabels [x];
      postLabels [x] = postLabels [y];
      postLabels [y] = temp;
   } // kết thúc swapPosts

   for (var i = 0; i <postTitle.length-1; i ++) {
      for (var j = i + 1; j <postTitle.length; j ++) {
         if (sortBy == "titleasc") {if (postTitle [i]> postTitle [j]) {swapPosts (i, j); }}
         if (sortBy == "titleesc") {if (postTitle [i] <postTitle [j]) {swapPosts (i, j); }}
         if (sortBy == "dateoldest") {if (postDate [i]> postDate [j]) {swapPosts (i, j); }}
         if (sortBy == "datenewest") {if (postDate [i] <postDate [j]) {swapPosts (i, j); }}
      }
   }
} // kết thúc sortPosts

// hiển thị toc

function displayToc (filter) {
// hàm này tạo một bảng ba cột và thêm nó vào màn hình
   var numDisplayed = 0;
   var tocTable = '';
   var tocHead1 = 'TIÊU ĐỀ ĐĂNG';
   var tocTool1 = 'Bấm để sắp xếp theo tiêu đề';
   var tocHead2 = 'NGÀY ĐĂNG';
   var tocTool2 = 'Bấm để sắp xếp theo ngày';
   var tocHead3 = 'LABELS';
   var tocTool3 = '';
   if (sortBy == "titleasc") {
      tocTool1 + = '(giảm dần)';
      tocTool2 + = '(newest first)';
   }
   if (sortBy == "titleesc") {
      tocTool1 + = '(tăng dần)';
      tocTool2 + = '(newest first)';
   }
   if (sortBy == "dateoldest") {
      tocTool1 + = '(tăng dần)';
      tocTool2 + = '(newest first)';
   }
   if (sortBy == "datenewest") {
      tocTool1 + = '(tăng dần)';
      tocTool2 + = '(cũ nhất đầu tiên)';
   }
   if (postFilter! = '') {
      tocTool3 = 'Bấm để xem tất cả bài viết';
   }
   tocTable + = '<table>';
   tocTable + = '<tr>';
   tocTable + = '<td class = "toc-header-col1">';
   tocTable + = '<a href = "javascript: toggleTitleSort ();" title = "'+ tocTool1 +'"> '+ tocHead1 +' </a> ';
   tocTable + = '</td>';
   tocTable + = '<td class = "toc-header-col2">';
   tocTable + = '<a href = "javascript: toggleDateSort ();" title = "'+ tocTool2 +'"> '+ tocHead2 +' </a> ';
   tocTable + = '</td>';
   tocTable + = '<td class = "toc-header-col3">';
   tocTable + = '<a href = "javascript: allPosts ();" title = "'+ tocTool3 +'"> '+ tocHead3 +' </a> ';
   tocTable + = '</td>';
   tocTable + = '</tr>';
   for (var i = 0; i <postTitle.length; i ++) {
      if (filter == '') {
         tocTable + = '<tr> <td class = "toc-entry-col1"> <a href="' + postUrl[i] +'" title="' + postSum[i] +'">' + postTitle [ i] + '</a> </td> <td class = "toc-entry-col2">' + postDate [i] + '</td> <td class = "toc-entry-col3">' + postLabels [i] + '</td> </tr>';
         numDisplayed ++;
      } khác {
          z = postLabels [i] .lastIndexOf (bộ lọc);
          nếu (z! = -1) {
             tocTable + = '<tr> <td class = "toc-entry-col1"> <a href="' + postUrl[i] +'" title="' + postSum[i] +'">' + postTitle [ i] + '</a> </td> <td class = "toc-entry-col2">' + postDate [i] + '</td> <td class = "toc-entry-col3">' + postLabels [i] + '</td> </tr>';
             numDisplayed ++;
          }
        }
   }
   tocTable + = '</table>';
   if (numDisplayed == postTitle.length) {
      var tocNote = '<span class = "toc-note"> Hiển thị tất cả' + postTitle.length + 'bài đăng <br/> </span>'; }
   khác {
      var tocNote = '<span class = "toc-note"> Hiển thị' + numDisplayed + 'bài viết có nhãn \' ';
      tocNote + = postFilter + '\' of '+ postTitle.length +' tổng số bài đăng <br/> </span> ';
   }
   tocdiv.innerHTML = tocNote + tocTable;
} // kết thúc của displayToc

function toggleTitleSort () {
   if (sortBy == "titleasc") {sortBy = "titleesc"; }
   else {sortBy = "titleasc"; }
   sortPosts (sortBy);
   displayToc (postFilter);
} // kết thúc toggleTitleSort

function toggleDateSort () {
   if (sortBy == "datenewest") {sortBy = "dateoldest"; }
   khác {sortBy = "datenewest"; }
   sortPosts (sortBy);
   displayToc (postFilter);
} // kết thúc toggleTitleSort


function showToc () {
  if (tocLoaded) {
     displayToc (postFilter);
     var toclink = document.getElementById ("toclink");
   
  }
  else {alert ("Chỉ cần đợi ... TOC đang tải"); }
}

function hideToc () {
  var tocdiv = document.getElementById ("toc");
  tocdiv.innerHTML = '';
  var toclink = document.getElementById ("toclink");
  toclink.innerHTML = '<a href="#" onclick="scroll(0,0); showToc(); Effect.toggle('+"'toc-result','blind');"+'"> » Hiển thị Mục lục </a> <img src = "http://chenkaie.blog.googlepages.com/new_1.gif" /> ';
}
