  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - CDS View Entity, SELECT, clauses](javascript:call_link\('abencds_select_clauses_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, SELECT, WHERE, ABENCDS_WHERE_CLAUSE_V2, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, SELECT, WHERE

Syntax

... WHERE [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) ...

Effect

Defines a WHERE condition for the result set of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). When the CDS view entity is accessed, the result set contains only the data from the data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)) that meets the condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) specified after WHERE.

The fields evaluated in the condition do not need to be defined as elements of the CDS view entity in the [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)).

If the view entity makes use of multiple data sources by using join expressions, then all fields specified in the WHERE condition must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

The following rules apply to the operands and syntax of the WHERE condition of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed. That means all comparison operators are allowed as well as BETWEEN, LIKE, IS \[NOT\] NULL, and IS \[NOT\] INITIAL.
-   The Boolean operators NOT, AND, and OR are supported.
-   lhs expects a [field](javascript:call_link\('abencds_field_v2.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)), a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)), a [built-in function](javascript:call_link\('abencds_builtin_functions_v2.htm'\)), or a [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)).
    
    If a comparison operator is used as relational operator, then lhs can also be a [literal](javascript:call_link\('abencds_literal_v2.htm'\)), a [case expression](javascript:call_link\('abencds_case_expression_v2.htm'\)), or an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)).
    
    If IS NULL is used as relational operator, then lhs can also be a [case expression](javascript:call_link\('abencds_case_expression_v2.htm'\)).
    
-   rhs can be a [field](javascript:call_link\('abencds_field_v2.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)), a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)), a [literal](javascript:call_link\('abencds_literal_v2.htm'\)), a [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)), a [session variable](javascript:call_link\('abencds_session_variable_v2.htm'\)), a [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)), or a [built-in function](javascript:call_link\('abencds_builtin_functions_v2.htm'\)).
    
    If a comparison operator is used as relational operator, then rhs can also be a [case expression](javascript:call_link\('abencds_case_expression_v2.htm'\)) or an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)).
    
    -   Exception: when using the operator LIKE, rhs must be a character literal.
-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)).element, as long as the CDS associations of the expression do not have any [non-SQL CDS entities](javascript:call_link\('abencds_non_sql_entity_glosry.htm'\) "Glossary Entry") as [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") and the cardinality of all traversed associations is to-one:
    
    -   The [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the contained [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is to-one.
    -   The path expression only contains [filter conditions](javascript:call_link\('abencds_path_expression_filter_v2.htm'\)) with addition 1:.
    
    element can be used to specify an element of the association target of the last CDS association of the path.
    
-   Other expressions and function calls are not allowed.

Limitation

The condition in the WHERE clause must not start with brackets. This is not valid:

... WHERE (field1 + field2) \* 5 < 1000

The following workarounds are possible:

-   You may change the order of the operands so that the expression written in brackets does not appear as first operand.
    
    Example: ... WHERE 5 \* (field1 + field2) < 1000
    
-   You may add 1\* at the start to avoid starting with a bracket.
    
    Example: ... WHERE 1 \* (field1 + field2) \* 5 < 1000
    

Hint

Unlike in the [HAVING condition](javascript:call_link\('abencds_having_clause_v2.htm'\)), [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) cannot be specified in the WHERE condition.

Example

The CDS view entity demo\_sales\_order\_where has a WHERE condition that contains the relational operators LIKE and BETWEEN, a string function, and a cast expression.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_ORDER\_WHERE
  as select from
    demo\_sales\_order
    association to demo\_sales\_bupa as \_partner
      on $projection.id = \_partner.id
    {
      key so\_key,
          id,
          company\_code,
          \_partner.family\_name
    }
    where
          \_partner.family\_name like    'S%'
      and length( \_partner.family\_name ) = abap.int1'4'
      and created\_on between abap.dats'20200101' and abap.dats'20200401'
      and cast( \_partner.birth\_name as demo\_sales\_birth\_name
                preserving type )  =       abap.char'Meier'