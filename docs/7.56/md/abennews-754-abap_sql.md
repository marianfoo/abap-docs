  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

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

The [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) has been extended as follows:

-   The new addition [NEW](javascript:call_link\('abapselect_into_target.htm'\)) can be used to implicitly create anonymous data objects as target areas. The addition NEW now also makes inline declarations possible when using dynamic tokens and after the statement [FETCH](javascript:call_link\('abapfetch.htm'\)).
-   The new addition [INDICATORS](javascript:call_link\('abapselect_indicators.htm'\)) can be used to specify a [null indicator](javascript:call_link\('abennull_indicator_glosry.htm'\) "Glossary Entry").

Modification 2   

Definition of Associations

When associations of a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") are published using the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)), new [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") can be defined by specifying [JOIN TO ONE*|*MANY](javascript:call_link\('abapwith_associations_defining.htm'\)). These CTE associations can be used in the subsequent queries of the current [WITH](javascript:call_link\('abapwith.htm'\)) statement, either in [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)) or as [hierarchy associations](javascript:call_link\('abenhierarchy_association_glosry.htm'\) "Glossary Entry") in the [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry") [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)).

Definitions of associations require [strict mode from Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)).

Modification 3   

New Aggregate Function STRING\_AGG

The new aggregate function [STRING\_AGG](javascript:call_link\('abapselect_aggregate.htm'\)) can be used to chain character-like results of the rows of the results set of a query or of the current group as a string.

Modification 4   

Addition DISTINCT Optional in Aggregate Function COUNT

The aggregate function [COUNT( sql\_exp )](javascript:call_link\('abapselect_aggregate.htm'\)) can now be used without the addition DISTINCT. In this case, it counts all rows in which the value of the argument is not the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

Modification 5   

Window Expressions

Window expressions defined using [OVER](javascript:call_link\('abapselect_over.htm'\)) can now be used in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of a query. Window expressions define windows as a subset of the results set and apply [window functions](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") to them.

Modification 6   

Temporal SQL Hierarchies

The [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry") [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)) can now use the new addition PERIOD FROM TO VALID FROM TO to create [temporal hierarchies](javascript:call_link\('abentemporal_hierarchy_glosry.htm'\) "Glossary Entry") in which the hierarchy nodes are limited by time intervals.

Modification 7   

Hierarchy Navigators

The new [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") [HIERARCHY\_DESCENDANTS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\)) can be used to calculate [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") for [descendant nodes](javascript:call_link\('abendescendant_node_glosry.htm'\) "Glossary Entry").

Modification 8   

Aggregate Expressions in SQL Expressions

From Release 7.54, [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) can be specified as operands of [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).

Modification 9   

Extension of the CAST Matrix

The matrix of types that can be converted to each other with a [CAST](javascript:call_link\('abensql_cast.htm'\)) expression has been expanded. In particular, the [new data types](javascript:call_link\('abennews-754-ddic.htm'\)) of the ABAP Dictionary are taken into account.

Modification 10   

Client Handling

The new additions

-   [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)) in queries
-   [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapiumd_client.htm'\)) in write statements

make it possible to switch implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") from the current default client to multiple clients.

This makes the addition CLIENT SPECIFIED [obsolete](javascript:call_link\('abapselect_client_obsolete.htm'\)) in queries and [obsolete](javascript:call_link\('abapud_client_obsolete.htm'\)) in the write statements UPDATE SET and DELETE FROM.

Modification 11   

Syntax Check for Literals and Host Constants

The fact that conversions of [host variables](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") in read positions need to be [lossless](javascript:call_link\('abapmove_exact.htm'\)) is checked for [untyped literals](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)) and [host constants](javascript:call_link\('abenhost_constant_glosry.htm'\) "Glossary Entry") in the strict syntax check modes from [Release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)) and [Release 7.51](javascript:call_link\('abenabap_sql_strictmode_751.htm'\)) and hence can produce syntax errors. From Release 7.54, a syntax check warning is produced when this rule is broken outside of the strict mode too.

Modification 12   

SQL Conditions

The [SQL conditions](javascript:call_link\('abenasql_cond.htm'\)) were revised as follows:

-   Unlike in all other [relational expressions](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) in ABAP SQL, the relational expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)) can now be used to check [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") and [geodata types](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry").
-   A new variant of the operator [IN](javascript:call_link\('abenwhere_logexp_list_in.htm'\)) can be used to compare multiple operands with a list of value tuples.

Modification 13   

New Window Functions

ABAP SQL now supports the following new [window functions](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") in [window expressions](javascript:call_link\('abenwindow_expression_glosry.htm'\) "Glossary Entry"):

-   [LEAD](javascript:call_link\('abensql_win_func.htm'\)) and [LAG](javascript:call_link\('abensql_win_func.htm'\)).

Modification 14   

New Built-In Functions

ABAP SQL Now supports the following new built-in functions:

-   [UUID](javascript:call_link\('abensql_uuid.htm'\))

Modification 15   

Strict Mode in the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)), which handles the statement more strictly than the regular syntax check.