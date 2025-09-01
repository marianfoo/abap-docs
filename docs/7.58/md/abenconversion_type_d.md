---
title: "Source Field Type d"
description: |
  The conversion rules are designed in such a way that when data objects of the date type d(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_date_time.htm) are assigned to character-like data objects they behave like character-like objects and numerically in assignments t
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_type_d.htm"
abapFile: "abenconversion_type_d.htm"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "abenconversion", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_elementary.htm) →  [Date Fields, Time Fields, and Time Stamp Fields as Source Fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendate_time_source_fields.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Source%20Field%20Type%20d%2C%20ABENCONVERSION_TYPE_D%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Source Field Type d

The conversion rules are designed in such a way that when data objects of the date type [d](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_date_time.htm) are assigned to character-like data objects they behave like character-like objects and numerically in assignments to numeric data objects. The latter is the basis for date calculations in arithmetic expressions.

Only dates in the format yyyymmdd are valid for data objects of type d where 00010101 is the first valid value. The conversion rules, however, also allow the assignment of date fields that contain invalid data. The latter is not recommended.

-   [Numeric Target Fields](#abenconversion-type-d-1-------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_D_2)
-   [Byte-Like Target Fields](#abenconversion-type-d-3-------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_D_4)

Numeric Target Fields   

Target

Conversion

i, int8, (b, s)

If the source field contains a valid date in the format yyyymmdd, it is used to calculate the number of days since 01.01.0001, and this value is then converted to the internal representation of the corresponding integer. If the source field contains an invalid date, the target field is assigned the value 0. If the [value range](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_range_glosry.htm "Glossary Entry") for the internal data types b and s is insufficient, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

p

If the source field contains a valid date in the format yyyymmdd, it is used to calculate the number of days since 01.01.0001, and this value is then converted to the internal representation of a packed number. If the value range of the target field is too small, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised. If the source field contains an invalid date, the target field is assigned the value 0.

decfloat16, decfloat34

If the source field contains a valid date in the format yyyymmdd, it is used to calculate the number of days since 01.01.0001, and this value is then converted to the internal representation of a decimal floating point number with a [scaling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscale_glosry.htm "Glossary Entry") of 0. If the source field contains an invalid date, the target field is assigned the value 0.

f

If the source field contains a valid date in the format yyyymmdd, it is used to calculate the number of days since 01.01.0001, and this value is then converted to the internal representation of a binary floating point number. If the source field contains an invalid date, the target field is assigned the value 0.

Hints

-   The conversion of a date into the number of days since 01.01.001 is designed in such a way that the transition from the Julian to Gregorian calendar is respected: 4.10.1582 results in 577,736 and 15.10.1582 in 577,737. Converting the dates for the nonexistent days between 5.10.1582 and 14.10.1582 produces the same result as converting the existing days from 15.10.1582 to 24.10.1582.
-   The assignment of the values 00000000 and 00010101 to a numeric type produces the value 0 in each case. The [assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_type_ibs.htm) of the value 0 to a date field produces 00000000. This means that the assignment of the value 00010101 to a numeric type is not reversible.

Example

The result of the following conversion has the value 736341. This is the number of days of the specified date since 01.01.0001.

DATA dat TYPE d VALUE '20170111'.
FINAL(result) = CONV i( dat ).

Character-Like Target Fields   

Target

Conversion

c

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_type_c.htm)

n

The characters in the source field are passed left-aligned to the target field. Trailing blanks in the source field are passed. If the target field is longer than the source field, it is padded on the right with the character 0. If the target field is shorter, it is truncated on the right.

string

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_type_c.htm)

Example

The string resulting from the conversion is 2017. Four characters 0111 are cut off on the right.

DATA dat TYPE d VALUE '20170111'.
TYPES n4 TYPE n LENGTH 4.
FINAL(result) = CONV n4( dat ).

Byte-Like Target Fields   

Target

Conversion

x

The content of the source field is first converted to data type i (see above) and then to type x (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_type_ibs.htm)).

xstring

The content of the source field is first converted to data type i (see above) and then to type xstring (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_type_ibs.htm)).

Example

The byte chain resulting from the conversion is 0B3C55. This is the integer 736341 or the number of days since 01.01.0001.

DATA dat TYPE d VALUE '20170111'.
FINAL(result) = CONV xstring( dat ).

Date/Time Fields as Target Fields   

Target

Conversion

d

The content of the source field is passed unconverted.

t

Not supported. Produces a syntax error or runtime error.

utclong

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Example

The conversion of d to t, which is not known statically, is not supported and produces the runtime error MOVE\_NOT\_SUPPORTED.

DATA(date) = cl\_demo\_date\_time=>get\_user\_time( ).
FIELD-SYMBOLS <fs> TYPE data.
ASSIGN date TO <fs>.
FINAL(result) = CONV t( <fs> ).