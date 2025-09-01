---
title: "Open SQL - Work Areas in Statements"
description: |
  If in the Open SQL statements -   SELECT or FETCH without the addition CORRESPONDING FIELDS, -   INSERT, UPDATE, MODIFY, or DELETE work areas wa or internal tables itab are specified as the target or source areas, the following prerequisites apply to the work area or row type of the internal table;
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_wa.htm"
abapFile: "abenopen_sql_wa.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "data", "types", "internal-table", "abenopen", "sql"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) → 

Open SQL - Work Areas in Statements

If in the Open SQL statements

-   SELECT or FETCH without the addition CORRESPONDING FIELDS,

-   INSERT, UPDATE, MODIFY, or DELETE

work areas wa or internal tables itab are specified as the target or source areas, the following prerequisites apply to the work area or row type of the internal table; if the prerequisites are ignored, a syntax error occurs or an exception is raised.

-   [Work Areas without Reference Variables for LOB Handles](#abenopen-sql-wa-1--------lob-handle-structures---@ITOC@@ABENOPEN_SQL_WA_2)

Work Areas without Reference Variables for LOB Handles

The following rules apply to work areas that do not contain reference variables for [LOB Handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_glosry.htm "Glossary Entry"):

-   The data type of the work area or row type of the internal table must not be [deep](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_glosry.htm "Glossary Entry") or contain deep components. This excludes strings and special work areas for [streaming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_streaming.htm) and [locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocators.htm).

-   The data type of the work area and the row type of the internal table must not contain any [enumerated types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry").

-   The work area or row type of the internal table must be at least as long as the database structure and the [alignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenalignment_glosry.htm "Glossary Entry") must match. In the statement DELETE, this prerequisite must only be met in the length of the [primary key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_key_glosry.htm "Glossary Entry").

-   If the work area or rows of the internal table are structured, the [fragment view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") of the database structure must match that of the work area or the internal table.

-   If the work area or rows of the internal table are elementary, they must be character-like and [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry"). The columns of the database structure must also be character-like and flat.

-   If the work area contains strings as components or is itself a string, or if columns of type [SSTRING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm), [STRING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm), or [RAWSTRING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) appear in the database structure, the work area must be compatible with the database structure.

-   If the column specification \* is used in the statement SELECT to access a [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"), the work area is always checked as if it contained a string as a component.

-   For the modifying operations INSERT, UPDATE, and MODIFY, the passed values must match the value range of the columns of the database tables. Otherwise, overflows occur and corresponding exceptions are raised. This applies in particular for:

-   Columns with numeric data types.

-   Columns of the types SSTRING, STRING, or RAWSTRING. The strings of the work area must not be longer than the maximum length of the columns in the database structure. This length can be determined using the predefined function [dbmaxlen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlength_functions.htm).

Note

The work area or row structure of the internal table should always be built like the database structure. If a single data source is used in the Open SQL statement, a data object built in the same way can be declared with reference to the relevant structure in ABAP Dictionary. If more than one data source is used (in the statement SELECT), a data object built in the same way can be built as a nested structure, which contains, as substructures, the structures of the single data sources in the order specified in the statement. No structure should be used, in which all components are on one level, because potential [alignment gaps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenalignment_gap_glosry.htm "Glossary Entry") between the single data sources are ignored.

LOB Handle Structures

If a work area is an [LOB handle structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry"), that is, it contains at least one reference variable for [LOB handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_glosry.htm "Glossary Entry"), it must be structured exactly like the structure of the data source and all components except for the [LOB handle components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") must be [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatible_glosry.htm "Glossary Entry") with the corresponding components of the data source. The static type of each LOB handle component must contain the IF\_ABAP\_DB\_LOB\_HANDLE interface and match both the current statement and the data type of the assigned LOB.

Note

In the statement FETCH, no LOB handle structures can currently be specified.