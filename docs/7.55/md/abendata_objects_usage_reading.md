---
title: "Read Positions"
description: |
  At a read position, the content of an operand is read but not changed when the statement is executed. Data objects can be specified as follows at read positions: -   Specification of a literal(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliteral_glosry.htm 'Glossary Entry'). -
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_reading.htm"
abapFile: "abendata_objects_usage_reading.htm"
keywords: ["do", "if", "try", "catch", "data", "types", "internal-table", "field-symbol", "abendata", "objects", "usage", "reading"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_data_objects.htm) → 

Read Positions

At a read position, the content of an operand is read but not changed when the statement is executed. Data objects can be specified as follows at read positions:

-   Specification of a [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliteral_glosry.htm "Glossary Entry").
    

-   Specification of a [data object visible](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlifetime_and_visibility.htm) at this position using the identifier dobj, a [field symbol](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_symbol_glosry.htm "Glossary Entry") <fs>, or a data reference dref->\* dereferenced using the [dereferencing operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendereferencing_operat_glosry.htm "Glossary Entry") \->\* if dref is typed completely.
    Here, the identifiers of data objects also include the specification of [text symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_symbol_glosry.htm "Glossary Entry") using the following:
    ... text-idf ...,
    Here, idf is the three-character ID of the text symbol or chaining of reference variables. If a field symbol is used, it must be assigned to a memory area and a data reference must point to a data object, otherwise an uncatchable exception is raised. As an alternative to specifying a text symbol using text-idf, the three-character ID of a text symbol can also be appended to the [text field literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_field_literal_glosry.htm "Glossary Entry") in parentheses:
    ... '...'(idf) ...
    If the text symbol exists in the currently loaded [text pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_pool_glosry.htm "Glossary Entry"), then the content of the corresponding text symbol is used instead of the text field literal, otherwise the literal is used.

-   If the data object is an internal table, the expressions dobj\[\], <fs>\[\], or dref->\*\[\] can also be used. An exception to this is specification of the internal table of a [table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry"), where \[\] cannot be appended to the name. When specifying dobj\[\], this guarantees that the [table body](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_body_glosry.htm "Glossary Entry") is addressed and no possible [header lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheader_line_glosry.htm "Glossary Entry"). If an internal table does not have a header line, its very name dobj (without \[\]) is interpreted as the table body in all operand positions. However, if an internal table does have a header line, its very name dobj (without \[\]) is interpreted as the header line and not as the table body in almost all operand positions. The operand positions in which the name of an internal table with a header line is interpreted as the internal table are listed in [internal tables with headers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_header_line.htm).

-   Specification of a [subarea](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length.htm) of a character-like or byte-like data object -or a character-like initial part of a structure- by specifying an [offset/length](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry").

-   At some positions, numeric values must be specified directly as digits. In contrast to [numeric literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumeric_literal_glosry.htm "Glossary Entry"), it is often not possible to specify a plus/minus sign. Examples are numbers specified in declarative statements for the length of elementary data objects or for the initial memory requirements of internal tables.

Hints

-   Text symbols cannot be listed at all read positions. For example, they are not allowed for specifying the target of dynamic [executions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_execution.htm).

-   A [system field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_field_glosry.htm "Glossary Entry") should only be specified as an operand in a read position if its content is not set by the same statement. Otherwise, this can lead to undefined system behavior.

-   The predicate expressions [IS ASSIGNED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_assigned.htm) and [IS BOUND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_assigned.htm) can be used to check the usability of field symbols and data references.

-   A data reference variable with a generic static type can only be deserialized using the statement [ASSIGN dref->\* TO <fs>](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_mem_area_dynamic_dobj.htm).

-   At many read positions, [functions or expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_expressions.htm) can be specified instead of data objects.

-   [Enumerated objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with an [enumerated type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry") can be used in all read positions in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types c or string.