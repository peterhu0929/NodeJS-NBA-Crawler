# 10/19
Data Blocks/Relations
Triggers "when"
	 :CASH_LOAN_D.PRI_TTL_TERMS := cash_loan_utility.get_pay_times(:CASH_LOAN_D.PRI_FIRST_DATE ,:CASH_LOAN_D.PRI_LAST_DATE,:CASH_LOAN_D.PAY_PRI_TERM_U,:CASH_LOAN_D.PAY_PRI_TERM);
	 :CASH_LOAN_D.INT_TTL_TERMS := cash_loan_utility.get_pay_times(:CASH_LOAN_D.INT_FIRST_DATE ,:CASH_LOAN_D.PRI_LAST_DATE,:CASH_LOAN_D.PAY_INT_TERM_U,:CASH_LOAN_D.PAY_INT_TERM);
呼叫同一個函式但是參數不同


10/20
C:\Users\peter.ch.hu\Desktop\Oracle bug紀錄

list54
List item 用到的 record group, 內容固定 為兩個欄位 , 分別代表 畫面 顯示和實際 儲存 的資料	 

來源block之屬性QUERY ALL RECORDS 設定為yes
FRM-30425: Summarized database item must reside in a block with Query All Records or Precompute Summaries set to Yes.
Item: FN_COUNT
Block: STUDENT
FRM-30085: Unable to adjust form for output.

SELECT * FROM DD_TRACE_SESSION ORDER BY KEY_NO DESC
追查DB中下的最近一筆指令

FRAME要SUBCALSS IN FORMATION繼承好
CANVASES長寬要調整好
LP_DISPLAY_ITEMS=>VISUAL ATTRIBUTES下設定屬性物件(VA_GREEN/VA_PINK)
***投資管理系統
SELECT DESCRIPTION,VALUE FROM CASH_LOAN_CODE
WHERE COLUMN_NAME = 'LOAN_TYPE'
SELECT DESCRIPTION,VALUE FROM CASH_LOAN_CODE
WHERE COLUMN_NAME = 'PAY_TYPE'

10/21
compile有三種方式，測試程式有error選擇compile all

TO CSC=>用,逗號區分 ""中間接Name避免有,出現
=":main.seq",TO_CHAR(:main.move_date),TO_CHAR(:main.units),":main.comments";
https://zh.wikipedia.org/zh-tw/%E9%80%97%E5%8F%B7%E5%88%86%E9%9A%94%E5%80%BC

LOV(LIST of view) -> RECORD GROUP中寫SELECT
data blocks物件屬性中要選LOV之物件 
LOV物件下COLUMN MAPPING PROPERTIES點選more調整下拉式選單要顯示的欄位 return值記得要選顯示地方


10/22
機房停電 設備關機
高雄 我們 災難復原DISASTER RECOVERY的地方 俗稱DR SITE 
他們也有一台備用 DB 和 幾台VM
這是萬不得已 有災難來 要切過去
每年都會有計畫 要切換 試試看 1.2次
老闆說THIRD PARTY　就是指第３方　　　　我們的主機　匯率主機　　ＨＦＭ　合併報表　ＦＤＭ上傳報表　　都是外包廠商　　　
現在討論的是　　市電斷了　　剩下１０小時　地下室油料發電
到底這中間要做甚麼樣的行動　　順序
剛說光切ＤＲ　就要三小時

對　　現在好像訂了個標準　
就是ｄｂ主機
大型電腦主機　ｕｎｉｘ
用一個最極限的標準　　來讓機房　　幫我們關機　

list item下list style中有三種風格可選(combox留白)

Calendar使用法
double click寫DO_KEY('LIST_VALUES');
KEY-LISTVAL寫GP_LIST_CALENDAR;
ATTACTHED LIBRARIES->STD->GP LIST CALENDAR

10/23
FORMAT MAS 資料顯示格式
EX:999,999,999,999.90


QUERY button之Trigger

DECLARE
	BLK_ID       	VARCHAR2(30) := 'MAIN';
	WHERE_CLAUSE	VARCHAR2(4000);
	SOURCE_NAME 	VARCHAR2(100);
BEGIN
	WHERE_CLAUSE := LF_WHERE_CLAUSE(BLK_ID);
	SOURCE_NAME := GET_BLOCK_PROPERTY(BLK_ID,QUERY_DATA_SOURCE_NAME);
		
	GO_BLOCK(BLK_ID);

	SET_BLOCK_PROPERTY(BLK_ID, DEFAULT_WHERE, WHERE_CLAUSE);
	
	EXECUTE_QUERY;
END;

DD_USER_PNTENV 、DD_USER_PRINTERS為列印的data block 套用現有函式庫即可


10/26

1.	CASH_LOAN_D.F_KEY_NO = CASH_LOAN_M.KEY_NO
2.	CASH_LOAN_COLLA.F_KEY_NO = CASH_LOAN_D.KEY_NO
3.	CASH_LOAN_PAY.F_KEY_NO = CASH_LOAN_D.KEY_NO
4.	cash_loan_rate.f_key_no = cash_loan_d.key_no

CASH_LOAN_D
CASH_LOAN_M
CASH_COLLA
CASH_LOAN_PAY
CASH_LOAN_RATE

得到公司名稱與借貸/付款類型
ACC_PUB.COMPANY
CASH_LOAN_CODE


轉交給 FAGA 普通會計組
剛才老闆說的
我們不是不能改 , 而是這件事的流程應該是由前端USER 先找會計人員
這才是合理的流程
要不然其實我們下個 指令 就能改了 , 但我們介入資料 , 這是不太合乎正常流程的行為
有必要再協助就好

10/27

現金管理 cash
其他管理-油料
OC11070F
OC11000F	
LOV v.s.下拉式選單
多資料   下拉式不清楚閱讀

合約維護 DON
採購     DOD
         Monthly Average



10/28
使用顏色
要在visual attributes
放置VA_PINK,VA_GREEN


權限問題
Table有GRANT問題，會影響listitem的出現

JOB排程 可以定時呼叫procedure 在server端 16個CPU搶排程 會不準時執行
需要準時的:可以在local端自行設定task定時排程 呼叫批次檔路徑-> procedure(.sql檔案)


select TRUNC(Sysdate+1)+9/24+32/1440+52/86400,sysdate from dual
可以指定時間 用在JOB上


10/29
抓取哪個使用者使用哪支程式
 select pro_name,log_user,count(*) from DD_LOG_USERS 
 where pro_name like 'LA%' 
 and log_date >= sysdate - 360 
 group by  pro_name,log_user
 
 10/30
可以查詢單一張TABLE各欄位屬性
select COLUMN_NAME,DATA_TYPE,NULLABLE,substr(DATA_TYPE,1,1) ,column_ID from user_tab_columns
where table_name = 'V_CASH_LOAN_ALL'
order by COLUMN_ID

11/2
940前一天 歷史資料
942十分鐘 即時資料


陽明       vs       花旗
public key          public key
交換鑰匙
產生加密後資料傳遞
可以藉由各自的private key解密後看到資料

Bank Identifier Code (BIC)

接收花旗銀行XML檔案之流程
Server Manager\configuration\Task Scheduler Library\CITIXML\Trigger
執行
D:\pgm\autojob\mt94x_edi.bat
===================================================================

@echo off
D:

cd D:\pgm\autojob

D:\pgm\citi\EDI94XConsoleApp.exe --將XML檔案丟入資料庫 BLOB欄位 看EDI94XConsoleAPP.exe.config
/*<add key="ErrorLogFolder" value="D:\" />
    <add key="MT940" value="d:\wwwroot\citi\citixml\" /> 放到資料庫中
    <add key="MT940B" value="d:\wwwroot\citi\citixml\MT940B\" /> 備份一份檔案940
    <add key="MT942" value="d:\wwwroot\citi\citixml\" />
    <add key="MT942B" value="d:\wwwroot\citi\citixml\MT942B\" /> 備份一份檔案942
*/


sqlplus.exe cashop/ymlitgf1!@pris @d:\pgm\autojob\RCV_MT942.sql --呼叫SQL程式

sqlplus.exe cashop/ymlitgf1!@pris @d:\pgm\autojob\RCV_MT940.sql

===================================================================

SQL查詢語法 接收花旗XML
CASH

select * from ais_edi_files
where edi_code='MT942'

CLOB_DATA欄位儲存XML完整檔案


11/3
維護美國的會計帳戶系統
YMSE管理YMA

Q問題
SELECT * FROM users where DIVISION='FAIA' order by IN_DATE desc
找FAIA部門之其他人USER_ID

select * from ACC_PUB.COMPANY
找尋陽明海運各公司之基本資料

經理告知之原處理法
找到同部門之其他人資料
select * from ACC_USER_COMPANY 
where UPPER(USER_ID)='SHERRY.YJ.HSIAO'
利用其他人資料匯入新人資料
select 'PINKY.YC.JIANG',COMPANY_ID,DFT_SW,IN_USER,SYSDATE from ACC_USER_COMPANY
where USER_ID='SHERRY.YJ.HSIAO'



Spencer 上午那個問題的ACC_USER_COMPANY
中DFT_SW欄位是什麼意思

DFT_SW(Default Switch)




花旗XML

YMS IIS+WEBDAV
flat file扁平化資料
cash_bank_xml_h 
cash_bank_xml_m 
                                flat file from ais_edi_files.clob 
						            內部            web網站
									總公司          代理行   
									報帳用          網站查詢
									重要			較不重要
							cash_deposit            cash_bank_xmlqry_m 
							cash_deposit_detail     cash_bank_xmlqry_d
XML匯成TABLE
唯一使用:CASH_PK_BANK_XML
							
-- flat file from ais_edi_files.clob 
select * from cash_bank_xml_h 
select * from cash_bank_xml_m 

--代理行查詢使用 查詢系統 
select * from cash_bank_xmlqry_m 

select * from CASH_BANK_XMLQRY_D 


--總公司帳務使用 報收系統 
select * from cash_deposit 
select * from cash_deposit_detail 


改寫auto email
cash_email_CM320E3



11/4
cash_deposit.key_no=cash_deposit_detail.f_key_no

VISIO
VS的問題 公司只有買20套版權 
那台裝在PC 效能佔很重
在想你的不是NB 所以可能就先不要裝了


FDM RECONFIG較簡單
.net Manager->trisname.ora
HFM RECONFIG較難


HFM    財務合併管理系統(會計部使用,向PWC資誠購買)
FDM    上傳財報 會科統一定義(較簡單)


User 透過web->Pr HFM->DB(正式區).26
					/每個月一開始正式區蓋掉但是連到正式區，所以才要重新reconfig連到測試區
    (災難復原)Dr HFM\*  
			  
			  FDM->   DB(測試區).130 BCD

改IP重點(130)
220.163 164 正式機
225.49 50 效能測試機

U:\002.個人工作區\Kay\工作交接

11/5
1FEU=2TEU

呼叫CASH_EMAIL_CM32010E2語法

DECLARE 
P_COMPANY_ID VARCHAR2(2);	
P_EREPORT_KEY NUMBER;
P_DEPOSIT_KEY NUMBER;
P_USER_ID VARCHAR2(32767);
P_SELF VARCHAR2(32767);
P_start_date date;
P_end_date date; 
BEGIN 
P_COMPANY_ID := 'YM';
P_EREPORT_KEY := 7;
P_DEPOSIT_KEY := 210983;
P_USER_ID := 'KEVIN.SW.LIOU';
P_SELF := 'Y';
p_end_date := to_date (to_char(sysdate , 'yyyymmdd') || '085959' , 'yyyymmddhhmiss');
p_start_date := p_end_date -1 ;
CASH.CASH_EMAIL_CM32010E2.MAIN ( P_COMPANY_ID, P_EREPORT_KEY, P_DEPOSIT_KEY, P_USER_ID, P_SELF ,P_START_DATE, P_END_DATE);
COMMIT; 
END;

HFM
FDM
週六晚上會進行關機 export正式機參數與資料
這也是另一種防範機制 是正式機的手動備份 出來
這樣還原 重建更快
我們dr 只是for 緊急時刻使用 還原回來正式機的東西 還是以每個禮拜 這種 資料最新 復原 比較好


11/6
除了花旗
禮拜一 兩個excel 1.每天之報表
                 2.前一個禮拜星期一至星期日之報表
禮拜二至五 一個excel-每天之報表			 
TRIM()


11/9
29家銀行是哪29家?
篩選哪一項日期欄位?
user需求欄位會造成重複

ITGF
應付憑單
零星傳票
現金系統
總帳系統

傳票 上半部 會計
     下半部 出納
	 
	 
11/10
亞洲區MT940轉檔

CITI將940與942資料匯入ymfinanical正式區(Z:\wwwroot\citi\citixml)
手動將USER要求資料丟到ymitgf01測試區(T:\wwwroot\citi\citixml)	 

status=100匯入bug
結果是檔案過大問題
需要一筆一筆匯入(KEY_NO)

COLOUMN MODE




--呼叫XML(MT940)匯入資料庫

DECLARE 
  p_party VARCHAR2(32767);
  P_XML_TYPE VARCHAR2(32767);
  p_user    VARCHAR2(20) := cash_utility.get_sysparm('S!', 'SYS_UM_VOU_MAKER');--SYS_XML_BANK_PIC


BEGIN 
  p_party := 'CITI';
  P_XML_TYPE := 'MT940';

  CASH.CASH_PK_BANK_XML.main(p_party ,p_xml_type );
  CASH.cash_pk_deposit.send_xml_notice(p_user);
  COMMIT; 
END; 

DEBUG_CTIT_XML


11/11
11/12
三支程式部屬
按照"按照開發與部屬流程"
SELECT DESCRP,CURRENCY FROM CURRENCYS
WHERE NVL(EXP_DATE,SYSDATE) >=SYSDATE AND NVL(EFF_DATE,SYSDATE) <=SYSDATE
and currency in (select curr_cd from fin_bank)


***********************************
部署種類：SQL
修改原因：CM36020F 程式更新失敗
程式名稱：CASH_BANK_ADJ_UTILITY.pks
		  CASH_BANK_ADJ_UTILITY.pkb 	

修改日期：2015/11/12

Mantis Link: http://10.6.220.3/man/view.php?id=2618

*借貸L/R

ACC_PUM之問題
*同義字
create public synonym cash_vendors for cash_vendors;

http://mylinoraclesql.blogspot.tw/2014/02/create-synonym.html

11/13
select * from cash_bank_xmlqry_m  where KEY_NO=43017
select * from cash_bank_xmlqry_D where F_KEY_NO=43017

關係
cash_bank_xmlqry_m.KEY_NO=cash_bank_xmlqry_D.F_KEY_NO



auto mail 單日報收明細
雜幣改為系統提供單日報收明細 ,
週報收的明細由人工到花旗銀行download
你的excel內容只要單日的明細
我星期一會發mail
因為自ciitbank 抓週的交易明細可以讓會計確認資料有沒有遺漏.
excel 增加entry date欄位 幣別改為英文Currency
mail 內容要調為單日的說明



11/16
RETURN 前面*/綠掉



***使用者權限問題
先進ILIS權限控管-ILIS系統設定	

   select * from hr_division_vw
   where division='LOEU'
   
   找尋同部門之ais_users
   有的話增加他的權限
   filter同部門之user_id
   Duplicate ROW複製一份，並刪除有異之欄位

  
11/17


YMA 會計 過帳
YMSE 工作檔案 資料QC DBLINK到美國

         select * from cash_EREPORT_MAIL         
         SELECT *   FROM cash_ereport_tree



demodocument.addcell(p_col_index => '14', p_data_type => 'Number', p_style => 'ColumnNumbera', p_formula => c11.ttl_amt);
demodocument.addcell(p_col_index => '14', p_data_type => 'Number', p_style => 'ColumnNumber', p_data => TRIM(TO_CHAR(c1_d.ccy_amt, '999,999,999,990.00')));


11/18
http://www.itpub.net/thread-964237-1-1.html
Modal 該視窗程式作業完畢之後才能處理原先視窗
Windows下的 close Allowed
            Move Allowed
			Resize Allowed
			Maximize Allowed
			minimize Allowed
			
			勾選Yes/No
			可以選擇是否在視窗上顯示關掉或縮小按鈕

Cash_comb Table給視窗的下拉式選單

TRUNC(SYSDATE+1)+(9/24)+(60*10/86400)

U:\001.專案管理區\05.現金系統\001.現行系統區\Data Flow\Data Flow — CASH_VOU2CASH.vsd


內部往來帳=陽明幫子公司先代墊(UK/AO...)	


應付帳款->零星傳票->現金


11/19
cash_ereport
email auto mail 利用(html與SQL)寫email內容





cash_oil_request     O_RAMT 實際加油USD總價

cash_oil_req_price  O_RAMT
                    B_RAMT記帳幣總額
					 
					 BOAMT=BOUSEX * ORAMT
					 
11/20

12/21帳戶中有缺九個帳戶資料
台灣沒有交易發生但還是有憑單編號出現
SCTU
今天匯入之11/19有重複資料問題產生

幫FFCM新增CM41070F之權限
U:\001.專案管理區\05.現金系統\001.現行系統區\Q&A\ILISSYS



11/23
pub.users

***LOG使用

先在Spec放(.pks)
AS
   c_owner CONSTANT VARCHAR2 (30) := 'CASH';
   r_logs         cash_sys_logs%ROWTYPE;

接著到Body放(.pkb)
   BEGIN
      --先行宣告CASH_SYS_LOGS的log_code名稱   
      r_logs.log_code := 'CASH_EMAIL_CM32010E3.MAIN';
   EXCEPTION
      WHEN OTHERS THEN
         r_logs.logs := SQLERRM;
         cash_pr_set_logs (r_logs);
   END; 
		 
最後在要找的語法下放置
r_logs.logs := 'TO=>' || c2.email;
cash_pr_set_logs (r_logs);以便抓取log結果

11/24
***SQL技巧
select a.rowid,a.*,dump(email,1017) from CASH_EREPORT_MAIL a 
where f_key_no=9;


更新掉原本email有空格內容
update  CASH_EREPORT_MAIL 
set email = replace( replace(email,chr(13),''),chr(10)) 
where f_key_no = 9


a.rowid==>可直接對select出來的結果做修改
dump()==>針對輸入的值判斷是否有輸入空格(excel複製貼上會自己代空格)

針對auto mail查詢寄出細節
select * from mail_to;
select * from mail_main;

select * from mail_config
order by key_no desc

select *from mail_log
where f_key_no=114261753
order by key_no desc

已完成接收花旗銀行XML內部流程




C1=CASH_OIL_REQUEST 
C2=CASH_OIL_REQ_PRICE

PAY_BUDGGE_ACCT
PAY_PAYHDR

11/25
YMA連線測試
花旗XML debug 資料遺漏問題
11/26
TW  匯入到今日之最新資料 有
ID  <Amt Ccy="USD">0.00</Amt> 無資料==>因為無<Ntry>此標籤所以無法找到資料
UAE 如昨日回覆
PH  無<ntry>標籤，但有資料但是無法從網頁查詢到
TH  無<Ntry>此標籤所以無法找到資料


CASH_BANK_DEPOSIT
bank_ref一致

11/27
10.6.236.31 FDM
YMFFDM03
設定前檢查一下電腦名稱


HFM有八個SERVERS
   
	 
因為正式區已將AED勾選
勾選MT940傳送










12/1
當日XML有報收資料
=>cash_bank_xml_h 與 cash_bank_xml_m 都有
當日無報收資料
=>僅有cash_bank_xml_h 標頭 


下拉式選單 insert進去

insert into CASH_SYSPARMS (COMPANY_ID,PARM_CD, PARM_DESC,PARM_VALUE,IN_USER,COMMENTS)
values ('YM','SYS_OIL_SYSADM','燃油系統負責人','SPENCER','SPENCER','燃油系統負責人') 
values('YM',''','銀行調節表覆核人員','STEVEN.CP.CHANG','PETER.CH.HU','銀行調解表覆核人員);



***程式面下拉式選單用table
CASH_COMB
利用IN cash_type
SELECT VALUE NAME1,OPTION_CODE CODE2 FROM CASH_COMB WHERE COMB_TYPE IN ('STK_ERPT_JOB_CD') 
ORDER BY OPTION_CODE
可以達下拉式選單效果

***系統面
CASH_SYSPARMS
利用insert CASH_SYSPARMS之後利用user表可以達成下拉式選單效果 
insert into CASH_SYSPARMS (COMPANY_ID,PARM_CD, PARM_DESC,PARM_VALUE,IN_USER,COMMENTS)
values('YM','SYS_TEST','銀行調節表覆核人員','FFCM','PETER.CH.HU','銀行調節表覆核人員');

insert into CASH_SYSPARMS (COMPANY_ID,PARM_CD, PARM_DESC,PARM_VALUE,IN_USER,COMMENTS)
values('UK','SYS_TEST','銀行調節表覆核人員','FAGA','PETER.CH.HU','銀行調節表覆核人員');

select * from users where DELETE_YN='N' and DIVISION in(select parm_value from CASH_SYSPARMS where parm_cd='SYS_TEST');
---INSTRB***
SELECT b.* 
FROM fin_BANK b, CASH_SYSPARMS c 
WHERE INSTRB (c.PARM_VALUE, '''' || b.bank_code || '''') > 0 AND c.parm_cd = 'SYS_CITI_XML_CHK_REF';

select * from CASH_SYSPARMS where PARM_CD='SYS_CITI_XML_CHK_REF'

select '''' || bank_code || '''' from fin_bank

SELECT '''' || bank_code || '''',INSTR (c.PARM_VALUE, '''' || b.bank_code || '''')
FROM fin_BANK b, CASH_SYSPARMS c 
WHERE INSTR (c.PARM_VALUE, '''' || b.bank_code || '''') > 0 
order by INSTR (c.PARM_VALUE, '''' || b.bank_code || '''')  










YMSE(YMSE_Yield Manage System Expenditure)

YMAA(YANG MING AMERICA ACOUTING)

rcc_actpay_request_costdtl@pris_ymaaop

rcc_actpay_request_detail@pris_ymaaop;

rcc_actpay_request@pris_ymaaop

YMAA_PK_YMSE

12/7
CTRL.CITI_EDI != 'A'
CHECK BOX 設定不等於'A'不等於空值
=>有勾選

修改TOAD之YM連線位址
E:\app\peter.ch.hu\product\12.1.0\client_1\Network\Admin\tnsnames.ora

TRACE CODE放在when button pressed
TRACE_SQL(TRACE_CODE=>BLK_ID,SQLCMD=>'SELECT * FROM ' || SOURCE_NAME || ' WHERE ' || WHERE_CLAUSE);	
TRACE_SESSION(TRACE_CODE=>'QUERY',SQLCMD=>WHERE_CLAUSE);


SCORE.S_KEY = STUDENT.KEY_NO




12/8
bank_code
新增/修改傳票
when button pressed
TMP_PROSTATUS狀態不一樣，按鈕有不一樣alert
FIN_VOU_MAIN下的when new record instance
***關鍵程式碼
IF NVL(SA_ACT_ORCURR_EXCH.ORAMT(:FIN_VOUCHER.COMPANY_ID, :FIN_VOUCHER.VTYPE, :FIN_VOUCHER.CRENO_YEAR, :FIN_VOUCHER.CRENO), 0) = NVL(:FIN_VOU_MAIN.TOT_ORAMT_F, 0) THEN
   :PARAMETER.TMP_INSERT_FLAG := 'N';
ELSE
	:PARAMETER.TMP_INSERT_FLAG := 'Y';
END IF;

GP_ALERT_STOP(:PARAMETER.TMP_INSERT_FLAG);

去看SA_ACT_ORCURR_EXCH.ORAMT
select SA_ACT_ORCURR_EXCH.ORAMT('YM','CT','2015','YFX1200016') from dual;
再看package程式碼
  SELECT  *
              --INTO     TMP_ORAMT
              FROM     FIN_ACT_MAIN   A,
                       FIN_VOUCHER    B
              WHERE    A.F_KEY_NO   = B.KEY_NO
              AND      B.COMPANY_ID ='YM'
                AND      B.VTYPE      = 'CT'
              AND      B.CRENO_YEAR = '2015'
              AND      B.CRENO      ='YFX1200016'
              --AND      A.ACCTNUM    = '1100';
			  
			  
會計科目為1100


12/9
權限設定一定要ilis先設定後存檔
資料庫不一定準確

新的YMAA IP
YM-ITGF Spencer Hsu 許振福 [上午 10:30]: 
10.6.237.92 % 10.6.237.93
ARO

今天問Spencer


2015/02/02   Candy            1.新增FN_TRANS_DUP, FN_DELETE_DUP for xml 資料處理, CM32010F (mantis 1860)




12/11
經理教學
MAPPING
與
ASP WEB查詢



List<COUNTRY> Countrys = svc.FindBy(x => cntry_codes.Contains(x.CNTRY_CODE)).OrderBy(x => x.CNTRY_NAME).ToList();

CASH_PK_DEPOSIT.FN_TRANS_DUP->cash_pk_tab_ins.ins_cash_deposit_detail

12/15
MULTILINE SHIPPING C           有
SUPRA SHIPINDO                 有
KHARISMA TRANSPORTASI INDONESIA
1/COSCO CONTAINER LINES EUROPE GMBH 無
YANGMING MARINE TRANSPORT           有
MULTILINE SHIPPING COMPANY          有

12/16
上path 改參數 提升操作效能






Kevin哥指導
簡單來說  
正式機要上 PATCH   改ORACLE 建議參數  改善效能   但是我們不可能直接在正式機 上 萬一掛了萬一掛了萬一掛了 全球財報就掛了       所以搞了一台03  那為什麼不用之前的 DR就好 因為DR在高雄 防火牆有檔  會計部同仁無法測試 只有IT可連   所以才創了 03 在.220   但是SERVICE問題  RECONFIG 安裝過程會有問題  所以最後改在.225
改在.225 上 PATCH   改ORACLE 建議參數  改善效能   (測試)
都全部OK 才會上到正式機
YM-ITGF Peter Hu 胡家豪 [下午 02:41]: 
好的 這段summary精彩 我瞭解了 感謝:)
YM-ITGF Kevin Liou 劉士維 [下午 02:47]: 
這是我們管理後台的部分    那針對 前台USER 反映 就是 收集他們操作資訊  然後我們去HFM主機抓LOG 給ORACLE /PWC分析
YM-ITGF Peter Hu 胡家豪 [下午 02:48]: 
了解~信件有說明到 我有看到
這期間的流程就是

上path->改參數->提升操作效能
YM-ITGF Kevin Liou 劉士維 [下午 02:52]: 
目前正式機尚還未調整Oracle 建議參數的動作， 
(正式機已CPU 8 core & http log apply)
已將thread_dump batch 使用在效能測試機/正式機 task schedule 5mins/run 
先前與PWC溝通過，
建議是先在效能測試機上patch完後再進行參數apply，
測試ok才會動到正式機，
如有user反應緩慢之情況，會再將當下的thread_dump/fiddler 資料提供給您，
謝謝
YM-ITGF Kevin Liou 劉士維 [下午 02:54]: 
對   大致上是這樣  後台只有先增加 CPU 8 CORE   enable http log in admin server    其實我們也有先改參數  但是很慘 老闆偷改 和我有改 害user 都無法用   等我們找到問題  服務下上 重開主機 就花了一個早上或一整天
user都不用做事了 而且很不爽 我們就不敢 直接在正式機亂設定參數了
YM-ITGF Peter Hu 胡家豪 [下午 02:56]: 
了解
YM-ITGF Kevin Liou 劉士維 [下午 02:56]: 
這很可怕
上面的長官都覺得很簡單一樣

YMAA 6G改了
     11G也要改
	 dev02
	 TFS check in/out








CM41020F
OC21035F
CM09020F
CM82050F
CM36020F
CM41010F
CM21070F 




12/18
程式技巧
勾選後 直接加總起來 (利用check呼叫一個function)
AMT=>"F_AMT" tmp參數

ymowl06 這台如同 現在的 ymilistest
owl oracle form web logical
其實應該是 ymowl02 compile 只是我也不懂 為啥我們一進來 系二都在06 compile 我只知06是全資訊部在用 
個人郵局帳戶後七碼數字+民國出生年月日
12171900

12/21
YMAA 6i開發機 10.16.224.47
6i可直接在Builder上測試

YMAA正式機
http://ilisportal.yangming.com/forms/frmservlet?config=prisu

YMAA測試機
http://ymilistest.yangming.com/forms/frmservlet?config=prisubcd

6i美國有改
11G=>同步修正該程式,以確保程式的一致性

[initial version]

select *from cash_bank_acct

select * from v_CASH_DEPOSIT_XML
order by m_key desc

select company_id,bank_code,ccy,dc,CCY_amt,ENTRY_DATE,VALUE_DATE,ACCT_CODE from v_CASH_DEPOSIT_XML
order by m_key desc








12/22
Spencer交代
auto mail 對應到後面的table 欄位各是什麼
brokerage
employee

12/24
禮拜天測試

以form與web為主
query現金傳票與EDI資料出來沒
並檢查匯入程式是否做動



CR=> CASH REVENUE
CP=> CASH PAY
CT=> CASH TRANSFER


寫程式要config


ILIS
JAVA 一般->暫存網際網路檔案->設定值->刪除檔案
勾選新一代Java Plug-in 才可以選擇安全層次




	

花旗透過WEBDAV傳檔案 我們裝server 花旗裝client

我們可以透過netdrive模擬檔案總管式連線 3G網卡從外網連線



YM-ITGF Spencer Hsu 許振福 下午 03:28
文件要越來越精簡, 越來越切中要點, 才不會讓做文件, 讀文件變成一種負擔
共勉之

YM-ITGF AVP Young Ma 馬名揚 上午 09:27
會議結論
只要把會議當初講的話 list下來
之後相關需求再持續追蹤
會議記錄盡量是 當天完成
YM-ITGF AVP Young Ma 馬名揚 上午 09:30
spencer這很厲害
多看他就可以了
事前先準備
不懂馬上問
YM-ITGF AVP Young Ma 馬名揚 上午 09:31
一字一句記下來
就可以



YMAA_VOU_MASTER
YMAA_P_VOUCHER
YMAA_GLS_VOUCHER
YMAA_P_CHECK
YMAA_PAY_PAYHDR 




ca4f708956d0dab4afeb63caff879303d55ad685
