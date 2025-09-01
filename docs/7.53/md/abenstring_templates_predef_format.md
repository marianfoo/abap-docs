  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) →  [String Templates - embedded\_expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_expressions.htm) → 

Embedded Expressions - Predefined Formats

The following predefined formatting rules apply to embedded expressions in string templates. These rules can be overridden by explicit formatting options [format\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm).

-   [Text Length](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_1)

-   [Alignment](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_2)

-   [Character-Like Data Types and Date/Time Types](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_3)

-   [Byte-Like Data Types](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_4)

-   [Numeric Data Types](#@@ITOC@@ABENSTRING_TEMPLATES_PREDEF_FORMAT_5)

Text Length

The predefined text length is the minimum length required to represent the whole result of the embedded expression.

Note

The predefined text length can be overridden using the formatting option [WIDTH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm).

Example

The length of the result of the following string template is 5. It consists of 4 digits and a decimal separator.

DATA(text) = |{ CONV decfloat34( 1234 / 10 ) }|.

Alignment

The predefined alignment for all data types is left-aligned.

Note

The predefined alignment can be overridden using the formatting option [ALIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm).

Example

The following string template creates the character string shown below it.

DATA(text) = |{ 1 WIDTH = 5 }{ 2 WIDTH = 5 }{ 3 WIDTH = 5 }<-|.

1    2    3    <-

Character-Like Data Types and Date/Time Types

For character-like data types with fixed lengths (c and n) and the date/time types (d, t), the full content is used and any trailing blanks ignored. The content of text strings with the type string is used in full.

Note

Unlike in [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwrite_formats.htm), no formatting is applied to the data types d and t (unless [formatting options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) are specified explicitly) and no separators are inserted.

Example

The following string template generates the character string shown below (depending on the date and time). The format is independent of the [formatting settings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry.htm).

DATA(text) = |{ sy-datlo } { sy-timlo }| .

20160909 081545

Byte-Like Data Types

Values of the byte-like data types x and xstring are formatted in hexadecimal format, where a byte is represented by two characters.

Example

The following string template creates the character string shown below it.

DATA(text) =
  |{ cl\_abap\_conv\_codepage=>create\_out( )->convert( 'Hello World!' ) }|.

48656C6C6F20576F726C6421

Numeric Data Types

The following rules apply to the representation of numeric values:

-   For negative values, the minus sign is placed on the left of the number, without a blank. No sign is placed in front of positive numbers by default.

-   The period (.) is always used as the decimal separator.

-   No thousand separators are inserted.

The following applies to the individual numeric data types:

-   When formatting values of data type (b, s), i, int8, and p, all decimal places are taken into consideration in [mathematical notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry").

-   Values with the data types decfloat16 and decfloat34 are formatted by default in [mathematical notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry"), without an exponent. The formatting option [EXPONENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) can be used to represent the exponent. Trailing zeroes in decimal places are not usually displayed. The formatting option [DECIMALS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) can be used to display the required number of decimal places.

-   Values with the data type f are formatted by default in [mathematical notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry"), without an exponent. The formatting option [EXPONENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) can be used to represent the exponent. Trailing zeroes in decimal places are not usually displayed. The formatting option [DECIMALS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) can be used to display the required number of decimal places.

Example

The following string template generates the string below, with a platform-dependent result for the data type f. If the [conversion operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_operator_glosry.htm "Glossary Entry") is not specified, the [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") of the embedded expression is i.

DATA(text) = |{                  - 2 / 3   }, {
                CONV decfloat34( - 2 / 3 ) }, {
                CONV          f( - 2 / 3 ) }|.

\-1, -0.6666666666666666666666666666666667, -0.66666666666666663