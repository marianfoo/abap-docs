  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  W

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WRITE%2C%20ABAPWRITE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WRITE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm)

Syntax

WRITE *{**\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len*|*\**|*\*\*)*\]**}* dobj
  *\[*UNDER other\_dobj*\]*
  *\[*NO-GAP*\]*
  *\[*LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED*\]*
  *\[*EXPONENT exp*\]*
  *\[*NO-GROUPING*\]*
  *\[*NO-SIGN*\]*
  *\[*NO-ZERO*\]*
  *\[*CURRENCY cur*\]*
  *\[*DECIMALS dec*\]*
  *\[*ROUND scale*\]*
  *\[*UNIT unit*\]*
  *\[*ENVIRONMENT TIME FORMAT*\]*
  *\[*TIME ZONE tz*\]*
  *\[*STYLE stl*\]*
  *\[*USING *{**{*NO EDIT MASK*}**|**{*EDIT MASK mask*}**}**\]*
*\[*DD/MM/YY*|*MM/DD/YY*|*DD/MM/YYYY*|*MM/DD/YYYY*|*DDMMYY*|*MMDDYY*|*YYMMDD*\]*
  *\[*COLOR *{* *{* *\[*\=*\]* *{* *{* COL\_BACKGROUND
                   *|* *{*1 *|* COL\_HEADING *}*
                   *|* *{*2 *|* COL\_NORMAL *}*
                   *|* *{*3 *|* COL\_TOTAL *}*
                   *|* *{*4 *|* COL\_KEY *}*
                   *|* *{*5 *|* COL\_POSITIVE *}*
                   *|* *{*6 *|* COL\_NEGATIVE *}*
                   *|* *{*7 *|* COL\_GROUP *}* *}* *\[*ON*\]* *}*
                 *|* OFF*}*
         *|* *{*\= col*}* *}**\]*
  *\[*INTENSIFIED *\[* *{*ON*|*OFF*}* *|* *{*\= flag*}* *\]**\]*
  *\[*INVERSE     *\[* *{*ON*|*OFF*}* *|* *{*\= flag*}* *\]**\]*
  *\[*HOTSPOT     *\[* *{*ON*|*OFF*}* *|* *{*\= flag*}* *\]**\]*
  *\[*INPUT       *\[* *{*ON*|*OFF*}* *|* *{*\= flag*}* *\]**\]*
  *\[*FRAMES      *\[* *{*ON*|*OFF*}* *|* *{*\= flag*}* *\]**\]*
  *\[*RESET*\]*
  *{* *\[*AS CHECKBOX*\]*
  *|* *\[*AS ICON*\]*
  *|* *\[*AS SYMBOL*\]*
  *|* *\[*AS LINE*\]* *}*
  *\[*QUICKINFO info*\]*.

Effect

Formats the content of the data object dobj and writes it to the current list.

Additions   

-   [*\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len*|*\**|*\*\*)*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm)
    Specifies the line break /, the horizontal position pos, and the length len*|*\**|*\*\* of the output.
-   [UNDER other\_dobj](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm)
    Positions the output in the current line at the position where the data object other\_dobj was in the output of a previous WRITE statement.
-   [NO-GAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm)
    Positions the [list cursor](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlist_cursor_glosry.htm "Glossary Entry") directly after the output and not in the next but one position of the list buffer.
-   [LEFT-JUSTIFIED, ..., YYMMDD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_int_options.htm)
    As in the statement [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_shortref.htm) but with reference to the output area of the list.
-   [COLOR, INTENSIFIED, INVERSE, HOTSPOT, INPUT, FRAMES, RESET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_ext_options.htm)
    As in the statement [FORMAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapformat_shortref.htm) but with reference to the current output.
-   [AS CHECKBOX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_list_elements.htm)
    Produces a one-character checkbox which is ready for input.
-   [AS ICON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_list_elements.htm)
    Produces an icon if dobj contains the corresponding internal representation.
-   [AS SYMBOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_list_elements.htm)
    Produces a symbol if dobj contains the corresponding internal representation.
-   [AS LINE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_list_elements.htm)
    Produces a line element if dobj contains the corresponding internal representation.
-   [QUICKINFO info](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm)
    Assigns a [tooltip](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentool_tip_glosry.htm "Glossary Entry") to the output.
-   Information about other additions can be found in [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_shortref.htm).