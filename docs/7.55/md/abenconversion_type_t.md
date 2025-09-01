  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) →  [Date fields, time fields, and time stamp fields as source fields](javascript:call_link\('abendate_time_source_fields.htm'\)) → 

Source Field Type t

The conversion rules are designed in such a way that, when data objects of time type [t](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) are assigned to character-like data objects, they behave character-like and numeric in assignments to numeric data objects. The latter is the basis for calculating time in arithmetic expressions. If the content of data objects of type t is time specifications in the format "hhmmss", and the values only correspond to valid times of day (hh is between 00 and 23, mm and ss are between 00 and 59), the value assigned to a numeric data object corresponds to the number of seconds since midnight.

Although the conversion rules actually allow the assignment of time fields that contain invalid data, this is not recommended.

-   [Numeric Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_T_1)

-   [Character-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_T_2)

-   [Byte-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_T_3)

-   [Date/Time Fields as Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_T_4)

Numeric Target Fields

Target

Conversion

i, int8, (b, s)

If the source field contains only digits, the content is interpreted as a time specification in the format "hhmmss" from which the value hh\*3600+mm\*60+ss is calculated and then converted to the internal representation of the corresponding integer. If the source field does not only contain digits, the target field is given the value 0. If the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") of the internal data types b and s is not sufficient, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

p

If the source field contains only digits, the content is interpreted as a time specification in the format "hhmmss" from which the value hh\*3600+mm\*60+ss is calculated and then converted to the internal representation of a packed number. If the value range of the target field is too small, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised. If the source field does not contain only digits, the target field receives the value 0.

decfloat16, decfloat34

If the source field contains only digits, the content is interpreted as a time specification in the format "hhmmss" from which the value hh\*3600+mm\*60+ss is calculated and then converted to the internal representation of a decimal floating point number with [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") of 0. If the source field does not contain only digits, the target field is given the value 0.

f

If the source field contains only digits, the content is interpreted as a time specification in the format "hhmmss" from which the value hh\*3600+mm\*60+ss is calculated and then converted to the internal representation of a binary floating point number. If the source field does not contain only digits, the target field is given the value 0.

Example

The result of the following conversion has the value 66656. This is the number of seconds of the specified time since midnight.

DATA tim TYPE t VALUE '183056'.
DATA(result) = CONV i( tim ).

Character-Like Target Fields

Target

Conversion

c

The content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

n

The characters in the source field are inserted in the target field, left-aligned. Trailing blanks in the source field are transferred. If the target field is longer than the source field, it is padded on the right with the character "0". If the target field is shorter, it is truncated on the right.

string

The content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

Example

The string resulting from the conversion is 18. Four characters 3056 are truncated on the right.

DATA tim TYPE t VALUE '183056'.
TYPES n2 TYPE n LENGTH 2.
DATA(result) = CONV n2( tim ).

Byte-Like Target Fields

Target

Conversion

x

The content of the source field is first converted to data type i (see above) and then to type x (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

xstring

The content of the source field is first converted to data type i (see above) and then to type xstring (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

Example

The byte chain resulting from the conversion is 010460. This is the integer 66655 or the number of seconds since midnight.

DATA tim TYPE t VALUE '183056'.
DATA(result) = CONV xstring( tim ).

Date/Time Fields as Target Fields

‎Target

Conversion

d

Not supported. Produces a syntax error or runtime error.

t

The content of the source field is transferred unconverted.

utclong

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Example

The conversion of t to d, which is not known statically, is not supported and produces the runtime error MOVE\_NOT\_SUPPORTED.

FIELD-SYMBOLS <fs> TYPE data.
ASSIGN sy-uzeit TO <fs>.
DATA(result) = CONV d( <fs> ).