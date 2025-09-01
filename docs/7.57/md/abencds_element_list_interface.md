  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Interface](javascript:call_link\('abencds_pv_transactional_interface.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Interface](javascript:call_link\('abencds_define_view_as_interface.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - projection_list, Transactional Interface, ABENCDS_ELEMENT_LIST_INTERFACE, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - projection\_list, Transactional Interface

Syntax

... *\[*[@element\_annot1](javascript:call_link\('abencds_element_annotations_v2.htm'\))*\]*
    *\[*[@element\_annot2](javascript:call_link\('abencds_element_annotations_v2.htm'\))*\]*
    ...
      *\[*KEY*\]*   *{*proj\_element        *\[*AS alias*\]**}*
            *|* *{*[proj\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\))          *\[*AS alias*\]**}*
            *|* *{*[cast\_expr](javascript:call_link\('abencds_cast_expression_v2.htm'\))            AS alias*}*

Additions:

[1\. ... KEY](#!ABAP_ADDITION_1@1@)
[2\. ... AS alias](#!ABAP_ADDITION_2@2@)

Effect

Defines the elements of a [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry"). The elements are specified in a comma-separated list in curly brackets { }.

The feature set of a transactional interface is restricted to projecting elements from the underlying projected entity. No new associations, virtual elements, or fields can be defined.

The following elements are supported in the projection list of a transactional interface:

-   Element annotations can be specified. The rules for [propagation of element annotations in CDS projection views](javascript:call_link\('abencds_element_annotations_pv.htm'\)) apply.
-   proj\_element exposes an element from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). AS can be used to define an alternative element name alias.
    
    Note: In transactional interfaces, an element from the projected entity can be exposed multiple times with different alias names.
    
-   [proj\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) exposes a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), a [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), or a [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). Exposed associations can be redirected to a new target when the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is also projected. Read topic [CDS DDL - CDS Projection View, proj\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) for further details.
    
    Note: Adding additional filter conditions to exposed associations is not supported in CDS transactional interfaces.
    
    All elements included in the ON clause of an exposed [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") must also be included in the projection list of the CDS projection view.
    
-   A [cast\_expr](javascript:call_link\('abencds_cast_expression_v2.htm'\)) can be used to assign a new data element to a field, for example to get additional semantic information. The addition PRESERVING TYPE is mandatory and must be used. For a cast expression, an alias name must be specified with the keyword AS.
    
    Caution: In transactional interfaces, only a limited form of cast expressions is available. Cast expressions can only be used to assign a data element to a field, but not for type conversion.
    

Restrictions

In a transactional interface, the following elements are not supported in the projection list: expressions, virtual elements, localized text elements, and parameters.

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

... KEY

Effect

The keyword KEY is used to define the current element as a key element of the transactional interface. A transactional interface must define exactly the same key elements in the same order as key elements as the underlying projected entity.

Caution: The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

Addition 2   

... AS alias

Effect

Defines an alternative element name for the projected element. The alternative element name replaces the actual name of the element from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). The view field is created under the alternative element name in the CDS transactional interface. Accordingly, the alternative element name must comply with the general syntax rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)).