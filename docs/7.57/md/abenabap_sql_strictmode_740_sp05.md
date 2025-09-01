  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strict_modes.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Strict Mode in Release 7.40, SP05, ABENABAP_SQL_STRICTMODE_740_SP05, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - Strict Mode in Release 7.40, SP05

-   [Conditions for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_740_SP05_1)
-   [Rules for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_740_SP05_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in Release 7.40, SP05 applies to all ABAP SQL statements that use one of the following features introduced in [Release 7.40 SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-abap_sql.htm):

-   Lists of operands as comma-separated lists
-   Escape character @ in front of [host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm)
-   [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except for columns specified individually or aggregate expressions specified individually.
-   Addition [USING CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm)
-   [Joins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_join.htm):
    -   ON conditions without a column from a DDIC database table or DDIC view specified on the right side as an operand.
    -   Multiple consecutive joins where a join expression and not a database table or view is on the right side of a join expression.
    -   Use of RIGHT OUTER JOIN
    -   Fields from the right side specified in LEFT OUTER JOIN or from the left side in RIGHT OUTER JOIN in the WHERE condition.
-   Access to [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") using [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm).

Rules for the Strict Mode   

The strict mode of the syntax in Release 7.40, SP05 checks whether the following additional rules are followed:

-   Any errors that would normally be reported as syntax warnings are reported as syntax errors.
-   All lists of operands must be comma-separated lists. This affects the following:
    -   In the statement [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm), columns, aggregate expressions, or SQL expressions specified in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) and columns specified after [GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgroupby_clause.htm) and [ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm).
    -   In the statement [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate.htm), change expressions specified after [SET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate_source.htm).
-   [Host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm) must be prefixed with the escape character @.
-   If an explicit comma-separated list is specified without the addition [DISTINCT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_clause.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm), all columns of the result set defined here must exist as identically named components in a structure or table specified after [INTO CORRESPONDING FIELDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm).
-   The [client column](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_column_glosry.htm "Glossary Entry") of a data source of a read statement or a target of a write statement must not be accessed in ON and WHERE conditions without [implicit client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_client_handling.htm) being disabled using [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm) first. In strict mode, this applies in particular when using [dynamic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_dynamic.htm) [conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasql_cond.htm), alias names defined using [AS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm), or [joins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm).
-   The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) can only be used for client-dependent DDIC database tables or DDIC views.
-   If the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_all_entries.htm) is used, no database fields of the built-in types STRING, RAWSTRING, and GEOM\_EWKB plus LCHR and LRAW can occur in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm).
-   If [DDIC database views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_view_glosry.htm "Glossary Entry") that contain the same number of key fields and view fields are accessed in a dynamic FROM clause combined with the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm), the exception CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is raised.
-   Blanks behind literals and blanks after opening or before closing brackets cannot be omitted in conditions [sql\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasql_cond.htm).
-   Like in classes, the [obsolete short forms](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_short_forms_obsolete.htm) are forbidden.

Comma-separated lists of operands and the escape character @ can only be used in programs in which the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated.