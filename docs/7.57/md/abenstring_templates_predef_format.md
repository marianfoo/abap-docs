  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates (string\_tmpl)](javascript:call_link\('abenstring_templates.htm'\)) →  [string\_tmpl - embedded\_expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: embd_exp - Predefined Formats, ABENSTRING_TEMPLATES_PREDEF_FORMAT, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

embd\_exp - Predefined Formats

The following predefined formatting rules apply to embedded expressions in string templates. These rules can be overridden by explicit formatting options [format\_options](javascript:call_link\('abapcompute_string_format_options.htm'\)).

-   [Text Length](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_1)
-   [Alignment](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_2)
-   [Character-Like Data Types and Date/Time Types](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_3)
-   [Byte-Like Data Types](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_4)
-   [Numeric Data Types](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_5)
-   [Time Stamp Type](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_6)

Text Length   

The predefined text length is the minimum length required to represent the entire result of the embedded expression.

Hint

The predefined text length can be overridden using the formatting option [WIDTH](javascript:call_link\('abapcompute_string_format_options.htm'\)).

Example

The length of the result of the following string template is 5. It consists of 4 digits and a decimal separator.

FINAL(text) = |{ CONV decfloat34( 1234 / 10 ) }|.

Alignment   

The predefined alignment for all data types is left-aligned.

Hint

The predefined alignment can be overridden using the formatting option [ALIGN](javascript:call_link\('abapcompute_string_format_options.htm'\)).

Example

The following string template creates the character string shown below it.

FINAL(text) = |{ 1 WIDTH = 5 }{ 2 WIDTH = 5 }{ 3 WIDTH = 5 }<-|.

1    2    3    <-

Character-Like Data Types and Date/Time Types   

For character-like data types with fixed lengths (c and n) and the date/time types (d, t), the content is passed ignoring trailing blanks. The content of text strings with the type string is passed completely.

Hint

Unlike in [WRITE TO](javascript:call_link\('abenwrite_formats.htm'\)), no formatting is applied to the data types d and t and no separators are inserted if no [formatting options](javascript:call_link\('abapcompute_string_format_options.htm'\)) are specified explicitly.

Example

The following string template creates the character string shown below, depending on the date and time. The format is independent of the [formatting settings](javascript:call_link\('abencountry.htm'\)).

FINAL(text) = |{ sy-datlo } { sy-timlo }|.

20160909 081545

Byte-Like Data Types   

Values of the byte-like data types x and xstring are formatted in hexadecimal format, where one byte is represented by two characters.

Example

The following string template creates the character string shown below it.

FINAL(text) =
  |{ cl\_abap\_conv\_codepage=>create\_out( )->convert( 'Hello World!' ) }|.

48656C6C6F20576F726C6421

Numeric Data Types   

The following rules apply to the representation of numeric values:

-   For negative values, the minus sign is placed on the left of the number, without a blank. No sign is placed in front of positive numbers by default.
-   The period (.) is always used as the decimal separator.
-   No thousands separators are inserted.

The following applies to the individual numeric data types:

-   Values of data type (b, s), i, int8, and p are formatted in [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") and all decimal places are considered.
-   Values with the data types decfloat16 and decfloat34 are formatted by default in [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry"), that is, without an exponent. The formatting option [EXPONENT](javascript:call_link\('abapcompute_string_format_options.htm'\)) can be used to represent the exponent. Trailing zeros in decimal places are not displayed by default. The formatting option [DECIMALS](javascript:call_link\('abapcompute_string_format_options.htm'\)) can be used to determine the required number of decimal places.
-   Values with the data type f are formatted by default in [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry"), without an exponent. The formatting option [EXPONENT](javascript:call_link\('abapcompute_string_format_options.htm'\)) can be used to represent the exponent. Trailing zeros in decimal places are not displayed by default. The formatting option [DECIMALS](javascript:call_link\('abapcompute_string_format_options.htm'\)) can be used to determine the required number of decimal places.

Example

The following string template creates the string below, with a platform-dependent result for the data type f. If the [conversion operator](javascript:call_link\('abenconversion_operator_glosry.htm'\) "Glossary Entry") is not specified, the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of the embedded expression is i.

FINAL(text) = |{                  - 2 / 3   }, {
                CONV decfloat34( - 2 / 3 ) }, {
                CONV          f( - 2 / 3 ) }|.

\-1, -0.6666666666666666666666666666666667, -0.66666666666666663

Time Stamp Type   

A valid [time stamp](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") in a [time stamp field](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry") with the [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry") utclong is formatted as yyyy-mm-dd hh:mm:ss.fffffff in accordance with the SQL standard ISO 9075. A blank is placed between the date and time and the period (.) is used as the default decimal separator. An initial time stamp field is represented by a string of 27 blanks. A time stamp field whose value is greater than or equal to the last second or is between 9999-12-31 23:59:59.0000000 and "9999-12-31 23:59:59.9999999 is represented as 9999-12-31 23:59:59.9999999.

This setting can be overwritten using formatting options such as [TIMESTAMP](javascript:call_link\('abapcompute_string_format_options.htm'\)), [COUNTRY](javascript:call_link\('abapcompute_string_format_options.htm'\)), or [DECIMALS](javascript:call_link\('abapcompute_string_format_options.htm'\)).

Example

The following string template creates the character string shown below it.

FINAL(text) = |{ utclong\_add( val     = VALUE utclong( )
                             days    = CONV #( CONV d( '20190402' ) )
                             hours   = 10
                             minutes = 30
                             seconds = CONV #( '12.3456789' ) ) }|.

2019-04-02 10:30:12.3456789