  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.54](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL in Release 7.54, ABENNEWS-754-ABAP_SQL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP SQL in Release 7.54

[1\. Extensions of the INTO Clause](#!ABAP_MODIFICATION_1@1@)
[2\. Definition of Associations](#!ABAP_MODIFICATION_2@2@)
[3\. New Aggregate Function STRING\_AGG](#!ABAP_MODIFICATION_3@3@)
[4\. Addition DISTINCT Optional in Aggregate Function COUNT](#!ABAP_MODIFICATION_4@4@)
[5\. Window Expressions](#!ABAP_MODIFICATION_5@5@)
[6\. Temporal SQL Hierarchies](#!ABAP_MODIFICATION_6@6@)
[7\. Hierarchy Navigators](#!ABAP_MODIFICATION_7@7@)
[8\. Aggregate Expressions in SQL Expressions](#!ABAP_MODIFICATION_8@8@)
[9\. Extension of the CAST Matrix](#!ABAP_MODIFICATION_9@9@)
[10\. Client Handling](#!ABAP_MODIFICATION_10@10@)
[11\. Syntax Check for Literals and Host Constants](#!ABAP_MODIFICATION_11@11@)
[12\. SQL Conditions](#!ABAP_MODIFICATION_12@12@)
[13\. New Window Functions](#!ABAP_MODIFICATION_13@13@)
[14\. New Built-In Functions](#!ABAP_MODIFICATION_14@14@)
[15\. Strict Mode in the Syntax Check](#!ABAP_MODIFICATION_15@15@)

Modification 1   

Extensions of the INTO Clause

The [INTO clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) has been extended as follows:

-   The new addition [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_into_target.htm) can be used to implicitly create anonymous data objects as target areas. The addition NEW now also makes inline declarations possible when using dynamic tokens and after the statement [FETCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfetch.htm).
-   The new addition [INDICATORS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_indicators.htm) can be used to specify a [null indicator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_indicator_glosry.htm "Glossary Entry").

Modification 2   

Definition of Associations

When associations of a [common table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") are published using the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith_associations.htm), new [CTE associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencte_association_glosry.htm "Glossary Entry") can be defined by specifying [JOIN TO ONE*|*MANY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith_associations_defining.htm). These CTE associations can be used in the subsequent queries of the current [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) statement, either in [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm) or as [hierarchy associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") in the [hierarchy generator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_generator.htm).

Definitions of associations require [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_754.htm).

Modification 3   

New Aggregate Function STRING\_AGG

The new aggregate function [STRING\_AGG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) can be used to chain character-like results of the rows of the results set of a query or of the current group as a string.

Modification 4   

Addition DISTINCT Optional in Aggregate Function COUNT

The aggregate function [COUNT( sql\_exp )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) can now be used without the addition DISTINCT. In this case, it counts all rows in which the value of the argument is not the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry").

Modification 5   

Window Expressions

Window expressions defined using [OVER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm) can now be used in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) of a query. Window expressions define windows as a subset of the results set and apply [window functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwindow_function_glosry.htm "Glossary Entry") to them.

Modification 6   

Temporal SQL Hierarchies

The [hierarchy generator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_generator.htm) can now use the new addition PERIOD FROM TO VALID FROM TO to create [temporal hierarchies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry") in which the hierarchy nodes are limited by time intervals.

Modification 7   

Hierarchy Navigators

The new [hierarchy navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_agg_navis.htm) can be used to calculate [aggregate functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaggregate_function_glosry.htm "Glossary Entry") for [descendant nodes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescendant_node_glosry.htm "Glossary Entry").

Modification 8   

Aggregate Expressions in SQL Expressions

From Release 7.54, [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) can be specified as operands of [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm).

Modification 9   

Extension of the CAST Matrix

The matrix of types that can be converted to each other with a [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cast.htm) expression has been expanded. In particular, the [new data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-754-ddic.htm) of the ABAP Dictionary are taken into account.

Modification 10   

Client Handling

The new additions

-   [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) in queries
-   [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_client.htm) in write statements

make it possible to switch implicit [client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_handling_glosry.htm "Glossary Entry") from the current default client to multiple clients.

This makes the addition CLIENT SPECIFIED [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm) in queries and [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapud_client_obsolete.htm) in the write statements UPDATE SET and DELETE FROM.

Modification 11   

Syntax Check for Literals and Host Constants

The fact that conversions of [host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_variable_glosry.htm "Glossary Entry") in read positions need to be [lossless](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_exact.htm) is checked for [untyped literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_untyped_literals.htm) and [host constants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_constant_glosry.htm "Glossary Entry") in the strict syntax check modes from [Release 7.50](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_750.htm) and [Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_751.htm) and hence can produce syntax errors. From Release 7.54, a syntax check warning is produced when this rule is broken outside of the strict mode too.

Modification 12   

SQL Conditions

The [SQL conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasql_cond.htm) were revised as follows:

-   Unlike in all other [relational expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) in ABAP SQL, the relational expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_null.htm) can now be used to check [LOBs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_glosry.htm "Glossary Entry") and [geodata types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeo_data_type_glosry.htm "Glossary Entry").
-   A new variant of the operator [IN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_list_in.htm) can be used to compare multiple operands with a list of value tuples.

Modification 13   

New Window Functions

ABAP SQL now supports the following new [window functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwindow_function_glosry.htm "Glossary Entry") in [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwindow_expression_glosry.htm "Glossary Entry"):

-   [LEAD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_win_func.htm) and [LAG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_win_func.htm).

Modification 14   

New Built-In Functions

ABAP SQL Now supports the following new built-in functions:

-   [UUID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_uuid.htm)

Modification 15   

Strict Mode in the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_754.htm), which handles the statement more strictly than the regular syntax check.