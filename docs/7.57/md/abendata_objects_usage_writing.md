---
title: "Data Objects in Write Positions"
description: |
  Only modifiable data objects, that is, no literals, text symbols, constants, or non-modifiable formal parameters, can be specified as follows at write positions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_position_glosry.htm 'Glossary Entry'): -   Specification of a visib
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_objects_usage_writing.htm"
abapFile: "abendata_objects_usage_writing.htm"
keywords: ["do", "if", "try", "data", "types", "internal-table", "field-symbol", "abendata", "objects", "usage", "writing"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands_data_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Objects in Write Positions, ABENDATA_OBJECTS_USAGE_WRITING, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Data Objects in Write Positions

Only modifiable data objects, that is, no literals, text symbols, constants, or non-modifiable formal parameters, can be specified as follows at [write positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_position_glosry.htm "Glossary Entry"):

-   Specification of a [visible data object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlifetime_and_visibility.htm) specified at this position using the identifier dobj, a field symbol <fs>, or a dereferenced data reference dref->\* if dref is typed completely. Like in [read positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry"), \[\] can be appended to internal tables to address the [table body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_body_glosry.htm "Glossary Entry").
-   Specification of a [subarea](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoffset_length.htm) of a [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") character-like or byte-like data object using an [offset/length](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") specification. An offset or length specification cannot be made in write positions for data objects of the [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") data types string and xstring.
-   At a [declaration position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_position_glosry.htm "Glossary Entry"), an [inline declaration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declaration_glosry.htm "Glossary Entry") of a data object or field symbol can be made using a [declaration expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_expression_glosry.htm "Glossary Entry").
-   [Writable expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be listed in a [result position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresult_position_glosry.htm "Glossary Entry").

[Write-only positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_only_position_glosry.htm "Glossary Entry") exist, where an operand is overwritten without being read first, and write positions where an operand is read and written.

Hints

-   In [some write positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_write.htm), certain expressions can also be specified.
-   [Enumerated variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") can only be used in write positions where the operand type is the enumerated type and only the associated [enumerated values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_value_glosry.htm "Glossary Entry") can be written.