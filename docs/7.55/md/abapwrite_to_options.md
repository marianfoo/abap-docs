  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_statements.htm) →  [WRITE, TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm) → 

WRITE, format\_options

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_shortref.htm)

Syntax

... *\[*LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED*\]*
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
    *\[* DD/MM/YY   *|* MM/DD/YY
    *|* DD/MM/YYYY *|* MM/DD/YYYY
    *|* DDMMYY     *|* MMDDYY
    *|* YYMMDD *\]* ...

Additions:

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

These formatting options override the [predefined formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_formats.htm) of the statements [WRITE ... TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm) and [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm). Without these additions, the content of the source field is formatted only according to its data type.

The result of the formatting is adapted to the available length. In the case of WRITE ... TO, this is the length of the target variable and for WRITE, this is the [output length](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_output_length.htm). In some cases, the behavior of the additions used [with WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_int_options.htm) can differ from the general behavior in the case of WRITE ... TO.

If a [conversion routine](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_routine_glosry.htm "Glossary Entry") is executed during formatting, the other formatting options are ignored.

The additions can be used together, with the following restrictions:

-   The additions ENVIRONMENT TIME FORMAT and TIME ZONE are mutually exclusive and cannot be used with the additions CURRENCY, DECIMALS, EXPONENT, NO-GROUPING, NO-SIGN, NO-ZERO, ROUND, STYLE, or UNIT.

-   The addition STYLE cannot be used together with the additions CURRENCY, DD/MM/YY, ... , YYMMDD, ROUND, ENVIRONMENT TIME FORMAT, TIME ZONE, and UNIT.

-   The addition UNIT cannot be used together with the additions DECIMALS, ROUND, STYLE, ENVIRONMENT TIME FORMAT, and TIME ZONE.

Hint

Since the definition of a [decimal floating point number in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm) always defines an output format, the same exclusions apply to the output of data objects declared with reference to this type in the ABAP Dictionary as when using the addition STYLE.

Addition 1

... LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED

Effect

This addition determines whether the content of the source field that is formatted according to the other options is adjusted within the available length to the right, the center, or to the left. Trailing blanks are ignored for fields of type c and are handled like all other characters for fields of type string.

The alignment is done by filling surplus positions in the result either from the right or from the left or alternately from the left and right with blanks. If the available length is not sufficient, source fields of the types c and string are truncated on the left in right-aligned alignment, unlike the usual [truncation behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_truncations.htm).

Example

Left-aligned, centered, and right-aligned assignment of three text field literals to a text field of 50 characters length.

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

This addition determines the exponent when formatting [floating point numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_number_glosry.htm "Glossary Entry"). The addition EXPONENT affects source fields of the type f or when the addition STYLE is specified. Otherwise it is ignored.

exp expects a data object of the type i that contains the required exponent.

-   In data type f, the mantissa is adjusted to this exponent by moving the decimal separator and padding with zeros. If exp contains 0, no exponent is created. If the value of exp is greater than the exponent of the source field plus 16, only zeros are assigned to the mantissa. If the value of exp is less than the exponent of the source field, and the output length is not sufficient for the places required in front of the decimal separator, the addition is ignored. If the value in exp is positive and has more than three digits, only the first three places of the exponent are considered.

-   If the formatting option STYLE is also specified, source fields of all numeric types (b, s), i, int8, p, f, decfloat16, and decfloat34 are converted to decfloat34 before formatting. For STYLE, only the scientific notation O\_SCIENTIFIC can be declared together with EXPONENT. The addition EXPONENT defines the exponent for these.
    

Example

The formatted result of the statement WRITE TO is "1,414". The standard formatting for a length of 6 would be "1E+00".

DATA: float          TYPE f,
      formatted\_text TYPE c LENGTH 6.
float = SQRT( 2 ).
WRITE float TO formatted\_text EXPONENT 0.
cl\_demo\_output=>display( formatted\_text ).

Addition 3

... NO-GROUPING

This addition cannot be used together with additions ENVIRONMENT TIME FORMAT and TIME ZONE.

Effect

When formatting data objects of the data types (s), i, int8, p, decfloat16, or decfloat34, this addition suppresses the thousands separators. Otherwise, the addition is ignored.

Example

If not defined otherwise in the [format settings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenformat_setting_glosry.htm "Glossary Entry"), the result of the formats is 1,000,000 and 1000000.

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

When formatting data objects of the data types (s), i, int8, p, decfloat16, decfloat34, or f, this addition suppresses the plus/minus sign. Otherwise, the addition is ignored.

Example

Number output with explanatory text instead of with +/-sign.

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

If the source field has a numeric data type and contains the value 0, the available length is padded with blanks. If the source field has the data type c, n, or string, leading zeros are formatted using blanks. Otherwise, the addition is ignored.

Example

Formatting of the content of a numeric text field as "123" instead of "0000000123".

DATA: num            TYPE n LENGTH 10 VALUE '123',
      formatted\_text TYPE c LENGTH 10.
WRITE num TO formatted\_text.
cl\_demo\_output=>write\_text( formatted\_text ).
WRITE num TO formatted\_text NO-ZERO.
cl\_demo\_output=>display\_text( formatted\_text ).

Addition 6

... CURRENCY cur

This addition cannot be used together with the additions STYLE, ENVIRONMENT TIME FORMAT and TIME ZONE.

Effect

This addition determines the currency-dependent [decimal places](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecimal_place_glosry.htm "Glossary Entry") when formatting data objects of the numeric data types (b, s), i, int8, p and f, decfloat16 or decfloat34. For all other data types, the addition is ignored.

For all allowed numeric data types, cur expects a character-like field that contains a [currency ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the column WAERS of the database table TCURC in uppercase letters. By default, two decimal places are used for every value entered in cur, unless the currency ID specified is in the column CURRKEY of the database table TCURX. In this case, the number of decimal places is determined using the CURRDEC column of this table.

For the individual numeric data types, the following applies:

-   For data objects of types (b, s), i, and int8, a decimal separator is inserted into the result at the position determined by cur and the thousands separators are moved accordingly.

-   For data objects of type p, the decimal places specified by the definition of the data type are ignored completely. Independently of the actual value and without rounding, decimal separators and thousands separators are inserted between the digits in the places determined by cur.

-   For data objects of type f, addition CURRENCY has the same effect as addition DECIMALS (see below), whereby the number of decimal places is determined by cur.

-   For data objects of type decfloat16 and decfloat34, the addition CURRENCY implicitly adds the addition STYLE cl\_abap\_format=>o\_sign\_as\_postfix, which formats the output in [commercial notation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). For the decimal places, it has the same effect as addition DECIMALS (see below), whereby the number of decimal places is determined by cur. If the data object is declared with reference to a data type defined in the ABAP Dictionary, the dictionary type must have the [output format Sign right](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm). Otherwise a syntax error occurs or an exception of class CX\_SY\_WRITE\_INVALID\_STYLE is raised.

Hints

-   The addition CURRENCY is useful with currencies from the tables TCURX or TCURX for formatting data objects of types (b, s), i, int8, or p without decimal places, whose contents are currency amounts in the smallest unit of the currency.

-   For decimal floating point numbers, the methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR of the system class [CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_decfloat_doc.htm) are also available. These convert currency amounts to decimal floating point numbers, depending on a currency key and vice versa.

-   The restriction regarding the output format of decimal floating point numbers defined in the ABAP Dictionary does not apply to the formatting option [CURRENCY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string_format_options.htm) in [string templates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates.htm).
    

Example

The formatted result of "12345678" is "123456,78". The currency ID "EUR" is contained in the database table TCURC, but not in TCURX, which is why two decimal places are used by default.

DATA: int            TYPE i VALUE 12345678,
      formatted\_text TYPE c LENGTH 10.
WRITE int TO formatted\_text NO-GROUPING CURRENCY 'EUR'.
cl\_demo\_output=>display\_text( formatted\_text ).

Addition 7

... DECIMALS dec

This addition cannot be used together with additions ENVIRONMENT TIME FORMAT and UNIT.

Effect

This addition determines the number of [decimal places](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecimal_place_glosry.htm "Glossary Entry") when formatting data objects of the data types (b, s), i, int8, p, decfloat16, decfloat34, or f, as well as for utclong. Otherwise, the addition is ignored.

dec expects a data object of type i that contains the number of decimal places required. For the individual data types, the following applies:

-   Numeric Data Types

If the content of dec is less than 0, it is handled like 0, whereby the content of data objects of data types (b, s), i, int8, or p is multiplied by 10 to the power of dec beforehand.

-   For data objects of types (b, s), i, and int8, a decimal separator and as many zeros as specified in dec are appended. The content of dec must not exceed 14, otherwise an uncatchable exception is raised. If the content of dec is 0, the output remains unchanged.

-   For data objects of type p, independently of the number of decimal places determined in the data type, as many decimal places are used as specified in dec. The content of dec must not exceed 14, otherwise an uncatchable exception is raised. If the source field has more decimal places, they are rounded to the decimal places in dec. If the source field has fewer decimal places, zeros are appended accordingly.

-   For data objects of types decfloat16 and decfloat34, the content of dec determines the number of decimal places in mathematical or commercial notation and the number of places in the mantissa in scientific notation. If the source field has more decimal places, they are rounded to the decimal places in dec. If the source field has fewer decimal places, zeros are appended accordingly.

-   For data objects of type f, the content of dec determines the number of decimal places in the [scientific notation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscientific_notation_glosry.htm "Glossary Entry"). If the content of dec is greater than 16, it is handled like 16. If the content of dec is greater than the number of decimal places of the source field, zeros are appended accordingly. If the content of dec is less than the number of decimal places of the source field, they are rounded to the decimal places in dec.

-   Time stamp

The content of dec must be between 0 and 7.

-   For time stamp fields of the time stamp type utclong as many decimal places as specified in dec are used. Surplus decimal places are truncated. If dec has the value 0, the decimal separator is removed. If dec has an invalid value, a catchable exception of class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised.

-   If the addition TIMEZONE is specified for suitable numbers of the type p, its content is interpreted as a time stamp. For data type p of length 8 without decimal places (TIMESTAMP from the ABAP Dictionary), as many zeros as specified in dec are appended. For data type p of length 11 with 7 decimal places (TIMESTAMPL from the ABAP Dictionary), as many decimal places as specified in dec are used. Surplus decimal places are truncated. If dec has the value 0, the decimal separator is removed. If dec has an invalid value, an asterisk "\*" is inserted before the date and the last position of the time is truncated.

If the formatting option CURRENCY is also specified, it is first executed for the data types (b, s), i, int8 and p before the formatting option DECIMALS is applied. For data types decfloat16, decfloat34, and f, the formatting option CURRENCY is ignored if it is specified together with DECIMALS.

Hint

If decimal places are added for a time stamp in a packed number without decimal places (TIMESTAMPL from the ABAP Dictionary) with DECIMALS, these are created only if the available length is sufficient.

Example

The formatted result of "1234.5678" is "1234,57".

DATA: pack           TYPE p LENGTH 8 DECIMALS 4
                            VALUE '1234.5678',
      formatted\_text TYPE c LENGTH 10.
WRITE pack TO formatted\_text NO-GROUPING DECIMALS 2.
cl\_demo\_output=>display\_text( formatted\_text ).

Addition 8

... ROUND scale

This addition cannot be used together with additions STYLE, ENVIRONMENT TIME FORMAT, TIME ZONE, and UNIT. Furthermore, ROUND cannot be used for [decimal floating point numbers defined in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm), because these always have an assigned output format.

Effect

For source fields of data type p, this addition multiplies the value of the data object by 10 to the power of -scale before it is formatted. Otherwise, the addition is ignored.

scale expects a data object of type i that contains the value of the desired scaling.

If the value of scale is greater than 0 and the addition DECIMALS is not specified, the interim result is rounded to the number of [decimal places](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecimal_place_glosry.htm "Glossary Entry") defined in the data type. If the addition DECIMALS is specified, it is rounded to the number of decimal places specified in dec and these places are output.

If the addition CURRENCY is specified, it is applied to the content of the source field before multiplication. If the addition DECIMALS is not specified, the number of decimal places determined by cur is used for rounding and formatting. If the addition DECIMALS is specified, the value in dec is used.

Example

The formatted result of "12345678" is "123456.7800".

DATA: pack           TYPE p LENGTH 8 DECIMALS 0
                            VALUE '12345678',
      formatted\_text TYPE c LENGTH 12.
WRITE pack TO formatted\_text NO-GROUPING ROUND 2 DECIMALS 4.
cl\_demo\_output=>display\_text( formatted\_text ).

Addition 9

... UNIT unit
This addition cannot be used together with additions DECIMALS, ROUND, STYLE, ENVIRONMENT TIME FORMAT, and TIME ZONE. Furthermore, UNIT cannot be used for [decimal floating point numbers defined in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm), because these always have an assigned output format.

Effect

This addition cuts off the [decimal places](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecimal_place_glosry.htm "Glossary Entry") that have a value of 0 and that lie outside of the accuracy of a measurement unit when formatting data objects of data type p. Otherwise, the addition is ignored, except for type f.

unit expects a character-like field that contains a [unit code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunit_id_glosry.htm "Glossary Entry") from the column MSEHI of the database table T006 in uppercase letters. The system uses column DECAN of the related line in database table T006 to determine the number of decimal places. If the content of unit is not found in T006, the addition is ignored.

-   If the data type of source field is p and has at least as many decimal places as specified by unit, and if no other places that are not equal to 0 are cut off as a result, the content of the source field is formatted with this number of decimal places.

-   For data objects of type f, the addition UNIT has the same effect as the addition DECIMALS (see above), where the number of decimal places is determined by unit.

If the addition CURRENCY is used at the same time, this addition is executed first for data type p, and then for the addition UNIT. In this case the addition is ignored for data type f as well.

Example

The first unit ID of the database table T006 is read for which no decimal places are specified in the column DECAN and this is used after the addition UNIT. This formats "1234.0000" as "1234".

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

This addition cannot be used together with additions CURRENCY, DECIMALS, EXPONENT, NO-GROUPING, NO-SIGN, NO-ZERO, ROUND, STYLE, TIME ZONE, or UNIT. Furthermore, ENVIRONMENT TIME FORMAT cannot be used for [decimal floating point numbers defined in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm), because these always have an assigned output format.

Effect

When this addition is used, the formatting is based on a time specification according to the current [formatting setting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_country.htm). A 24-hour format (default) and four 12-hour formats can be set. The source field can have the type t. The addition is ignored if other types are specified.

The required output length for the 12-hour formats is 11. If data is specified explicitly and statically in the statement WRITE for a source field with type t, an output length of at least 11 must be specified. If a dynamically specified output length or the target field in WRITE TO is shorter than 11, the truncation is performed as described [here](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_truncations.htm).

Hint

Unlike time specifications, the format of digits or dates in the statement WRITE is always variable. The format of times is variable only if addition ENVIRONMENT TIME FORMAT is specified.

Example

The following example searches for a 12 hour format in the column TIMEFM of data base table T005X and sets the formatting settings accordingly. The time is then formatted as follows: 02:29:11 PM. For a demonstration of all formats, see the corresponding [executable example with string templates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_template_time_abexa.htm).

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

This addition cannot be used together with additions CURRENCY, ENVIRONMENT TIME FORMAT, EXPONENT, NO-GROUPING, NO-SIGN, NO-ZERO, ROUND, STYLE, or UNIT. Furthermore, TIME ZONE cannot be used for [decimal floating point numbers defined in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm), because these always have an assigned output format.

Effect

This addition uses the [rules for time zones](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_zone_rules.htm) to convert the date and time information of a [time stamp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamp_glosry.htm "Glossary Entry") to the [local date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_date_glosry.htm "Glossary Entry") and the [local time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_time_glosry.htm "Glossary Entry") of the [time zone](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_zone_glosry.htm "Glossary Entry") specified in tz. The formatting follows the [predefined format](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_formats.htm) for time stamps. The addition TIME ZONE can be specified only if the source field is of one of the following data types, otherwise a syntax or runtime error occurs:

-   [Time Stamp Type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_type_glosry.htm "Glossary Entry") [utclong](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_types_date_time.htm).

-   Numeric data type p with length 8 without decimal places (TIMESTAMP from the ABAP Dictionary) or p with length 11 and seven decimal places (TIMESTAMPL from the ABAP Dictionary). The value of the embedded expression is interpreted as a [time stamp in a packed number](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps_packed.htm).

The addition TIME ZONE formats source fields of these types in accordance with the [predefined format](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_formats.htm) for time stamp outputs.

-   If the addition TIME ZONE is not specified for the time stamp type utclong, it is added implicitly with an initial time zone.

-   If the addition TIME ZONE is not specified for time stamps in packed numbers, these are formatted as numeric fields of the type p.

tz expects a character-like data object containing a [time zone](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_zone_glosry.htm "Glossary Entry") from the database table TTZZ. If the [rule set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_zone_rules.htm) for the specified time zone is incomplete, an uncatchable exception is raised. If tz is initial, no time shift is calculated. The conversion takes place as for the statements [CONVERT UTCLONG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconvert_utclong.htm) and [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconvert_time-stamp.htm). The special rules for the first and last second apply to the time stamp type utclong.

Initial values are handled as follows:

-   The target area is filled with blanks for the time stamp type utclong.

-   For time stamps in packed numbers, the initial value 0 is an invalid value and is formatted as such.

Error handling is as follows:

-   The source field does not contain a valid time stamp:

-   For the time stamp type utclong, a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised. Before the exception is raised, the character string "\*??.??.???? ??:??:??,??????" is written to the target variable or list.

-   Time stamps in packed numbers are still formatted as a time stamp, whereby the absolute value is considered for negative numbers. An asterisk "\*" is inserted before the date and the last digit of the time is cut off. The time zone specified has no effect.

-   The value of tz is not contained in the database table TTZZ, or the conversion would result in a local time outside the value range for local date and time:

-   For the time stamp type utclong, a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised. Before the exception is raised, the current time stamp is formatted and written to the target variable or list, whereby an asterisk "\*" is inserted before the date and the last digit of the time is cut off.

-   Time stamps in packed numbers are still formatted like a time stamp. An asterisk "\*" is inserted before the date and the last digit of the time is cut off. The time zone specified has no effect.

Hints

-   The addition ENVIRONMENT TIME FORMAT cannot be specified together with TIME ZONE, which means that the 12-hour format for times cannot be used for time stamps in packed numbers. In contrast, the time stamp type utclong follows the current [formatting settings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenformat_setting_glosry.htm "Glossary Entry") by default.

-   The additions DD/MM/YY, and so on, can be specified together with TIME ZONE for time stamps in packed numbers and then change the format of the specified date. They cannot be specified for the time stamp type utclong.

-   The addition DECIMALS can affect the number of decimal places.

-   An initial time zone tz matches UTC only if the tables of the [rules for time zones](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_zone_rules.htm) are filled correctly for the time zone UTC.
    

Example

Formatting of time stamps in a time stamp field and in a packed number in Tasmanian time. If nothing else is defined in the formatting settings, the output shown below is produced.

DATA(ts)   = utclong\_current( ).
DATA(tspl) = cl\_abap\_tstmp=>utclong2tstmp\_short( ts ).
DATA:
  formatted\_text1 TYPE c LENGTH 50,
  formatted\_text2 TYPE c LENGTH 50.
SET COUNTRY 'US'.
WRITE ts   TO formatted\_text1 TIME ZONE 'AUSTAS' DECIMALS 3.
WRITE tspl TO formatted\_text2 TIME ZONE 'AUSTAS' DECIMALS 3.
cl\_demo\_output=>new(
  )->write(   formatted\_text1
  )->display( formatted\_text2 ).

04/05/2019 23:57:58.529
04/05/2019 23:57:58.000

Addition 12

... STYLE stl

The addition cannot be used together with the additions CURRENCY, DD/MM/YY, ... , YYMMDD, ROUND, ENVIRONMENT TIME FORMAT, TIME ZONE, and UNIT .

Effect

This addition defines the output format for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecfloat_glosry.htm "Glossary Entry"). Only source fields with a [numeric data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") are allowed. Numeric source fields that do not have type decfloat34 are [converted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_elementary.htm) to this type before they are formatted. If other types are specified dynamically, the exception CX\_SY\_WRITE\_INVALID\_STYLE is raised.

Only those values can be specified for the stl output format that exist as constants of type OUTPUTSTYLE in the class CL\_ABAP\_FORMAT. If other values are specified, the exception CX\_SY\_WRITE\_INVALID\_STYLE is also raised. The following table contains all possible output formats:

Constant CL\_ABAP\_FORMAT=>...

Output Format

O\_SIMPLE

[Predefined Output Format](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_formats.htm)

O\_SIGN\_AS\_POSTFIX

[Commercial notation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). The plus/minus sign is appended to the right (minus sign for negative values, blank for positive values). Trailing zeros in decimal places are cut off. If not enough space is available, the system does not switch to the scientific notation as in the O\_SIMPLE format, and an exception occurs instead.

O\_SCALE\_PRESERVING

Predefined output format that preserves the [scaling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscale_glosry.htm "Glossary Entry"), in which trailing zeros in decimal places are not cut off. The same format is created as in the [conversion of a source field of type decfloat34 to type string](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_decfloat.htm), but the [predefined decimal separator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_formats.htm) of the statement WRITE is used. If enough space is available, thousands separators are also inserted in the mathematical notation. If not enough space is available, an exception is raised. The maximum required length is 24 for decfloat16 and 46 for decfloat34.

O\_SCIENTIFIC

[Scientific notation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscientific_notation_glosry.htm "Glossary Entry"). No plus/minus sign is used for a positive number. The output always has at least a two digit exponent with a plus/minus sign. If the EXPONENT addition is not specified, only one digit whose value is not zero is output in the mantissa before the decimal separator, unless the source field has the value 0. Any trailing zeros in the decimal places of the mantissa are cut off. Using the addition DECIMALS, the number of decimal places of the exponent can be specified with EXPONENT. If neither of the additions DECIMALS and EXPONENT are used, the maximum length required is 23 for decfloat16 and 42 for decfloat34. If not enough space is available, commercial rounding is used. If not enough space is available for the plus/minus sign, the minimum number of digits before the decimal separator of the mantissa and the required exponent, an exception of the CX\_SY\_CONVERSION\_OVERFLOW class is raised.

O\_SCIENTIFIC\_WITH\_LEADING\_ZERO

[Scientific with leading zero](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscientific_notation_glosry.htm "Glossary Entry") with leading zero As O\_SCIENTIFIC with the following differences: Only one digit with the value 0 is output before the decimal separator. The addition EXPONENT cannot be used. If the addition DECIMALS is not used, the maximum length needed is 24 for decfloat16 and 43 for decfloat34.

O\_SCALE\_PRESERVING\_SCIENTIFIC

[Scientific notation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscientific_notation_glosry.htm "Glossary Entry") preserving [scaling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscale_glosry.htm "Glossary Entry"). As O\_SCIENTIFIC with the following differences: The exponent always has three digits for decfloat16 and four digits for decfloat34. Trailing zeros after the decimal separator of the mantissa are not cut off. The addition EXPONENT cannot be specified. If not enough space is available, rounding does not take place. Instead, an exception of the CX\_SY\_CONVERSION\_OVERFLOW class is raised.

O\_ENGINEERING

Engineering format - as O\_SCIENTIFIC with the following differences: The value of the exponent is always an integer multiple of 3. The value range of the digits before the decimal separator is between 1 and 999, unless the source field has the value 0. The EXPONENT addition cannot be specified.

If the addition STYLE is used together with other additions that also affect the format of numbers, the following rules apply:

-   The addition EXPONENT can only be specified for the output format O\_SCIENTIFIC for scientific notation.

-   The addition DECIMALS cannot be specified for output formats that preserve scaling. For the output formats O\_SIMPLE and O\_SIGN\_AS\_POSTFIX, DECIMALS determines the number of decimal places. In some cases, commercial rounding may take place or trailing zeros may be appended. For the scientific output formats, DECIMALS determines the number of decimal places in the mantissa. In some cases, commercial rounding may take place.

-   The addition USING EDIT MASK can only be specified if it calls a conversion routine. The addition USING NO EDIT MASK can be specified as usual.

Hints

-   The formats mainly correspond to the output formats specified when a [domain](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendomain_glosry.htm "Glossary Entry") is created with one of the types DF16\_DEC, DF16\_RAW, DF16\_SCL (obsolete), DF34\_DEC, DF34\_RAW, or DF34\_SCL (obsolete) in ABAP Dictionary.

-   When a [decimal floating point number defined in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm) is formatted, the formatting option STYLE overrides the output format defined in the ABAP Dictionary.

-   It is best to use the formatting option STYLE for the formatting of all numeric output. This addition then replaces all other additions whose output format can be specified using stl.

-   To specify the scaling of a decimal floating point number before the use of the format O\_SCALE\_PRESERVING\_SCIENTIFIC, the built-in function [rescale](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendec_floating_point_functions.htm) can be called by specifying the parameter dec.

-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR of the system class [CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_decfloat_doc.htm) are helpful when representing currency amounts stored as decimal floating point numbers. These methods convert currency amounts to decimal floating point numbers depending on a currency key and vice versa.

-   The format O\_SCALE\_PRESERVING\_SCIENTIFIC is intended to help create output that is aligned vertically with reference to the decimal separator and exponent without the addition DECIMALS. To achieve this, the built-in function [rescale](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendec_floating_point_functions.htm) can be called before output by specifying the parameter prec.
    

Example

The following WRITE statement formats the decimal floating point number 123456 as 123,456E+03.

DATA text TYPE c LENGTH 20.
WRITE CONV decfloat34( '123456' ) TO text
      STYLE cl\_abap\_format=>o\_engineering.
cl\_demo\_output=>display( text ).

Executable Example

[Decimal Floating Point Number, Formatting with STYLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_style_abexa.htm)

Addition 13

... USING *{* *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}* *}*

Effect

This addition overrides a [conversion routine](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_routine_glosry.htm "Glossary Entry") assigned using a reference to the ABAP Dictionary. The addition NO EDIT MASK only deactivates the execution of an assigned conversion routine. The addition EDIT MASK calls either another conversion routine or defines an [edit mask](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenedit_mask_glosry.htm "Glossary Entry"). mask expects a character-like data object.

To call any conversion routine CNVRT, mask must contain two equal signs directly followed by the name of the conversion routine: \==CNVRT. During formatting, the content of the source field is passed to function module CONVERSION\_EXIT\_CNVRT\_OUTPUT, converted there, and the result is used. If the function module is not found, a catchable exception is raised. The statement DESCRIBE FIELD contains an addition to fill mask accordingly.

If the first two characters in mask are not equal signs, the content is interpreted as an edit mask, in which some characters have a particular meaning. The statement WRITE then does not directly format the content of the source field, and the character string in mask instead, as follows:

-   If the first two characters in mask are "LL" or "RR", they are not inserted into the result. They control whether the formatting is executed left-aligned or right-aligned. If the first two characters are any other characters, the formatting is left-aligned.

-   All characters "\_" are replaced from the left (if "LL") or from the right (if "RR") by the characters for character-like types or numbers for the types (b, s), i, int8, or p from the source field. For fields of type c, trailing blanks are ignored. Data objects of types f or x are converted to type c before they are formatted. Surplus characters "\_" in mask are replaced by blanks. Characters from the source field for which there are no "\_" characters in mask are not inserted in the result.

-   If the source field is of type ((b, s), i, int8 or p, the character "V" in mask is inserted from the left for a negative number as "-" and for a positive number as a blank into the result.

-   All other characters in the edit mask are passed unchanged.

The formatting is executed for the available length. If formatting options other than an edit mask are also specified, they are applied first and then the special characters in the edit mask are replaced by the interim result. The date formatting mask DD/MM/YY is an exception to this rule. If it is specified, the edit mask is ignored.

Hints

-   The plus/minus sign of a negative number is not inserted in the result if no formatting character "V" is specified. The decimal separator of a packed number with [decimal places](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecimal_place_glosry.htm "Glossary Entry") must be specified at the required place in the edit mask.

-   For type p, note that only the digits are evaluated and the place of the decimal separator is irrelevant.

-   A conversion routine must be called for the types decfloat16 and decfloat34. Edit masks cannot be specified.

-   When using EDIT MASK in the statement [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) for lists, a number of [special features](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_int_options.htm) are applicable.
    

Example

Formatting of a duration. The assignment executes the function module CONVERSION\_EXIT\_SDURA\_OUTPUT, which converts the duration specified in seconds into minutes. In the second assignment, the edit mask is used in accordance with the rules specified above, where the underscores "\_" are replaced with characters from time.

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

These additions cannot be used together with the addition STYLE, not for the time stamp type utclong, and not for [decimal floating point numbers defined in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm), which always have an assigned output format.

Effect

These additions affect the formatting of data objects of the data type d or the date specified in [time stamps in packed numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps_packed.htm) if they are specified as such by the addition TIME ZONE. Otherwise they are ignored.

The content of a data object of type d, or the date specified in a time stamp, is interpreted as a valid date in the form "yyyymmdd" and formatted for the individual additions as follows:

-   DD/MM/YY and MM/DD/YY
    Both additions have the same effect. The date is formatted with a two-digit year and separators. Separators and the order depend on according to the current [formatting setting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_country.htm).
    

-   DD/MM/YYYY and MM/DD/YYYY
    Both additions have the same effect. The date is formatted with a four-digit year with separators. Separators and the order is according to the current [formatting setting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_country.htm).
    

-   DDMMYY and MMDDYY
    Both additions have the same effect. The date is formatted with a two-digit year with no separators. The order is according to the current [formatting setting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_country.htm).
    

-   YYMMDD
    This addition formats the date with a two-digit year without separators in the format "yymmdd".

If the available length is too short, the formatted output is truncated on the right.

Hints

-   The truncation on the right differs from the usual [truncation behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_truncations.htm) for the date output specified by the [formatting setting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage_environment_glosry.htm "Glossary Entry"), where first the separators are removed and then any surplus characters are cut off.
    

-   Some [special properties](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_int_options.htm) apply when date masks are used in the statement [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) for lists.
    

Example

The formatting is, for example, "060131".

DATA formatted\_text TYPE c LENGTH 50.
WRITE sy-datlo TO formatted\_text YYMMDD.
cl\_demo\_output=>display\_text( formatted\_text ).

Continue
![Example](exa.gif "Example") [Decimal Floating Point Numbers, Formatting with STYLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_style_abexa.htm)