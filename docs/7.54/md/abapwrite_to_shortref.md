  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WRITE TO - Quick reference

[Reference](javascript:call_link\('abapwrite_to.htm'\))

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

-   [LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED](javascript:call_link\('abapwrite_to_options.htm'\))
    Determines if the output is left-justified, centered or right-justified within the current output length.
    
-   [EXPONENT exp](javascript:call_link\('abapwrite_to_options.htm'\))
    Determines the exponent for the output of data objects of the data type f.
    
-   [NO-GROUPING](javascript:call_link\('abapwrite_to_options.htm'\))
    Suppresses the thousands separators in the output of data objects of the data types (b, s), i, int8, or p or p.
    
-   [NO-SIGN](javascript:call_link\('abapwrite_to_options.htm'\))
    Suppresses the sign in the output of data objects of the data types i, p, or f.
    
-   [NO-ZERO](javascript:call_link\('abapwrite_to_options.htm'\))
    Replaces zeroes with blanks.
    
-   [CURRENCY cur](javascript:call_link\('abapwrite_to_options.htm'\))
    Defines currency-related [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") for the output of data objects of the data types i or p by using a currency key cur from the database table TCURX.
    
-   [DECIMALS dec](javascript:call_link\('abapwrite_to_options.htm'\))
    Sets the decimal places displayed in the output of data objects of the data types i, p, f, or of time stamps, to dec.
    
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