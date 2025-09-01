---
title: "Source Field Type t"
description: |
  The conversion rules are designed in such a way that, when data objects of time type t(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm) are assigned to character-like data objects, they behave like character-like objects and numerically in assignments to
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_t.htm"
abapFile: "abenconversion_type_t.htm"
keywords: ["insert", "do", "if", "try", "catch", "data", "types", "abenconversion", "type"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_elementary.htm) →  [Date Fields, Time Fields, and Time Stamp Fields as Source Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendate_time_source_fields.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Source Field Type t, ABENCONVERSION_TYPE_T, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

Source Field Type t

The conversion rules are designed in such a way that, when data objects of time type [t](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm) are assigned to character-like data objects, they behave like character-like objects and numerically in assignments to numeric data objects. The latter is the basis for calculating time in arithmetic expressions. If the content of data objects of type t is time specifications in the format hhmmss, and the values only correspond to valid times of day (hh is between 00 and 23, mm and ss are between 00 and 59), the value assigned to a numeric data object corresponds to the number of seconds since midnight.

Although the conversion rules actually allow the assignment of time fields that contain invalid data, this is not recommended.

-   [Numeric Target Fields](#abenconversion-type-t-1-------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_T_2)
-   [Byte-Like Target Fields](#abenconversion-type-t-3-------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_T_4)

Numeric Target Fields   

Target

Conversion

i, int8, (b, s)

If the source field contains only digits, the content is interpreted as a time specification in the format hhmmss from which the value hh\*3600+mm\*60+ss is calculated and then converted to the internal representation of the corresponding integer. If the source field does not only contain digits, the target field is given the value 0. If the [value range](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the internal data types b and s is not sufficient, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

p

If the source field contains only digits, the content is interpreted as a time specification in the format hhmmss from which the value hh\*3600+mm\*60+ss is calculated and then converted to the internal representation of a packed number. If the value range of the target field is too small, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised. If the source field does not contain only digits, the target field receives the value 0.

decfloat16, decfloat34

If the source field contains only digits, the content is interpreted as a time specification in the format hhmmss from which the value hh\*3600+mm\*60+ss is calculated and then converted to the internal representation of a decimal floating point number with [scaling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscale_glosry.htm "Glossary Entry") of 0. If the source field does not contain only digits, the target field is given the value 0.

f

If the source field contains only digits, the content is interpreted as a time specification in the format hhmmss from which the value hh\*3600+mm\*60+ss is calculated and then converted to the internal representation of a binary floating point number. If the source field does not contain only digits, the target field is given the value 0.

Example

The result of the following conversion has the value 66656. This is the number of seconds of the specified time since midnight.

DATA tim TYPE t VALUE '183056'.
FINAL(result) = CONV i( tim ).

Character-Like Target Fields   

Target

Conversion

c

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_c.htm)

n

The characters in the source field are inserted in the target field, left-aligned. Trailing blanks in the source field are transferred. If the target field is longer than the source field, it is padded on the right with the character "0". If the target field is shorter, it is truncated on the right.

string

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_c.htm)

Example

The string resulting from the conversion is 18. Four characters 3056 are cut off on the right.

DATA tim TYPE t VALUE '183056'.
TYPES n2 TYPE n LENGTH 2.
FINAL(result) = CONV n2( tim ).

Byte-Like Target Fields   

Target

Conversion

x

The content of the source field is first converted to data type i (see above) and then to type x (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_ibs.htm)).

xstring

The content of the source field is first converted to data type i (see above) and then to type xstring (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_ibs.htm)).

Example

The byte chain resulting from the conversion is 010460. This is the integer 66655 or the number of seconds since midnight.

DATA tim TYPE t VALUE '183056'.
FINAL(result) = CONV xstring( tim ).

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
FINAL(result) = CONV d( <fs> ).