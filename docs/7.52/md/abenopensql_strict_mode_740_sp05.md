---
title: "Conditions for the Strict Mode"
description: |
  The strict mode of the syntax check in Release 7.40, SP05 applies to all Open SQL statements that use one of the following attributes introduced in Release 7.40 SP05(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740_sp05-open_sql.htm): -   Listings of operands as comma-separa
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm"
abapFile: "abenopensql_strict_mode_740_sp05.htm"
keywords: ["select", "update", "do", "if", "try", "class", "data", "types", "abenopensql", "strict", "mode", "740", "sp05"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_oview.htm) →  [Open SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_modes.htm) → 

Strict Mode in Release 7.40, SP05

-   [Conditions for the Strict Mode](#abenopensql-strict-mode-740-sp05-1--------rules-for-the-strict-mode---@ITOC@@ABENOPENSQL_STRICT_MODE_740_SP05_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.40, SP05 applies to all Open SQL statements that use one of the following attributes introduced in [Release 7.40 SP05](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740_sp05-open_sql.htm):

-   Listings of operands as comma-separated lists

-   Escape character @ in front of [host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm)

-   [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm)

-   Addition [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm)

-   [Joins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm):

-   ON conditions without a column from a database table or view specified on the right side as an operand.

-   Multiple consecutive joins where a join expression (and not a database table or view) is on the right side of a join expression.

-   Use of RIGHT OUTER JOIN

-   Fields from the right side specified in LEFT OUTER JOIN or from the left side in RIGHT OUTER JOIN in the WHERE condition.

-   Access to [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") using [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm).

Rules for the Strict Mode

The strict mode of the syntax in Release 7.40, SP05 checks whether the following additional rules are followed:

-   Any errors that would normally be displayed as syntax warnings are reported as syntax errors.

-   All lists of operands must be comma-separated lists. This affects the following:

-   In the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm), columns, aggregate expressions, or SQL expressions specified in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) and columns specified after [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm) and [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm).

-   In the statement [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm), change expressions specified after [SET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_source.htm).

-   [Host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) must be prefixed with the escape character @.

-   If an explicit comma-separated list is specified without the addition [DISTINCT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm), all columns of the results set defined here must exist as identically named components in a structure or table specified after [INTO CORRESPONDING FIELDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm).

-   The [client column](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_column_glosry.htm "Glossary Entry") of a data source of a read statement or of a target of a write statement must not be accessed in ON and WHERE conditions without automatic client handling being switched off using CLIENT SPECIFIED first. In addition, this applies in particular in strict mode when using [dynamic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_dynamic.htm) [conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm), [alternative table names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm), or [joins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm).

-   Addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) can only be used for client-specific data sources.

-   If the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_itab.htm) is used, no database fields of the predefined types STRING and RAWSTRING plus LCHR and LRAW can occur in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm).

-   Like in classes, the [obsolete short forms](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_obsolete.htm) are forbidden.

Comma-separated lists of operands and the escape character @ can only be used in programs in which the program attribute [fixed point arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated.