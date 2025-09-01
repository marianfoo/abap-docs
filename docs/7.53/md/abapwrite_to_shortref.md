  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  W

WRITE TO - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm)

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

-   [LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Determines if the output is left-justified, centered or right-justified within the current output length.
    
-   [EXPONENT exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Determines the exponent for the output of data objects of the data type f.
    
-   [NO-GROUPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Suppresses the thousands separators in the output of data objects of the data types (b, s), i, int8, or p.
    
-   [NO-SIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Suppresses the sign in the output of data objects of the data types i, p, or f.
    
-   [NO-ZERO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Replaces zeroes with blanks.
    
-   [CURRENCY cur](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Defines currency-related [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry") for the output of data objects of the data types i or p by using a currency key cur from the database table TCURX.
    
-   [DECIMALS dec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Sets the decimal places displayed in the output of data objects of the data types i, p, or f to dec.
    
-   [ROUND scale](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Multiplies the value of a data object of the data type p by 10\*\*(-scale) before the output.
    
-   [UNIT unit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Cuts off decimal places which have the value 0 and are outside the precision of a measurement unit unit from the database table T006 when displaying data objects of the data type p.
    
-   [ENVIRONMENT TIME FORMAT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Formats a time output in 12 hour or 24 hour format.
    
-   [TIME ZONE tz](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Formats a [time stamp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_glosry.htm "Glossary Entry") with reference to a time zone tz.
    
-   [STYLE stl](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Formats a [decimal floating point number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecfloat_glosry.htm "Glossary Entry") into an output format stl.
    
-   [USING *{**{*NO EDIT MASK*}**|**{*EDIT MASK mask*}**}*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    NO EDIT MASK - Disables the execution of an assigned [conversion routine](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_routine_glosry.htm "Glossary Entry").
    EDIT MASK - Either calls another conversion routine mask or defines an edit mask mask.
    
-   [DD/MM/YY*|*MM/DD/YY*|*DD/MM/YYYY*|*MM/DD/YYYY*|*DDMMYY*|*MMDDYY*|*YYMMDD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm)
    Functions as an edit mask for the output of data objects of the data type d.