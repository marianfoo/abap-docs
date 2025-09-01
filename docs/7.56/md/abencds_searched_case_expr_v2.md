  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, case\_expr](javascript:call_link\('abencds_case_expression_v2.htm'\)) → 

CDS DDL - CDS View Entity, searched\_case\_expr

Syntax

... CASE WHEN [cds\_cond1](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) THEN result1
        *\[*WHEN [cds\_cond2](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) THEN result2*\]*
        *\[*WHEN [cds\_cond3](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) THEN result3*\]*
          ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Complex [case distinction](javascript:call_link\('abencds_case_expression_v2.htm'\)) (searched case) in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). The case distinction evaluates the conditions [cds\_cond1](javascript:call_link\('abencds_conditional_expression_v2.htm'\)), [cds\_cond2](javascript:call_link\('abencds_conditional_expression_v2.htm'\)), ... and returns the first operand specified after THEN for which the comparison is true as result. If none of the conditions are true, the result specified after ELSE is selected. If ELSE is not specified, the result is the [zero value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

The following rules apply to the conditions specified after WHEN:

-   All [relational operators](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) are allowed. That means that comparison operators, BETWEEN, LIKE, IS NULL and IS INITIAL are allowed.
-   The Boolean operators NOT, AND, and OR are allowed.
-   lhs expects a [field](javascript:call_link\('abencds_field_v2.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)), a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)), a [built-in function](javascript:call_link\('abencds_builtin_functions_v2.htm'\)), or a [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)) .
    
    If a comparison operator is used, then lhs can also be an [aggregate function](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), a [case expression](javascript:call_link\('abencds_case_expression_v2.htm'\)), an arithmetic expression, or a parameter.
    
    If the relational operator IS NULL is used, then lhs can also be another [case expression](javascript:call_link\('abencds_case_expression_v2.htm'\)), an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)), or a [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)).
    
-   rhs can be a [field](javascript:call_link\('abencds_field_v2.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)), a [literal](javascript:call_link\('abencds_literal_v2.htm'\)), a [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)), a [session variable](javascript:call_link\('abencds_session_variable_v2.htm'\)), a [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)), a [reuse expression](javascript:call_link\('abencds_reusable_expression_v2.htm'\)), a [built-in function](javascript:call_link\('abencds_builtin_functions_v2.htm'\)), or a path expression.
    
    If a comparison operator is used, then rhs can also be an [aggregate function](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), a [case expression](javascript:call_link\('abencds_case_expression_v2.htm'\)), or an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)).
    
    Exception: for the operator [LIKE](javascript:call_link\('abencds_cond_expr_like_v2.htm'\)), rhs must be a character literal.
    
-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)).element, as long as the CDS associations of the expression do not have any [non-SQL CDS entities](javascript:call_link\('abencds_non_sql_entity_glosry.htm'\) "Glossary Entry") as [association targets](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") and the expression is unique:
    
    -   The [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the contained [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is to-one.
    -   The path expression only contains [filter conditions](javascript:call_link\('abencds_path_expression_filter_v2.htm'\)) with addition 1:.
    
    element can be used to specify an element of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the last CDS association of the path.
    

Rules for amounts and quantities

The result data type of a case expression is determined by all THEN branches and the ELSE branch. If the result data type is a [CDS amount field](javascript:call_link\('abencds_amount_field_glosry.htm'\) "Glossary Entry"), a [CDS quantity field](javascript:call_link\('abencds_quantity_glosry.htm'\) "Glossary Entry"), or a [CDS calculated quantity](javascript:call_link\('abencds_calculated_quantity_glosry.htm'\) "Glossary Entry"), a reference annotation must be assigned. The following table shows how the result data type is calculated if one or more of the operands result1, result2, ... are amount and/or quantity fields.

operand1/operand2

Amount

Quantity

Calculated Quantity

Number

Amount

Amount

Calculated Quantity

Calculated Quantity

Calculated Quantity

Quantity

Calculated Quantity

Quantity

Calculated Quantity

Calculated Quantity

Calculated Quantity

Calculated quantity

Calculated quantity

Calculated Quantity

Calculated Quantity

Number

Calculated Quantity

Calculated quantity

Calculated Quantity

Number

-   It is not mandatory that the operands and the result point to the same reference field.
-   The following rules apply to amount fields of data type CURR:
    -   fields of data type CURR are compatible only to other amount fields of data type CURR and only if they have exactly the same number of decimal places.
    -   To combine an amount field of data type CURR with a field of another data type, a conversion to data type DECFLOAT34 using the conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](abencds_conv_func_unit_curr_v2.htm#!ABAP_VARIANT_4@4@) is required.

Hints

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).

Example

The following CDS view entity has a complex case distinction in the SELECT list.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_cds\_searched\_case\_ve
  as select from
    spfli
    {
      key carrid,
      key connid,
          distance,
          distid,
          case
            when distance >= 2000 then 'long-haul flight'
            when distance >= 1000 and
                 distance <  2000 then 'medium-haul flight'
            when distance <  1000 then 'short-haul flight'
                                  else 'error'
          end as flight\_type
    }
    where
      distid = 'MI'

The program DEMO\_CDS\_SEARCHED\_CASE\_VE uses [SELECT](javascript:call_link\('abapselect.htm'\)) to access the view and shows the result.