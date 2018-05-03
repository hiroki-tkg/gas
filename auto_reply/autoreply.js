function autoreply() {
 
 //自動返信メールの件名
  
 var title = "【PUBG】 お問い合わせありがとうございます。"; 
  
 //自動返信メールの本文　\nは改行。 
 var body
 = "お問い合わせありがとうございます。\n"
 +"下記のとおりお問い合わせを受け付けました。\n\n"
 + "------------------------------------------------------------\n";

 //自動返信メールの本文2　本文1と本文2の間に入力内容が入る 
 var body2
 = "------------------------------------------------------------\n\n"
 + "確認後、返信させていただきます";
 

//後の処理で使うため、変数を設定。（フォームと名称を一致させる必要あり）  
 var name = '名前';
 var mail = 'メールアドレス';
　var address = "";

  
 var sheet = SpreadsheetApp.getActiveSheet();
 var row = sheet.getLastRow();
 var column = sheet.getLastColumn();
 var range = sheet.getDataRange();
  
 for (var i = 1; i <= column; i++ ) {
    
 //スプレッドシートの入力項目名
   var item = range.getCell(1, i).getValue(); 
   
 //スプレッドシートの入力値
   var value = range.getCell(row, i).getValue(); 
 
 //本文（body）に、フォームの入力項目を追加  
   body += "■"+item+"\n";
 
 //本文にフォームの入力内容を追加
   body += value + "\n\n";
 
 //フォームの入力項目が、「名前」の場合は、「様」をつけて、本文の前に追加  
   if ( item === name ) {
     body = value+" 様\n\n"+body;
   }
 
 //フォームの入力項目が「ご連絡先メールアドレス」の場合は、変数addressに入れる
   if ( item === mail ) {
     address = value;
   }
 }
 
 // スプレッドシートの入力された値を取得
 var id = "user_" + row;
   
 
 //本文1に本文2を追加
  
  body += body2;
  body += id;
  body += "+++column :" + column1;
  
 
//宛名＝address、件名＝title、本文=bodyで、メールを送る
 GmailApp.sendEmail(address,title,body);
}
  