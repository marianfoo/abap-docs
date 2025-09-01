---
title: "CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Query"
description: |
  Syntax @entity_annot1(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm) @entity_annot2(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm) ... @proj_view_annot1(https://help.sap.com/do
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_projection.htm"
abapFile: "abencds_define_view_as_projection.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abencds", "define", "view", "projection"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_transactional_query.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Query, ABENCDS_DEFINE_VI
EW_AS_PROJECTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Query

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)*\]*
...
*\[*[@proj\_view\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm)*\]*
*\[*[@proj\_view\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm)*\]*
...
DEFINE *\[*ROOT*\]* VIEW ENTITY projection\_view
   *\[* [PROVIDER CONTRACT TRANSACTIONAL\_QUERY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm)*\]*
    AS PROJECTION ON cds\_entity *\[*AS alias\_name*\]*
   *\[*[association1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_association.htm) [association2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_association.htm) ...*\]*
   *\[*[redefined\_assoc1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_redefined_assoc.htm) [redefined\_assoc2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_association.htm) ...*\]*
      { [projection\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_element_list.htm) }
   *\[*[WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_cond_expr.htm) cds\_cond*\]*

Additions:

[1\. ... ROOT](#!ABAP_ADDITION_1@1@)
[2\. ... AS alias\_name](#!ABAP_ADDITION_2@2@)

Effect

Defines a [CDS transactional query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") with the name projection\_view in [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry"). A CDS projection view is a direct projection of an underlying [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity (called [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry")) and exposes a subset of the elements of the projected entity, which are defined in the projection list [projection\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_element_list.htm).

The projected entity cds\_entity can be either a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), a [CDS transactional interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm "Glossary Entry"), or a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). No other CDS entities or data sources are allowed as projected entity. Path expressions are not allowed for specifying the projected entity. One CDS entity can be used as basis for multiple CDS projection views.

The name of the CDS projection view projection\_view is defined after the DEFINE VIEW ENTITY statement. The usual rules for ABAP Dictionary [views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_views.htm) apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). It can have a maximum of 30 characters and is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP. The name of the DDL source and of the CDS entity must be identical.

Prerequisites

A CDS transactional query that uses the addition [PROVIDER CONTRACT TRANSACTIONAL\_QUERY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm) must be part of a [RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"). That means that the view must either be a root entity itself, or it must be part of a composition tree and reach a root entity via a composition.

Components

-   Header annotations specified before the statement DEFINE VIEW ENTITY are not inherited from the projected entity. It is possible, but not mandatory, to specify [entity annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm) @entity\_annot or [projection view annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm) @proj\_view\_annot as header annotations.
-   The [provider contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm) specifies the scenario in which the projection view is used. It is recommended that a provider contract is always specified. Otherwise, no runtime-specific syntax checks are applied. See the [topic about provider contracts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm) for further details.
-   It is possible to add new, local, read-only associations association1, association2 to a projection view after the view definition with DEFINE VIEW ENTITY AS PROJECTION ON. The same rules apply as to [associations in CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_v2.htm). The main difference is that read-only associations in projection views can only be exposed but they cannot be used in [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm) to expose elements from new associations. Details on new local associations in CDS projection views can be found in topic [CDS DDL - projection\_view, ASSOCIATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_association.htm).
-   The projection list [projection\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_element_list.htm) can consist of elements of the projected entity, path expressions, exposed associations, and [virtual elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_virtual_element_glosry.htm "Glossary Entry").
-   Optionally, the number of rows included in the result set can be further restricted by the addition [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_cond_expr.htm).

Hints

-   [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") defined for a CDS transactional query must be defined symmetrically to the [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") for the projected entity. All behavior of the access control of the projected entity must be inherited.
-   For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_matrix.htm).

Example

The following CDS transactional query DEMO\_SALES\_PV\_BUPA is a projection of the existing CDS view DEMO\_SALES\_CDS\_BUPA. The result set contains only rows where the last name of the business partner starts with "P".

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Projection View for BuPa'
define root view entity DEMO\_SALES\_PV\_BUPA
provider contract transactional\_query
  as projection on
    DEMO\_SALES\_CDS\_BUPA
    {
      key id          as BusinessPartnerID,
          given\_name  as GivenName,
          middle\_name as MiddleName,
          family\_name as FamilyName
    }
  where $projection.familyname like 'P%'

Example

The following CDS transactional query DEMO\_SALES\_PV\_SO\_I\_SL is a projection of the existing CDS view DEMO\_SALES\_CDS\_SO\_I\_SL. It exposes a subset of the elements of the projected entity as well as an association.

A provider contract is not specified, since the provider contract is specified only once in the root entity of a CDS composition tree and all child entities automatically inherit this provider contract. In this case, the root entity is DEMO\_SALES\_PV\_SO and it specifies the business object as transactional query.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Projection View SO Item Schedule Line'
@Metadata.allowExtensions: true
define view entity DEMO\_SALES\_PV\_SO\_I\_SL
  as projection on
    DEMO\_SALES\_CDS\_SO\_I\_SL
    {
      key schedule\_line\_key as ScheduleLineKey,
          parent\_key        as SalesOrderItemKey,
          \_SalesOrderItem : redirected to parent DEMO\_SALES\_PV\_SO\_I
    }

Addition 1   

... ROOT

Effect

The keyword ROOT specifies that the projection view is the [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry") of a [composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry"). The projection view must always reflect the position of the [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") in the composition tree: if the projected entity is a [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry"), the projection view must be a root as well. If the projected entity is not a root, the projection view cannot be a root. In this case, the projected entity must contain a [to-parent association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abento_parent_association_glosry.htm "Glossary Entry").

Note: If a CDS projection view is defined as transactional query using the addition [PROVIDER CONTRACT TRANSACTIONAL\_QUERY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm), then the view must either be a root entity itself, or it must be part of a composition tree and reach a root entity via an association.

Addition 2   

... AS alias\_name

Effect

Defines the name alias\_name as [alias name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalias_glosry.htm "Glossary Entry") of the projected entity. The alias name can have a maximum of 30 characters. If no name is defined explicitly using AS, then the original name of the data source is used.