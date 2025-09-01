---
title: "Syntax"
description: |
  ... GROUPING( col(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm) ) Effect The result of the grouping function GROUPING indicates whether a specific column is part of the aggregation(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaggregate_exp
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengrouping_function.htm"
abapFile: "abengrouping_function.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abengrouping", "function"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) →  [SELECT, GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgroupby_clause.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_agg - GROUPING, ABENGROUPING_FUNCTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

sql\_agg - GROUPING

Syntax

... GROUPING( [col](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm) )

Effect

The result of the grouping function GROUPING indicates whether a specific column is part of the [aggregation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaggregate_expression_glosry.htm "Glossary Entry"). After the grouping function GROUPING, a column name in parentheses is expected as an argument.

The return value of the grouping function GROUPING has the data type [INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm). The following return values of the grouping function are possible here:

Value

Meaning

0

The column is not part of the aggregation.

1

The column is part of the aggregation.

The columns that are part of the aggregation contain the null values as placeholders in the corresponding results. More specifically, the grouping function GROUPING determines whether the column that contains a null value in the result was part of the aggregation or whether it was already the null value in the [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm).

Rules

-   The grouping function can only be used in the [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) list and in the [HAVING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphaving_clause.htm) clause.
-   The grouping function can be used only if the [GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgroupby_clause.htm) clause contains the addition [GROUPING SETS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgrouping_sets_clause.htm).
-   The column used as an argument of the grouping function GROUPING must also be added to the GROUP BY list.

Example

The following example calculates the number of Lufthansa flights depending on the plane type (the column planetype) and the connection (the column connid). Here, the grouping function for the plane type column or connection column is used to determine whether they are part of the aggregation.

SELECT FROM sflight
       FIELDS carrid,
              connid,
              planetype,
              COUNT( \* ) AS flights\_count,
              grouping( connid ) AS agg\_connid,
              grouping( planetype ) AS agg\_planetype
       WHERE carrid = 'LH'
       GROUP BY GROUPING SETS ( ( carrid, planetype ),
                                ( carrid, connid ),
                                (  ) )
       ORDER BY connid, planetype
       INTO TABLE @FINAL(result\_grouping).
cl\_demo\_output=>display( result\_grouping ).

Executable Example

[GROUPING, Aggregate Function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengrouping_function_abexa.htm)