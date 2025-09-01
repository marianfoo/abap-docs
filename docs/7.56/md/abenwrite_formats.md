  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [WRITE, TO](javascript:call_link\('abapwrite_to.htm'\)) → 

WRITE, Predefined Formats

The predefined output format of the statements [WRITE ... TO](javascript:call_link\('abapwrite_to.htm'\)) and [WRITE](javascript:call_link\('abapwrite-.htm'\)) depends on the data type and user-specific default settings. It is partly dependent on the length available. In the case of WRITE ... TO, this is the length of the target variable; in the case of WRITE, this is the [output length](javascript:call_link\('abenwrite_output_length.htm'\)). If the length is not sufficient, the variables are truncated as specified in the predefined [truncation behavior](javascript:call_link\('abenwrite_truncations.htm'\)).

-   [Alignment](#@@ITOC@@ABENWRITE_FORMATS_1)
-   [General Format](#@@ITOC@@ABENWRITE_FORMATS_2)
    -   [Numeric Data Types](#@@ITOC@@ABENWRITE_FORMATS_3)
    -   [Character-like data types](#@@ITOC@@ABENWRITE_FORMATS_4)
    -   [Byte-Like Data Types](#@@ITOC@@ABENWRITE_FORMATS_5)
    -   [Date Types and Time Types](#@@ITOC@@ABENWRITE_FORMATS_6)
-   [Number, Date, and Time Formats](#@@ITOC@@ABENWRITE_FORMATS_7)
    -   [Number Output](#@@ITOC@@ABENWRITE_FORMATS_8)
    -   [Date Output](#@@ITOC@@ABENWRITE_FORMATS_9)
    -   [Time Output](#@@ITOC@@ABENWRITE_FORMATS_10)
    -   [Time Stamp Output](#@@ITOC@@ABENWRITE_FORMATS_11)

Alignment

The following table shows the predefined alignment for the built-in ABAP types.

Data Type

Alignment

[Numeric data types](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

Right-aligned

[Character-like data types](javascript:call_link\('abenbuiltin_types_character.htm'\))

Left-aligned

[Byte-like data types](javascript:call_link\('abenbuiltin_types_byte.htm'\))

Left-aligned

[Date types/time types](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

Left-aligned

Example

The text field text is padded with blanks on the left by WRITE.

DATA text TYPE c LENGTH 40.
DATA num TYPE i VALUE -1234.
WRITE num TO text.
cl\_demo\_output=>display( text ).

General Format

Numeric Data Types

-   In the numeric data types (b, s), i, int8, and p, the last place on the right is reserved for the sign (this also applies to b, even though these numbers are always positive). Here, negative values are given a minus "-" in the result and positive values a blank. The thousands separators defined in the user master record are inserted if the available length is sufficient. If data type p is used, decimal places are respected regardless of the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") and a decimal separator is inserted if necessary (see below).
-   If the available length is sufficient, decimal floating point numbers with the data types decfloat16 and decfloat34 are displayed in [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") and with the thousands separators defined in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). If the available length is not sufficient for the decimal places of the number, it is rounded commercially to the number of positions available. If the available length is not sufficient for the places in front of the decimal separator, the value is formatted in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry") without thousands separators. Negative numbers are prefixed with a minus sign in both cases. An exponent is always displayed with a plus/minus sign, but without leading zeros. Trailing zeros in the decimal places are not shown.
-   A binary floating point number with the type f is formatted in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry") with a preceding plus/minus sign (empty if the number is positive), a place before the decimal separator, a maximum of 16 [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry"), the character "E", and a three-figure exponent, including a plus/minus sign.

For, information about the number format with respect to decimal and thousands separators, see.

Hints

-   If there is not enough space available to display a number using these rules, an exception is raised for decimal floating point numbers only. Other numeric types are truncated and flagged with "\*".
-   For the data types b and s, it should be noted that the [predefined output lengths](javascript:call_link\('abenwrite_output_length.htm'\)) for lists ignore the place that is reserved for the plus/minus sign, which can lead to unexpected results.

Example

If nothing else is defined in the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"), the example produces the output shown below. It should be noted that the place on the far right is reserved for the sign for type i.

DATA text TYPE c LENGTH 20.
SET COUNTRY 'US'.
WRITE CONV i( '123456' ) TO text.
cl\_demo\_output=>write( text ).
WRITE CONV decfloat34( 123456 ) TO text.
cl\_demo\_output=>write( text ).
WRITE CONV f( 123456 ) TO text.
cl\_demo\_output=>display( text ).

            123,456
             123,456
 1.2345600000000E+05

Character-like data types

Data objects of character-like data types are passed without formatting. In the case of character-like data types with a fixed length (c, n), trailing blanks are cut off. The content of text strings with the type string is passed completely.

Example

After the assignment, the variable text contains the left-aligned character string Hello World!.

DATA text TYPE c LENGTH 20.
WRITE 'Hello World!' TO text.
cl\_demo\_output=>display( text ).

Byte-Like Data Types

Byte-like data objects are formatted in hexadecimal format, where one byte is represented by two characters.

Example

After the assignment, the variable text contains the left-aligned character string 48656C6C6F20576F726C.

DATA text TYPE c LENGTH 20.
WRITE cl\_abap\_conv\_codepage=>create\_out(  )->convert( 'Hello World!' )
  TO text.
cl\_demo\_output=>display( text  ).

Date Types and Time Types

The content of a date field or time field of type d or t or the content of a time stamp field of type utclong is formatted in accordance with the rules for date and time formats listed below. Here, the content is not checked for the character-like types d and t.

Example

If nothing else is defined in the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"), the example produces the output shown below.

DATA text TYPE c LENGTH 10.
SET COUNTRY 'US'.
WRITE CONV d( 'XXXXXXXX' ) TO text.
cl\_demo\_output=>write( text ).
WRITE CONV t( 'XXXXXX' ) TO text.
cl\_demo\_output=>display( text ).

XX/XX/XXXX
XX:XX:XX

Number, Date, and Time Formats

Apart from one exception, numbers, date formats, and time formats are determined by the current [formatting setting](javascript:call_link\('abencountry.htm'\)) of the [language environment](javascript:call_link\('abenlanguage_environment_glosry.htm'\) "Glossary Entry"), which can be set using [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)).

Number Output

The predefined number format for the output of numeric fields, that is, decimal and thousands separators, depends on the current [formatting setting](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"). The possible formats correspond to the [country-specific number formats](javascript:call_link\('abencountry_formats.htm'\)). Thousands separators are inserted only if the length is sufficient.

Example

If nothing else is defined in the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"), the example produces the output shown below.

DATA text TYPE c LENGTH 10.
SET COUNTRY 'US'.
WRITE CONV i( '1000000' ) TO text.
cl\_demo\_output=>write( text ).
SET COUNTRY 'DE'.
WRITE CONV i( '1000000' ) TO text.
cl\_demo\_output=>display( text ).

1,000,000
1,000,000

Date Output

The predefined date format for the output of date fields of type d depends on the current [formatting setting](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"). The possible formats correspond to the [country-specific date formats](javascript:call_link\('abencountry_formats.htm'\)). The respective separators are inserted only if the length is sufficient. A date field is formatted regardless of its content.

Example

If nothing else is defined in the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"), the example produces the format shown below.

DATA text TYPE c LENGTH 10.
SET COUNTRY 'US'.
WRITE sy-datlo TO text.
cl\_demo\_output=>write( text ).
SET COUNTRY 'DE'.
WRITE sy-datlo TO text.
cl\_demo\_output=>display( text ).

04/04/2019
04.04.2019

Time Output

Time fields of type t are by default always displayed in 24-hour format with colons as separators. Separators are inserted only if the length is sufficient. To use a 12-hour format defined in the current formatting settings, the addition [ENVIRONMENT TIME FORMAT](javascript:call_link\('abapwrite_to_options.htm'\)) must be used. A time field is formatted regardless of its content.

Example

The example produces the format shown below.

DATA: text1 TYPE c LENGTH 8,
      text2 TYPE c LENGTH 6.
WRITE sy-timlo TO text1.
cl\_demo\_output=>write( text1 ).
WRITE sy-timlo TO text2.
cl\_demo\_output=>display( text2 ).

13:07:35
130.735

Time Stamp Output

The output of [time stamp fields with the time stamp type](javascript:call_link\('abenutclong.htm'\)) utclong and [time stamps in packed numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) where the addition [TIME ZONE](javascript:call_link\('abapwrite_int_options.htm'\)) is specified is constructed from a date and time output in their current formats, separated by a blank.

-   The date format is taken from the current [formatting setting](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry") for time stamp fields with the type utclong and for time stamps in packed numbers.
-   The time format is determined as follows:
    -   The time format is taken from the current [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry") for time stamp fields with the type utclong. In the case of initial time stamp fields, the target area is padded with blanks. A time stamp field whose value is greater than or equal to the last second or between "9999-12-31 23:59:59.0000000" and "9999-12-31 23:59:59.9999999" is represented as "9999-12-31 23:59:59.9999999".
    -   In the case of time stamps in packed numbers, the time format is always the 24 hour format with colons as separators. The 12 hour [time format](javascript:call_link\('abencountry_formats.htm'\)) is not possible. In front of second fractions, the decimal separator is always a comma (,). An initial packed number is considered invalid by the addition TIME ZONE and its output is "\*00.00.0000 00:00:00.000000.

Hints

-   The addition TIME ZONE must be specified for time stamp fields with the type TIME ZONE.
-   Time stamps in packed numbers for which the addition TIME ZONE is not specified are handled as data type p.

Example

If nothing else is defined in the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"), the example creates the format shown below.

DATA text TYPE c LENGTH 30.
DATA(ts)   = utclong\_current( ).
DATA(tspl) = cl\_abap\_tstmp=>utclong2tstmp( ts ).
SET COUNTRY 'DE'.
WRITE ts TO text TIME ZONE 'UTC'.
cl\_demo\_output=>write( text ).
WRITE tspl TO text TIME ZONE 'UTC'.
cl\_demo\_output=>write( text ).
SET COUNTRY 'US'.
WRITE ts TO text TIME ZONE 'UTC'.
cl\_demo\_output=>write( text ).
WRITE tspl TO text TIME ZONE 'UTC'.
cl\_demo\_output=>display( text ).

04.04.2019 12:42:48.2006610
04.04.2019 12:42:48.2006610
04/04/2019 12:42:48.2006610
04/04/2019 12:42:48.2006610