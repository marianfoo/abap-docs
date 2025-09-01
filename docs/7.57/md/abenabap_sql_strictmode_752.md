---
title: "Conditions for the Strict Mode"
description: |
  The strict mode of the syntax check in Release 7.52 applies to all ABAP SQL statements that use one of the following properties introduced in Release 7.52(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-752-abap_sql.htm): -   Use of ONE TO MANY in LEFT OUTER JOIN(https://help
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_752.htm"
abapFile: "abenabap_sql_strictmode_752.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "abenabap", "sql", "strictmode", "752"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strict_modes.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Strict Mode in Release 7.52, ABENABAP_SQL_STRICTMODE_752, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - Strict Mode in Release 7.52

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-752-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_752_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in Release 7.52 applies to all ABAP SQL statements that use one of the following properties introduced in [Release 7.52](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-752-abap_sql.htm):

-   Use of ONE TO MANY in [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_join.htm)
-   [Parameter passing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_parameters.htm) when using [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm) in a [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause.
-   [Filter conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path_filter.htm) in [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm) in a [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause.
-   Use of the type conversion functions [BINTOHEX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm) and [HEXTOBIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm)
-   Use of the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_all_entries.htm) of statement [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) together with columns of the types STRING, RAWSTRING, and GEOM\_EWKB plus LCHR and LRAW in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) in a strict mode.
-   [Internal table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_itab.htm) as the data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) of a query
-   In [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm):
    -   CDS associations are used whose [association targets](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") are [CDS table functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry").
    -   [Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_parameters.htm) are passed when used to [specify columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm)
    -   The [cardinality](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencardinality_glosry.htm "Glossary Entry") or the kind of the join expression are specified as [attributes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path_filter.htm).
    -   [Filter conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path_filter.htm) are specified when used to [specify columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm).
-   [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") is switched off by the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm).

Rules for the Strict Mode   

The strict mode in Release 7.52 covers all rules of the [strict mode in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_751.htm), plus the following rules:

-   A [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm) as a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) of a [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause must have an alias name defined with [AS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm).
-   The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) cannot be specified for a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) specified using a [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm).
-   When the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) is used in a query that accesses a CDS entity, this access is known statically, and [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") applies, a syntax error occurs.
-   Any character literals or constants used on the right side of [LIKE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_like.htm) that are more than twice as long as the left side produce a syntax error.