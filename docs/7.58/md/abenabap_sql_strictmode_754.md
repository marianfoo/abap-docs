---
title: "Conditions for the Strict Mode"
description: |
  The strict mode of the syntax check in ABAP release 7.54 applies to all ABAP SQL statements that use one of the following properties introduced in ABAP release 7.54(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-754-abap_sql.htm): -   Use of aggregate expressions(https://hel
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_754.htm"
abapFile: "abenabap_sql_strictmode_754.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abenabap", "sql", "strictmode", "754"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Strict%20Mode%20in%20ABAP%20Release%207.54%2C%20ABENABAP_SQL_STRICTMODE_754%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP SQL - Strict Mode in ABAP Release 7.54

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-754-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_754_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in ABAP release 7.54 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.54](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-754-abap_sql.htm):

-   Use of [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) as operands of [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm)
-   Definition of [CTE associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_association_glosry.htm "Glossary Entry") by specifying [JOIN TO ONE*|*MANY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations_defining.htm) in the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations.htm) when defining common table expressions.
-   Use of [window expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm).
-   Use of the aggregate function [STRING\_AGG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm).
-   Use of the aggregate function [COUNT( sql\_exp )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) without the addition DISTINCT.
-   Use of the [hierarchy navigator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_agg_navis.htm).
-   Use of the additions [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_into_target.htm) or [INDICATORS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_indicators.htm) in the [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) clause.
-   Use of the new data types from the ABAP Dictionary in a [CAST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cast.htm) expression or after the addition [AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_avg_as.htm) of the aggregate function AVG.
-   Use of the additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* in [queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client.htm) or in [write statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm).
-   Use of the WITH additions in the [hierarchy navigator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_desc_agg.htm) or of the hierarchy navigator [HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_ancs_agg.htm).
-   Use of the built-in function [UUID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_uuid.htm).
-   Use of the window functions [LEAD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_win_func.htm) and [LAG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_win_func.htm).
-   Evaluation of value tuples in a relational expression using the operator [IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_list_in.htm).
-   Evaluation of [LOBs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry") or [geodata types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeo_data_type_glosry.htm "Glossary Entry") in the relational expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_null.htm).

Rules for the Strict Mode   

The strict mode in ABAP release 7.54 covers all rules of the [strict mode in ABAP release 7.53](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_753.htm) plus the following rules:

-   An alias name defined using the addition AS for columns of the result set in a [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) list or for data sources in the [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) clause must comply with the [naming conventions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_conventions.htm) for program-internal names and the name table\_line cannot be used. More specifically, an alias name must not contain a minus character (\-).
-   If strict mode is applied to the statement [FETCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfetch.htm), it is also applied to the associated statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm). If the rules are broken in OPEN CURSOR, an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is raised.
-   The obsolete use of the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client_obsolete.htm) is forbidden in the statement [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) in queries and subqueries.
-   The obsolete use of the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapud_client_obsolete.htm) in write statements is forbidden.