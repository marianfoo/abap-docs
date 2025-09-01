  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Interface](javascript:call_link\('abencds_pv_transactional_interface.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20VIEW%20ENTITY%20AS%20PROJECTION%20ON%2C%20Transactional%20Interface%2C%20ABENCDS_DEFINE_VIEW_AS_INTERFACE%2C%20758%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Interface

Syntax

*\[*[@entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
*\[*[@entity\_annot2](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
...
*\[*[@proj\_view\_annot1](javascript:call_link\('abencds_proj_view_annotations.htm'\))*\]*
*\[*[@proj\_view\_annot2](javascript:call_link\('abencds_proj_view_annotations.htm'\))*\]*
...
DEFINE *\[*ROOT*\]* VIEW ENTITY projection\_view
  [PROVIDER CONTRACT TRANSACTIONAL\_INTERFACE](javascript:call_link\('abencds_pv_provider_contract.htm'\))
    AS PROJECTION ON cds\_entity *\[*AS alias\_name*\]*
      { [projection\_list](javascript:call_link\('abencds_element_list_interface.htm'\)) }
   *\[*[WHERE](javascript:call_link\('abencds_interface_cond_expr.htm'\)) cds\_cond*\]*

Additions:

[1\. ... ROOT](#!ABAP_ADDITION_1@1@)
[2\. ... AS alias\_name](#!ABAP_ADDITION_2@2@)

Effect

Defines a [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry") with the name projection\_view in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

The projected entity cds\_entity can be either a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The projected entity must be part of a RAP BO: It must either be a root entity or contain a to-parent association. No other CDS entities or data sources are allowed as projected entity. Path expressions are not allowed for specifying the projected entity. One CDS entity can be used as basis for multiple CDS projection views.

The name of the CDS projection view projection\_view is defined after the DEFINE VIEW ENTITY statement. The usual rules for ABAP Dictionary [views](javascript:call_link\('abenddic_views.htm'\)) apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). It can have a maximum of 30 characters and is in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP. The name of the DDL source and of the CDS entity must be identical.

Prerequisites

A [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry") that uses the addition [PROVIDER CONTRACT TRANSACTIONAL\_INTERFACE](javascript:call_link\('abencds_pv_provider_contract.htm'\)) must be part of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). That means that the view must either be a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") itself, or it must be part of a [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") and reach a root entity via a [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry").

Components

-   Header annotations specified before the statement DEFINE VIEW ENTITY are not inherited from the projected entity. It is possible, but not mandatory, to specify [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) @entity\_annot or [projection view annotations](javascript:call_link\('abencds_proj_view_annotations.htm'\)) @proj\_view\_annot as header annotations.
-   The [provider contract](javascript:call_link\('abencds_pv_provider_contract.htm'\)) must be set to TRANSACTIONAL\_INTERFACE.
-   The projection list [projection\_list](javascript:call_link\('abencds_element_list_interface.htm'\)) defines the elements exposed as part of the interface.
-   Optionally, the number of rows included in the result set can be further restricted by the addition [WHERE](javascript:call_link\('abencds_interface_cond_expr.htm'\)).

Release Contracts

-   A transactional interface can be released for [Contract C0](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry").
-   A transactional interface should be released for [Contract C1](javascript:call_link\('abenc1_contract_glosry.htm'\) "Glossary Entry").
-   A transactional interface should not be released for [Contract C2](javascript:call_link\('abenc2_contract_glosry.htm'\) "Glossary Entry").

Restrictions

-   A transactional interface cannot define new associations.
-   No further clauses are possible. WHERE, UNION, and GROUP BY are not supported.

Hints

-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") defined for a CDS transactional interface must be defined symmetrically to the [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") for the projected entity. The behavior of the access control of the projected entity must be inherited.
-   For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](javascript:call_link\('abencds_data_source_matrix.htm'\)).

Example

The following CDS transactional interface is based on the CDS view entity DEMO\_CDS\_PURCH\_DOC\_M. The to-child association is redirected to the CDS transactional interface of the child entity.

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

The keyword ROOT specifies that the transactional interface is the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") of a [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry"). The transactional interface must always reflect the position of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") in the composition tree: if the projected entity is a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry"), the transactional interface must be a root as well. If the projected entity is not a root, the projection view cannot be a root. In this case, the projected entity must contain a [to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry").

Note: A transactional interface must always either be a root entity itself, or it must be part of a composition tree and reach a root entity via an association.

Addition 2   

... AS alias\_name

Effect

Defines the name alias\_name as [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") of the projected entity. The alias name can have a maximum of 30 characters. If no name is defined explicitly using AS, then the original name of the data source is used.

Continue
[CDS DDL - projection\_list, Transactional Interface](javascript:call_link\('abencds_element_list_interface.htm'\))
[CDS DDL - WHERE, Transactional Interface](javascript:call_link\('abencds_interface_cond_expr.htm'\))