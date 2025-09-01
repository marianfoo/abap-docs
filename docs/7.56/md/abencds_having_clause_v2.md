  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_clauses_v2.htm) → 

CDS DDL - CDS View Entity, SELECT, HAVING

Syntax

... HAVING [cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v2.htm) ...

Effect

Defines a HAVING condition for the result set of a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") after a [GROUP BY clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v2.htm) is evaluated. A HAVING condition can only be specified together with GROUP BY. The HAVING condition removes all rows from the result set that do not meet the condition cds\_cond specified after HAVING.

If the view entity makes use of multiple [data sources](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v2.htm) by using join expressions, then all fields listed after HAVING must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

The following rules apply for the condition specified after HAVING:

-   As relational operators, comparison operators, LIKE, and IS \[NOT\] NULL can be used. BETWEEN and IS INITIAL are not supported.
-   The Boolean operators NOT, AND, and OR are allowed.
-   lhs can be a [field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v2.htm), a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v2.htm), an [aggregate expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v2.htm), a [case expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm), or an [arithmetic expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_arithmetic_expression_v2.htm).
-   rhs can be an [element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v2.htm) of the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v2.htm), an [aggregate expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v2.htm), a [literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v2.htm), a [parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_v2.htm), a path expression, a [case expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm), or an [arithmetic expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_arithmetic_expression_v2.htm).
    
    Exception: when using the operator LIKE, then rhs must be a character literal.
    
-   A field of a data source can be specified using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v2.htm).element, as long as the CDS associations of the expression do not have any [non-SQL CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry") as [association targets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") and all associations traversed have the cardinality to-one:
    
    -   The [cardinality](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencardinality_glosry.htm "Glossary Entry") of the contained [CDS associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") is to-one.
    -   The path expression only contains [filter conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_filter_v2.htm) with addition 1:.
    
    element can be used to specify an element of the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the last CDS association of the path.
    
-   Other expressions and function calls are not allowed.

Hint

[Aggregate expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v2.htm) can be specified in the HAVING condition, which is not possible in the [WHERE condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v2.htm).

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
    seatsmax > 500