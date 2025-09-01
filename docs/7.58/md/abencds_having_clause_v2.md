  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - CDS View Entity, SELECT, clauses](javascript:call_link\('abencds_select_clauses_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20SELECT%2C%20HAVING%2C%20ABENCDS_HAVING_CLAUSE_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

CDS DDL - CDS View Entity, SELECT, HAVING

Syntax

... HAVING [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) ...

Effect

Defines a HAVING condition for the result set of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") after a [GROUP BY clause](javascript:call_link\('abencds_group_by_v2.htm'\)) is evaluated. A HAVING condition can only be specified together with GROUP BY. The HAVING condition removes all rows from the result set that do not meet the condition cds\_cond specified after HAVING.

If the view entity makes use of multiple [data sources](javascript:call_link\('abencds_data_source_v2.htm'\)) by using join expressions, then all fields listed after HAVING must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

The following rules apply to the condition specified after HAVING:

-   As relational operators, comparison operators, LIKE, and IS \[NOT\] NULL can be used. BETWEEN and IS INITIAL are not supported.
-   The Boolean operators NOT, AND, and OR are allowed.
-   lhs can be a [field](javascript:call_link\('abencds_field_v2.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)), a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)), an [aggregate expression](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), a [case expression](javascript:call_link\('abencds_case_expression_v2.htm'\)), or an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)).
-   rhs can be an [element](javascript:call_link\('abencds_select_list_entry_v2.htm'\)) of the [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)), an [aggregate expression](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), a [literal](javascript:call_link\('abencds_literal_v2.htm'\)), a [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)), a path expression, a [case expression](javascript:call_link\('abencds_case_expression_v2.htm'\)), or an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)).
    
    Exception: when using the operator LIKE, then rhs must be a character literal.
    
-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)).element, as long as the CDS associations of the expression do not have any [non-SQL CDS entities](javascript:call_link\('abencds_non_sql_entity_glosry.htm'\) "Glossary Entry") as [association targets](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") and all associations traversed have the cardinality to-one:
    
    -   The [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the contained [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is to-one.
    -   The path expression contains the [cardinality specification](javascript:call_link\('abencds_path_expr_card_v2.htm'\)) attribute to-one.
    
    element can be used to specify an element of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the last CDS association of the path.
    
-   Other expressions and function calls are not allowed.

Hint

[Aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) can be specified in the HAVING condition, which is not possible in the [WHERE condition](javascript:call_link\('abencds_where_clause_v2.htm'\)).

Example

When accessed, the CDS view entity DEMO\_CDS\_VIEW\_ENTITY\_HAVING returns details about all flights that have a maximal seats capacity of more than 500 seats.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_VIEW\_ENTITY\_HAVING
  as select from sflight
  {
    concat\_with\_space(carrid, connid, 1) as ID,
    count(\*)                             as col\_count,
    seatsmax
  }
  group by
    carrid,
    connid,
    seatsmax
  having
    seatsmax > abap.int2'500'