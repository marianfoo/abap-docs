  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_statements.htm) →  [WRITE - TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm) → 

WRITE - format\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_shortref.htm)

Syntax

... *\[*LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED*\]*
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
    *\[* DD/MM/YY   *|* MM/DD/YY
    *|* DD/MM/YYYY *|* MM/DD/YYYY
    *|* DDMMYY     *|* MMDDYY
    *|* YYMMDD *\]* ...

Extras:

[1\. ... LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED](#!ABAP_ADDITION_1@1@)
[2\. ... EXPONENT exp](#!ABAP_ADDITION_2@2@)
[3\. ... NO-GROUPING](#!ABAP_ADDITION_3@3@)
[4\. ... NO-SIGN](#!ABAP_ADDITION_4@4@)
[5\. ... NO-ZERO](#!ABAP_ADDITION_5@5@)
[6\. ... CURRENCY cur](#!ABAP_ADDITION_6@6@)
[7\. ... DECIMALS dec](#!ABAP_ADDITION_7@7@)
[8\. ... ROUND scale](#!ABAP_ADDITION_8@8@)
[9\. ... UNIT unit](#!ABAP_ADDITION_9@9@)
[10\. ... ENVIRONMENT TIME FORMAT](#!ABAP_ADDITION_10@10@)
[11\. ... TIME ZONE tz](#!ABAP_ADDITION_11@11@)
[12\. ... STYLE stl](#!ABAP_ADDITION_12@12@)
[13\. ... USING *{* *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}* *}*](#!ABAP_ADDITION_13@13@)
[14\. ... DD/MM/YY   *|* MM/DD/YY](#!ABAP_ADDITION_14@14@)
     *|* DD/MM/YYYY *|* MM/DD/YYYY
     *|* DDMMYY     *|* MMDDYY
     *|* YYMMDD

Effect

These formatting options override the [predefined formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_formats.htm) of the statements [WRITE ... TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm) and [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm). Without these additions, the content of the source field is formatted only according to its data type.

The result of the formatting is adapted to the available length. In the case of WRITE ... TO, this is the length of the target variable; in the case of WRITE, this is the [output length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm). In some cases, the behavior of the additions used in [combination with WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_int_options.htm) can differ from the general behavior in the case of WRITE ... TO.

If a [conversion routine](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_routine_glosry.htm "Glossary Entry") is executed when formatting, the other formatting options are ignored.

The additions can be used together, with the following restrictions:

-   The additions ENVIRONMENT TIME FORMAT and TIME ZONE are mutually exclusive and cannot be used with the additions CURRENCY, DECIMALS, EXPONENT, NO-GROUPING, NO-SIGN, NO-ZERO, ROUND, STYLE, or UNIT.
    
-   The addition STYLE cannot be used together with the additions CURRENCY, DD/MM/YY, ... , YYMMDD, ROUND, ENVIRONMENT TIME FORMAT, TIME ZONE, and UNIT.
    
-   The addition UNIT cannot be used together with the additions DECIMALS, ROUND, STYLE, ENVIRONMENT TIME FORMAT, and TIME ZONE.
    

Note

The definition of a [decimal floating point number in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_decimal_floating_point.htm) always defines an output style. This means that, when data objects declared with a reference to this type in ABAP Dictionary and are part of the output, the same exclusions apply as when using the addition STYLE.

Addition 1

... LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED

Effect

This addition specifies whether the content of the source field formatted in accordance with the other options is arranged within the available length to the right, to the center, or to the left. Trailing blanks are ignored for fields of type c and are handled like all other characters for fields of type string.

The arrangement is done by padding surplus places in the result with blanks either on the right, on the left, or alternately on the left and right. If the available length is too short, source fields of the types c and string are truncated on the left (if right-justified), unlike the usual [cutoff behavior](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_cutoffs.htm).

Example

Left-justified, centered, and right-justified assignment of three text field literals to a text field of 50 characters length.

DATA formatted\_text TYPE c LENGTH 50.
WRITE 'Left'   TO formatted\_text LEFT-JUSTIFIED.
cl\_demo\_output=>write( formatted\_text ).
WRITE 'Center' TO formatted\_text CENTERED.
cl\_demo\_output=>write( formatted\_text ).
WRITE 'Right'  TO formatted\_text RIGHT-JUSTIFIED.
cl\_demo\_output=>write( formatted\_text ).
cl\_demo\_output=>display( ).

Addition 2

... EXPONENT exp

This addition cannot be used together with additions ENVIRONMENT TIME FORMAT and TIME ZONE.

Effect

This addition determines the exponent when formatting [floating point numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_number_2_glosry.htm "Glossary Entry"). The addition EXPONENT is applied to source fields of the type f or when the addition STYLE is specified. If not, it is ignored.

exp expects a data object of the type i that contains the required exponent.

-   In data type f, the mantissa is adjusted to this exponent by moving the decimal point and padding with zeroes. If exp contains 0, no exponent is created. If the value of exp is greater than the exponent of the source field plus 16, only zeroes are allocated to the mantissa. If the value of exp is less than the exponent of the source field, and there is not enough space for the places required before the decimal point, the addition is ignored. If the value in exp is positive and has more than three characters, only the first three places of the exponent are used.
    
-   If the formatting option STYLE is also specified, source fields of all numeric types (b, s), i, int8, p, f, decfloat16, and decfloat34 are converted before the formatting to decfloat34. For STYLE, only the scientific notation O\_SCIENTIFIC can be declared together with EXPONENT. The addition EXPONENT defines the exponent here.
    

Example

The formatted result of the statement WRITE TO is "1,414". The standard formatting for a length of 6 would be "1E+00".

DATA: float          TYPE f,
      formatted\_text TYPE c LENGTH 6.
float = SQRT( 2 ).
WRITE  float TO formatted\_text EXPONENT 0.
cl\_demo\_output=>display( formatted\_text ).

Addition 3

... NO-GROUPING

This addition cannot be used together with additions ENVIRONMENT TIME FORMAT and TIME ZONE.

Effect

When formatting data objects of the data types (s), i, int8, p, decfloat16, or decfloat34, this addition suppresses the thousands separators. Otherwise, the addition is ignored.

Example

If not defined otherwise in the [format settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenformat_setting_glosry.htm "Glossary Entry"), the result of the formats is 1,000,000 and 1000000.

DATA text TYPE c LENGTH 20.
SET COUNTRY 'US'.
WRITE CONV i( '1000000' ) TO text.
cl\_demo\_output=>write( text ).
WRITE CONV i( '1000000' ) TO text NO-GROUPING.
cl\_demo\_output=>display( text ).

Addition 4

... NO-SIGN

This addition cannot be used together with additions ENVIRONMENT TIME FORMAT and TIME ZONE.

Effect

When formatting data objects of the data types (s), i, int8, p, decfloat16, decfloat34, or f, this addition suppresses the sign. Otherwise, the addition is ignored.

Example

Output of numbers with explanatory text instead of with +/-sign.

DATA: number         TYPE i,
      formatted\_text TYPE c LENGTH 10.
DO 10 TIMES.
  number = sy-index - 5.
  IF number >= 0.
    WRITE number TO formatted\_text.
    cl\_demo\_output=>write\_text( formatted\_text && \` (positive)\` ).
  ELSE.
    WRITE number TO formatted\_text NO-SIGN.
    cl\_demo\_output=>write\_text( formatted\_text && \` (negative)\` ).
  ENDIF.
ENDDO.
cl\_demo\_output=>display( ).

Addition 5

... NO-ZERO

This addition cannot be used together with additions ENVIRONMENT TIME FORMAT and TIME ZONE.

Effect

If the source field has a numeric data type and contains the value 0, the available length is padded with blanks. If the source field has the data type c, n, or string, leading zeroes are formatted as blanks. Otherwise, the addition is ignored.

Example

Formats the content of a numeric text field as "123" instead of "0000000123".

DATA: num            TYPE n LENGTH 10 VALUE '123',
      formatted\_text TYPE c LENGTH 10.
WRITE num TO formatted\_text.
cl\_demo\_output=>write\_text( formatted\_text ).
WRITE num TO formatted\_text NO-ZERO.
cl\_demo\_output=>display\_text( formatted\_text ).

Addition 6

... CURRENCY cur

This addition cannot be used together with the additions ENVIRONMENT TIME FORMAT and TIME ZONE and not for the numeric data types decfloat16 and decfloat34. This means it also cannot be used together with the addition STYLE.

Effect

This addition determines the currency-dependent [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") when formatting data objects of the numeric data types (b, s), i, int8, p and f. The numeric data types decfloat16 and decfloat34 produce a syntax error or raise an exception. For all other data types the addition is ignored.

For all permitted numeric data types, cur expects a character-like field containing a [currency ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the column WAERS of the database table TCURC in uppercase. Usually two decimal places are used for every value entered in cur, unless the currency ID specified is in the column CURRKEY of the database table TCURX. In this case, the number of decimal places is determined using the CURRDEC column of this table.

For the individual numeric data types, the following applies:

-   For data objects of types (b, s), i, and int8, a decimal separator is inserted into the result at the position determined by cur and the thousands separators are moved accordingly.
    
-   For data objects of type p, the decimal places determined by the definition of the data type are ignored completely. Independently of the actual value and without rounding, decimal separators and thousands separators are inserted between the digits in the places determined by cur.
    
-   For data objects of type f, addition CURRENCY has the same effect as addition DECIMALS (see below), where the number of decimal places is determined by cur.
    

Note

The addition CURRENCY is useful with currencies from the tables TCURX or TCURX for displaying data objects of types (b, s), i, int8, or p without decimal places, whose contents are currency amounts in the smallest unit of the currency.

Example

The formatted result of "12345678" is "123456,78". The currency ID "EUR" is contained in the database table TCURC, but not in TCURX. For this reason two decimal places are used by default.

DATA: int            TYPE i VALUE 12345678,
      formatted\_text TYPE c LENGTH 10.
WRITE int TO formatted\_text NO-GROUPING CURRENCY 'EUR'.
cl\_demo\_output=>display\_text( formatted\_text ).

Addition 7

... DECIMALS dec

This addition cannot be used together with additions ENVIRONMENT TIME FORMAT, TIME ZONE, and UNIT.

Effect

This addition determines the number of [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") when formatting data objects of the data types (b, s),i, int8, p, decfloat16, decfloat34 or f. If not, the addition is ignored.

dec expects a data object of type i that contains the number of decimal places required. If the content of dec is less than 0, it is handled like 0. The content of data objects of data types (b, s), i, int8, or p is multiplied by 10 to the power of dec beforehand. For the individual numeric data types, the following applies:

-   For data objects of types (b, s), i, and int8, a decimal separator and as many zeros as specified in dec are appended. The content of dec must not exceed 14. If it does, a non-handleable exception is raised. If the content of dec is 0, the output remains unaffected.
    
-   For data objects of type p, independently of the number of decimal places determined in the data type, as many decimal places are used as are specified in dec. The content of dec must not exceed 14. If it does, a non-handleable exception is raised. If the source field has more decimal places, they are rounded to the decimal places in dec. If the source field has fewer decimal places, zeroes are appended accordingly.
    
-   For data objects of types decfloat16 and decfloat34, the content of dec decides the number of decimal places in mathematical notation and the number of places in the mantissa in scientific notation.
    
-   For data objects of type f, the content of dec determines the number of decimal places in the [scientific notation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscientific_notation_glosry.htm "Glossary Entry"). If the content of dec is greater than 16, it is handled like 16. If the content of dec is greater than the number of decimal places of the source field, zeroes are appended accordingly. If the content of dec is less than the number of decimal places of the source field, they are rounded to the decimal places in dec.
    

If the formatting option CURRENCY is also specified, it is first executed for the data types (b, s), i, int8 and p before the formatting option DECIMALS is applied. For data type f, the formatting option CURRENCY is ignored if it is specified together with DECIMALS.

Example

The formatted result of "1234.5678" is "1234,57".

DATA: pack           TYPE p LENGTH 8 DECIMALS 4
                            VALUE '1234.5678',
      formatted\_text TYPE c LENGTH 10.
WRITE pack TO formatted\_text NO-GROUPING DECIMALS 2.
cl\_demo\_output=>display\_text( formatted\_text ).

Addition 8

... ROUND scale

This addition cannot be used together with additions STYLE, ENVIRONMENT TIME FORMAT, TIME ZONE, and UNIT. Also, ROUND cannot be used for [decimal floating point numbers defined in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_decimal_floating_point.htm), because these always have an output style assigned to them.

Effect

For source fields of data type p, this addition multiplies the value of the data object by 10 to the power of -scale before it is formatted. Otherwise, the addition is ignored.

scale expects a data object of type i that contains the scaling value required.

If the value of scale is greater than 0 and the addition DECIMALS is not specified, the intermediate result is rounded to the [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") defined in the data type. If the addition DECIMALS is specified, it is rounded to the number of decimal places specified in dec and these places are output.

If the addition CURRENCY is specified, it is applied to the content of the source field before the multiplication is executed. If the addition DECIMALS is not specified, the number of decimal places determined by cur is used for rounding and formatting. If the addition DECIMALS is specified, the value in dec is used.

Example

The formatted result of "12345678" is "123456.7800".

DATA: pack           TYPE p LENGTH 8 DECIMALS 0
                            VALUE '12345678',
      formatted\_text TYPE c LENGTH 12.
WRITE pack TO formatted\_text NO-GROUPING ROUND 2 DECIMALS 4.
cl\_demo\_output=>display\_text( formatted\_text ).

Addition 9

... UNIT unit
This addition cannot be used together with additions DECIMALS, ROUND, STYLE, ENVIRONMENT TIME FORMAT, and TIME ZONE. Also, UNIT cannot be used for [decimal floating point numbers defined in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_decimal_floating_point.htm), because these always have an output style assigned to them.

Effect

This addition truncates the [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") that have a value of 0 and that lie outside of the accuracy of a measurement unit when formatting data objects of data type p. Otherwise the addition is ignored (except for type f).

unit expects a character-like field that contains a [unit code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_id_glosry.htm "Glossary Entry") from column MSEHI of database table T006 in uppercase letters. The system uses column DECAN of the related row in database table T006 to determine the number of decimal places. If the content of unit is not found in T006, the addition is ignored.

-   If the data type of source field is p and has at least as many decimal places as specified by unit, and if no other places that are not equal to 0 are cut off by this action, the content of the source field is formatted with this number of decimal places.
    
-   For data objects of type f, the addition UNIT has the same effect as the addition DECIMALS (see above), where the number of decimal places is determined by unit.
    

If, at the same time, the addition CURRENCY is used, this addition is executed first for data type p, before addition UNIT. In this case the addition is ignored for data type f as well.

Example

The first unit ID of the database table T006 is read for which no decimal places are specified in the column DECAN and this ID is used after the addition UNIT. This formats "1234.0000" as "1234".

DATA: pack           TYPE p LENGTH 8 DECIMALS 4
                            VALUE '1234.0000',
      formatted\_text TYPE c LENGTH 12,
      unit           TYPE t006-msehi.
SELECT SINGLE msehi
       FROM t006
       WHERE decan = 0
       INTO (@unit).
IF sy-subrc = 0.
  WRITE pack TO formatted\_text NO-GROUPING UNIT unit.
  cl\_demo\_output=>display\_text( formatted\_text ).
ENDIF.

Addition 10

... ENVIRONMENT TIME FORMAT

This addition cannot be used together with additions CURRENCY, DECIMALS, EXPONENT, NO-GROUPING, NO-SIGN, NO-ZERO, ROUND, STYLE, TIME ZONE, or UNIT. Also, ENVIRONMENT TIME FORMAT cannot be used for [decimal floating point numbers defined in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_decimal_floating_point.htm), because these always have an output style assigned to them.

Effect

When this addition is used, the formatting is based on a specified time according to the current [formatting setting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country.htm). A 24-hour format (default) and four 12-hour formats can be configured. The source field can have the type t. The addition is ignored if other types are specified.

The required output length for the 12-hour formats is 11. If data is specified explicitly and statically in the statement WRITE for a source field with type t, an output length of at least 11 must be specified. If a dynamic output length is specified, or if the target field for WRITE TO is shorter than 11, the truncation is performed as described [here](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_cutoffs.htm).

Note

Unlike times, the format of digits or dates in the statement WRITE is always variable. The format of times is variable only if addition ENVIRONMENT TIME FORMAT is specified.

Example

The following example searches for a 12 hour format in column TIMEFM of data base table T005X and sets the formatting settings accordingly. Time is then formatted as follows: 02:29:11 PM. For a demonstration of all formats, see the appropriate [executable example with string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_time_abexa.htm).

DATA text TYPE c LENGTH 20.
SELECT SINGLE land
       FROM t005x
       WHERE timefm = 1
       INTO @DATA(land).
IF sy-subrc <> 0.
  RETURN.
ENDIF.
SET COUNTRY land.
WRITE sy-timlo TO text ENVIRONMENT TIME FORMAT.
cl\_demo\_output=>display( text ).

Addition 11

... TIME ZONE tz

This addition cannot be used together with additions CURRENCY, DECIMALS, ENVIRONMENT TIME FORMAT, EXPONENT, NO-GROUPING, NO-SIGN, NO-ZERO, ROUND, STYLE, or UNIT . Also, TIME ZONE cannot be used for [decimal floating point numbers defined in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_decimal_floating_point.htm), because these always have an output style assigned to them.

Effect

This addition converts the date and time information of a [time stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_glosry.htm "Glossary Entry") to the [local date](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_date_glosry.htm "Glossary Entry") and the [local time](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_time_glosry.htm "Glossary Entry") of the specified [time zone](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_zone_glosry.htm "Glossary Entry"). The formatting is done in accordance with the [predefined format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_formats.htm) for time stamps.

The addition TIME ZONE can be specified only if the source field has one of the data types TIMESTAMPL or TIMESTAMP from ABAP Dictionary (as with type p with length 11 and 7 decimal places or p with length 8 and no decimal places) as a [time stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm). Other data types produce a syntax error or runtime error.

tz expects a character-like data object containing a [time zone](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_zone_glosry.htm "Glossary Entry") from the database table TTZZ. If the [rule set](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_zone_rules.htm) for the specified time zone is incomplete, a non-handleable exception is raised. If tz is initial, the time zone is set implicitly to "UTC".

If the addition TIME ZONE is specified for source fields with the types TIMESTAMPL or TIMESTAMP from ABAP Dictionary, the content of the source field is handled like a time stamp. The conversion is performed in the same way as with the statement [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time-stamp.htm).

If the value of tz is not in the database table TTZZ, if the source field does not contain a valid time stamp, or if the conversion produces a local time outside the value range for local dates and times, the content is formatted as a UTC time stamp, regardless of the value. Also, an asterisk ("\*") is inserted before the date and the final place of the time is cut off.

If the addition TIME ZONE is not specified for source fields of the types TIMESTAMPL or TIMESTAMP, the source field is handled in accordance with its numeric type, p.

Notes

-   The addition ENVIRONMENT TIME FORMAT cannot be specified together with TIME ZONE, which means that the 12-hour format for times cannot be used for time stamps.
    
-   The additions DD/MM/YY, and so on, can also be specified for time stamps and modify the format of the specified date.
    

Example

Formats a UTC time stamp in Tasmanian time. During summer time, the result is "2010-06-27 04:00:00".

DATA: time\_stamp     TYPE timestamp,
      tzone          TYPE timezone,
      formatted\_text TYPE c LENGTH 50.
time\_stamp = 20100627180000.
tzone      = 'AUSTAS'.
WRITE time\_stamp TO formatted\_text TIME ZONE tzone.
cl\_demo\_output=>display\_text( formatted\_text ).

Addition 12

... STYLE stl

This addition cannot be used together with the additions CURRENCY, DD/MM/YY, ... , YYMMDD, ROUND, ENVIRONMENT TIME FORMAT, TIME ZONE, and UNIT.

Effect

This addition defines the output format for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry"). Only source fields with a [numeric data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") are allowed. Numeric source fields that do not have type decfloat34 are [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_elementary.htm) to this type before they are formatted. If other types are specified dynamically, the exception CX\_SY\_WRITE\_INVALID\_STYLE is raised.

Only those values can be specified for the stl output format that exist as constants of type OUTPUTSTYLE in the class CL\_ABAP\_FORMAT. If other values are specified, the exception CX\_SY\_WRITE\_INVALID\_STYLE is also raised. The following table contains all possible output formats:

Constant CL\_ABAP\_FORMAT=>...

Output Format

O\_SIMPLE

[Predefined Output Format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_formats.htm)

O\_SIGN\_AS\_POSTFIX

[Commercial notation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommercial_notation_glosry.htm "Glossary Entry") The sign is appended on the right (a minus sign for negative values, a blank for positive values). Trailing zeroes in decimal places are cut off. Unlike in O\_SIMPLE, where it switches to scientific notation, an exception is raised if not enough space is available.

O\_SCALE\_PRESERVING

Predefined output format that preserves the [scale](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscale_glosry.htm "Glossary Entry"), in which trailing zeroes in decimal places are not cut off. The same format is used as in the [conversion of a source field of type decfloat34 to type string](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_decfloat.htm), where the [predefined decimal separator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_formats.htm) of the statement WRITE is used. If enough space is available, thousands separators are also inserted in the mathematical notation. If not enough space is available, an exception is raised. The maximum required length is 24 for decfloat16 and 46 for decfloat34.

O\_SCIENTIFIC

[Scientific notation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscientific_notation_glosry.htm "Glossary Entry") No sign is used for a positive number. The output always has at least a two digit exponent with a sign. If the addition EXPONENT is not specified, only one integer digit (whose value is not zero) is represented in the mantissa, unless the source field has the value 0. Any trailing zeroes in the decimal places of the mantissa are cut off. Using the addition DECIMALS, the number of decimal places of the exponent can be specified with EXPONENT. If neither of the additions DECIMALS and EXPONENT are used, the maximum length needed is 23 for decfloat16 and 42 for decfloat34. If not enough space is available, commercial rounding is used. If insufficient space is available for the sign, the minimum number of integer digits in the mantissa, and the required exponent, an exception of the CX\_SY\_CONVERSION\_OVERFLOW class is raised.

O\_SCIENTIFIC\_WITH\_LEADING\_ZERO

[Scientific with leading zero](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscientific_notation_glosry.htm "Glossary Entry") with leading zero As O\_SCIENTIFIC with the following differences: Only one integer digit with the value 0 is represented. The addition EXPONENT cannot be used. If the addition DECIMALS is not used, the maximum length needed is 24 for decfloat16 and 43 for decfloat34.

O\_SCALE\_PRESERVING\_SCIENTIFIC

[Scientific notation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscientific_notation_glosry.htm "Glossary Entry") preserving [scaling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscale_glosry.htm "Glossary Entry"). As O\_SCIENTIFIC with the following differences: The exponent always has three digits for decfloat16 and four digits for decfloat34. Trailing zeroes after the decimal point of the mantissa are not cut off. The addition EXPONENT cannot be used. If insufficient space is available, rounding does not take place; instead an exception of the CX\_SY\_CONVERSION\_OVERFLOW class is raised.

O\_ENGINEERING

Engineering format - as O\_SCIENTIFIC with the following differences: The value of the exponent is always an integer multiple of 3. The value range of the integer digits is between 1 and 999, unless the source field has the value 0. The addition EXPONENT cannot be used.

If the addition STYLE is used together with other additions that also influence the format of numbers, the following rules apply:

-   The addition EXPONENT can only be specified for the output format O\_SCIENTIFIC for scientific notation.
    
-   The addition DECIMALS cannot be specified for output formats that preserve scale. For the output formats O\_SIMPLE and O\_SIGN\_AS\_POSTFIX, DECIMALS determines the number of decimal places. In some cases commercial rounding may take place or trailing zeroes may be appended. For the scientific output formats, DECIMALS determines the number of decimal places in the mantissa. In some cases commercial rounding may take place.
    
-   The addition USING EDIT MASK can only be specified if it calls a conversion routine. The addition USING NO EDIT MASK can be specified as usual.
    

Notes

-   To a great extent, the formats match the output styles specified when a [domain](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendomain_glosry.htm "Glossary Entry") is created with one of the types DF16\_DEC, DF16\_RAW, DF16\_SCL (obsolete), DF34\_DEC, DF34\_RAW, or DF34\_SCL (obsolete) in ABAP Dictionary.
    
-   When a [decimal floating point number defined in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_decimal_floating_point.htm) is formatted, the formatting option STYLE overrides the output style defined in ABAP Dictionary.
    
-   It is best to use the formatting option STYLE for the formatting of all numeric output. This addition then replaces all other additions whose output format can be specified using stl.
    
-   To specify the scaling of a decimal floating point number before the use of the format O\_SCALE\_PRESERVING\_SCIENTIFIC, the predefined function [rescale](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendec_floating_point_functions.htm) can be called by specifying the parameter dec.
    
-   The format O\_SCALE\_PRESERVING\_SCIENTIFIC is intended to help create output that is aligned vertically with reference to the decimal separator and exponent without the addition DECIMALS being used. To make this possible, the predefined function [rescale](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendec_floating_point_functions.htm) can be called before output by specifying the parameter prec.
    

Example

The following WRITE statement formats the decimal floating point number 123456 as 123,456E+03.

DATA text TYPE c LENGTH 20.
WRITE CONV decfloat34( '123456' ) TO text
      STYLE cl\_abap\_format=>o\_engineering.
cl\_demo\_output=>display( text ).

Executable Example

[Decimal Floating Point Number, Formatting with STYLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_style_abexa.htm)

Addition 13

... USING *{* *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}* *}*

Effect

This addition overrides a [conversion routine](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_routine_glosry.htm "Glossary Entry") assigned using a reference to ABAP Dictionary. The addition NO EDIT MASK only switches off the execution of an assigned conversion routine. The addition EDIT MASK calls either another conversion routine or defines an [edit mask](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenedit_mask_glosry.htm "Glossary Entry"). mask expects a character-like data object.

To call any conversion routine CNVRT, mask must contain two equals signs directly followed by the name of the conversion routine: "==CNVRT". During formatting, the content of the source field is passed to function module CONVERSION\_EXIT\_CNVRT\_OUTPUT, converted there, and the result is used. If the function module is not found, a handleable exception is raised. The statement DESCRIBE FIELD contains an addition so that it can fill mask accordingly.

If the first two characters in mask are not equals signs, the content is interpreted as an edit mask, in which some characters have a particular meaning. The statement WRITE then does not directly format the content of the source field, but the character string in mask instead, as follows:

-   If the first two characters in mask are "LL" or "RR", they are not inserted into the result. They specify whether the formatting is executed left-justified or right-justified. If the first two characters are any other characters, the formatting is left-justified.
    
-   All characters "\_" are replaced from the left (if "LL") or from the right (if "RR") by the characters for character-like types or numbers for the types (b, s), i, int8, or p from the source field. For fields of type c, trailing blanks are ignored. Data objects of types f or x are converted to type c before they are formatted. Surplus characters "\_" in mask are replaced by blanks. Characters from the source field for which there are no "\_" characters in mask are not included in the result.
    
-   If the source field is of type (b, s),i, int8, or p, the character "V" in mask is inserted from the left for a negative number as "-" and for a positive number as a blank into the result.
    
-   All other characters in the edit mask are taken over unchanged.
    

The formatting is executed for the available length. If formatting options other than an edit mask have also been specified, they are applied first and then the special characters in the edit mask are replaced by the intermediate result. The date formatting mask DD/MM/YY is an exception to this rule. If it is specified, the edit mask is ignored.

Notes

-   The sign of a negative number is not included in the result if no formatting character "V" is specified. The decimal separator of a packed number with [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") must be specified at the required place in the edit mask.
    
-   For type p, note that only the digits are evaluated and the place of the decimal separator is ignored.
    
-   A conversion routine must be called for the types decfloat16 and decfloat34. Edit masks cannot be specified.
    
-   When using EDIT MASK in the statement [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) for lists, a number of [special features](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_int_options.htm) are applicable.
    

Example

Formats a duration. The assignment executes the function module CONVERSION\_EXIT\_DURA\_OUTPUT, which converts the period given in seconds into minutes. In the second mapping, the edit mask is used in accordance with the rules specified above, where the underscores "\_" are replaced with characters from time.

DATA: dura           TYPE i,
      time           TYPE t VALUE '080000',
      formatted\_text TYPE c LENGTH 30.
dura = sy-uzeit - time.
time = dura.
WRITE dura TO formatted\_text USING EDIT MASK '==SDURA'.
cl\_demo\_output=>write\_text( formatted\_text ).
WRITE time TO formatted\_text USING EDIT MASK
                            'RRThe duration is \_\_:\_\_:\_\_'.
cl\_demo\_output=>display\_text( formatted\_text ).

Addition 14

... DD/MM/YY   *|* MM/DD/YY
  *|* DD/MM/YYYY *|* MM/DD/YYYY
  *|* DDMMYY     *|* MMDDYY
  *|* YYMMDD

These additions cannot be used together with the addition STYLE and not for [decimal floating point numbers defined in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_decimal_floating_point.htm), which are always assigned an output style.

Effect

These additions modify the formatting of data objects of the data type d or the date specified in [time stamps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm) if they are specified as time stamps by the addition TIME ZONE. Otherwise they are ignored.

The content of a data object of type d, or the date specified in a time stamp, is interpreted as a valid date in the form "yyyymmdd" and formatted for the individual additions as follows:

-   DD/MM/YY and MM/DD/YY
    Both additions have the same effect. The date is formatted with a two-digit year and separators. Separators and order are determined according to the current [formatting setting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country.htm).
    
-   DD/MM/YYYY and MM/DD/YYYY
    Both additions have the same effect. The date is formatted with a four-digit year with separators. Separators and order are determined according to the current [formatting setting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country.htm).
    
-   DDMMYY and MMDDYY
    Both additions have the same effect. The date is formatted with a two-digit year with no separators. The order is determined according to the current [formatting setting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_country.htm).
    
-   YYMMDD
    This addition formats the date with a two-digit year without separators in the format "yymmdd".
    

If the available length is too short, the formatted output is truncated on the right.

Notes

-   The truncation on the right differs from the usual [cutoff behavior](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_cutoffs.htm) in the date output specified by the [formatting setting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage_environment_glosry.htm "Glossary Entry"), where first the separators are removed and then any surplus characters are cut off.
    
-   Some [special properties](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_int_options.htm) apply when date masks are used in the statement [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) for lists.
    

Example

The formatting is, for example, "060131".

DATA formatted\_text TYPE c LENGTH 50.
WRITE sy-datlo TO formatted\_text YYMMDD.
cl\_demo\_output=>display\_text( formatted\_text ).

Continue
![Example](exa.gif "Example") [Decimal Floating Point Numbers, Formatting with STYLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_style_abexa.htm)