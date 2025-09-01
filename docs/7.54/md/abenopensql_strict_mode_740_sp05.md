---
title: "Conditions for the Strict Mode"
description: |
  The strict mode of the syntax check in Release 7.40, SP05 applies to all ABAP SQL statements that use one of the following attributes introduced in Release 7.40 SP05(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-740_sp05-open_sql.htm): -   Listings of operands as comma-separa
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_740_sp05.htm"
abapFile: "abenopensql_strict_mode_740_sp05.htm"
keywords: ["select", "update", "do", "if", "try", "class", "data", "types", "abenopensql", "strict", "mode", "740", "sp05"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_modes.htm) → 

Strict Mode in Release 7.40, SP05

-   [Conditions for the Strict Mode](#abenopensql-strict-mode-740-sp05-1--------rules-for-the-strict-mode---@ITOC@@ABENOPENSQL_STRICT_MODE_740_SP05_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.40, SP05 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.40 SP05](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-740_sp05-open_sql.htm):

-   Listings of operands as comma-separated lists

-   Escape character @ in front of [host variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm)

-   [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except for columns specified individually or aggregate expressions specified individually.

-   Addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm)

-   [Joins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_join.htm):

-   ON conditions without a column from a database table or view specified on the right side as an operand.

-   Multiple consecutive joins where a join expression (and not a database table or view) is on the right side of a join expression.

-   Use of RIGHT OUTER JOIN

-   Fields from the right side specified in LEFT OUTER JOIN or from the left side in RIGHT OUTER JOIN in the WHERE condition.

-   Access to [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") using [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm).

Rules for the Strict Mode

The strict mode of the syntax in Release 7.40, SP05 checks whether the following additional rules are followed:

-   Any errors that would normally be displayed as syntax warnings are reported as syntax errors.

-   All lists of operands must be comma-separated lists. This affects the following:

-   In the statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), columns, aggregate expressions, or SQL expressions specified in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) and columns specified after [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) and [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm).

-   In the statement [UPDATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm), change expressions specified after [SET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate_source.htm).

-   [Host variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) must be prefixed with the escape character @.

-   If an explicit comma-separated list is specified without the addition [DISTINCT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm), all columns of the results set defined here must exist as identically named components in a structure or table specified after [INTO CORRESPONDING FIELDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm).

-   The [client column](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_column_glosry.htm "Glossary Entry") of a data source of a read statement or of a target of a write statement must not be accessed in ON and WHERE conditions without [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) being disabled using [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) first. In addition, this applies in particular in strict mode when using [dynamic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_dynamic.htm) [conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasql_cond.htm), alias names defined using [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm), or [joins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm).

-   The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) can only be used for client-specific database tables or views.

-   If the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_itab.htm) is used, no database fields of the built-in types STRING, RAWSTRING, and GEOM\_EWKB plus LCHR and LRAW can occur in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm).

-   If [database views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_view_glosry.htm "Glossary Entry") with the same number of key fields and view fields are accessed in a dynamic FROM clause combined with the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm), the exception CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is raised.

-   Like in classes, the [obsolete short forms](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_obsolete.htm) are forbidden.

Comma-separated lists of operands and the escape character @ can only be used in programs in which the program attribute [fixed point arithmetic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated.