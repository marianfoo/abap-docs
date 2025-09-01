  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, case\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, searched_case_expr, ABENCDS_SEARCHED_CASE_EXPR_V2, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, searched\_case\_expr

Syntax

... CASE WHEN [cds\_cond1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm) THEN result1
        *\[*WHEN [cds\_cond2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm) THEN result2*\]*
        *\[*WHEN [cds\_cond3](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm) THEN result3*\]*
          ...
        *\[**{*ELSE resultn *|* ELSE NULL*}**\]*
    END ...

Effect

Complex [case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm) (searched case) in a [SELECT statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The case distinction evaluates the conditions [cds\_cond1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm), [cds\_cond2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm), ... and returns the first operand specified after THEN for which the comparison is true as result. If none of the conditions are true, the result is determined by the ELSE branch:

-   ELSE resultn returns the value resultn.
-   ELSE NULL returns the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry").

If ELSE is not specified, the result is the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry").

The following rules apply to the conditions specified after WHEN:

-   All [relational operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm) are allowed. That means that comparison operators, BETWEEN, LIKE, IS NULL and IS INITIAL are allowed.
-   The Boolean operators NOT, AND, and OR are allowed.
-   lhs expects a [field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm), a [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm), a [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v2.htm), or a [cast expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm).
    
    If a comparison operator is used, then lhs can also be an [aggregate function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm), a [case expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm), an arithmetic expression, or a parameter.
    
    If the relational operator IS NULL is used, then lhs can also be another [case expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm), an [arithmetic expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arithmetic_expression_v2.htm), or a [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm).
    
-   rhs can be a [field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm), a [literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm), a [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm), a [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v2.htm), a [cast expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm), a [reuse expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_reusable_expression_v2.htm), a [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v2.htm), or a path expression.
    
    If a comparison operator is used, then rhs can also be an [aggregate function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm), a [case expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm), or an [arithmetic expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arithmetic_expression_v2.htm).
    
    Exception: for the operator [LIKE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_like_v2.htm), rhs must be a character literal.
    
-   A field of a data source can be specified using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm).element, as long as the CDS associations of the expression do not have any [non-SQL CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry") as [association targets](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") and the expression is unique:
    
    -   The [cardinality](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencardinality_glosry.htm "Glossary Entry") of the contained [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") is to-one.
    -   The path expression only contains [filter conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_filter_v2.htm) with addition 1:.
    
    element can be used to specify an element of the [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the last CDS association of the path.
    

Rules for Amounts and Quantities

The result data type of a case expression is determined by all THEN branches and the ELSE branch. If the result data type is a [CDS amount field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field_glosry.htm "Glossary Entry"), a [CDS quantity field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_glosry.htm "Glossary Entry"), or a [CDS calculated quantity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"), a reference annotation must be assigned. The following table shows how the result data type is calculated if one or more of the operands result1, result2, ... are amount and/or quantity fields.

operand1/operand2

Amount

Quantity

Calculated Quantity

Number

Amount

amount

calculated quantity

calculated quantity

calculated quantity

Quantity

calculated quantity

quantity

calculated quantity

calculated quantity

Calculated Quantity

calculated quantity

calculated quantity

calculated quantity

calculated quantity

Number

calculated quantity

calculated quantity

calculated quantity

number

-   It is not mandatory that the operands and the result point to the same reference field.
-   The following rules apply to amount fields of data type CURR:
    -   fields of data type CURR are compatible only to other amount fields of data type CURR and only if they have exactly the same number of decimal places.
    -   To combine an amount field of data type CURR with a field of another data type, a conversion to data type DECFLOAT34 using the conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](abencds_conv_func_unit_curr_v2.htm#!ABAP_VARIANT_4@4@) is required.

Hints

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the HANA-specific SQL documentation.

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

The program DEMO\_CDS\_SEARCHED\_CASE\_VE uses [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) to access the view and shows the result.