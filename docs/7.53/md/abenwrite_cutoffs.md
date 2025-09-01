  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [WRITE - TO](javascript:call_link\('abapwrite_to.htm'\)) → 

WRITE - Cutoff Behavior

This section describes the cutoff behavior of the system, if the target field length for the statement [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) or the output length for the statement [WRITE](javascript:call_link\('abapwrite-.htm'\)) is less than the length required for the [predefined](javascript:call_link\('abenwrite_formats.htm'\)) format or the format defined using [format\_options](javascript:call_link\('abapwrite_to_options.htm'\)).

The following sections explain the steps involved in truncating data. The result is truncated until it is short enough to fit the available space.

If the individual [formatting options](javascript:call_link\('abapwrite_to_options.htm'\)) deviate from the rules shown here, these deviations are described for the relevant option.

-   [Numeric Data Types](#abenwrite-cutoffs-1--------integers-and-packed-numbers---@ITOC@@ABENWRITE_CUTOFFS_2)

-   [Decimal Floating Point Numbers](#abenwrite-cutoffs-3--------binary-floating-point-numbers---@ITOC@@ABENWRITE_CUTOFFS_4)

-   [Character-Like and Byte-Like Data Types](#abenwrite-cutoffs-5--------time-stamps---@ITOC@@ABENWRITE_CUTOFFS_6)

Numeric Data Types

Integers and Packed Numbers

For data objects of numerical data types (b, s), i, int8, and p, the cutoff behavior is as follows:

1.  The thousand separators are omitted from left to right.
2.  If the value is positive, the place for the sign is omitted on the right. If the value is negative, the minus sign is preserved.
3.  (b, s), i, int8, and p are truncated on the left and an asterisk ("\*") is inserted in the first place for identification purposes.

The type int8 produces a syntax check warning (which can be hidden by a pragma), if it is known statically that the output length is less than the predefined length 20.

Decimal Floating Point Numbers

For data objects of type decfloat16 and decfloat34, the cutoff behavior is as follows:

1.  In [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry"), the thousand separators are omitted from left to right.
2.  In [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry"), the decimal points are rounded commercially. In [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry"), the mantissa is rounded commercially.
3.  If there is not enough space for the integer digits in mathematical notation, the system automatically switches to scientific notation.
4.  The handleable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

-   if the length is not sufficient for the display of at least one integer digit in mathematical notation or one place of the mantissa in scientific notation,

-   if the length is not sufficient for mathematical notation when the output format SIGN\_AS\_POSTFIX is used for commercial notation,

-   if the length is not sufficient for the output format SCALE\_PRESERVING or SCALE\_PRESERVING\_SCIENTIFIC (where the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") is preserved),

The predefined output lengths of 24 or 46 are sufficient for mathematical notation of 16 or 34 place numbers with a sign, a decimal point, and a corresponding number of thousand separators.

Binary Floating Point Numbers

For data objects of type f, the cutoff behavior is as follows:

1.  The number of [places](javascript:call_link\('abenplace_glosry.htm'\) "Glossary Entry") is reduced and the number is rounded accordingly.
2.  If the output length is too short for [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry"), asterisks ("\*") are displayed instead of the numbers.

Character-Like and Byte-Like Data Types

For data types c, string, n, d, t, x and xtring, the cutoff behavior is as follows:

1.  In a 12-hour format set using [ENVIRONMENT TIME FORMAT](javascript:call_link\('abapwrite_to_options.htm'\)) for data type t, first the space is removed and then the format is changed to the 24-hour format.
2.  For data fields and time fields of type d and t, all separators are removed, unless an addition such as [DD/MM/YY](javascript:call_link\('abapwrite_to_options.htm'\)) or [MM/DD/YY](javascript:call_link\('abapwrite_to_options.htm'\)) is specified for d.
3.  The right side is cut off.

Time Stamps

For [time stamps](javascript:call_link\('abentime_stamp_oview.htm'\)) that are output with the addition [TIME ZONE](javascript:call_link\('abapwrite_to_options.htm'\)), the cutoff behavior for the [WRITE](javascript:call_link\('abapwrite-.htm'\)) statement is as follows:

1.  All separators in the date and time are removed. The separators in the date are only not removed if a date formatting mask DD/MM/YY or similar is also specified.
2.  The space between date and time is removed.
3.  The right side is cut off. .

When the statement [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) is used, the right side is cut off and the separators are not removed beforehand.

Executable Example

[WRITE, Cutoff Behavior](javascript:call_link\('abenwrite_cutoff_abexa.htm'\))

Continue
![Example](exa.gif "Example") [WRITE, Cutoff Behavior](javascript:call_link\('abenwrite_cutoff_abexa.htm'\))