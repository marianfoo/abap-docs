---
title: "Writer Positions"
description: |
  In a writer position, the content of the operand is changed when the statement is executed. Only modifiable data objects (that is, no literals, text symbols, constants, or non-modifiable formal parameters) can be specified as follows in writer positions: -   A visible data object(https://help.sap.
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects_usage_writing.htm"
abapFile: "abendata_objects_usage_writing.htm"
keywords: ["do", "if", "try", "data", "types", "internal-table", "field-symbol", "abendata", "objects", "usage", "writing"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_data_objects.htm) → 

Writer Positions

In a writer position, the content of the operand is changed when the statement is executed. Only modifiable data objects (that is, no literals, text symbols, constants, or non-modifiable formal parameters) can be specified as follows in writer positions:

-   A [visible data object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlifetime_and_visibility.htm) specified in this place using a name dobj, a field symbol <fs>, or a dereferenced data reference dref->\* (if dref is typed in full). Like in [reading positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry"), \[\] can be appended in internal tables, to address the [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry").

-   A [subarea](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length.htm) of a [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") character-like or byte-like data object specified using an [offset/length](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"). An offset or length cannot be specified in writing positions for data objects of the [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") data types string and xstring.

-   In a [declaration position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_position_glosry.htm "Glossary Entry"), an [inline declaration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninline_declaration_glosry.htm "Glossary Entry") of a data object or field symbol can be made using a [declaration expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_expression_glosry.htm "Glossary Entry").

-   [Writable expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified in a [result position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenresult_position_glosry.htm "Glossary Entry").

Writer-only positions, where an operand is overwritten without being read, and writer positions where an operand is read and written are both available.

Notes

-   In [some writing positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_positions_write.htm), certain expressions can also be specified.

-   [Enumerated variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") can only be used in writing positions in which the operand type is the enumerated type and only the associated [enumerated values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_value_glosry.htm "Glossary Entry") can be written.