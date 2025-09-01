# ABAP - Keyword Documentation / ABAP - Quick Reference / Section

Included pages: 7


### abapwait_shortref.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WAIT - Quick reference

[Reference](javascript:call_link\('abapwait_up_to.htm'\))

Syntax

WAIT *{*UP TO t SECONDS*}*
   *|* *{*FOR *\[*ASYNCHRONOUS TASKS UNTIL [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\)) *\[*UP TO t SECONDS*\]**\]*
          *\[*MESSAGING CHANNELS UNTIL [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\)) *\[*UP TO t SECONDS*\]**\]*
          *\[*PUSH CHANNELS UNTIL [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\)) *\[*UP TO t SECONDS*\]**\]**}*.

Effect

Interrupts the execution of a program.

Additions

-   [UP TO t SECONDS](javascript:call_link\('abapwait_up_to.htm'\))
    Interrupts the execution of a program for (a maximum of) t seconds.
    
-   [FOR ASYNCHRONOUS TASKS UNTIL log\_exp](javascript:call_link\('abapwait_until.htm'\))
    Interrupts the execution of a program until the logical expression log\_exp after a callback routine of an [asynchronous RFC](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry") is true.
    
-   [FOR MESSAGING CHANNELS UNTIL log\_exp](javascript:call_link\('abapwait_amc.htm'\))
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP messaging channels](javascript:call_link\('abenabap_messaging_channels_glosry.htm'\) "Glossary Entry") is true.
    
-   [FOR PUSH CHANNELS UNTIL log\_exp](javascript:call_link\('abapwait_apc.htm'\))
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP Push Channels](javascript:call_link\('abenabap_push_channels_glosry.htm'\) "Glossary Entry") is true.


### abapwhile_shortref.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WHILE - Quick reference

[Reference](javascript:call_link\('abapwhile.htm'\))

Syntax

WHILE [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\))
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

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WINDOW - Quick reference

[Reference](javascript:call_link\('abapwindow.htm'\))

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

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WITH - Quick reference

[Reference](javascript:call_link\('abapwith.htm'\))

Syntax

WITH
  +cte1*\[*( name1, name2, ... )*\]* AS [subquery](javascript:call_link\('abensubquery_shortref.htm'\))*\[*,
  +cte2*\[*( name1, name2, ... )*\]* AS [subquery](javascript:call_link\('abensubquery_shortref.htm'\))
  ... *\]*
  [SELECT ...](javascript:call_link\('abapselect_shortref.htm'\)) .
  ...
ENDWITH.

Effect

[Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement. Introduces the definition of one or more [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") +cte1, +cte2 for use in a closing [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") [SELECT ...](javascript:call_link\('abapselect_shortref.htm'\)). The results set of a common table expression is determined by a subquery [subquery](javascript:call_link\('abensubquery_shortref.htm'\)).


### abapwrite_shortref.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WRITE - Quick reference

[Reference](javascript:call_link\('abapwrite-.htm'\))

Syntax

WRITE *{**\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len*|*\**|*\*\*)*\]**}* dobj
  *\[*UNDER other\_dobj*\]*
  *\[*NO-GAP*\]*
  *\[*LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED*\]*
  *{* *{* *\[*EXPONENT exp*\]*
      *\[*NO-GROUPING*\]*
      *\[*NO-SIGN*\]*
      *\[*NO-ZERO*\]*
      *\[*CURRENCY cur*\]*
      *{* *{* *\[*DECIMALS dec*\]*
          *\[*ROUND scale*\]* *}*
        *|* *\[*UNIT unit*\]* *}* *}*
    *|* *{* *\[*ENVIRONMENT TIME FORMAT*\]*
        *\[*TIME ZONE tz*\]* *}*
    *\[*STYLE stl*\]* *}*
  *\[*USING *{* *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}* *}**\]*
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

-   [*\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len*|*\**|*\*\*)*\]*](javascript:call_link\('abapwrite-.htm'\))
    Specifies the line feed /, the horizontal position pos, and the length len*|*\**|*\*\* of the output.
    
-   [UNDER other\_dobj](javascript:call_link\('abapwrite-.htm'\))
    Positions the output in the current line at the position where the data object other\_dobj was in the output of a previous WRITE statement.
    
-   [NO-GAP](javascript:call_link\('abapwrite-.htm'\))
    Positions the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") directly after the output and not in the next but one position of the list buffer.
    
-   [LEFT-JUSTIFIED, ..., YYMMDD](javascript:call_link\('abapwrite_int_options.htm'\))
    As in the statement [WRITE TO](javascript:call_link\('abapwrite_to_shortref.htm'\)) but with reference to the output area of the list.
    
-   [COLOR, INTENSIFIED, INVERSE, HOTSPOT, INPUT, FRAMES, RESET](javascript:call_link\('abapwrite_ext_options.htm'\))
    As in the statement [FORMAT](javascript:call_link\('abapformat_shortref.htm'\)) but with reference to the current output.
    
-   [AS CHECKBOX](javascript:call_link\('abapwrite_list_elements.htm'\))
    Produces a one-character checkbox which is ready for input.
    
-   [AS ICON](javascript:call_link\('abapwrite_list_elements.htm'\))
    Produces an icon if dobj contains the corresponding internal representation.
    
-   [AS SYMBOL](javascript:call_link\('abapwrite_list_elements.htm'\))
    Produces a symbol if dobj contains the corresponding internal representation.
    
-   [AS LINE](javascript:call_link\('abapwrite_list_elements.htm'\))
    Produces a line element if dobj contains the corresponding internal representation.
    
-   [QUICKINFO info](javascript:call_link\('abapwrite-.htm'\))
    Assigns a [tooltip](javascript:call_link\('abenquick_info_glosry.htm'\) "Glossary Entry") to the output.


### abapwrite_to_shortref.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WRITE TO - Quick reference

[Reference](javascript:call_link\('abapwrite_to.htm'\))

Syntax

WRITE *{*source*|*(source\_name)*}* TO destination
  *\[*LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED*\]*
  *{* *{* *\[*EXPONENT exp*\]*
      *\[*NO-GROUPING*\]*
      *\[*NO-SIGN*\]*
      *\[*NO-ZERO*\]*
      *\[*CURRENCY cur*\]*
      *{* *{* *\[*DECIMALS dec*\]*
          *\[*ROUND scale*\]* *}*
        *|* *\[*UNIT unit*\]* *}* *}*
    *|* *{* *\[*ENVIRONMENT TIME FORMAT*\]*
        *\[*TIME ZONE tz*\]* *}*
    *\[*STYLE stl*\]* *}*
  *\[*USING *{* *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}* *}**\]*
  *\[*DD/MM/YY*|*MM/DD/YY*|*DD/MM/YYYY*|*MM/DD/YYYY*|*DDMMYY*|*MMDDYY*|*YYMMDD*\]*.

Effect

Formats the content of a data object specified either statically as source or dynamically in source\_name and writes it to the variable destination.

Additions

-   [LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED](javascript:call_link\('abapwrite_to_options.htm'\))
    Determines if the output is left-justified, centered or right-justified within the current output length.
    
-   [EXPONENT exp](javascript:call_link\('abapwrite_to_options.htm'\))
    Determines the exponent for the output of data objects of the data type f.
    
-   [NO-GROUPING](javascript:call_link\('abapwrite_to_options.htm'\))
    Suppresses the thousands separators in the output of data objects of the data types (b, s), i, int8, or p.
    
-   [NO-SIGN](javascript:call_link\('abapwrite_to_options.htm'\))
    Suppresses the sign in the output of data objects of the data types i, p, or f.
    
-   [NO-ZERO](javascript:call_link\('abapwrite_to_options.htm'\))
    Replaces zeroes with blanks.
    
-   [CURRENCY cur](javascript:call_link\('abapwrite_to_options.htm'\))
    Defines currency-related [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") for the output of data objects of the data types i or p by using a currency key cur from the database table TCURX.
    
-   [DECIMALS dec](javascript:call_link\('abapwrite_to_options.htm'\))
    Sets the decimal places displayed in the output of data objects of the data types i, p, or f to dec.
    
-   [ROUND scale](javascript:call_link\('abapwrite_to_options.htm'\))
    Multiplies the value of a data object of the data type p by 10\*\*(-scale) before the output.
    
-   [UNIT unit](javascript:call_link\('abapwrite_to_options.htm'\))
    Cuts off decimal places which have the value 0 and are outside the precision of a measurement unit unit from the database table T006 when displaying data objects of the data type p.
    
-   [ENVIRONMENT TIME FORMAT](javascript:call_link\('abapwrite_to_options.htm'\))
    Formats a time output in 12 hour or 24 hour format.
    
-   [TIME ZONE tz](javascript:call_link\('abapwrite_to_options.htm'\))
    Formats a [time stamp](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") with reference to a time zone tz.
    
-   [STYLE stl](javascript:call_link\('abapwrite_to_options.htm'\))
    Formats a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") into an output format stl.
    
-   [USING *{**{*NO EDIT MASK*}**|**{*EDIT MASK mask*}**}*](javascript:call_link\('abapwrite_to_options.htm'\))
    NO EDIT MASK - Disables the execution of an assigned [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry").
    EDIT MASK - Either calls another conversion routine mask or defines an edit mask mask.
    
-   [DD/MM/YY*|*MM/DD/YY*|*DD/MM/YYYY*|*MM/DD/YYYY*|*DDMMYY*|*MMDDYY*|*YYMMDD](javascript:call_link\('abapwrite_to_options.htm'\))
    Functions as an edit mask for the output of data objects of the data type d.


### abapwrite_to_itab_shortref.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WRITE TO itab - Quick reference

[Reference](javascript:call_link\('abapwrite_to_itab.htm'\))

Syntax

WRITE dobj TO itab*\[*+off*\]**\[*(len)*\]* INDEX idx
      *\[*int\_format\_options*\]*.

Effect

Obsolete: Writes the content of a data object to the row of the internal table itab with the index idx.

Additions

-   *\[*+off*\]**\[*(len)*\]*
    Writes to the section from position pos and the length len of the table row.
    
-   [format\_options](javascript:call_link\('abapwrite_to_options.htm'\))
    Additions as in the statement [WRITE TO](javascript:call_link\('abapwrite_to_shortref.htm'\)) for variables.
