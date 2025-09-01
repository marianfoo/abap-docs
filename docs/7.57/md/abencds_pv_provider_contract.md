---
title: "CDS DDL - PROVIDER CONTRACT"
description: |
  Syntax ... PROVIDER CONTRACT  TRANSACTIONAL_QUERY  TRANSACTIONAL_INTERFACE  ANALYTICAL_QUERY  ...    ... Alternatives: 1. ... PROVIDER CONTRACT(#!ABAP_ALTERNATIVE_1@1@) 2. ...  (#!ABAP_ALTERNATIVE_2@2@) Effect The provider contract specifies the scenario in which
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm"
abapFile: "abencds_pv_provider_contract.htm"
keywords: ["do", "if", "try", "data", "abencds", "provider", "contract"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_transactional_query.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - PROVIDER CONTRACT, ABENCDS_PV_PROVIDER_CONTRACT, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - PROVIDER CONTRACT

Syntax

... PROVIDER CONTRACT *{* TRANSACTIONAL\_QUERY
                      *|* TRANSACTIONAL\_INTERFACE
                      *|* ANALYTICAL\_QUERY *}* ...
  *|* *{* *}* ...

Alternatives:

[1\. ... PROVIDER CONTRACT](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... *{* *}*](#!ABAP_ALTERNATIVE_2@2@)

Effect

The provider contract specifies the scenario in which a CDS projection view is used. The scenario determines in which runtime a CDS projection view is executed and which features are available. It is recommended that the provider contract is always specified to ensure that the appropriate, runtime-specific syntax checks are applied.

It is also possible, but not recommended, to leave out the provider contract. Projection views without provider contract are handled similarly to transactional projection views, but there are some minor differences in the syntax checks applied.

Alternative 1   

... PROVIDER CONTRACT ...

Additions:

[1\. ... TRANSACTIONAL\_QUERY](#!ABAP_ADDITION_1@1@)
[2\. ... TRANSACTIONAL\_INTERFACE](#!ABAP_ADDITION_2@2@)
[3\. ... ANALYTICAL\_QUERY](#!ABAP_ADDITION_3@3@)

Effect

Currently, the following provider contracts are available:

-   TRANSACTIONAL\_QUERY
-   TRANSACTIONAL\_INTERFACE
-   ANALYTICAL\_QUERY

[Child entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchild_entity_glosry.htm "Glossary Entry") within a [CDS composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") inherit their parents' provider contract and it is not allowed to specify a provider contract for a child entity. As soon as a projection view contains a [to-parent association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abento_parent_association_glosry.htm "Glossary Entry") or a [redirection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_assoc_redirected.htm) to a parent entity, a provider contract must not be set.

Hint

Further provider contracts are planned to be released in the near future.

Addition 1   

... TRANSACTIONAL\_QUERY

Effect

Specifies a CDS projection view as [transactional query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry"). Transactional queries are intended for modelling the projection layer of a [RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"). A transactional projection view must always be part of a business object. That means it must either be a [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry") itself, or it must be part of a composition tree that contains a root entity.

The feature set focuses on specializing the [RAP BO operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") of the underlying business object.

The runtime for transactional queries is mainly the [RAP query engine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_query_engine_glosry.htm "Glossary Entry"), but also the [RAP transactional engine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry").

Example

The following CDS projection view defines the provider contract TRANSACTIONAL\_QUERY.

@EndUserText.label: 'CDS projection view, REDEFINED ASSOC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_CDS\_PV\_PARENT
  provider contract transactional\_query
  as projection on DEMO\_CDS\_VIEW\_PARENT
    redefine association \_child
      redirected to composition child DEMO\_CDS\_PV\_CHILD
{
  key Id,
      Int1,
      /\* Associations \*/
      \_child.Int1 as field\_exposure
      }

Its child entity derives the provider contract from the parent entity. It does not specify an own provider contract:

@EndUserText.label: 'CDS projection view, REDEFINED ASSOC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_PV\_CHILD
  as projection on DEMO\_CDS\_VIEW\_CHILD
    redefine association \_to\_parent  
      redirected to parent DEMO\_CDS\_PV\_PARENT
{
  key Id,
      Int1,
      /\* Associations \*/
      \_to\_parent
}

Addition 2   

... TRANSACTIONAL\_INTERFACE

Effect

Specifies a [CDS transactional interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm "Glossary Entry"). CDS transactional interfaces serve as stable public interface layer in a CDS data model. They are typically used in the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry") to provide the basis for a [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). CDS transactional interfaces have a restricted feature set. They only support projecting elements and associations from the projected entity. It is recommended that [release contracts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrelease_contract_glosry.htm "Glossary Entry") [C1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_glosry.htm "Glossary Entry") and, optionally, also [C0](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_glosry.htm "Glossary Entry") are added.

Example

The following CDS transactional interface is based on the CDS view entity DEMO\_CDS\_PURCH\_DOC\_M. The composition is redirected to the CDS transactional interface of the child entity. Both parent and child entity are release for system-internal use (C1 Contract).

@EndUserText.label: 'CDS transactional interface'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_CDS\_TRANS\_INTERFACE\_ROOT
  provider contract transactional\_interface
  as projection on DEMO\_CDS\_PURCH\_DOC\_M
{
  key PurchaseDocument,
      Description,
      Status,
      Priority,
      /\* Associations \*/
      \_PurchaseDocumentItem:  
        redirected to DEMO\_CDS\_TRANS\_INTERFACE\_CHILD
}

The following CDS transactional interface represents the child entity:

@EndUserText.label: 'CDS transactional interface'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_TRANS\_INTERFACE\_CHILD
  provider contract transactional\_interface
  as projection on DEMO\_CDS\_PURCH\_DOC\_I\_M
{
  key PurchaseDocumentItem,
  key PurchaseDocument,
      Description,
      Vendor,
      /\* Associations \*/
      \_PurchaseDocument : redirected to DEMO\_CDS\_TRANS\_INTERFACE\_ROOT
}

Addition 3   

... ANALYTICAL\_QUERY

Effect

[CDS analytical projection views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry") are intended for modelling analytical queries within a CDS data model. An analytical projection view must always be part of an analytical object and the [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") must be an [analytical cube view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_cube_glosry.htm "Glossary Entry"). The feature set is restricted to the capabilities of the runtime of the analytical engine. The runtime for analytical queries are analytical engines, such as ABAP Analytical Engine or Online Analytical Processing (OLAP).

See also: [CDS Projection View, Analytical Queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_query_apv.htm)

Example

The following CDS projection view defines the provider contract ANALYTICAL\_QUERY.

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

Alternative 2   

... *{* *}*

Effect

It is possible, but not recommended, to leave out the provider contract. The default provider contract, if no provider contract is set explicitly, is TRANSACTIONAL\_QUERY. The same features are available as for transactional queries and a projection view without provider contract can be used in the same scenarios. However, there are some minor differences in the syntax checks applied. The differences are listed in topic [CDS projection view, no contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_no_contract.htm).