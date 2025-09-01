---
title: "Conditions for the Strict Mode"
description: |
  The strict mode of the syntax check in Release 7.52 applies to all ABAP SQL statements that use one of the following attributes introduced in Release 7.52(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-752-open_sql.htm): -   Use of ONE TO MANY in LEFT OUTER JOIN(https://help
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_752.htm"
abapFile: "abenopensql_strict_mode_752.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "abenopensql", "strict", "mode", "752"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_modes.htm) → 

Strict Mode in Release 7.52

-   [Conditions for the Strict Mode](#abenopensql-strict-mode-752-1--------rules-for-the-strict-mode---@ITOC@@ABENOPENSQL_STRICT_MODE_752_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.52 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.52](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-752-open_sql.htm):

-   Use of ONE TO MANY in [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm)

-   Use of the type conversion functions [BINTOHEX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm) and [HEXTOBIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm)

-   Use of the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_all_entries.htm) of statement [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) together with columns of the types STRING and RAWSTRING and also LCHR and LRAW in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) in a strict mode.

-   Internal table as the data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) of a query

-   The following occurs in [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm):

-   Associations are used whose target data sources are [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry").

-   [Parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_parameters.htm) are passed.

-   The cardinality or the kind of the join expression are specified as [attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path_filter.htm).

-   [Filter conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path_filter.htm) are specified.

-   [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") is switched off by the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm).

Rules for the Strict Mode

The strict mode in Release 7.52 covers all rules of the [strict mode in Release 7.51](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_751.htm), plus the following rules:

-   A [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) as a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) of a [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause must have an alternative table name defined with [AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm).

-   The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client.htm) cannot be specified for a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) specified using a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm).

-   When the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client.htm) is used in a query that accesses a CDS entity, this access is known statically, and [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") applies, a syntax error occurs.