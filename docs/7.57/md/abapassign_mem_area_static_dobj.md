---
title: "Syntax"
description: |
  ... dobj+off(len)  ... Effect Static variant for specifying the memory area mem_area(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area.htm) of the statement ASSIGN(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm). In the sta
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_static_dobj.htm"
abapFile: "abapassign_mem_area_static_dobj.htm"
keywords: ["do", "if", "case", "try", "data", "field-symbol", "abapassign", "mem", "area", "static", "dobj"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm) →  [ASSIGN, mem\_area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ASSIGN, static_dobj, ABAPASSIGN_MEM_AREA_STATIC_DOBJ, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

ASSIGN, static\_dobj

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_shortref.htm)

Syntax

... dobj*\[*+off*\]**\[*(len)*\]*  ...

Effect

Static variant for specifying the memory area [mem\_area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm). In the static variant, a data object dobj with an optional offset/length +off(len) can be specified in accordance with the rules described in the section [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands_data_objects.htm), with the following exception: A data reference dereferenced using the dereferencing operator ->\* belongs to the [dynamic variants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_dynamic_dobj.htm). dobj specified using a field symbol, on the other hand, is a static variant.

The memory area is determined by the specified offset/length +off(len) as follows:

-   If no offset/length specification is made, the assigned memory area corresponds exactly to the memory area of the data object. The entire data object dobj is assigned to the field symbol, and statements that contain the field symbol in operand positions work with the data object.
-   If an offset/length is specified, the memory area is determined from the memory address of the data object and the offset/length specifications. The general rules for [substring accesses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoffset_length.htm) apply. If these are met, memory outside the dobj field limits can also be addressed. The addressable memory is based on the specification [range\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_range.htm). If an offset off is specified without a length len, the length of the data object dobj is used implicitly for len. If a field symbol is specified for dobj, to which a memory area is already assigned, the content of the offset specification can be negative, as long as the area specified in range\_spec is not exited. The following restrictions apply when offsets/lengths are specified:
    -   No inline declaration of a field symbol with [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield-symbol_inline.htm) can be made.
    -   The data type of dobj cannot be string or xstring, which means that len can never be less than or equal to zero.
    -   If the name of a data object is specified for dobj and if no explicit [RANGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_range.htm) addition is used, no offset off can be specified without the length len. If the name of a field symbol is specified for dobj, its data type must be [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") and elementary whenever an offset off is specified without length len.

The return code sy-subrc is not set for this variant. If the assignment is not successful, no memory area is assigned to the field symbol after the ASSIGN statement. The addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_else_unassign.htm) is used implicitly and cannot be specified.

In an inline declaration of the field symbol with [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield-symbol_inline.htm), this symbol is typed with the exact data type that can be determined statically for mem\_area. If mem\_area is a generically typed field symbol or a generically typed formal parameter, the generic type is used.

Hints

-   Ensure that the system field sy-subrc is not evaluated by mistake after the static variant. The value of the system field in this case is always the same as it was before the ASSIGN statement was executed and therefore does not indicate whether the statement was successful.
-   In order to check the success of the assignment, the [predicate expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [<fs> IS ASSIGNED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_assigned.htm) can be used.
-   Even the static variant is dynamic in the sense that the offset and length specifications may be dynamic. However, dynamic offset/length specifications do not lead to the system field sy-subrc being set.
-   If a generically typed field symbol or a generically typed formal parameter is specified for dobj, its current type at runtime determines the behavior, for example whether offsets/lengths can be specified or not.

Example

Assignment of the memory area of the individual characters of a data object text to a field symbol <char>.

DATA text TYPE c LENGTH 10 VALUE '0123456789'.
FIELD-SYMBOLS <char> TYPE c.
DATA off TYPE i.
DO 10 TIMES.
  off = sy-index - 1.
  ASSIGN text+off(1) TO <char>.
  cl\_demo\_output=>write\_text( |{ <char> }| ).
ENDDO.
cl\_demo\_output=>display( ).

Example

A field symbol <fs1> points to the component col1 of the structure struct. In the first assignment of <fs1> to a field symbol <fs2>, an offset without length is specified and therefore the length 10 of the component col1 is used implicitly. This assignment is not possible, since the assigned memory area is outside of the allowed range. In the second assignment, the allowed memory area is expanded to the entire structure using the assignment [RANGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_range.htm) and the assignment is successful.

DATA:
  BEGIN OF struct,
    col1 TYPE c LENGTH 10 VALUE 'aaaaaaaaaa',
    col2 TYPE c LENGTH 10 VALUE 'bbbbbbbbbb',
  END OF struct.
FIELD-SYMBOLS: <fs1> TYPE c,
               <fs2> TYPE c.
ASSIGN struct-col1 TO <fs1>.
ASSIGN <fs1>+5 TO <fs2>.
IF <fs2> IS NOT ASSIGNED.
  cl\_demo\_output=>write( \`No assignment without sufficient RANGE\` ).
ENDIF.
ASSIGN <fs1>+5 TO <fs2> RANGE struct.
IF <fs2> IS ASSIGNED.
  cl\_demo\_output=>display( \`Assignment with sufficient RANGE\` ).
ENDIF.