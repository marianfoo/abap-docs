  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [WRITE, TO](javascript:call_link\('abapwrite_to.htm'\)) → 

WRITE, Truncation Behavior

This section describes the truncation behavior of the system, if the target field length for the statement [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) or the output length for the statement [WRITE](javascript:call_link\('abapwrite-.htm'\)) is smaller than the length required for the [predefined](javascript:call_link\('abenwrite_formats.htm'\)) format or the format defined using [format\_options](javascript:call_link\('abapwrite_to_options.htm'\)).

The following sections explain the steps involved in truncating data. The result is truncated until it is short enough to fit the available space.

If the individual [formatting options](javascript:call_link\('abapwrite_to_options.htm'\)) deviate from the rules shown here, these deviations are described for the relevant option.

-   [Numeric Data Types](#abenwrite-truncations-1--------whole-numbers-and-packed-numbers---@ITOC@@ABENWRITE_TRUNCATIONS_2)

-   [Decimal Floating Point Numbers](#abenwrite-truncations-3--------binary-floating-point-numbers---@ITOC@@ABENWRITE_TRUNCATIONS_4)

-   [Character-Like and Byte-Like Data Types](#abenwrite-truncations-5--------time-stamp---@ITOC@@ABENWRITE_TRUNCATIONS_6)

Executable Example

[WRITE TO, Truncation Behavior](javascript:call_link\('abenwrite_truncation_abexa.htm'\))

Numeric Data Types

Whole numbers and packed numbers

For data objects of numeric data types (b, s), i, int8, and p, the truncation behavior is as follows:

1.  The thousands separators are omitted from left to right.
    
2.  For positive values, the position for the plus/minus sign on the right is omitted. If the value is negative, the minus sign is retained.
    
3.  (b, s), i, int8, and p are truncated on the left and an asterisk ("\*") is inserted in the first place for identification purposes.
    

The type int8 produces a syntax check warning (which can be hidden by a pragma), if it is known statically that the output length is less than the predefined length 20.

Decimal Floating Point Numbers

For data objects of type decfloat16 and decfloat34, the truncation behavior is as follows:

1.  In [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry"), the thousands separators are omitted from left to right.
    
2.  In [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry"), the decimal points are rounded commercially. In [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry"), the mantissa is rounded commercially.
    
3.  If there is not enough space for the places before the decimal separator in mathematical notation, the system automatically switches to scientific notation.
    
4.  The catchable exception CX\_SY\_CONVERSION\_OVERFLOW occurs
    

-   if the length is not sufficient for the display of at least one whole number place in mathematical notation or one position of the mantissa in scientific notation,

-   if the length is not sufficient for mathematical notation when the output format SIGN\_AS\_POSTFIX is used for commercial notation,

-   if the length is not sufficient for the output format SCALE\_PRESERVING or SCALE\_PRESERVING\_SCIENTIFIC (where the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") is preserved),

The predefined output lengths of 24 or 46 are sufficient for the mathematical notation of 16 or 34 place numbers with a plus/minus sign, a decimal separator and a corresponding number of thousands separators.

Binary Floating Point Numbers

For data objects of type f, the truncation behavior is as follows:

1.  The number of [places](javascript:call_link\('abenplace_glosry.htm'\) "Glossary Entry") is reduced, and the number is rounded accordingly.
    
2.  If the output length is too short for [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry"), asterisks ("\*") are displayed instead of the numbers.
    

Character-Like and Byte-Like Data Types

For data types c, string, n, d, t, x and xtring, the truncation behavior is as follows:

1.  In a 12-hour format set using [ENVIRONMENT TIME FORMAT](javascript:call_link\('abapwrite_to_options.htm'\)) for data type t, first the space is removed and then the format is changed to the 24-hour format.
    
2.  For data fields and time fields of type d and t, all separators are removed, unless an addition such as [DD/MM/YY](javascript:call_link\('abapwrite_to_options.htm'\)) or [MM/DD/YY](javascript:call_link\('abapwrite_to_options.htm'\)) is specified for d.
    
3.  The right side is cut off.
    

Time Stamp

-   For the [time stamp type utclong](javascript:call_link\('abenutclong.htm'\)) the right side is cut off in the case of the statements [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) and [WRITE](javascript:call_link\('abapwrite-.htm'\)) without any separators being removed first.

-   For [time stamps in packed numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) whose output is produced using the addition [TIME ZONE](javascript:call_link\('abapwrite_to_options.htm'\)), the right side is cut off in the case of the statement [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) without any separators being removed first.

-   For [time stamps in packed numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) that are output using the addition [TIME ZONE](javascript:call_link\('abapwrite_to_options.htm'\)), elements are cut off the following order in the case of the statement [WRITE](javascript:call_link\('abapwrite-.htm'\)):

-   All separators in date and time are removed. The separators in the date are only not removed if a date formatting mask DD/MM/YY or similar is also specified.

-   The space between date and time is removed.

-   The right-hand side is cut off.

Example

This example shows the different truncation behavior for time stamps in packed numbers in list output using the statement WRITE when compared to all other combinations. The format of the output is shown below the source code.

DATA(ts) = utclong\_current( ).
DATA(tspl) = cl\_abap\_tstmp=>utclong2tstmp( ts ).
DATA text TYPE c LENGTH 24.
SET COUNTRY 'US'.
WRITE ts TO text   TIME ZONE 'UTC'.
WRITE AT / text.
WRITE tspl TO text TIME ZONE 'UTC'.
WRITE AT / text.
WRITE: AT /(24) ts   TIME ZONE 'UTC',
       AT /(24) tspl TIME ZONE 'UTC'.

04/08/2019 08:10:16.1539
04/08/2019 08:10:16,1539
04/08/2019 08:10:16.1539
04082019 081016.1539740

Continue
![Example](exa.gif "Example") [WRITE TO, Truncation Behavior](javascript:call_link\('abenwrite_truncation_abexa.htm'\))