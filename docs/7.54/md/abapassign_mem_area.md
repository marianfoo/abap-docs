---
title: "Syntax"
description: |
  ... static_dobj(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_static_dobj.htm)  dynamic_dobj(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm)  dynamic_access(https://help.sap.com/doc/abapdocu_754_index_ht
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area.htm"
abapFile: "abapassign_mem_area.htm"
keywords: ["do", "if", "try", "class", "data", "internal-table", "field-symbol", "abapassign", "mem", "area"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign.htm) → 

ASSIGN - mem\_area

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_shortref.htm)

Syntax

... [static\_dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_static_dobj.htm)
  *|* [dynamic\_dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm)
  *|* [dynamic\_access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_access.htm)
  *|* [writable\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_writable_exp.htm) ...

Alternatives:

Static Specification
1\. ... [static\_dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_static_dobj.htm)
Dynamic Specifications
2\. ... [dynamic\_dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm)
3\. ... [dynamic\_access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_access.htm)
Specifying an Expression
4\. ... [writable\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_writable_exp.htm)

Effect

mem\_area is used to specify the memory area that is assigned to the field symbol.

-   The first variant [static\_dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_static_dobj.htm) is a static variant that is assigned a statically defined data object or part of one of these objects.
    
-   The second and third variants are dynamic. The variants [dynamic\_dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm) are used for general dynamic access to data objects; the variants [dynamic\_access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_access.htm) are used for dynamic access to the attributes of classes.
    
-   The result of a [writable expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry") is assigned in the fourth variant.
    

In an inline declaration of the field symbol with [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield-symbol_inline.htm), the typing of the field symbol is performed for the static variant and for a specified expression with the data type mem\_area. In the dynamic variants, the typing is performed with the generic type data.

The variants differ in the way that the system behaves after a successful assignment:

-   The return code sy-subrc is not set for the static variant.
    
-   In dynamic variants and when a [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_writable_exp.htm) is specified, the statement ASSIGN sets the return code sy-subrc.
    

Notes

-   In an internal table with a [header line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheader_line_glosry.htm "Glossary Entry"), either the header line or the [table body](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_body_glosry.htm "Glossary Entry") can be assigned to a field symbol. In the statement ASSIGN, the name of an internal table with a header line addresses the header line. To address the table body, \[\] must be appended to the name in the usual way. A field symbol to which a table body is assigned behaves in the same way in operand positions as a table without a header line.
    
-   Field symbols to which data objects or parts of data objects are assigned in the [heap](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_glosry.htm "Glossary Entry") are memory-preserving, like [heap references](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_reference_glosry.htm "Glossary Entry").
    
-   In an inline declaration of the field symbol with [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield-symbol_inline.htm), the data type of the assigned memory area determines the typing of the field symbol.
    

Continue
[ASSIGN - static\_dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_static_dobj.htm)
[ASSIGN - dynamic\_dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm)
[ASSIGN - dynamic\_access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_access.htm)
[ASSIGN - writable\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_writable_exp.htm)