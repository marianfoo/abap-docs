---
title: "Syntax"
description: |
  destination = dobj. Effect In the simplest assignment case, a data object dobj is on the right side of the assignment operator =(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm). This data object can be specified as described under Reading Positions(https://he
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove.htm"
abapFile: "abapmove.htm"
keywords: ["loop", "do", "if", "case", "try", "method", "data", "types", "internal-table", "field-symbol", "abapmove"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [\= - Assignment Operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm) → 

\= - Assign Data Objects

Syntax

destination = dobj.

Effect

In the simplest assignment case, a data object dobj is on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm). This data object can be specified as described under [Reading Positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects_usage_reading.htm). The content of the data object is assigned to the left side, destination. If necessary, type-specific conversions are made in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm). The variant shown here applies to all assignments between operands that are not reference variables. Special [rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove_cast.htm) apply to reference variables.

The following can be specified for destination:

-   Any data object that can be specified in a [writing position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwriting_position_glosry.htm "Glossary Entry"). The data type of the data object must be either [compatible](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompatible_glosry.htm "Glossary Entry") with the data type of dobj or it must be possible to convert the content of dobj into the data type of destination in accordance with one of the [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm).
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm). If the data type of dobj is complete, it is used for the declaration. If dobj is a generically typed field symbol or a formal parameter of this kind, the following data types are used:
    

-   string for csequence and clike

-   xstring for xsequence

-   decfloat34 for numeric and decfloat

-   p with the length 8 and no decimal places if p is generic

-   The [standard key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_key_glosry.htm "Glossary Entry") for a standard table type with generic primary table key

Other generic data types (except for table types) that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error.

Notes

-   A special assignment operator, [?=](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove_cast.htm), which performs a [down cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendown_cast_glosry.htm "Glossary Entry"), is available for [assignments of reference variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_assignments.htm).
    
-   If dobj and/or destination are field symbols, the content of the data objects to which the field symbols point is used (as in all ABAP statements). The actual pointer content of a field symbol can only be changed using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm) or the addition ASSIGNING when processing internal tables ([value semantics](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_semantics_glosry.htm "Glossary Entry")).
    
-   Inline declarations are not possible for every conceivable generic type of dobj. This is because, even in an inline declaration in the position of an actual parameter, the rules for deriving the data type for a generically typed output parameter of a method apply. Here, the typing check allows fewer combinations than the conversion rules of an assignment.
    
-   Strings and internal tables are addressed internally using references. When assignments are made between strings and between internal tables of the same type (if the line type itself does not contain any table types), for performance reasons, only the internal administrative information is passed. After the assignment, the actual string or the actual [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry") of the source as well as the target object are addressed ([sharing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensharing_glosry.htm "Glossary Entry")). Sharing is valid until the object is accessed to be changed. At this point, the sharing is canceled and a copy of the content is made. The sharing is displayed in the memory consumption display of ABAP Debugger and in the [Memory Inspector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmemory_inspector_glosry.htm "Glossary Entry") tool. For internal tables where the row type itself contains internal table types, no sharing takes place. Sharing can, however, take place for the subtables of a line type.
    
-   If an internal table with a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry") is specified as an operand of an assignment, in nearly all [operand positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_data_objects.htm), the header line is addressed and not the [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry"). To address the table body of a table with a header line, \[\] must be appended to the table name.
    
-   The statement [MOVE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove_obs.htm) is an obsolete way of assigning data objects.
    

Example

Assigns a literal to a text string.

DATA text TYPE string.
text = \`blah\`.

Example

Assigns a generically typed field symbol, <fs>, to a data object, number, declared inline. In the assignment, the field symbol has the type i, however the field number is created with the type decfloat34 when the program is generated. A syntax check warning about this is hidden using the pragma ##type.

FIELD-SYMBOLS <fs> TYPE numeric.
ASSIGN 1 TO <fs>.
DATA(number) = <fs> ##type.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_CONVERSION\_NO\_NUMBER

-   Cause: Operand cannot be interpreted as number when assigned to a [numeric data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")
    Runtime error: CONVT\_NO\_NUMBER
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW
    
-   Cause: Operand too big or (interim) result too big
    Runtime error: CONVT\_OVERFLOW
    

Non-Handleable Exceptions

-   Cause: Source field (type p) contains an incorrect BCD format
    Runtime error: BCD\_BADDATA
    
-   Cause: Assignment for deep structures not allowed if they overlap
    Runtime error: MOVE\_COMPLEX\_OVERLAP
    
-   Cause: Type conflict in assignment between object references
    Runtime error: MOVE\_INTERFACE\_NOT\_SUPPORTED,
    Runtime error: MOVE\_IREF\_NOT\_CONVERTIBLE,
    Runtime error: MOVE\_IREF\_TO\_OREF,
    Runtime error: MOVE\_OREF\_NOT\_CONVERTIBLE
    
-   Cause: Type conflict in assignment between data references.
    Runtime error: MOVE\_DREF\_NOT\_COMPATIBLE
    
-   Cause: Assignment between the involved types is not supported
    Runtime error: MOVE\_NOT\_SUPPORTED
    
-   Cause: Constants and literals cannot be overwritten
    Runtime error: MOVE\_TO\_LIT\_NOTALLOWED
    
-   Cause: Constants and literals cannot be overwritten
    Runtime error: MOVE\_TO\_LIT\_NOTALLOWED\_NODATA
    
-   Cause: During a loop on an internal table, an attempt is made to overwrite a reference variable that is associated with the internal table using REFERENCE INTO.
    Runtime error: MOVE\_TO\_LOOP\_REF