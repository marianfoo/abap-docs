---
title: "Operand Type"
description: |
  An operand position is typed by an operand type, which can be complete or generic and can also be dependent on other operand positions, for example in assignments. When a statement is executed, an operand with a suitable data type is expected. If an operand specified at an operand position has a dif
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperand_type.htm"
abapFile: "abenoperand_type.htm"
keywords: ["do", "if", "try", "data", "types", "internal-table", "field-symbol", "abenoperand", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperand_positions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Operand%20Type%2C%20ABENOPERAND_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Operand Type

An operand position is typed by an operand type, which can be complete or generic and can also be dependent on other operand positions, for example in assignments. When a statement is executed, an operand with a suitable data type is expected. If an operand specified at an operand position has a different data type than the operand type, an attempt is usually made to convert the content of the operand to the operand type according to the [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm) at [read positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenread_position_glosry.htm "Glossary Entry"), and in the other direction at [write positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_position_glosry.htm "Glossary Entry"). Here, it should be noted that every conversion incurs increased runtime costs. If no corresponding conversion rule is defined, or the content cannot be converted, a syntax error occurs or an exception is raised. Any deviations from this rule, for example that the operand must exactly match the operand type or the operand is [cast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry") to the operand type regardless of its actual type, are described in the documentation of the individual statements.

-   [Operand Positions with Elementary Data Type](#abenoperand-type-1-------operand-positions-with-structured-data-type---@ITOC@@ABENOPERAND_TYPE_2)
-   [Operand Positions with Tabular Data Type](#abenoperand-type-3-------operand-positions-with-reference-data-type---@ITOC@@ABENOPERAND_TYPE_4)

Operand Positions with Elementary Data Type   

At operand positions for [elementary data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_object_glosry.htm "Glossary Entry"), the following must be specified when the statement is executed, depending on the operand type:

-   [Character-like data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")
-   [Numeric data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")
-   [Byte-like data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")

Generically [typed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_glosry.htm "Glossary Entry") formal parameters or field symbols can also be specified statically if they are typed more generally than the expected type.

[Flat structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_structure_glosry.htm "Glossary Entry") with only character-like components of the types c, n, d, or t can also be used in all operand positions where elementary fields are expected. Such structures are handled in the same way as a single data object of type c (implicit casting).

Operand Positions with Structured Data Type   

Structures must be specified at operand positions for [structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_glosry.htm "Glossary Entry") when the statement is executed. Formal parameters or field symbols of the generic types data or any can also be specified statically.

Operand Positions with Tabular Data Type   

[Internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry") must be specified at operand positions for internal tables both when the statement is executed. There are also operand positions, where internal tables must be known statically. At these positions, generic formal parameters and field symbols can only be specified if they are typed with at least the generic type [any table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm). Only index tables can be specified at operand positions where index access occurs, and generic formal parameters and field symbols must be typed with at least the generic type [index table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm).

Operand Positions with Reference Data Type   

Depending on the operand type, either data or object reference variables must be specified at operand positions for [reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_variable_glosry.htm "Glossary Entry") when the statement is executed. Formal parameters or field symbols of the generic types data or any can also be specified statically.