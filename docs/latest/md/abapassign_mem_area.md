---
title: "Syntax"
description: |
  ... static_dobj(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_static_dobj.htm)  dynamic_dobj(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_dobj.htm)  dynamic_components(https://help.sap.com/doc/abapdoc
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area.htm"
abapFile: "abapassign_mem_area.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "internal-table", "field-symbol", "abapassign", "mem", "area"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ASSIGN%2C%20mem_area%2C%20ABAPASSIGN_MEM_AREA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ASSIGN, mem\_area

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_shortref.htm)

Syntax

... [static\_dobj](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_static_dobj.htm)
  *|* [dynamic\_dobj](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_dobj.htm)
  *|* [dynamic\_components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_dynamic_components.htm)
  *|* [dynamic\_access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_access.htm)
  *|* [writable\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_writable_exp.htm) ...

Alternatives:

Static Specification
1\. ... [static\_dobj](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_static_dobj.htm)
Dynamic Specifications
2\. ... [dynamic\_dobj](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_dobj.htm)
3\. ... [dynamic\_components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_dynamic_components.htm)
4\. ... [dynamic\_access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_access.htm)
Specifying an Expression
5\. ... [writable\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_writable_exp.htm)

Effect

mem\_area is used to specify the memory area that is assigned to a field symbol with the statement [ASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm):

-   The first variant [static\_dobj](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_static_dobj.htm) is a static variant in which a statically known data object or part of such an object is assigned.
-   The second, third and fourth variants are dynamic.
    -   The variants [dynamic\_dobj](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_dobj.htm) are used for general dynamic access to data objects.
    -   The variants [dynamic\_components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_dynamic_components.htm) are used for dynamic access to components of structures.
    -   The variants [dynamic\_access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_access.htm) are used for dynamic access to the attributes of classes.
-   The fifth variant assigns the result of a [writable expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwritable_expression_glosry.htm "Glossary Entry").

For an inline declaration of the field symbol with [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm), its typing is done with the data type of mem\_area for the static variant and when specifying a writable expression. For the dynamic variants the typing is done with the generic type [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm).

The variants differ as to how the system behaves after an unsuccessful assignment:

-   For the static variant, the return code sy-subrc is not set. The addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_else_unassign.htm) is used implicitly and cannot be specified.
-   For the dynamic variants, the statement ASSIGN sets the return code sy-subrc or can raise an exception. The addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_else_unassign.htm) can be specified.
-   When a [table expression](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_3@3@) is specified, the statement ASSIGN sets the return code sy-subrc. The addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_else_unassign.htm) can be specified.
-   When assigning constructor operators:
    
    -   For [NEW](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_1@1@) the return code sy-subrc is set by the constructor operator.
    -   For [CASE](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_2@2@) the return code sy-subrc is not set.
    
    The addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_else_unassign.htm) must not be specified because an assignment of a constructor operator is either successful or raises an exception.
    

Hints

-   In an internal table with a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"), either the header line or the [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry") can be assigned to a field symbol. In the statement ASSIGN, the name of an internal table with a header line addresses the header line. To address the table body, \[\] must be appended to the name as usual. A field symbol to which a table body is assigned behaves in the same way in operand positions as a table without a header line.
-   Field symbols to which data objects or parts of data objects are assigned in the [heap](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_glosry.htm "Glossary Entry") act in a memory-preserving way, like [heap references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_reference_glosry.htm "Glossary Entry").
-   In an inline declaration of the field symbol with [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm), the data type of the assigned memory area determines its typing.

Continue
[ASSIGN, static\_dobj](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_static_dobj.htm)
[ASSIGN, dynamic\_dobj](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_dobj.htm)
[ASSIGN, dynamic\_components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_dynamic_components.htm)
[ASSIGN, dynamic\_access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_access.htm)
[ASSIGN, writable\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_writable_exp.htm)