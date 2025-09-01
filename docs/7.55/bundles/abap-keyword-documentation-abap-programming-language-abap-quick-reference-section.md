# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP - Quick Reference / Section

Included pages: 7


### abapwait_shortref.htm

---
title: "WAIT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_up_to.htm) Syntax WAIT UP TO t SECONDS  FOR ASYNCHRONOUS TASKS UNTIL log_exp(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm) UP TO t SECONDS MESSAGI
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_shortref.htm"
abapFile: "abapwait_shortref.htm"
keywords: ["do", "try", "abapwait", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  W

WAIT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_up_to.htm)

Syntax

WAIT *{*UP TO t SECONDS*}*
   *|* *{*FOR *\[*ASYNCHRONOUS TASKS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]*
          *\[*MESSAGING CHANNELS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]*
          *\[*PUSH CHANNELS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]**}*.

Effect

Interrupts the execution of a program.

Additions

-   [UP TO t SECONDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_up_to.htm)
    Interrupts the execution of a program for (a maximum of) t seconds.
    

-   [FOR ASYNCHRONOUS TASKS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_arfc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a callback routine of an [asynchronous RFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") is true.
    

-   [FOR MESSAGING CHANNELS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_amc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP messaging channels](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_messaging_channels_glosry.htm "Glossary Entry") is true.
    

-   [FOR PUSH CHANNELS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_apc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP Push Channels](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_push_channels_glosry.htm "Glossary Entry") is true.


### abapwhile_shortref.htm

---
title: "WHILE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhile.htm) Syntax WHILE log_exp(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm) VARY dobj FROM dobj1 NEXT dobj2 RANGE range VARY .... statement_block EN
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhile_shortref.htm"
abapFile: "abapwhile_shortref.htm"
keywords: ["loop", "do", "while", "data", "abapwhile", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  W

WHILE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhile.htm)

Syntax

WHILE [log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm)
      *\[*VARY dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
      *\[*VARY ...*\]**\]*.
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Executes the statement block statement\_block in a loop as long as the logical expression log\_exp is true.

Addition

-   VARY dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
    Obsolete: In each loop pass of a variable, assigns a value from the sequence defined in the memory using dobj1 and dobj2 to a variable dobj. The data object range limits the addressable memory area.


### abapwindow_shortref.htm

---
title: "WINDOW - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwindow.htm) Syntax WINDOW STARTING AT col1 lin1 ENDING  AT col2 lin2. Effect Dictates that the details list currently being created is displayed in a dialog box. Additions -   STARTING AT col1 lin1 Specifies the left
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwindow_shortref.htm"
abapFile: "abapwindow_shortref.htm"
keywords: ["do", "if", "abapwindow", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  W

WINDOW - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwindow.htm)

Syntax

WINDOW STARTING AT col1 lin1
       *\[*ENDING  AT col2 lin2*\]*.

Effect

Dictates that the details list currently being created is displayed in a dialog box.

Additions

-   STARTING AT col1 lin1
    Specifies the left upper corner.
    

-   ENDING AT col2 lin2
    Specifies the right lower corner.


### abapwith_shortref.htm

---
title: "WITH - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) Syntax WITH +cte1( name1, name2, ... ) AS subquery(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_shortref.htm), +cte2( name1, name2, ... ) AS subquery(https://help.s
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith_shortref.htm"
abapFile: "abapwith_shortref.htm"
keywords: ["select", "do", "try", "abapwith", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  W

WITH - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm)

Syntax

WITH
  +cte1*\[*( name1, name2, ... )*\]* AS [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_shortref.htm)*\[*,
  +cte2*\[*( name1, name2, ... )*\]* AS [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_shortref.htm)
  ... *\]*
  [SELECT ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm) .
  ...
ENDWITH.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Introduces the definition of one or more [common table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") +cte1, +cte2 for use in a closing [main query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmainquery_glosry.htm "Glossary Entry") [SELECT ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm). The result set of a common table expression is determined by a subquery [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_shortref.htm).


### abapwrite_shortref.htm

---
title: "WRITE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) Syntax WRITE AT /pos(len) dobj UNDER other_dobj NO-GAP LEFT-JUSTIFIEDCENTEREDRIGHT-JUSTIFIED EXPONENT exp NO-GROUPING
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_shortref.htm"
abapFile: "abapwrite_shortref.htm"
keywords: ["do", "if", "try", "data", "abapwrite", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  W

WRITE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm)

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

-   [*\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len*|*\**|*\*\*)*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm)
    Specifies the line feed /, the horizontal position pos, and the length len*|*\**|*\*\* of the output.
    

-   [UNDER other\_dobj](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm)
    Positions the output in the current line at the position where the data object other\_dobj was in the output of a previous WRITE statement.
    

-   [NO-GAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm)
    Positions the [list cursor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_cursor_glosry.htm "Glossary Entry") directly after the output and not in the next but one position of the list buffer.
    

-   [LEFT-JUSTIFIED, ..., YYMMDD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_int_options.htm)
    As in the statement [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_shortref.htm) but with reference to the output area of the list.
    

-   [COLOR, INTENSIFIED, INVERSE, HOTSPOT, INPUT, FRAMES, RESET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_ext_options.htm)
    As in the statement [FORMAT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapformat_shortref.htm) but with reference to the current output.
    

-   [AS CHECKBOX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_list_elements.htm)
    Produces a one-character checkbox which is ready for input.
    

-   [AS ICON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_list_elements.htm)
    Produces an icon if dobj contains the corresponding internal representation.
    

-   [AS SYMBOL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_list_elements.htm)
    Produces a symbol if dobj contains the corresponding internal representation.
    

-   [AS LINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_list_elements.htm)
    Produces a line element if dobj contains the corresponding internal representation.
    

-   [QUICKINFO info](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm)
    Assigns a [tooltip](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentool_tip_glosry.htm "Glossary Entry") to the output.
    

-   Information about other additions can be found in [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_shortref.htm).


### abapwrite_to_shortref.htm

---
title: "WRITE TO - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm) Syntax WRITE source(source_name) TO destination LEFT-JUSTIFIEDCENTEREDRIGHT-JUSTIFIED EXPONENT exp NO-GROUPING NO-SIGN NO-ZERO CURRENCY cur DEC
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_shortref.htm"
abapFile: "abapwrite_to_shortref.htm"
keywords: ["do", "if", "try", "data", "types", "abapwrite", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  W

WRITE TO - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm)

Syntax

WRITE *{*source*|*(source\_name)*}* TO destination
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
  *\[*USING *{* *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}* *}**\]*
  *\[*DD/MM/YY*|*MM/DD/YY*|*DD/MM/YYYY*|*MM/DD/YYYY*|*DDMMYY*|*MMDDYY*|*YYMMDD*\]*.

Effect

Formats the content of a data object specified either statically as source or dynamically in source\_name and writes it to the variable destination.

Additions

-   [LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Determines whether the output is left-aligned, centered or right-aligned within the current output length.
    

-   [EXPONENT exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Determines the exponent for the output of data objects of the data type f.
    

-   [NO-GROUPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Suppresses the thousands separators in the output of data objects of the data types (b, s), i, int8, or p or p.
    

-   [NO-SIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Suppresses the sign in the output of data objects of the data types i, p, or f.
    

-   [NO-ZERO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Replaces zeros with blanks.
    

-   [CURRENCY cur](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Defines currency-related [decimal places](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecimal_place_glosry.htm "Glossary Entry") for the output of data objects of the data types i or p by using a currency key cur from the database table TCURX.
    

-   [DECIMALS dec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Sets the decimal places contained in the output of data objects of the data types i, p, f, or of time stamps, to dec.
    

-   [ROUND scale](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Multiplies the value of a data object of the data type p by 10\*\*(-scale) before the output.
    

-   [UNIT unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Cuts off decimal places which have the value 0 and are outside the precision of a measurement unit unit from the database table T006 when formatting data objects of the data type p.
    

-   [ENVIRONMENT TIME FORMAT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Formats a time output in 12 hour or 24 hour format.
    

-   [TIME ZONE tz](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Formats a [time stamp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamp_glosry.htm "Glossary Entry") with reference to a time zone tz.
    

-   [STYLE stl](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Formats a [decimal floating point number](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecfloat_glosry.htm "Glossary Entry") into an output format stl.
    

-   [USING *{**{*NO EDIT MASK*}**|**{*EDIT MASK mask*}**}*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    NO EDIT MASK - Disables the execution of an assigned [conversion routine](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_routine_glosry.htm "Glossary Entry").
    EDIT MASK - Either calls another conversion routine mask or defines an edit mask mask.
    

-   [DD/MM/YY*|*MM/DD/YY*|*DD/MM/YYYY*|*MM/DD/YYYY*|*DDMMYY*|*MMDDYY*|*YYMMDD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Functions as an edit mask for the output of data objects of the data type d.


### abapwrite_to_itab_shortref.htm

---
title: "WRITE TO itab - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_itab.htm) Syntax WRITE dobj TO itab+off(len) INDEX idx int_format_options. Effect Obsolete: Writes the content of a data object to the line of the internal table itab with the index idx. Add
version: "7.55"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_itab_shortref.htm"
abapFile: "abapwrite_to_itab_shortref.htm"
keywords: ["do", "data", "internal-table", "abapwrite", "itab", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  W

WRITE TO itab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_itab.htm)

Syntax

WRITE dobj TO itab*\[*+off*\]**\[*(len)*\]* INDEX idx
      *\[*int\_format\_options*\]*.

Effect

Obsolete: Writes the content of a data object to the line of the internal table itab with the index idx.

Additions

-   *\[*+off*\]**\[*(len)*\]*
    Writes to the section from position pos and the length len of the table line.
    

-   [format\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)
    Additions as in the statement [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_shortref.htm) for variables.
