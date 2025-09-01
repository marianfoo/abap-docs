  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Processing Lists in the List Buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_lists_complex.htm) →  [SCROLL LIST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapscroll.htm) → 

SCROLL LIST - vertical

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapscroll_shortref.htm)

Syntax

... *{*TO *{**{*FIRST PAGE*}**|**{*LAST PAGE*}**|**{*PAGE pag*}**}* *\[*LINE lin*\]**}*
  *|* *{**{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]**}* ...

Alternatives:

[1\. ... TO FIRST PAGE](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TO LAST PAGE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... TO PAGE pag](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... *{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]*](#!ABAP_ALTERNATIVE_4@4@)

Addition:

[... LINE lin](#!ABAP_ONE_ADD@1@)

Effect

These additions are used to scroll vertically in the list.

Alternative 1

... TO FIRST PAGE

Effect

The addition TO FIRST PAGE defines the top page in the screen segment on the first page in the list.

Alternative 2

... TO LAST PAGE

Effect

The addition TO LAST PAGE defines the top page in the screen segment on the last page in the list.

Alternative 3

... TO PAGE pag

Effect

The addition TO PAGE pag defines the top page in the screen segment on the page specified in pag; pag expects a data object of type i. If the value in pag is 0 or less, it is processed as 1; if it is greater than the number of pages, it is processed as if it were the number of pages a value of 4 is set for sy-subrc.

Addition

... LINE lin

Effect

The addition LINE specifies which line is displayed first on the pages selected using PAGE. If the addition LINE is not used, the list is displayed starting with the first line on the selected page. If the addition LINE is specified, the line on the selected page specified in lin is displayed under the [page header](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpage_header_glosry.htm "Glossary Entry"), not counting the page header. lin expects a data object of type i. If the value in lin is 0 or less, it is processed as 1; if it is greater than the page length, it is processed as if it were the same as the page length and a value of 4 is set for sy-subrc.

Alternative 4

... *{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]*

Effect

The additions FORWARD and BACKWARD without n PAGES move the current screen segment up or down by the current number of lines in the GUI window (sy-srows). The [page header](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpage_header_glosry.htm "Glossary Entry") of the top page displayed is always displayed first.

The additions FORWARD and BACKWARD with n PAGES define the top page in the screen segment on the page derived by adding or subtracting the value in n from the current top page; n expects a data object of type i. If the resulting value is less than or equal to 0 is greater than the number of pages, it is processed as 1 or as if it were the same as the number of pages and a value of 4 is set for sy-subrc. The resulting page is displayed starting with the first line.