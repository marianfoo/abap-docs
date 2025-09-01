  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [WRITE - TO](javascript:call_link\('abapwrite_to.htm'\)) → 

WRITE - Predefined Formats

The predefined output format of the statements [WRITE ... TO](javascript:call_link\('abapwrite_to.htm'\)) and [WRITE](javascript:call_link\('abapwrite-.htm'\)) depends on the data type and user-specific settings. It is partly dependent on the length available. In the case of WRITE ... TO, this is the length of the target variable; in the case of WRITE, this is the [output length](javascript:call_link\('abenwrite_output_length.htm'\)). If the length is not sufficient, the variables are truncated as specified in the predefined [cutoff behavior](javascript:call_link\('abenwrite_cutoffs.htm'\)).

-   [Alignment](#@@ITOC@@ABENWRITE_FORMATS_1)

-   [General Format](#@@ITOC@@ABENWRITE_FORMATS_2)

-   [Numeric Data Types](#@@ITOC@@ABENWRITE_FORMATS_3)

-   [Character-Like Data Types](#@@ITOC@@ABENWRITE_FORMATS_4)

-   [Byte-Like Data Types](#@@ITOC@@ABENWRITE_FORMATS_5)

-   [Date Types and Time Types](#@@ITOC@@ABENWRITE_FORMATS_6)

-   [Number, Date, and Time Formats](#@@ITOC@@ABENWRITE_FORMATS_7)

-   [Number Output](#@@ITOC@@ABENWRITE_FORMATS_8)

-   [Date Output](#@@ITOC@@ABENWRITE_FORMATS_9)

-   [Time Output](#@@ITOC@@ABENWRITE_FORMATS_10)

-   [Time Stamp Output](#@@ITOC@@ABENWRITE_FORMATS_11)

Alignment

The following table shows the predefined alignment for the predefined ABAP types.

Data Type

Alignment

[Numeric data types](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

Right-justified

[Character-like data types](javascript:call_link\('abenbuiltin_types_character.htm'\))

Left-justified

[Byte-like data types](javascript:call_link\('abenbuiltin_types_byte.htm'\))

Left-justified

[Date types/time types](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

Left-justified

Example

The text field text is padded with blanks on the left by WRITE.

DATA text TYPE c LENGTH 40.
DATA num TYPE i VALUE -1234.
WRITE num TO text.
cl\_demo\_output=>display( text ).

General Format

Numeric Data Types

-   In the numeric data types (b, s), i, int8, and p, the last place on the right is reserved for the sign (this also applies to b, even though these numbers are always positive). Negative values are given a minus "-" here in the result and positive values a blank. The thousand separators defined in the user [master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") are inserted if there is enough length available. If data type p is used, decimal places are respected (regardless of the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry")). A decimal separator is inserted where necessary (see below).

-   If enough length is available, decimal floating point numbers with the data types decfloat16 and decfloat34 are displayed in [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") and with the thousand separators defined in the [user master data](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). If there is not enough length for the decimal places of the number, it is rounded commercially to the number of places available. If there is not enough length for the integral part of the number, the value is formatted in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry") without thousand separators. Negative numbers are prefixed with a minus sign in both cases. An exponent is always displayed with a sign, but with no leading zeroes. Trailing zeroes in the decimal places are not shown.

-   A binary floating point number with the type f is formatted in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry"), prefixed with a sign (empty if the number is positive), a place before the decimal separator, a maximum of 16 [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry"), the character "E", and a three-figure exponent, including sign.

For information about the number format with respect to decimal and thousands separators, see below.

Notes

-   If there is not enough space to display a number using these rules, an exception is raised for decimal floating point numbers only. Other numeric types are truncated and flagged with "\*".

-   Note that, for the data types b and s, the [predefined output lengths](javascript:call_link\('abenwrite_output_length.htm'\)) for lists ignore the place that is reserved for the sign. This can produce unexpected results.

Example

If nothing else is defined in the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"), the example generates the output shown below. Note the place on the far right, which is reserved for the sign for type i.

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

Character-Like Data Types

Data objects of character-like data types are applied without formatting. With character-like data types with a fixed length (c, n), trailing blanks are cut off. The content of text strings with the type string is used in full.

Example

After the assignment has been made, the variable text contains the left-aligned character string Hello World!.

DATA text TYPE c LENGTH 20.
WRITE 'Hello World!' TO text.
cl\_demo\_output=>display( text ).

Byte-Like Data Types

Byte-like data objects are formatted in hexadecimal format, where one byte is represented by two characters.

Example

After the assignment has been made, the variable text contains the left-aligned character string 48656C6C6F20576F726C.

DATA text TYPE c LENGTH 20.
WRITE cl\_abap\_codepage=>convert\_to( 'Hello World!' ) TO text.
cl\_demo\_output=>display( text ).

Date Types and Time Types

The content of a data field or time field of type d or t is prepared without performing a check based on the rules below.

Example

If nothing else is defined in the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"), the example generates the output shown below.

DATA text TYPE c LENGTH 10.
SET COUNTRY 'US'.
WRITE CONV d( 'XXXXXXXX' ) TO text.
cl\_demo\_output=>write( text ).
WRITE CONV t( 'XXXXXX' ) TO text.
cl\_demo\_output=>display( text ).

XX/XX/XXXX
XX:XX:XX

Number, Date, and Time Formats

With one exception, numbers, date formats, and time formats are defined by the current [formatting setting](javascript:call_link\('abencountry.htm'\)) of the [language environment](javascript:call_link\('abenlanguage_environment_glosry.htm'\) "Glossary Entry"), which can be configured using [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)).

Number Output

The predefined number format for the output of numeric fields (which decimal and thousands separators are selected) is defined by the current [formatting setting](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"). The formats available correspond to the [country-specific number formats](javascript:call_link\('abencountry_formats.htm'\)). Thousands separators are inserted only if there is enough length available.

Example

If nothing else is defined in the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"), the example generates the output shown below.

DATA text TYPE c LENGTH 10.
SET COUNTRY 'US'.
WRITE CONV i( '1000000' ) TO text.
cl\_demo\_output=>write( text ).
SET COUNTRY 'DE'.
WRITE CONV i( '1000000' ) TO text.
cl\_demo\_output=>display( text ).

1,000,000
1.000.000

Date Output

The predefined date format for the output of date fields of type d and time stamps is defined by the current [formatting setting](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"). The formats available correspond to the [country-specific date formats](javascript:call_link\('abencountry_formats.htm'\)). Separators are inserted only if there is enough length available. A date field is formatted regardless of its content.

Example

If nothing else is defined in the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"), the example generates the format shown below.

DATA text TYPE c LENGTH 10.
SET COUNTRY 'US'.
WRITE sy-datlo TO text.
cl\_demo\_output=>write( text ).
SET COUNTRY 'DE'.
WRITE sy-datlo TO text.
cl\_demo\_output=>display( text ).

09/08/2016
08.09.2016

Time Output

Time fields of type t and times specified in time stamps are by default always displayed in 24-hour format with colons as separators. Separators are inserted only if there is enough length available. To use a 12-hour format defined in the current formatting settings, the addition [ENVIRONMENT TIME FORMAT](javascript:call_link\('abapwrite_to_options.htm'\)) must be used. A time field is formatted regardless of its content.

Example

The examples generates the format shown below.

DATA: text1 TYPE c LENGTH 8,
      text2 TYPE c LENGTH 6.
WRITE sy-timlo TO text1.
cl\_demo\_output=>write( text1 ).
WRITE sy-timlo TO text2.
cl\_demo\_output=>display( text2 ).

13:07:35
130735

Time Stamp Output

The output of [time stamps](javascript:call_link\('abentime_stamp_oview.htm'\)) for which the addition [TIME ZONE](javascript:call_link\('abapwrite_int_options.htm'\)) is specified is constructed from a date output and a time output in the current format, separated by a blank. The 12-hour [time format](javascript:call_link\('abencountry_formats.htm'\)) is not possible and the decimal separator for fractions of seconds is always a comma (,). Time stamps, for which addition TIME ZONE is not specified, are handled as data type p.

Example

If nothing else is defined in the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry"), the example generates the format shown below. In the second assignment, the time stamp is handled as a packed number.

DATA text TYPE c LENGTH 28.
DATA tstmp TYPE timestampl.
GET TIME STAMP FIELD tstmp.
SET COUNTRY 'US'.
WRITE tstmp TO text TIME ZONE 'UTC'.
cl\_demo\_output=>write( text ).
WRITE tstmp TO text.
cl\_demo\_output=>display( text ).

09/08/2016 11:15:05,6924190
 20,160,908,111,505.6924190