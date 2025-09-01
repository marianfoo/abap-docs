---
title: "CDS DDL - DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON, Analytical Query"
description: |
  Syntax @entity_annot1(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm) @entity_annot2(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm) ... @AccessControl.authorizationCheck: #NOT_ALLOWED
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_analytical.htm"
abapFile: "abencds_define_view_as_analytical.htm"
keywords: ["do", "if", "try", "data", "abencds", "define", "view", "analytical"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Analytical Queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_query_apv.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON, Analytical Query, ABENCDS_DE
FINE_VIEW_AS_ANALYTICAL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON, Analytical Query

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)*\]*
...
[@AccessControl.authorizationCheck: #NOT\_ALLOWED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm)
*\[*[@proj\_view\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm)*\]*
...
DEFINE TRANSIENT VIEW ENTITY analytical\_query
   [PROVIDER CONTRACT ANALYTICAL\_QUERY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm)
   *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_list_apv.htm)*\]*
    AS PROJECTION ON cds\_entity *\[*AS alias\_name*\]*
      { [element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_list_apv.htm) }
   *\[*[WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_where_apv.htm) cds\_cond*\]*

Effect

Defines a [CDS analytical projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry") with the name analytical\_query in [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry"). A CDS analytical projection view defines an analytical query in its [element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_list_apv.htm).

The [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") cds\_entity must be an [analytical cube view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_cube_glosry.htm "Glossary Entry"). One cube view can serve as basis for multiple analytical projection views.

The name of the CDS analytical projection view analytical\_query is defined after the DEFINE TRANSIENT VIEW ENTITY statement. It must comply with the [naming rules for ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_general_syntax_rules.htm) with one specialization: It can have a maximum of 28 characters (instead of 30 characters), because the analytical engine automatically adds the prefix 2C during further processing.

Prerequisites

-   The header annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm) must be specified with the value #NOT\_ALLOWED. Analytical queries cannot be accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") and therefore, no [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") can be specified. Instead, the CDS access control of the analytical cube view is applied.
-   The projected entity must be an [analytical cube view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_cube_glosry.htm "Glossary Entry"), annotated with the framework-specific annotation [@Analytics.dataCategory: #CUBE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_frmwrk_tables.htm).

Components

-   Header annotations specified before the statement DEFINE TRANSIENT VIEW ENTITY are not inherited from the projected entity. It is possible, but not mandatory, to specify [entity annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm) @entity\_annot or [projection view annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm) @proj\_view\_annot as header annotations.
-   The mandatory keyword TRANSIENT defines a CDS analytical projection view as transient CDS view entity. That means that only a runtime object on the ABAP server is generated, but no [SQL view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_view_glosry.htm "Glossary Entry") is generated on the HANA database.
-   The [provider contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm) must be specified with the value ANALYTICAL\_QUERY to ensure that the appropriate features and syntax checks for analytical queries are applied.
-   [parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_list_apv.htm) can be used to assign [input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_parameter_glosry.htm "Glossary Entry") to the projection view. These input parameters can be specified in operand positions of the view and can be assigned actual parameters when the view is used.
-   The optional addition AS defines the name alias\_name as [alias name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalias_glosry.htm "Glossary Entry") of the projected entity. The alias name can have a maximum of 30 characters. If no name is defined explicitly using AS, then the original name of the data source is used.
-   The element list [element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_list_apv.htm) defines the components of the analytical query.
-   Optionally, the number of rows included in the result set can be further restricted by the addition [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_where_apv.htm).

Restriction

-   Defining new associations in the projection layer is not possible.
-   Exposing associations is not allowed either.

Example

The following CDS analytical projection view DEMO\_ANALYTICAL\_QUERY defines an analytical query. It is based on the cube view DEMO\_CDS\_CUBE\_VIEW.

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