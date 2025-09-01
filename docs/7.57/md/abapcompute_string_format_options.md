---
title: "Syntax"
description: |
  ... WIDTH     = len ALIGN     = LEFTRIGHTCENTER(dobj)expr PAD       = c CASE      = RAWUPPERLOWER(dobj)expr SIGN      = LEFTLEFTPLUSLEFTSPACERIGHTRIGHTPLUSRIGHTSPACE(dobj)expr EXPONENT  = exp DECIMALS  =
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm"
abapFile: "abapcompute_string_format_options.htm"
keywords: ["select", "insert", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "field-symbol", "abapcompute", "string", "format", "options"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm) →  [string\_tmpl - embedded\_expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: embd_exp - format_options, ABAPCOMPUTE_STRING_FORMAT_OPTIONS, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

embd\_exp - format\_options

Syntax

... *\[*WIDTH     = len*\]*
    *\[*ALIGN     = LEFT*|*RIGHT*|*CENTER*|*(dobj)*|*expr*\]*
    *\[*PAD       = c*\]*
    *\[*CASE      = RAW*|*UPPER*|*LOWER*|*(dobj)*|*expr*\]*
    *\[*SIGN      = LEFT*|*LEFTPLUS*|*LEFTSPACE*|*RIGHT*|*RIGHTPLUS*|*RIGHTSPACE*|*(dobj)*|*expr*\]*
    *\[*EXPONENT  = exp*\]*
    *\[*DECIMALS  = dec*\]*
    *\[*ZERO      = YES*|*NO*|*(dobj)*|*expr*\]*
    *\[*XSD       = YES*|*NO*|*(dobj)*|*expr*\]*
    *\[*STYLE     =  SIMPLE*|*SIGN\_AS\_POSTFIX*|*SCALE\_PRESERVING
                 *|*SCIENTIFIC*|*SCIENTIFIC\_WITH\_LEADING\_ZERO
                 *|*SCALE\_PRESERVING\_SCIENTIFIC*|*ENGINEERING
                 *|*(dobj)*|*expr*\]*
    *\[*CURRENCY  = cur*\]*
    *\[*NUMBER    = RAW*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr*\]*
    *\[*ALPHA     = IN*|*OUT*|*RAW*|*(dobj)*|*expr*\]*
    *\[*DATE      = RAW*|*ISO*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr*\]*
    *\[*TIME      = RAW*|*ISO*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr*\]*
    *\[*TIMESTAMP = SPACE*|*ISO*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr*\]*
    *\[*TIMEZONE  = tz*\]*
    *\[*COUNTRY   = cty*\]* ...

Additions:

[1\. ... WIDTH = len ...](#!ABAP_ADDITION_1@1@)
[2\. ... ALIGN = LEFT*|*RIGHT*|*CENTER*|*(dobj)*|*expr ...](#!ABAP_ADDITION_2@2@)
[3\. ... PAD = c  ...](#!ABAP_ADDITION_3@3@)
[4\. ... CASE = RAW*|*UPPER*|*LOWER*|*(dobj)*|*expr ...](#!ABAP_ADDITION_4@4@)
[5\. ... SIGN = LEFT*|*LEFTPLUS*|*LEFTSPACE*|*RIGHT*|*RIGHTPLUS*|*RIGHTSPACE*|*(dobj)*|*expr ...](#!ABAP_ADDITION_5@5@)
[6\. ... EXPONENT = exp ...](#!ABAP_ADDITION_6@6@)
[7\. ... DECIMALS = dec ...](#!ABAP_ADDITION_7@7@)
[8\. ... ZERO = YES*|*NO*|*(dobj)*|*expr ...](#!ABAP_ADDITION_8@8@)
[9\. ... XSD = YES*|*NO*|*(dobj)*|*expr ...](#!ABAP_ADDITION_9@9@)
[10\. ... STYLE = ...*|*(dobj)*|*expr ...](#!ABAP_ADDITION_10@10@)
[11\. ... CURRENCY  = cur ...](#!ABAP_ADDITION_11@11@)
[12\. ... NUMBER = RAW*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr ...](#!ABAP_ADDITION_12@12@)
[13\. ... ALPHA = IN*|*OUT*|*RAW*|*(dobj)*|*expr ...](#!ABAP_ADDITION_13@13@)
[14\. ... DATE = RAW*|*ISO*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr ...](#!ABAP_ADDITION_14@14@)
[15\. ... TIME = RAW*|*ISO*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr ...](#!ABAP_ADDITION_15@15@)
[16\. ... TIMESTAMP = SPACE*|*ISO*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr ...](#!ABAP_ADDITION_16@16@)
[17\. ... TIMEZONE = tz ...](#!ABAP_ADDITION_17@17@)
[18\. ... COUNTRY = cty ...](#!ABAP_ADDITION_18@18@)

Effect

These formatting options override the [predefined formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm) of [embedded expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm). The formatting options are specified as optional [keyword parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkeyword_parameter_glosry.htm "Glossary Entry") to which an actual parameter is assigned.

Actual parameters with fixed values can be specified as follows:

-   Statically as a key word
-   Dynamically as
    
    -   the content of a data object (dobj) specified in parentheses
    -   result of a [functional method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_glosry.htm "Glossary Entry"), a [constructor expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or a [table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry") expr
    
    The possible values of dobj or expr are defined as constants in the class CL\_ABAP\_FORMAT.
    

The formatting options that can be specified depend on the data type of the embedded expression. The formatting options NUMBER, DATE, TIME, TIMESTAMP, and COUNTRY are mutually exclusive.

If a formal parameter or a field symbol with a generic data type is specified as an embedded expression, only those formatting options can be specified that are allowed for all possible concrete data types.

Hint

The specifications (dobj) and expr together represent a summary [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). Unlike the regular [functional operand positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_positions.htm), however, the data object dobj must be placed in parentheses to distinguish it clearly from a parameter specified as a key word.

Addition 1   

... WIDTH = len ...

Effect

This formatting option defines the length of the string represented by the embedded expression as the value of len, where len is a [numeric expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry").

The option WIDTH can be specified for all data types of the embedded expression. If the value of len is less than the minimum required length, it is ignored. This means that the predefined length cannot be reduced but only increased. By default, a string is extended on the right if it is enlarged, and padded with blanks. This default setting can be overridden using the formatting options ALIGN and PAD.

Example

The length of the result of the following string template is 20. It consists of 4 digits, a decimal separator, and 15 trailing blanks.

FINAL(text) = |{ CONV decfloat34( 1234 / 10 ) WIDTH = 20 }|.

Executable Example

[String Templates, Length](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_width_abexa.htm)

Addition 2   

... ALIGN = LEFT*|*RIGHT*|*CENTER*|*(dobj)*|*expr ...

Effect

This formatting option defines the alignment of the string represented by the embedded expression. It only has an effect if WIDTH is used at the same time to define a length that is greater than the minimum required length.

The values for the alignment are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

Effect

LEFT

CL\_ABAP\_FORMAT=>A\_LEFT

Left-aligned

RIGHT

CL\_ABAP\_FORMAT=>A\_RIGHT

Right-aligned

CENTER

CL\_ABAP\_FORMAT=>A\_CENTER

Centered

The default setting is LEFT. Depending on the alignment, surplus characters in the result are padded with blanks by default either on the right, left, or alternately left and right. This default setting can be overridden using the formatting option PAD.

Example

The following string template creates the character string shown below it.

FINAL(text) =
  |{ 1 WIDTH = 5 ALIGN = RIGHT
  }{ 2 WIDTH = 5 ALIGN = RIGHT
  }{ 3 WIDTH = 5 ALIGN = RIGHT }<-|.

    1    2    3<-

Executable Example

[String Templates, Alignments and Padding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_align_abexa.htm)

Addition 3   

... PAD = c  ...

Effect

This formatting option defines the character used to pad surplus spaces in the result. It only has an effect if WIDTH is used at the same time to define a length that is greater than the minimum required length.

A data object of data type c or string can be specified for c, the first character of which is used as padding. If the PAD option is not specified or if c is specified as an empty string, blanks are used as padding.

Example

The following string template creates the character string shown below it.

FINAL(text) = |{ 'X' ALIGN = RIGHT WIDTH = 10 PAD = '\_' }|.

\_\_\_\_\_\_\_\_\_X

Example

See [String Templates, Alignments and Padding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_align_abexa.htm)

Addition 4   

... CASE = RAW*|*UPPER*|*LOWER*|*(dobj)*|*expr ...

Effect

This formatting option defines the case of the string represented by the embedded expression. It can be specified for all data types of the embedded expression.

The values for the case are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

Effect

RAW

CL\_ABAP\_FORMAT=>C\_RAW

Unchanged

UPPER

CL\_ABAP\_FORMAT=>C\_UPPER

Uppercase

LOWER

CL\_ABAP\_FORMAT=>C\_LOWER

Lowercase

The default setting is RAW.

Hint

The formatting option CASE affects the letters in a string. It is ignored by characters specified using PAD. In numeric data types, the "e" or "E" of an exponent is affected; in byte-like data types, the letters in a hexadecimal representation are affected. In a [time stamp type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_type_glosry.htm "Glossary Entry"), a "T" between date and time is affected. If the formatting option XSD is also specified, CASE affects the created asXML format.

Example

The following string template creates the character string shown below it.

FINAL(text) =
  |{ cl\_abap\_conv\_codepage=>create\_out( )->convert(
       'Hello World!' ) CASE = LOWER }|.

48656c6c6f20576f726c6421

Executable Example

[String Templates, Case](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_case_abexa.htm)

Addition 5   

... SIGN = LEFT*|*LEFTPLUS*|*LEFTSPACE*|*RIGHT*|*RIGHTPLUS*|*RIGHTSPACE*|*(dobj)*|*expr ...

Effect

This formatting option defines the format of the +/- sign when the string represented by the embedded expression represents a numeric value. It can be specified only if the embedded expression has a [numeric data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry").

The values for the format of the plus/minus sign are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

Effect

LEFT

CL\_ABAP\_FORMAT=>S\_LEFT

"\-" left without space, no "+"

LEFTPLUS

CL\_ABAP\_FORMAT=>S\_LEFTPLUS

"\-" and "+" left without space

LEFTSPACE

CL\_ABAP\_FORMAT=>S\_LEFTSPACE

"\-" left without space, blank left for "+"

RIGHT

CL\_ABAP\_FORMAT=>S\_RIGHT

"\-" right without space, no "+"

RIGHTPLUS

CL\_ABAP\_FORMAT=>S\_RIGHTPLUS

"\-" and "+" right without space

RIGHTSPACE

CL\_ABAP\_FORMAT=>S\_RIGHTSPACE

"\-" left without space, blank right for "+"

The default setting is LEFT.

Example

The following string template creates the character string shown below it.

FINAL(text) = |{ 1 SIGN = LEFTPLUS }|.

+1

Executable Example

[String Templates, Sign](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_sign_abexa.htm)

Addition 6   

... EXPONENT = exp ...

Effect

This formatting option defines the exponent as the value of exp when formatting [floating point numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfloating_point_number_glosry.htm "Glossary Entry"), where exp is a [numeric expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry"). The option EXPONENT can be specified only if the embedded expression has a [numeric data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"). It cannot be specified in combination with the options TIMESTAMP or TIMEZONE.

The option EXPONENT only affects the data type f or if the option STYLE is specified with the value scientific.

exp expects a data object of the type i that contains the required exponent.

-   In data type f, the mantissa is adjusted to this exponent by moving the decimal separator and padding with zeros. If exp contains 0, no exponent is created. If the value of exp is greater than the exponent of the source field plus 16, only zeros are assigned to the mantissa. If the value of exp is less than the exponent of the source field, and the output length is not sufficient for the places required in front of the decimal separator, the addition is ignored. If the value in exp is positive and has more than three digits, only the first three places of the exponent are considered.
-   If the formatting option STYLE is also specified, source fields of all numeric types (b, s), i, int8, p, f, decfloat16, and decfloat34 are converted to decfloat34 before formatting. For STYLE, only the scientific notation O\_SCIENTIFIC can be declared together with EXPONENT. The addition EXPONENT defines the exponent for this notation.

If the value of the constant CL\_ABAP\_FORMAT=>EXP\_PRESERVE is specified for exp, the exponent is used that matches the internal representation of the floating point number.

Example

The following string template creates the character string shown below it.

FINAL(text) = |{ CONV f( 2 / 3 ) }, { CONV f( 2 / 3 ) EXPONENT = -1 }|.

0.66666666666666663, 6.6666666666666663E-01

Addition 7   

... DECIMALS = dec ...

Effect

This formatting option defines the number of decimal places when formatting numeric values or time stamps as the value of dec, where dec is a [numeric expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry"). The option DECIMALS can be specified only if the embedded expression has a [numeric data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") or the [time stamp type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_type_glosry.htm "Glossary Entry") utclong. It cannot be specified together with the option CURRENCY.

dec expects a data object of type i that contains the number of decimal places required. For the individual data types, the following applies:

-   Numeric Data Types
    
    If the content of dec is less than 0, it is handled like 0, whereby the content of data objects of data types (b, s), i, int8, or p is multiplied by 10 to the power of dec beforehand.
    
    -   For data objects of types (b, s), i, and int8, a decimal separator and as many zeros as specified in dec are appended. The content of dec must not exceed 14, otherwise an uncatchable exception is raised. If the content of dec is 0, the output remains unchanged.
    -   For data objects of type p, independently of the number of decimal places determined in the data type, as many decimal places are used as specified in dec. The content of dec must not exceed 14, otherwise an uncatchable exception is raised. If the source field has more decimal places, they are rounded to the decimal places in dec. If the source field has fewer decimal places, zeros are appended accordingly.
    -   For data objects of types decfloat16 and decfloat34, the content of dec determines the number of decimal places in mathematical or commercial notation and the number of places in the mantissa in scientific notation. If the source field has more decimal places, they are rounded to the decimal places in dec. If the source field has fewer decimal places, zeros are appended accordingly.
    -   For data objects of type f, the content of dec determines the number of decimal places in the [scientific notation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscientific_notation_glosry.htm "Glossary Entry"). If the content of dec is greater than 16, it is handled like 16. If the content of dec is greater than the number of decimal places of the source field, zeros are appended accordingly. If the content of dec is less than the number of decimal places of the source field, they are rounded to the decimal places in dec.
-   Time stamp
    
    The content of dec must be between 0 and 7.
    
    -   For time stamp fields of the time stamp type utclong as many decimal places as specified in dec are used. Surplus decimal places are truncated. If dec has the value 0, the decimal separator is removed. If dec has an invalid value, a catchable exception of class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised.
    -   If one of the additions TIMEZONE or TIMESTAMP is specified for suitable numbers of the type p, their content is interpreted as a time stamp. For data type p of length 8 without decimal places (TIMESTAMP from the ABAP Dictionary), as many zeros as specified in dec are appended. For data type p of length 11 with 7 decimal places (TIMESTAMPL from the ABAP Dictionary), as many decimal places as specified in dec are used. Surplus decimal places are cut off. If dec has the value 0, the decimal separator is removed.

Hint

The DECIMALS formatting option does not override the [predefined format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm) for numeric types, specifying that thousands separators are not inserted.

Example

The following string template creates the character string shown below it. If the [conversion operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_operator_glosry.htm "Glossary Entry") is not specified, the [calculation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_type_glosry.htm "Glossary Entry") of the embedded expression is i.

FINAL(text) = |{                  - 2 / 3   DECIMALS = 3 }, {
                 CONV decfloat34( - 2 / 3 ) DECIMALS = 3 }, {
                 CONV          f( - 2 / 3 ) DECIMALS = 3 }|.

\-1.000, -0.667, -0.667

Addition 8   

... ZERO = YES*|*NO*|*(dobj)*|*expr ...

Effect

This formatting option defines the format of the numeric value zero. The option ZERO can be specified only if the embedded expression has a [numeric data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"). It cannot be specified together with the options TIMESTAMP or TIMEZONE.

The values for the format of the zero value are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

Effect

YES

CL\_ABAP\_FORMAT=>Z\_YES

The value zero is represented as a numeric value in accordance with the current formatting.

NO

CL\_ABAP\_FORMAT=>Z\_NO

The value zero is represented as an empty string.

The default setting is YES.

Example

The following string template creates the character string shown below it.

FINAL(text) = |{ 0 ZERO = NO }, { 0 ZERO = YES }|.

, 0

Addition 9   

... XSD = YES*|*NO*|*(dobj)*|*expr ...

Effect

This formatting option formats the value of the embedded expression in [asXML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_glosry.htm "Glossary Entry") format that is assigned to its data type. The option XSD can be specified for all elementary data types. It cannot be specified together with other formatting options except WIDTH, ALIGN, PAD, CASE, and ZERO.

The option XSD affects all data types listed under [Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_elementary.htm), as specified there.

The values for the asXML format are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

Effect

YES

CL\_ABAP\_FORMAT=>X\_YES

The value of the embedded expression is formatted depending on its data type in accordance with the asXML format specified under [Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_elementary.htm). If the data type refers to one of the domains specified under [Mapping of Further XML Schema Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_schema.htm) (except XSDQNAME), the format specified there is used. [XML fragments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_fragment.htm) cannot be mapped using the domain XSDANY.

NO

CL\_ABAP\_FORMAT=>X\_NO

Unchanged

If the data type of the embedded expression has the type x or xstring, a formatting option CASE specified at the same time is ignored, unless it refers to the domain XSDUUID\_RAW.

Hint

The formatting of an embedded expression with XSD generally produces the same result as applying the predefined [identity transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID. Unlike CALL TRANSFORMATION, exceptions that can be raised during mapping are not wrapped but must be handled directly.

Example

The following string template creates the character string shown below it. XSDBOOLEAN is a data element that refers to the special domain XSDBOOLEAN for the [mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_schema.htm) of truth values.

DATA:
  flag1 TYPE xsdboolean VALUE abap\_true,
  flag2 TYPE xsdboolean VALUE abap\_false.
FINAL(text) = |{ flag1 XSD = YES }, { flag2 XSD = YES }|.

true, false

Executable Example

[String Templates, asXML Format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_xsd_abexa.htm)

Addition 10   

... STYLE = ...*|*(dobj)*|*expr ...

Effect

This formatting option defines the style of [decimal floating point numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecfloat_glosry.htm "Glossary Entry"). The option STYLE can be specified only if the embedded expression has a [numeric data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"). It cannot be specified together with the options CURRENCY, SIGN, TIMESTAMP, or TIMEZONE.

The values for the format of a decimal floating point number are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

SIMPLE

CL\_ABAP\_FORMAT=>O\_SIMPLE

SIGN\_AS\_POSTFIX

CL\_ABAP\_FORMAT=>O\_SIGN\_AS\_POSTFIX

SCALE\_PRESERVING

CL\_ABAP\_FORMAT=>O\_SCALE\_PRESERVING

SCIENTIFIC

CL\_ABAP\_FORMAT=>O\_SCIENTIFIC

SCIENTIFIC\_WITH\_LEADING\_ZERO

CL\_ABAP\_FORMAT=>O\_SCIENTIFIC\_WITH\_LEADING\_ZERO

SCALE\_PRESERVING\_SCIENTIFIC

CL\_ABAP\_FORMAT=>O\_SCALE\_PRESERVING\_SCIENTIFIC

ENGINEERING

CL\_ABAP\_FORMAT=>O\_ENGINEERING

The numeric value of the string is converted to the data type decfloat34 and is handled as follows:

-   The default settings SIMPLE creates the [predefined format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm) of embedded expressions.
-   SIGN\_AS\_POSTFIX creates a [commercial notation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). The plus/minus sign is appended on the right (a minus sign for negative values and a blank for positive values). Trailing zeros in decimal places are cut off.
-   SCALE\_PRESERVING preserves the [scaling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscale_glosry.htm "Glossary Entry"), where trailing zeros in the decimal places are not cut off. The same format is created as in [conversions of a source field of type decfloat34 to the type string](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_decfloat.htm).
-   SCIENTIFIC creates a [scientific notation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscientific_notation_glosry.htm "Glossary Entry"). No sign is inserted for positive numbers. The result always has at least a two digit exponent with a plus/minus sign. If the addition EXPONENT is not specified, only one integer digit whose value is not zero is represented in the mantissa, unless the source field has the value 0. Any trailing zeros after the decimal separator of the mantissa are cut off. The formatting option DECIMALS can be used to specify the number of decimal places and EXPONENT can be used to specify the exponent.
-   SCIENTIFIC\_WITH\_LEADING\_ZERO creates a [scientific notation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscientific_notation_glosry.htm "Glossary Entry") with a leading zero. Like SCIENTIFIC with the following differences:
    -   Only one integer digit with the value 0 is represented.
    -   The formatting option EXPONENT cannot be specified.
-   SCALE\_PRESERVING\_SCIENTIFIC creates a [scientific notation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscientific_notation_glosry.htm "Glossary Entry") while preserving the [scaling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscale_glosry.htm "Glossary Entry"). Like SCIENTIFIC with the following differences:
    -   The exponent always has three digits for decfloat16 and four digits for decfloat34.
    -   Any trailing zeros after the decimal separator of the mantissa are not cut off.
    -   The formatting option EXPONENT cannot be specified.
-   ENGINEERING creates a technical format. Like SCIENTIFIC with the following differences:
    -   The value of the exponent is always an integer multiple of 3.
    -   The value range of the integer digits is between 1 and 999, unless the source field has the value 0.
    -   The formatting option EXPONENT cannot be specified.

The [general rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm) for embedded expressions apply to thousands separators and decimal separators. When combining other formatting options, the following applies:

-   The formatting option EXPONENT can only be specified for the output format SCIENTIFIC.
-   The formatting option DECIMALS cannot be specified for output formats that preserve scaling. For the output formats SIMPLE and SIGN\_AS\_POSTFIX, DECIMALS defines the number of decimal places, whereby commercial rounding may take place or trailing zeros may be appended. For the scientific output formats, DECIMALS determines the number of decimal places in the mantissa, possibly rounded commercially.

Hints

-   The formats mainly correspond to the output formats specified when a [DDIC domain](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendomain_glosry.htm "Glossary Entry") is created with one of the types DF16\_DEC, DF16\_RAW, DF16\_SCL (obsolete), DF34\_DEC, DF34\_RAW, or DF34\_SCL (obsolete) in ABAP Dictionary.
-   When a [decimal floating point number defined in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_decimal_floating_point.htm) is formatted, the formatting option STYLE overrides the output format defined in the ABAP Dictionary.
-   It is best to use the formatting option STYLE for the formatting of all numeric output. This addition then replaces all other additions whose output format can be specified using stl.
-   To specify the scaling of a decimal floating point number before the use of the format O\_SCALE\_PRESERVING\_SCIENTIFIC, the built-in function [rescale](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendec_floating_point_functions.htm) can be called by specifying the parameter dec.
-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR of the system class [CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_decfloat_doc.htm) are helpful when representing currency amounts stored as decimal floating point numbers. These methods convert currency amounts to decimal floating point numbers depending on a currency key and vice versa.
-   The format O\_SCALE\_PRESERVING\_SCIENTIFIC is intended to help create output that is aligned vertically with reference to the decimal separator and exponent without the addition DECIMALS. To achieve this, the built-in function [rescale](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendec_floating_point_functions.htm) can be called before output by specifying the parameter prec.

Example

The following string template creates the character string shown below it.

FINAL(text) = |{ CONV decfloat34( '123456' ) STYLE = ENGINEERING }|.

123.456E+03

Executable Example

[Decimal Floating Point Number, Formatting with STYLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_style_abexa.htm)

Addition 11   

... CURRENCY  = cur ...

Effect

This formatting option defines the number of decimal places when formatting numeric values, dependent on a currency when specified in cur using a [currency ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_id_glosry.htm "Glossary Entry"). The option CURRENCY can be specified only if the embedded expression has one of the [numeric data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") (b, s), i, int8, p and f, decfloat16 or decfloat34. It cannot be specified together with the options DECIMALS, STYLE, TIMESTAMP, or TIMEZONE. The option SIGN can also be used to control the formatting of the plus/minus sign.

The string is formatted with respect to its decimal places as follows for the individual numeric data types:

-   For data objects of the types (b, s), i and int8, a decimal separator is inserted into the result at the place determined by cur.
-   In the case of data type p, the formatting depends on how the value is specified:
    -   If specified as a data object or as a functional method, the decimal places specified in the definition of the data type are completely ignored. Regardless of the actual value and without rounding, a decimal separator is inserted between the digits in the places determined by cur.
    -   When specifying a value of an arithmetic expression or a [general numeric function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengen_num_function_glosry.htm "Glossary Entry"), CURRENCY works as in DECIMALS.
-   For data objects of type f, the formatting option CURRENCY has the same effect as DECIMALS, where the number of decimal places is determined by cur.
-   For data objects of type decfloat16 and decfloat34, the formatting option CURRENCY implicitly adds the addition STYLE cl\_abap\_format=>o\_sign\_as\_postfix, which formats the output in [commercial notation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). However, the format of the +/- sign can be overwritten by the formatting option SIGN. For the decimal places, it has the same effect as the addition DECIMALS (see above), whereby the number of decimal places is determined by cur.

For the numeric data types i, p, and f, cur expects a currency ID from the column WAERS of the DDIC database table TCURC. Two decimal places are used for every currency ID specified, unless it is contained in the CURRKEY column of the DDIC database table TCURX. In this case, the number of decimal places is determined from the CURRDEC column of the corresponding line in the table TCURX.

Hints

-   The formatting option CURRENCY does not override the [predefined format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm) specifying that thousands separators are not inserted.
-   The formatting option CURRENCY is useful with currencies from the tables TCURX or TCURX for formatting data objects of types (b, s), i, int8, or p without decimal places, whose content consists of currency amounts in the smallest unit of the currency.
-   For decimal floating point numbers, the methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR of the system class [CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_decfloat_doc.htm) are available. These methods convert currency amounts to decimal floating point numbers depending on a currency key and vice versa.

Example

The following string template creates the character string shown below it.

FINAL(text) = |{ 12345678 CURRENCY = 'EUR' }|.

123456.78

Addition 12   

... NUMBER = RAW*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr ...

Effect

This formatting option defines the format of the decimal representation (decimal and thousands separators). The option NUMBER can only be specified if the embedded expression has a [numeric data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"). In addition to the exclusions mentioned above, it cannot be specified together with the options TIMESTAMP or TIMEZONE.

The values for the format of the decimal representation are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

Effect

RAW

CL\_ABAP\_FORMAT=>N\_RAW

The decimal separator is the period (.) and no thousands separators are inserted.

USER

CL\_ABAP\_FORMAT=>N\_USER

The decimal and thousands separators are based on the [user master record](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_master_record_glosry.htm "Glossary Entry").

ENVIRONMENT

CL\_ABAP\_FORMAT=>N\_ENVIRONMENT

The decimal and thousands separators are determined according to the current [formatting setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm).

The default setting is RAW.

Hint

If the [formatting setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") has not been set to a [country-specific format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm) using [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm), the use of ENVIRONMENT has the same effect as the use of USER.

Executable Example

[String Templates, Formatting Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_user_abexa.htm)

Example

The following string template creates the character string shown below it.

SET COUNTRY 'US'.
FINAL(text) = |{ 1000000 NUMBER = ENVIRONMENT }|.

1,000,000

Addition 13   

... ALPHA = IN*|*OUT*|*RAW*|*(dobj)*|*expr ...

Effect

This formatting option adds or removes leading zeros from strings of digits. The option ALPHA can be specified only if the embedded expression has the data type string, c, or n. It cannot be specified together with other formatting options; apart from WIDTH and CASE.

The values for the format of the string of digits are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

Effect

IN

CL\_ABAP\_FORMAT=>L\_IN

If the character string of the embedded expression only contains an uninterrupted string of digits apart from leading and trailing blanks, the string of digits is right-aligned in a character string of a certain length (see below), which is padded on the left with the digit "0", if necessary. Otherwise, the characters of the character string of the embedded expression are left-aligned in the character string and padded with blanks on the right, if necessary. If the length is not sufficient, the string is truncated on the right in both cases.

OUT

CL\_ABAP\_FORMAT=>L\_OUT

If the character string of the embedded expression only contains an uninterrupted string of digits apart from leading and trailing blanks, leading zeros are removed from the string of digits and the remaining digits are left-aligned in a character string of a certain length (see below), which is padded on the right with blanks, if necessary Otherwise, all characters of the character string of the embedded expression are left-aligned in the character string and padded with blanks on the right, if necessary. If the length is not sufficient, the string is truncated on the right in both cases.

RAW

CL\_ABAP\_FORMAT=>L\_RAW

No formatting

The length of the resulting character string is determined as follows:

-   If the formatting option WIDTH is not specified and the embedded expression is assigned as the only content of a string template to a fixed-length target field of type c, n, d, or t, its length determines the available length. Otherwise, the length of the original field, including trailing blanks, is used.
-   If the formatting option WIDTH is specified, the specified length is only used if it is greater than the length of the uninterrupted string of digits without leading zeros or the character string without trailing blanks. Otherwise, the length of the uninterrupted string of digits without leading zeros or the character string without trailing blanks is used.

Hints

-   The formatting option ALPHA has the same function as the [conversion routine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_routine_glosry.htm "Glossary Entry") CONVERSION\_EXIT\_ALPHA\_INPUT or CONVERSION\_EXIT\_ALPHA\_OUTPUT.
-   The parameter IN can be used to transform strings of digits without leading zeros to the format of [numeric text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_text_glosry.htm "Glossary Entry") with leading zeros. The parameter OUT can be used to convert numeric text with leading zeros to strings of digits without leading zeros.

Example

The following string template creates the character string shown below it.

FINAL(text) = |{ '1234' ALPHA = IN WIDTH = 10 }|.

0000001234

Executable Example

[String Templates, Strings of Digits](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_alpha_abexa.htm)

Addition 14   

... DATE = RAW*|*ISO*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr ...

Effect

This formatting option defines the format of a date. The option DATE can be specified only if the embedded expression has the data type d.

The values for the format of the date are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

Effect

RAW

CL\_ABAP\_FORMAT=>D\_RAW

The content of the date field is passed without formatting.

ISO

CL\_ABAP\_FORMAT=>D\_ISO

The date if formatted in accordance with ISO 8601, using hyphens (\-) as separators: yyyy-mm-dd.

USER

CL\_ABAP\_FORMAT=>D\_USER

The date is formatted in accordance with the mask defined in the [user master record](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_master_record_glosry.htm "Glossary Entry").

ENVIRONMENT

CL\_ABAP\_FORMAT=>D\_ENVIRONMENT

The formatting of the date is determined according to the current [formatting setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm).

The default setting is RAW.

Hint

If the [formatting setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") has not been set to a [country-specific format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm) using [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm), the use of ENVIRONMENT has the same effect as the use of USER.

Executable Example

[String Templates, Formatting Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_user_abexa.htm)

Example

The following string template creates the character string shown below it, depending on the current date.

FINAL(text) = |{ sy-datlo DATE = ISO }|.

2016-09-09

Addition 15   

... TIME = RAW*|*ISO*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr ...

Effect

This formatting option defines the format of a time. The option TIME can be specified only if the embedded expression has the data type t.

The values for the format of the time specification are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

Effect

RAW

CL\_ABAP\_FORMAT=>T\_RAW

The content of the time field is passed without formatting.

ISO

CL\_ABAP\_FORMAT=>T\_ISO

The time is formatted in accordance with ISO 8601, in 24-hour format using colons (:) as separators: hh:mm:ss.

USER

CL\_ABAP\_FORMAT=>T\_USER

The time is formatted in accordance with the format defined in the [user master record](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_master_record_glosry.htm "Glossary Entry").

ENVIRONMENT

CL\_ABAP\_FORMAT=>T\_ENVIRONMENT

The formatting of the time is determined according to the current [formatting setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm).

The default setting is RAW.

Hint

A 24-hour format and four 12-month formats can be set in the user master data or using the statement SET COUNTRY. To use 12-hour format, USER or ENVIRONMENT must be specified or the formatting option COUNTRY used.

Hint

If the [formatting setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") has not been set to a [country-specific format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm) using [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm), the use of ENVIRONMENT has the same effect as the use of USER.

Executable Example

[String Templates, Formatting Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_user_abexa.htm)

Example

The following string template creates the character string shown below it, depending on the current time, if a country with a 12-hour format is found in the DDIC database table T005X.

SELECT SINGLE land
       FROM t005x
       WHERE timefm = 1
       INTO @FINAL(land).
IF sy-subrc <> 0.
  RETURN.
ENDIF.
SET COUNTRY land.
FINAL(text) = |{ sy-timlo TIME = ENVIRONMENT }|.

10:55:58 AM

Addition 16   

... TIMESTAMP = SPACE*|*ISO*|*USER*|*ENVIRONMENT*|*(dobj)*|*expr ...

Effect

This formatting option defines the format of a [time stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamp_glosry.htm "Glossary Entry"). The option TIMESTAMP can be specified only if the embedded expression is of one of the following data types, otherwise a syntax or runtime error occurs:

-   [Time Stamp Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_type_glosry.htm "Glossary Entry") [utclong](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm).
-   Numeric data type p with length 8 without decimal places (TIMESTAMP from the ABAP Dictionary) or p with length 11 and seven decimal places (TIMESTAMPL from the ABAP Dictionary). The value of the embedded expression is interpreted as a [time stamp in a packed number](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps_packed.htm).

The values for the format of the time stamp are fixed. The following table shows the key words and the associated values from the class CL\_ABAP\_FORMAT that can be specified as dobj or expr:

Keyword

Value of dobj or expr

Effect

SPACE

CL\_ABAP\_FORMAT=>TS\_SPACE

The time stamp is represented according to the SQL standard ISO 9075, where there is a space between date and time, and a period (.) is used as a decimal separator: yyyy-mm-dd hh:mm:ss.fffffff.

ISO

CL\_ABAP\_FORMAT=>TS\_ISO

The time stamp is represented according to ISO 8601 for date formats and time specifications, where the character T is between date and time and a comma (,) is used as the decimal separator: yyyy-mm-ddThh:mm:ss,fffffff.

USER

CL\_ABAP\_FORMAT=>TS\_USER

As SPACE, but the date and time format, and the decimal separator are taken from the [user master record](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_master_record_glosry.htm "Glossary Entry").

ENVIRONMENT

CL\_ABAP\_FORMAT=>TS\_ENVIRONMENT

As SPACE. However, the date and time format, and the decimal separator are defined according to the current [formatting setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm).

\-

CL\_ABAP\_FORMAT=>TS\_RAW

The time stamp is formatted as an uninterrupted sequence of numbers without separators, except for a decimal separator (.) before fractions of seconds.

The default setting is SPACE.

Initial values and invalid values are handled as follows:

-   An initial expression of the type utclong is represented as a character string filled with spaces whose length is that of the result for a valid time stamp. This length depends on the formatting options specified. Invalid values raise a catchable exception from the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME.
-   A packed number that does not represent a valid time stamp is formatted as a time stamp, where for negative values the absolute value is respected. If the formats USER and ENVIRONMENT are used, an asterisk \* is inserted before the date and the last position of the time is cut off.

Hints

-   In addition to TIMESTAMP, the formatting option DECIMALS can affect the number of decimal places. Other options that change the date and time format or the decimal separator cannot be specified.
-   If the [formatting setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") has not been set to a [country-specific format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm) using [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm), the use of ENVIRONMENT has the same effect as the use of USER.
-   The option TIMEZONE can be used to specify a time zone to convert the date and time portions of the time stamp to the corresponding local values.
-   Whereas the time stamp format ISO is already [predefined](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm) for the data type utclong, and works even without a formatting option, the numeric format is [predefined](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm) for time stamps in packed numbers. A time stamp represented as a packed number is identified and formatted as a time stamp only by using the formatting options TIMESTAMP or TIMEZONE.
-   The time stamp format ISO does not include an optional time zone designator as allowed by ISO 8601.

Example

The program DEMO\_STRING\_TEMPLATE\_TIMESTAMP shows the use of the time stamp formats. Executing the program shows its effect. The following source text section is an excerpt from the program.

FINAL(out) = cl\_demo\_output=>new( ).
FINAL(ts)   = utclong\_current( ).
FINAL(tspl) = cl\_abap\_tstmp=>utclong2tstmp( ts ).
FINAL(tsp)  = cl\_abap\_tstmp=>utclong2tstmp\_short( ts ).
out->write(
  |Standard:\\n{
     ts                    }\\n{
     tspl TIMEZONE = 'UTC' }\\n{
     tsp  TIMEZONE = 'UTC' } | ).
out->write(
  |ISO:\\n{
     ts   TIMESTAMP = ISO }\\n{
     tspl TIMESTAMP = ISO }\\n{
     tsp  TIMESTAMP = ISO } | ).

Executable Example

[String Templates, Formatting Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_user_abexa.htm)

Addition 17   

... TIMEZONE = tz ...

Effect

This formatting option uses the [rules for time zones](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_rules.htm) to convert the date and time information of a [time stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamp_glosry.htm "Glossary Entry") into the [local date](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocal_date_glosry.htm "Glossary Entry") and [local time](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocal_time_glosry.htm "Glossary Entry") of the [time zone](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_glosry.htm "Glossary Entry") specified in tz and formats the result as a time stamp. The option TIMEZONE can be specified only if the embedded expression has of one of the following data types, otherwise a syntax or runtime error occurs:

-   [Time Stamp Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_type_glosry.htm "Glossary Entry") [utclong](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm).
-   Numeric data type p with length 8 without decimal places (TIMESTAMP from the ABAP Dictionary) or p with length 11 and seven decimal places (TIMESTAMPL from the ABAP Dictionary). The value of the embedded expression is interpreted as a [time stamp in a packed number](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps_packed.htm).

If the option TIMESTAMP is not specified, an expression of the type utclong is formatted according to its [predefined format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm). A time stamp in a packed number is formatted in the same way as with the specification TIMESTAMP = SPACE. If the option TIMESTAMP is specified, it takes effect.

tz expects a character-like data object containing a [time zone](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_glosry.htm "Glossary Entry") from the DDIC database table TTZZ. If the [rule set](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_rules.htm) for the specified time zone is incomplete, an uncatchable exception is raised. If tz is initial, no time shift is calculated. The conversion takes place as described in the statements [CONVERT UTCLONG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_utclong.htm) and [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_time-stamp.htm). The special rules for the first and last second apply to the time stamp type utclong.

Initial values are handled as follows:

-   A character string filled with spaces, whose length is that of the result for a valid time stamp, is generated for the time stamp type utclong.
-   For time stamps in packed numbers, the initial value 0 is an invalid value and is formatted as such.

Error handling is as follows:

-   The source field does not contain a valid time stamp:
    -   For the time stamp type utclong, a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised.
    -   Time stamps in packed numbers are still formatted as a time stamp and the absolute value is respected for negative numbers. The time zone specified has no effect.
-   The value of tz is not contained in the DDIC database table TTZZ, or the conversion would result in a local time outside the value range for local date and time:
    -   For the time stamp type utclong, a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised.
    -   For time stamps in packed numbers, the time zone UTC is used implicitly.

Hints

-   The decimal places of time stamps can also be defined with the formatting option DECIMALS.
-   Unlike TIMESTAMP, the addition TIMEZONE can also be combined with the formatting option COUNTRY to affect the date and time format.
-   An initial time zone tz matches UTC only if the tables of the [rules for time zones](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_rules.htm) are filled correctly for the time zone UTC.

Example

The program DEMO\_STRING\_TEMPLATE\_TIMEZONE shows the use of the option TIMEZONE without using the option TIMESTAMP but also in connection with the option COUNTRY. Executing the program shows its effect.

FINAL(out) = cl\_demo\_output=>new( ).
FINAL(ts)   = utclong\_current( ).
FINAL(tspl) = cl\_abap\_tstmp=>utclong2tstmp( ts ).
FINAL(tsp)  = cl\_abap\_tstmp=>utclong2tstmp\_short( ts ).
out->write(
  |Predefined:\\n{
     ts   }\\n{
     tspl }\\n{
     tsp  } | ).
out->write(
  |UTC:\\n{
     ts   TIMEZONE = 'UTC' }\\n{
     tspl TIMEZONE = 'UTC' }\\n{
     tsp  TIMEZONE = 'UTC' } | ).
out->write(
  |CET, DE:\\n{
     ts   TIMEZONE = 'CET' COUNTRY = 'DE ' }\\n{
     tspl TIMEZONE = 'CET' COUNTRY = 'DE ' }\\n{
     tsp  TIMEZONE = 'CET' COUNTRY = 'DE ' } | ).
out->write(
  |EST, US:\\n{
     ts   TIMEZONE = 'EST' COUNTRY = 'US ' }\\n{
     tspl TIMEZONE = 'EST' COUNTRY = 'US ' }\\n{
     tsp  TIMEZONE = 'EST' COUNTRY = 'US ' } | ).
out->display( ).

Executable Example

[String Templates, Time Zones](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_timezone_abexa.htm)

Addition 18   

... COUNTRY = cty ...

Effect

The formatting option COUNTRY defines a temporary [formatting setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenformat_setting_glosry.htm "Glossary Entry") for the currently embedded expression. It can be specified as an alternative to all formatting options for which the parameter ENVIRONMENT can be specified (that is, instead of NUMBER, DATE, TIME, and TIMESTAMP). The embedded expression is formatted as a number, date, or time, or time stamp, depending on its data type.

cty expects a data object of the type LAND1 from the ABAP Dictionary that either contains a value from the LAND column of the DDIC database table T005X or is initial. If not, an exception of the class CX\_SY\_STRG\_FORMAT is raised.

If cty contains a value from the data base table T005X, the [country-specific format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm) defined there is used. If cty is initial, the formatting specified in the [user master record](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_master_record_glosry.htm "Glossary Entry") is used.

Hints

-   Unlike using the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm) and the parameter ENVIRONMENT, there are no side-effects when using the formatting option COUNTRY. The country specification applies only to the current embedded expression and not to all subsequent statements from the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").
-   In numbers, the COUNTRY formatting option overrides the [predefined setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm) with respect to thousands separators.

Example

The following string template creates the character string shown below it, depending on the content of the DDIC database table T005X.

FINAL(text) = |{ 1000000 COUNTRY = 'DE ' }|.

1,000,000

Executable Examples

-   [String Templates, Number Formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_number_abexa.htm)
-   [String Templates, Date Formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_date_abexa.htm)
-   [String Templates, Time Formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_date_abexa.htm)
-   [String Templates, Time Stamp Templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_utc_abexa.htm)