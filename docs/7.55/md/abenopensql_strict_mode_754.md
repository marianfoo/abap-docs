---
title: "Conditions for the Strict Mode"
description: |
  The strict mode of the syntax check in Release 7.54 applies to all ABAP SQL statements that use one of the following attributes introduced in Release 7.54(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754-abap_sql.htm): -   Use of aggregate expressions(https://help.sap.com/
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm"
abapFile: "abenopensql_strict_mode_754.htm"
keywords: ["select", "do", "if", "try", "data", "abenopensql", "strict", "mode", "754"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_modes.htm) → 

Strict Mode in Release 7.54

-   [Conditions for the Strict Mode](#abenopensql-strict-mode-754-1--------rules-for-the-strict-mode---@ITOC@@ABENOPENSQL_STRICT_MODE_754_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.54 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754-abap_sql.htm):

-   Use of [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) as operands of [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm)

-   Definition of [CTE associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencte_association_glosry.htm "Glossary Entry") by specifying [JOIN TO ONE*|*MANY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith_associations_defining.htm) in the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith_associations.htm) when defining common table expressions.

-   Use of [window expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_over.htm).

-   Use of the aggregate function [STRING\_AGG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm).

-   Use of the aggregate function [COUNT( sql\_exp )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) without the addition DISTINCT.

-   Use of the [hierarchy navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_agg_navis.htm).

Rules for the Strict Mode

The strict mode in Release 7.54 covers all rules of the [strict mode in Release 7.53](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_753.htm).