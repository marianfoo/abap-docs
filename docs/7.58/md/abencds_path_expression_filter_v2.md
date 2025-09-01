  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, path\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm) →  [CDS DDL - CDS View Entity, path\_expr, attributes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expr_attr_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20path_expr%2C%20Filter%2C%20ABENCDS_PATH_EXPRESSION_FILTER_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

CDS DDL - CDS View Entity, path\_expr, Filter

Syntax

... *\[*WHERE*\]* [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) ...

Effect

[Filter condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfilter_condition_glosry.htm "Glossary Entry") for the current CDS association. If the join type is explicitly defined with [INNER*|**{*LEFT OUTER*}*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expr_jointype_v2.htm), the addition WHERE must be specified explicitly. If this is not the case, WHERE must not be specified.

A filter condition is a condition [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) implemented as an expanded condition for the join when transforming the CDS association into a join.

For the operands of the filter condition of a path expression of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), the following rules apply:

-   All relational operators are allowed.
-   The Boolean operators NOT, AND, and OR are allowed.
-   lhs expects a [field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_v2.htm) of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the current [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry").
-   rhs expects a [field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_v2.htm) of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the current [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_v2.htm), a [literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm), a [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm), a [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm), an [SQL-based scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm), or a [built-in function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm).
    
    Exception: if the operator LIKE is used, then rhs must be a character literal.
    
-   Path expressions are not supported.
-   Other [expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) are not supported.

Special rules apply when the operands of the condition are [CDS enumerated elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_element_glosry.htm "Glossary Entry"). These rules are described in the topic [CDS TDL - Using CDS Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_use_enum_type.htm).

If no filter condition is specified in the path expression, any default filter condition specified for the [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_v2.htm) is used.

Hint

In [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), the filter conditions of multiple CDS associations are by default compared semantically. If the filter conditions match, the associated join expression is created only once. This generally improves performance.

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

![Figure](abdoc_path_expr.png)