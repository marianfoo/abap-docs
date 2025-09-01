# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Assignments / Special Assignments

Included pages: 3


### abenabap_data_move.htm

---
title: "Special Assignments"
description: |
  This section handles statements for special assignments: -   The assignment operator =(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_multiples.htm) for multiple assignments -   UNPACK(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunpack.htm) for a special
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_move.htm"
abapFile: "abenabap_data_move.htm"
keywords: ["do", "data", "abenabap", "move"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) → 

Special Assignments

This section handles statements for special assignments:

-   [The assignment operator \=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_multiples.htm) for multiple assignments

-   [UNPACK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunpack.htm) for a special conversion of packed numbers

Continue
[destination1 = destination2 = ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_multiples.htm)
[UNPACK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunpack.htm)


### abapmove_multiples.htm

---
title: "Syntax"
description: |
  destination1 = destination2 = ... = destination = rhs. Effect The assignment operator =(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_operator.htm) can be used to perform multiple assignments at once within a single statement. This statement is the same as: destination  =
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_multiples.htm"
abapFile: "abapmove_multiples.htm"
keywords: ["do", "if", "data", "types", "abapmove", "multiples"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Special Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_move.htm) → 

destination1 = destination2 = ...

Syntax

destination1 = destination2 = ... = destination = rhs.

Effect

The [assignment operator \=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_operator.htm) can be used to perform multiple assignments at once within a single statement. This statement is the same as:

destination  = rhs
         ... = destination
destination2 = ...
destination1 = destination2.

The same settings can be specified for rhs as for the simple [assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_operator.htm). Only existing variables can be specified for destination, destination1, destination2, but no [inline declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm).

Hint

Any conversions are performed for each assignment, which means that a value assigned to a data object on the left side may be converted multiple times if the operands have different data types. To assign the value of lhs to different data objects with one conversion each, multiple statements are needed.

Example

After the assignments, all involved data objects are given the name "Hugo".

DATA: name  TYPE string,
      name1 TYPE string,
      name2 TYPE string,
      name3 TYPE string.
name = \`Hugo\`.
name3 = name2 = name1 = name.


### abapunpack.htm

---
title: "UNPACK"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunpack_shortref.htm) Syntax UNPACK source TO destination. Effect This statement converts the content of the data object source in accordance with special rules and assigns the converted content to the data object destin
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunpack.htm"
abapFile: "abapunpack.htm"
keywords: ["do", "if", "try", "catch", "data", "types", "abapunpack"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Special Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_move.htm) → 

UNPACK

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunpack_shortref.htm)

Syntax

UNPACK source TO destination.

Effect

This statement converts the content of the data object source in accordance with special rules and assigns the converted content to the data object destination. source expects the data type p of length 16 without [decimal places](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecimal_place_glosry.htm "Glossary Entry") and no operands of data type decfloat16 or decfloat34 can be used. The data type of destination must be character-like and [flat](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenflat_glosry.htm "Glossary Entry").

The conversion is performed according to the following rules:

-   If the data type of source is not of type p with length 16 and without decimal places, the content of source is converted to this data type. Contrary to the rules described in [Conversion Rules for Elementary Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_elementary.htm), any decimal separator in source is completely ignored.
    

-   The digits of the interim result are assigned as right-aligned digits to the data object destination and without a plus/minus sign. Any surplus places in destination are padded with zeros on the left. If the length of destination is not sufficient, it is truncated on the left.
    

Hints

-   The function of the statement UNPACK is based on the fact that the [BCD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbcd_glosry.htm "Glossary Entry") representation of a [place](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenplace_glosry.htm "Glossary Entry") corresponds to the second half byte of code of a digit in most character representations. This conversion is generally known as "Unpacking".

-   The statement [PACK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abappack.htm) used for packing is obsolete and can be replaced by a regular [assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove.htm).
    

Example

After the assignments, char1 and char2 contain the values "123,456" and "0000123456".

DATA: pack  TYPE p LENGTH 8 DECIMALS 3 VALUE '123.456',
      char1 TYPE c LENGTH 10,
      char2 TYPE c LENGTH 10.
char1 = pack.
UNPACK pack TO char2.

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_CONVERSION\_NO\_NUMBER

-   Cause: Source field cannot be interpreted as a number
    Runtime error: CONVT\_OVERFLOW

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow during conversion (type p)
    Runtime error: BCD\_OVERFLOW
    

Uncatchable Exceptions

-   Cause: Source field (type p) contains an incorrect BCD format
    Runtime error: BCD\_BADDATA
