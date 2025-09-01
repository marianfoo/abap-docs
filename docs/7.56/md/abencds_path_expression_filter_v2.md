  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)) →  [CDS DDL - CDS View Entity, path\_expr, attributes](javascript:call_link\('abencds_path_expr_attr_v2.htm'\)) → 

CDS DDL - CDS View Entity, path\_expr, filter

Syntax

... *\[*WHERE*\]* [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) ...

Effect

[Filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry") for the current CDS association. If the join type is explicitly defined with [INNER*|**{*LEFT OUTER*}*](javascript:call_link\('abencds_path_expr_jointype_v2.htm'\)), the addition WHERE must be specified explicitly. If this is not the case, WHERE must not be specified.

A filter condition is a condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) implemented as an expanded condition for the join when transforming the CDS association into a join.

For the operands of the filter condition of a path expression of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), the following rules apply:

-   All relational operators are allowed.
-   The Boolean operators NOT, AND, and OR are allowed.
-   lhs expects a [field](javascript:call_link\('abencds_field_v2.htm'\)) of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the current [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").
-   rhs expects a [field](javascript:call_link\('abencds_field_v2.htm'\)) of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the current [CDS association](javascript:call_link\('abencds_association_v2.htm'\)), a [literal](javascript:call_link\('abencds_literal_v2.htm'\)), a [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)), a [session variable](javascript:call_link\('abencds_session_variable_v2.htm'\)), or a [built-in function](javascript:call_link\('abencds_builtin_functions_v2.htm'\)).
    
    Exception: if the operator LIKE is used, then rhs must be a character literal.
    
-   Path expressions are not supported.
-   Other [expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) are not supported.

If no filter condition is specified in the path expression, any default filter condition specified for the [CDS association](javascript:call_link\('abencds_association_v2.htm'\)) is used.

Hint

In [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), the filter conditions of multiple CDS associations are by default compared semantically. If the filter conditions match, the associated join expression is created only once. This generally improves performance.

Example

The following CDS view entity contains path expressions with filter conditions in its SELECT list that are implemented as join expressions upon activation.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_ASSOC\_FILTER\_VE
  as select from demo\_join1
  association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2  
    on \_demo\_join2.d = demo\_join1.d
{
  key a,
      \_demo\_join2\[inner where d = '1' \].d               as d\_2,
      \_demo\_join2\[inner where d = '1' \].e               as e\_2,
      \_demo\_join2\[inner where d = '1' \].
                  \_demo\_join3\[inner where i = '2' \].i   as i\_3,
      \_demo\_join2\[inner where d = '1' \].
                  \_demo\_join3\[
                              inner where i = '2' \].j   as j\_3
}

The following image shows the joins created on the database:

![Figure](bdoc_path_expr.png)