  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Analytical Queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_query_apv.htm) →  [CDS DDL - element\_list, Analytical Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_list_apv.htm) →  [CDS DDL - element, Analytical Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_apv.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - path_expr, Analytical Query, ABENCDS_PATH_EXPR_APV, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - path\_expr, Analytical Query

Syntax

... *\[*source.*\]*\_assoc1*\[* [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_parameters_v2.htm)*\]**\[*[filter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_assoc_modified.htm)*\]* ...

Effect

A [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpath_expression_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") is a sequence of CDS associations separated by periods (.) whose names are specified using assoc1, assoc2, and so on.

In analytical projection views, path expressions are only supported in the following scenarios:

-   Language dependencies implemented using the keyword [LOCALIZED](abencds_proj_view_element.htm#!ABAP_ADDITION_4@4@).
-   Temporal dependencies implemented in the following format:
    
    \[1:date\_from <= $parameter.key\_date && date\_to >= $parameter.key\_date\]
    
    Note: key\_date can be a [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), a [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v2.htm), or a [literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm). It must be typed with [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) or [DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm). It must be annotated with @Semantics.businessDate.
    

Hint

Fields included via path expressions can be texts, display attributes, or texts belonging to display attributes. In an [analytical cube view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_cube_glosry.htm "Glossary Entry"), such fields can be text or foreign key associations. In a CDS dimension view, such fields can be text associations.

Example

The following CDS analytical projection view DEMO\_ANALYTICAL\_QUERY defines an analytical query. It is based on the cube view DEMO\_CDS\_CUBE\_VIEW. It contains a path expression to a localized text element CurrencyDescription.

@EndUserText.label: 'CDS projection view, analytical query'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
define transient view entity DEMO\_ANALYTICAL\_QUERY
  provider contract analytical\_query
  with parameters
    p\_targetCurrency : abap.cuky
  as projection on DEMO\_CDS\_CUBE\_VIEW
{
          //ROWS
          @AnalyticsDetails.query.axis: #FREE
          so\_key                       as SalesOrderKey,
          @AnalyticsDetails.query.axis: #ROWS
          lifecycle\_status             as LifecycleStatus,
          //COLUMNS
          @AnalyticsDetails.query.axis: #COLUMNS
          quantity\_sum                 as QuantitySum,
          uom\_sum                      as UnitOfQuantity,
          @ObjectModel.text.element: \['CurrencyDescription'\]
          currency\_sum                 as CurrencyOfAmount,
          \_Currency.\_Text.CurrencyName as CurrencyDescription : localized,
          //typed literal
          @Aggregation.default: #FORMULA
          abap.decfloat34'0.05'        as Discount,
          //Formula to define a calculated quantity
          @Aggregation.default: #FORMULA
          @Semantics.quantity.unitOfMeasure: 'AmPerQuanUnit'
          curr\_to\_decfloat\_amount( amount\_sum ) /
          $projection.QuantitySum      as AmountPerQuantity,
          //virtual element to define a calculated unit
  virtual AmPerQuanUnit  : dd\_cds\_calculated\_unit,
  virtual targetCurrency : abap.cuky,
          //parameter used in currency conversion
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'targetCurrency'
          currency\_conversion(
            amount => curr\_to\_decfloat\_amount( amount\_sum ),
            source\_currency => currency\_sum,
            target\_currency => $parameters.p\_targetCurrency,
            exchange\_rate\_date => created\_on
          )                            as convertedAmount
}