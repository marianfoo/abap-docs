  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Analytical Queries](javascript:call_link\('abencds_analytical_query_apv.htm'\)) →  [CDS DDL - element\_list, Analytical Query](javascript:call_link\('abencds_element_list_apv.htm'\)) →  [CDS DDL - element, Analytical Query](javascript:call_link\('abencds_element_apv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - case_expr, Analytical Query, ABENCDS_CASE_EXPRESSION_APV, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - case\_expr, Analytical Query

Syntax Forms

Selection-related case expression (restricted measure)

1\. ... CASE
        WHEN [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\))
        THEN result
       *\[*ELSE NULL*\]*
      END ...
Formula-related case expression

2\. @Aggregation.default: #FORMULA
   CASE
     WHEN [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\))
     THEN result1
     ELSE *{*result2 *|* NULL*}*
   END ...

-   [Selection-Related Case Expression (Restricted Measure)](#abencds-case-expression-apv-1-------formula-related-case-expression---@ITOC@@ABENCDS_CASE_EXPRESSION_APV_2)

Effect

[Case distinction](javascript:call_link\('abencase_distinction_glosry.htm'\) "Glossary Entry") in the [element list](javascript:call_link\('abencds_element_list_apv.htm'\)) of an analytical query. Either a selection-related case expression (restricted measure) or a formula-related case expression.

Example

The following CDS analytical projection view DEMO\_CDS\_ANALYTIC\_CASE defines an analytical query. It is based on the cube view DEMO\_CDS\_CUBE\_VIEW. The projection view defines one selection-related case expression and one formula-related case expression.

@AccessControl.authorizationCheck: #NOT\_ALLOWED
define transient view entity DEMO\_CDS\_ANALYTIC\_CASE
  provider contract analytical\_query
  as projection on DEMO\_CDS\_CUBE\_VIEW
{
  so\_key,
  currency\_sum,
  //selection-related case expression
  @Semantics.amount.currencyCode: 'currency\_sum'
  case when lifecycle\_status between 'A' and 'B'
  then amount\_sum end as QuantityAB,
  ////formula-related case expression
  @Aggregation.default: #FORMULA
  case
  when created\_on = $session.system\_date
  then abap.int8'200'
  else abap.int8'700'
  end                 as formula\_demo
}
where created\_on = $session.system\_date

Selection-Related Case Expression (Restricted Measure)   

Syntax

... CASE
      WHEN [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\))
      THEN result
     *\[*ELSE NULL*\]*
    END ...

Effect

Case expression in a CDS analytical projection view that defines a selection. There must be exactly one WHEN branch. A regular ELSE branch is not allowed. ELSE NULL is available (optionally) to explicitly define the null value as result if no matches are found.

The following is allowed as result specified after THEN:

-   A field of a data source specified as [analytical measure](javascript:call_link\('abencds_measure_glosry.htm'\) "Glossary Entry").
-   The built-in functions [CURR\_TO\_DECFLOAT\_AMOUNT](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)), [CURRENCY\_COVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)), and [UNIT\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)).
-   A numeric [typed literal](javascript:call_link\('abencds_typed_literal_v2.htm'\)) of a measure-like data type or the [untyped literal](javascript:call_link\('abencds_untyped_literal_v2.htm'\)) 1. A literal is only allowed if the element is annotated with AnalyticsDetails.query.onCharacteristicStructure: true and when this annotation is used, a literal is mandatory.

The following rules apply to the condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) specified after WHEN:

-   All [comparison operators](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)) are supported.
-   [*\[*NOT*\]* BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v2.htm'\)), [LIKE](javascript:call_link\('abencds_cond_expr_like_v2.htm'\)), and [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\)) are supported.
    
    Note: NOT LIKE is not supported.
    
-   The [Boolean operators](javascript:call_link\('abenboolean_operator_glosry.htm'\) "Glossary Entry") AND, OR, and NOT are allowed. Identical fields must be combined with OR and different fields must be combined with AND.
    
    Note: A filter condition does not support nested negations. The following is not supported: AND NOT field\_a <> 'B. The reason is that NOT and <> are both negations.
    
-   lhs expects a field of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). The field must be classified as [analytical dimension](javascript:call_link\('abencds_dimension_glosry.htm'\) "Glossary Entry").
-   rhs can be a [parameter](javascript:call_link\('abencds_parameter_list_apv.htm'\)), a session variable, or a [typed literal](javascript:call_link\('abencds_typed_literal_v2.htm'\)).
-   [Path expressions](javascript:call_link\('abencds_element_apv.htm'\)) are not supported as operands.

Formula-Related Case Expression   

Syntax

...
@Aggregation.default: #FORMULA
  CASE
    WHEN cds\_cond
    THEN result1
    ELSE *{*result2 *|* NULL*}*
  END ...

Effect

Formula-related case expression in the element list of an CDS analytical projection view. The case distinction evaluates the condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) and returns either the operand result1 specified after THEN, or the operand result2 specified after ELSE. result2 can also be the null value. ELSE NULL is available to explicitly define the null value as result if no matches are found.

There must be exactly one WHEN branch, one THEN branch, and one ELSE branch. The annotation @Aggregation.default: #FORMULA is mandatory for formula-related case expressions.

result1 and result2 must be specified as a field of a data source with a data type valid for [analytical measures](javascript:call_link\('abencds_measure_glosry.htm'\) "Glossary Entry"), numeric [typed literals](javascript:call_link\('abencds_typed_literal_v2.htm'\)) (except for data type NUMC), or numeric [parameters](javascript:call_link\('abencds_f1_param.htm'\)) (except for data type NUMC).

The following rules apply to the condition specified after WHEN:

-   All [comparison operators](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)) except for <> are supported.
-   [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\)) is supported. [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v2.htm'\)), [LIKE](javascript:call_link\('abencds_cond_expr_like_v2.htm'\)), and [IS NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\)) are not allowed.
-   The [Boolean operators](javascript:call_link\('abenboolean_operator_glosry.htm'\) "Glossary Entry") AND and OR are allowed.
-   lhs expects either a field of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") that has a data type valid for analytical measures, a [built-in function](javascript:call_link\('abencds_builtin_functions_v2.htm'\)), or an input parameter.
-   rhs can be a field of a data source specified as [analytical measure](javascript:call_link\('abencds_measure_glosry.htm'\) "Glossary Entry"), a built-in function, a [parameter](javascript:call_link\('abencds_parameter_list_apv.htm'\)), a session variable, or a [typed literal](javascript:call_link\('abencds_typed_literal_v2.htm'\)) of one of the following data types: DEC, DECFLOAT16, DECFLOAT34, FLTP, DF16\_DEC, DF34\_DEC, DF16\_RAW, DF34\_RAW, INT1, INT2, INT4, INT8, DATS, DATN, TIMN, TIMS.
-   [Path expressions](javascript:call_link\('abencds_element_apv.htm'\)) are not supported as operands.