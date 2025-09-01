---
title: "ASSIGN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_shortref.htm) Syntax ASSIGN mem_area(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) TO <fs> casting_spec(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapa
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm"
abapFile: "abapassign.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "field-symbol", "abapassign"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ASSIGN%2C%20ABAPASSIGN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ASSIGN

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_shortref.htm)

Syntax

ASSIGN [mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) TO <fs> [casting\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm)
                        [range\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_range.htm)
                        *\[*[ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_else_unassign.htm)*\]*.

Effect

This statement assigns the memory area specified using [mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) to the field symbol <fs>. A data object or a memory area calculated from the address of a data object can be assigned. After a successful assignment, the field symbol refers to the assigned memory area and can be used in operand positions. When used in a statement, it works like a dereferenced data reference, meaning that the statement works with the content of the memory area.

The following can be specified for <fs>:

-   An existing field symbol with appropriate typing.
-   An inline declaration [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield-symbol_inline.htm). The typing depends on the [mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) specified.

The data type used to handle the assigned memory area depends on the specification in [casting\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm). Either an explicit [casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry") can be performed, or the field symbol inherits the data type of the data object specified in the assignment. In both cases, the data type used must [match](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm) the [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol. A field symbol to which a memory area is assigned, has this data type after the assignment and behaves like a data object of this type.

The assigned memory area mem\_area must be at least as long as the data type specified in casting\_spec and must have at least the same [alignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenalignment_glosry.htm "Glossary Entry"). If the data type determined in casting\_spec is [deep](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeep_glosry.htm "Glossary Entry"), the deep components must correspond exactly in their type and position.

The specification in [range\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_range.htm) is used to define the memory area that can be assigned to the field symbol.

If the assignment is not successful. the behavior depends on the assigned [mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) and on the addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_else_unassign.htm):

-   If a [static assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_static_dobj.htm) is not successful, sy-subrc is not set. No memory area is assigned to the field symbol. The field symbol has the state unassigned after the ASSIGN statement. The addition ELSE UNASSIGN is used implicitly and must not be specified.
-   If a [dynamic assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_dobj.htm), an [assignment of dynamic components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_dynamic_components.htm), a [dynamic access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_access.htm) or an [assignment of a table expression](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_3@3@) is not successful, sy-subrc is set to 4 or 8 and:
    
    -   If ELSE UNASSIGN is not specified, the field symbol keeps its previous state.
    -   If ELSE UNASSIGN is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the ASSIGN statement.
    
    Some invalid dynamic specifications in the [assignment of dynamic components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_dynamic_components.htm) do not set sy-subrc but raise an exception.
    
-   An assignment of the constructor operators [NEW](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_1@1@) or [CASE](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_2@2@) is either successful or leads to an exception and the addition ELSE UNASSIGN must not be used.

If an assignment would lead to illegal memory accesses, an exception is raised for both static and dynamic ASSIGN statements.

System Fields

The ASSIGN statement sets the return code for a [dynamic assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_dobj.htm), an [assignment of dynamic components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_dynamic_components.htm), a [dynamic access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_access.htm) or an [assignment of a table expression](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_3@3@). For an [assignment of the constructor operator NEW](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_1@1@), the return code is set by the constructor operator. The return code is not set for a [static assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_static_dobj.htm) and an [assignment of the constructor operator CAST](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_2@2@).

sy-subrc

Meaning

0

Assignment was successful.

4

Assignment was not successful.

8

Assignment of [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_writable_exp.htm) was not successful.

Hints

-   The state of the field symbol can be checked with the [predicate expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [<fs> IS ASSIGNED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_assigned.htm).
-   When setting field symbols using ASSIGN, permission to access the assigned data object is only checked at the position of the statement. The field symbol can then be passed on and used to access the assigned data object in any position. To prevent access to private and read-only attributes using field symbols outside classes, field symbols for these attributes should not be published externally. A constant a read-only input parameter or an [immutable variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimmutable_variable_glosry.htm "Glossary Entry"), however, can never be made modifiable by passing a field symbol.
-   An obsolete form of the statement ASSIGN is [ASSIGN LOCAL COPY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_local_copy.htm).

Example

Three field symbols are assigned the subfields for year, month, and day of the system field sy-datlo. The subfields can then be addressed using field symbols.

FIELD-SYMBOLS <year>  TYPE n.
FIELD-SYMBOLS <month> TYPE n.
FIELD-SYMBOLS <day>   TYPE n.
ASSIGN sy-datlo+0(4) TO <year>.
ASSIGN sy-datlo+4(2) TO <month>.
ASSIGN sy-datlo+6(2) TO <day>.
cl\_demo\_output=>new(
  )->write(   <year>
  )->write(   <month>
  )->display( <day> ).

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST

-   Cause: The type of the source field and the target type do not match exactly in offset and type in those components that are strings, tables, or references.
    Runtime error: ASSIGN\_CASTING\_ILLEGAL\_CAST

CX\_SY\_ASSIGN\_CAST\_UNKNOWN\_TYPE

-   Cause: A type specified dynamically after CASTING is unknown.
    Runtime error: ASSIGN\_CASTING\_UNKNOWN\_TYPE

CX\_SY\_ASSIGN\_OUT\_OF\_RANGE

-   Cause: The data object in addition RANGE does not contain the assigned data object.
    Runtime error: ASSIGN\_FIELD\_NOT\_IN\_RANGE

CX\_SY\_ASSIGN\_ILLEGAL\_COMPONENT

-   Cause: A dynamically specified component does not exist.
    Runtime error: ASSIGN\_ILLEGAL\_COMPONENT

Uncatchable Exceptions

-   Cause: The field symbol is structured and the assigned field is shorter than the structure.
    Runtime error: ASSIGN\_BASE\_TOO\_SHORT
-   Cause: The alignment for field f is too short for the type of the field symbol.
    Runtime error: ASSIGN\_BASE\_WRONG\_ALIGNMENT
-   Cause: Only simple types can be specified for TYPE.
    Runtime error: ASSIGN\_CAST\_COMPLEX\_TYPE
-   Cause: The source field is longer than 16 bytes and cannot be interpreted as a type p field.
    Runtime error: ASSIGN\_CAST\_P\_TOO\_LARGE
-   Cause: The alignment of field f is too short for the type specified in TYPE.
    Runtime error: ASSIGN\_CAST\_WRONG\_ALIGNMENT
-   Cause: The length of field f does not match the type specified in TYPE.
    Runtime error: ASSIGN\_CAST\_WRONG\_ALIGNMENT
-   Cause: The type specified in TYPE is unknown.
    Runtime error: ASSIGN\_CAST\_WRONG\_TYPE
-   Cause: A maximum of 14 columns is allowed.
    Runtime error: ASSIGN\_DECIMALS\_TOO\_HIGH
-   Cause: Decimal places are allowed only for type p.
    Runtime error: ASSIGN\_DECIMALS\_WRONG\_TYPE
-   Cause: A length of 0 was specified for field f.
    Runtime error: ASSIGN\_LENGTH\_0
-   Cause: A length less than 0 was specified for field f.
    Runtime error: ASSIGN\_LENGTH\_NEGATIVE
-   Cause: An offset or length was specified for field f and the data type of the assigning field does not allow partial access. (This is the case for data types I, F, and P.)
    Runtime error: ASSIGN\_OFFSET\_NOTALLOWED
-   Cause: In the area addressed in the offset and length specifications for field f, deep components exist (data references, object references, strings, internal tables), which may not be overwritten.
    Runtime error: ASSIGN\_OFF+LENGTH\_ILLEGAL\_CAST
-   Cause: Field f is not a data reference. However, a data reference was expected.
    Runtime error: ASSIGN\_REFERENCE\_EXPECTED
-   Cause: The type of the source field and the target type do not match exactly in offset and type in those components that are strings, tables, or references.
    Runtime error: ASSIGN\_STRUCTURE\_ILLEGAL\_CAST
-   Cause: Substrings cannot be assigned to a field symbol.
    Runtime error: ASSIGN\_SUBSTRING\_NOT\_ALLOWED
-   Cause: The field symbol is typed and the type of the assigned field is incompatible with it.
    Runtime error: ASSIGN\_TYPE\_CONFLICT
-   Cause: The type of the source field contains strings, tables, or references.
    Runtime error: ASSIGN\_TYPE\_ILLEGAL\_CAST
-   Cause: The type of the source field is a structure not compatible with the target type.
    Runtime error: ASSIGN\_UC\_STRUCT\_CONFLICT

Continue
[ASSIGN, mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm)
[ASSIGN, casting\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm)
[ASSIGN, range\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_range.htm)
[ASSIGN, ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_else_unassign.htm)