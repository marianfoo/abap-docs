  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_transactional_interface.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Interface, ABENCDS_DEFIN
E_VIEW_AS_INTERFACE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Interface

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)*\]*
...
*\[*[@proj\_view\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm)*\]*
*\[*[@proj\_view\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm)*\]*
...
DEFINE *\[*ROOT*\]* VIEW ENTITY projection\_view
  [PROVIDER CONTRACT TRANSACTIONAL\_INTERFACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm)
    AS PROJECTION ON cds\_entity *\[*AS alias\_name*\]*
      { [projection\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_list_interface.htm) }

Additions:

[1\. ... ROOT](#!ABAP_ADDITION_1@1@)
[2\. ... AS alias\_name](#!ABAP_ADDITION_2@2@)

Effect

Defines a [CDS transactional interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") with the name projection\_view in [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry").

The projected entity cds\_entity can be either a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The projected entity must be part of a RAP BO: It must either be a root entity or contain a to-parent association. No other CDS entities or data sources are allowed as projected entity. Path expressions are not allowed for specifying the projected entity. One CDS entity can be used as basis for multiple CDS projection views.

The name of the CDS projection view projection\_view is defined after the DEFINE VIEW ENTITY statement. The usual rules for ABAP Dictionary [views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_views.htm) apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). It can have a maximum of 30 characters and is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP. The name of the DDL source and of the CDS entity must be identical.

Prerequisites

A [CDS transactional interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") that uses the addition [PROVIDER CONTRACT TRANSACTIONAL\_INTERFACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm) must be part of a [RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"). That means that the view must either be a [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry") itself, or it must be part of a [composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") and reach a root entity via a composition.

Components

-   Header annotations specified before the statement DEFINE VIEW ENTITY are not inherited from the projected entity. It is possible, but not mandatory, to specify [entity annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm) @entity\_annot or [projection view annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm) @proj\_view\_annot as header annotations.
-   The [provider contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm) must be set to TRANSACTIONAL\_INTERFACE.
-   The projection list [projection\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_list_interface.htm) defines the elements exposed as part of the interface.

Release Contracts

-   A transactional interface can be released for [Contract C0](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_glosry.htm "Glossary Entry").
-   A transactional interface should be released for [Contract C1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_glosry.htm "Glossary Entry").
-   A transactional interface should not be released for [Contract C2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc2_contract_glosry.htm "Glossary Entry").

Restrictions

-   A transactional interface cannot define new associations.
-   No further clauses are possible. WHERE, UNION, and GROUP BY are not supported.

Hints

-   [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") defined for a CDS transactional interface must be defined symmetrically to the [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") for the projected entity. The behavior of the access control of the projected entity must be inherited.
-   For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_matrix.htm).

Example

The following CDS transactional interface is based on the CDS view entity DEMO\_CDS\_PURCH\_DOC\_M. The composition is redirected to the CDS transactional interface of the child entity.

Both parent and child entity should be released for system-internal use under the C1 contract.

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

Addition 1   

... ROOT

Effect

The keyword ROOT specifies that the transactional interface is the [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry") of a [composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry"). The transactional interface must always reflect the position of the [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") in the composition tree: if the projected entity is a [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry"), the transactional interface must be a root as well. If the projected entity is not a root, the projection view cannot be a root. In this case, the projected entity must contain a [to-parent association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abento_parent_association_glosry.htm "Glossary Entry").

Note: A transactional interface must always either be a root entity itself, or it must be part of a composition tree and reach a root entity via an association.

Addition 2   

... AS alias\_name

Effect

Defines the name alias\_name as [alias name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalias_glosry.htm "Glossary Entry") of the projected entity. The alias name can have a maximum of 30 characters. If no name is defined explicitly using AS, then the original name of the data source is used.

Continue
[CDS DDL - projection\_list, Transactional Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_list_interface.htm)