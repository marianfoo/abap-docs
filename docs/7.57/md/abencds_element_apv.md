  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Analytical Queries](javascript:call_link\('abencds_analytical_query_apv.htm'\)) →  [CDS DDL - element\_list, Analytical Query](javascript:call_link\('abencds_element_list_apv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - element, Analytical Query, ABENCDS_ELEMENT_APV, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - element, Analytical Query

Syntax

... *\[*[@element\_annot1](javascript:call_link\('abencds_element_annotations_v2.htm'\))*\]*
    *\[*[@element\_annot2](javascript:call_link\('abencds_element_annotations_v2.htm'\))*\]*
    ...
                *{* field                *\[*AS alias*\]*             *}*
      *|*         *{* [path\_expr](javascript:call_link\('abencds_path_expr_apv.htm'\)).element    *\[*AS alias*\]**\[*: LOCALIZED*\]**}*
      *|*         *{* [arith\_expr](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\))            AS alias              *}*
      *|*         *{* [builtin\_func](javascript:call_link\('abencds_builtin_functions_v2.htm'\))          AS alias              *}*
      *|*         *{* [case\_expr](javascript:call_link\('abencds_case_expression_apv.htm'\))             AS alias              *}*
      *|* *{* VIRTUAL [calculated unit](javascript:call_link\('abencds_calculated_quantity.htm'\))       AS alias              *}*
      *|*         *{* [parameter](javascript:call_link\('abencds_parameter_list_apv.htm'\))             AS alias              *}*
      *|*         *{* [session\_variable](javascript:call_link\('abencds_session_variable_v2.htm'\))      AS alias              *}*
      *|*         *{* [typed\_literal](javascript:call_link\('abencds_typed_literal_v2.htm'\))         AS alias              *}*
      *|*         *{* [cast\_expr](javascript:call_link\('abencds_cast_expression_v2.htm'\))             AS alias              *}*
      *|*         *{* [$projection.reuse\_exp](javascript:call_link\('abencds_reusable_expression_v2.htm'\)) AS alias              *}*

Additions:

[1\. ... AS alias](#!ABAP_ADDITION_1@1@)
[2\. ... LOCALIZED](#!ABAP_ADDITION_2@2@)
[3\. ... VIRTUAL](#!ABAP_ADDITION_3@3@)

Effect

Defines an element in the element list of a [CDS analytical projection view](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry").

Elements in the element list of an analytical projection view can be [analytical formulas](javascript:call_link\('abencds_formula_glosry.htm'\) "Glossary Entry"), [selections](javascript:call_link\('abencds_selection_glosry.htm'\) "Glossary Entry"), dimensions, text fields or attributes, or CDS amount and quantity fields. See the topic about [the conceptual background of analytical queries](javascript:call_link\('abencds_measure_dimension_apv.htm'\)) for further details.

-   The rules for [propagation of element annotations in CDS projection views](javascript:call_link\('abencds_element_annotations_pv.htm'\)) apply.
-   field exposes an element from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). AS can be used to define an alternative element name alias.
    
    In analytical projection views, [measure](javascript:call_link\('abencds_measure_glosry.htm'\) "Glossary Entry") fields can be exposed multiple times with different alias names. [Dimension](javascript:call_link\('abencds_dimension_glosry.htm'\) "Glossary Entry") fields can be exposed only once.
    
    Analytical measure fields and analytical dimension fields from the projected entity remain analytical measures and dimensions and their type must not be changed in the projection layer.
    
-   [path\_expr](javascript:call_link\('abencds_path_expr_apv.htm'\)).element exposes an element of an association target of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). If no alternative element name alias is defined, the original element name of the element picked by the path expression is reused. For details, see the topic about [path expressions in analytical queries](javascript:call_link\('abencds_path_expr_apv.htm'\)).
-   [arith\_expr](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)) can be used to specify an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)). The annotation Aggregation.default: #FORMULA is mandatory when an arithmetic expression is included as a field in the element list. Arithmetic expressions are evaluated by the analytical engine when the analytical query is accessed. An alternative element name alias must be defined with the keyword AS.
    
    Note: Arithmetic expressions must not have any path fields specified using path\_expr.element as operands.
    
-   The following built-in functions [builtin\_func](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) are supported:
    
    [CURR\_TO\_DECFLOAT\_AMOUNT](abencds_conv_func_unit_curr_v2.htm#!ABAP_VARIANT_4@4@)
    
    [GET\_NUMERIC\_VALUE](abencds_conv_func_unit_curr_v2.htm#!ABAP_VARIANT_3@3@)
    
    [DATS\_DAYS\_BETWEEN](javascript:call_link\('abencds_date_functions_v2.htm'\))
    
    [DATS\_ADD\_DAYS](javascript:call_link\('abencds_date_functions_v2.htm'\))
    
    [CURRENCY\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)): The following special rules apply:
    
    -   amount can be either a field of the cube view, or the function CURR\_TO\_DECFLOAT\_AMOUNT with a field of the underlying cube view as argument arg. No other expression or operand is allowed as operand for amount.
    -   source\_currency must be a field of the cube view.
    -   target\_currency must not be a reuse expression specified using [$projection](javascript:call_link\('abencds_reusable_expression_v2.htm'\)).
    -   The following optional parameters are not supported: client, round, decimal\_shift, decimal\_shift\_back, and error\_handling.
    
    [UNIT\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)): The following special rules apply:
    
    -   quantity and source\_unit must be defined as a field of the cube view.
    -   target\_unit must not be a reuse expression specified using [$projection](javascript:call_link\('abencds_reusable_expression_v2.htm'\)).
    -   The following optional parameters are not supported: client, error\_handling.
    
    The annotation Aggregation.default: #FORMULA is mandatory for built-in functions.
    
-   [case\_exp](javascript:call_link\('abencds_case_expression_apv.htm'\)) can be used to specify [case distinctions](javascript:call_link\('abencds_case_expression_apv.htm'\)). In an analytical query, case distinctions define [analytical formulas](javascript:call_link\('abencds_formula_glosry.htm'\) "Glossary Entry") or [restricted measures](javascript:call_link\('abencds_selection_glosry.htm'\) "Glossary Entry"). See topic [case\_expr, analytical query](javascript:call_link\('abencds_case_expression_apv.htm'\)) for further details.
-   [Calculated units](javascript:call_link\('abencds_calculated_quantity.htm'\)) can be defined using the keyword VIRTUAL in CDS analytical projection views. By that, the analytical runtime automatically fills in the required value for the unit.
-   parameter can be used to specify a parameter from the [parameter list](javascript:call_link\('abencds_parameter_list_apv.htm'\)). An alternative element name using the keyword AS must be defined and it cannot be the name of the parameter. In analytical queries, parameters must have either a numeric data type (except for NUMC), or a unit or currency key. The annotation Aggregation.default: #FORMULA is mandatory when a parameter of a numeric data type is included as a field in the element list. No annotation is required when a parameter is used as an operand in a [formula](javascript:call_link\('abencds_formula_glosry.htm'\) "Glossary Entry").
-   [session\_variable](javascript:call_link\('abencds_session_variable_v2.htm'\)) can be used to specify a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry"). AS must be used to define an alternative element name alias. The following session variables are supported in the element list of analytical queries: system\_date and user\_date. The annotation Aggregation.default: #FORMULA is mandatory when a session variable is included as a field in the element list. No annotation is required when a session variable is used as an operand in a [formula](javascript:call_link\('abencds_formula_glosry.htm'\) "Glossary Entry") or [selection](javascript:call_link\('abencds_selection_glosry.htm'\) "Glossary Entry").
-   [typed\_literal](javascript:call_link\('abencds_typed_literal_v2.htm'\)) can be used to declare a [typed literal](javascript:call_link\('abentyped_literal_glosry.htm'\) "Glossary Entry"). AS must be used to define an alternative element name alias. In analytical queries, typed literals must have either a numeric data type (except for NUMC), or a unit or currency key. The annotation Aggregation.default: #FORMULA is mandatory when a numeric typed literal is included as a field in the element list. No annotation is required when a typed literal is used as an operand in a [formula](javascript:call_link\('abencds_formula_glosry.htm'\) "Glossary Entry") or [selection](javascript:call_link\('abencds_selection_glosry.htm'\) "Glossary Entry").
    
    Note: [untyped literals](javascript:call_link\('abencds_untyped_literal_v2.htm'\)) are not supported in the element list of analytical projection views.
    
-   [cast\_expr](javascript:call_link\('abencds_cast_expression_v2.htm'\)) can be used to specify [cast expressions](javascript:call_link\('abencds_cast_expression_v2.htm'\)). For a cast expression, an alias name must be specified with the keyword AS.
-   [$projection.reuse\_exp](javascript:call_link\('abencds_reusable_expression_v2.htm'\)) reuses an expression defined in the SELECT list in another operand position of the same analytical projection view. An alternative element name specified using AS is required.

Restrictions

-   Exposing associations from the projected entity is not allowed.
-   Defining key fields using KEY is not allowed.

Example

The following CDS analytical projection view DEMO\_ANALYTICAL\_QUERY\_ELEM defines an analytical query. It is based on the cube view DEMO\_CDS\_CUBE\_VIEW.

@EndUserText.label: 'CDS projection view, analytical query'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
define transient view entity DEMO\_ANALYTICAL\_QUERY\_ELEM
  provider contract analytical\_query
  with parameters
    p\_preferred\_currency : abap.cuky
  as projection on DEMO\_CDS\_CUBE\_VIEW
{
          @AnalyticsDetails.query.axis: #FREE
          so\_key                           as SalesOrderKey,
          @AnalyticsDetails.query.axis: #ROWS
          lifecycle\_status                 as LifecycleStatus,
          \_Currency.\_Text.CurrencyName : localized,
          //
          @AnalyticsDetails.query.axis: #COLUMNS
          quantity\_sum                     as QuantitySum,
          //
          uom\_sum                          as UnitOfQuantity,
          currency\_sum                     as CurrCode,
          \_Currency.AlternativeCurrencyKey as Currency,
          //typed literal
          @Aggregation.default: #FORMULA
          abap.decfloat34'0.05'            as Discount,
          //calculated unit
          @Aggregation.default: #FORMULA
          @Semantics.quantity.unitOfMeasure: 'AmPerQuanUnit'
          curr\_to\_decfloat\_amount( amount\_sum )
          / $projection.QuantitySum        as AmountPerQuantity,
          //calculated unit, defined as virtual element
  virtual AmPerQuanUnit : dd\_cds\_calculated\_unit,
          //session variable
          @Aggregation.default: #FORMULA
          $session.system\_date             as sysdat,
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'CurrCode'
          currency\_conversion(
            amount => amount\_sum,
            source\_currency => currency\_sum,
            target\_currency => $parameters.p\_preferred\_currency,
            exchange\_rate\_date => created\_on
          )                                as convertedAmount
}

Addition 1   

... AS alias

Effect

Defines an alternative element name for the projected element. The alternative element name replaces the actual name of the element from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). The view field is created under the alternative element name in the CDS projection view. Accordingly, the alternative element name must comply with the general syntax rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)).

Addition 2   

... LOCALIZED

Effect

The keyword LOCALIZED must be used to display text elements in the current system language. See [CDS Projection View, proj\_element](abencds_proj_view_element.htm#!ABAP_ADDITION_4@4@).

Addition 3   

... VIRTUAL

Effect

The keyword VIRTUAL defines a [CDS virtual element](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") in a CDS projection view. In general, CDS virtual elements calculate field values during runtime, see topic [CDS Projection View, VIRTUAL](javascript:call_link\('abencds_proj_view_virtual_element.htm'\)).

In analytical queries, a virtual element is mostly used to define a [calculated unit](javascript:call_link\('abencds_calculated_quantity.htm'\)) for a [calculated quantity](javascript:call_link\('abencds_calculated_quantity.htm'\)). By using VIRTUAL, the analytical runtime automatically fills in the required value for the unit by interpreting the referred calculated quantity.

Note: In an analytical query, the annotation [@ObjectModel.virtualElementCalculatedBy](javascript:call_link\('abencds_f1_element_annotation.htm'\)), which connects the virtual element to an ABAP class that calculates a value at runtime, is not supported.

Continue
[CDS DDL - path\_expr, Analytical Query](javascript:call_link\('abencds_path_expr_apv.htm'\))
[CDS DDL - case\_expr, Analytical Query](javascript:call_link\('abencds_case_expression_apv.htm'\))