  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_transactional_query.htm) →  [CDS DDL - projection\_list, Transactional Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_element_list.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - proj_element, Transactional Query, ABENCDS_PROJ_VIEW_ELEMENT, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - proj\_element, Transactional Query

Syntax

... *\[*[@element\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_annotations_v2.htm)*\]*
    *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_annotations_v2.htm)*\]*
    ...
    *{**\[*KEY*\]*    *{*proj\_element      *\[*AS alias*\]**}*
            *|* *{*[expose\_assoc](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_expose_assoc.htm)      *\[*AS alias*\]**}*
            *|* *{* [path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_path_expr.htm).element *\[*AS alias*\]**\[*: LOCALIZED*\]**}*
            *|* *{*[cast\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm)          AS alias*}**}*
   *|**{**\[*VIRTUAL  elem\_name : [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_typing.htm)*\]**}*

Additions:

[1\. ... KEY](#!ABAP_ADDITION_1@1@)
[2\. ... AS alias](#!ABAP_ADDITION_2@2@)
[3\. ... LOCALIZED](#!ABAP_ADDITION_3@3@)
[4\. ... VIRTUAL](#!ABAP_ADDITION_4@4@)

Effect

Defines which elements of the projected entity are part of the CDS projection view. Only elements from the projected entity can be specified as projected element.

-   The rules for [propagation of element annotations in CDS projection views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_annotations_pv.htm) apply.
-   proj\_element exposes an element from the [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). AS can be used to define an alternative element name alias.
    
    Note: In transactional projection views, an element from the projected entity can be exposed multiple times with different alias names.
    
-   [expose\_assoc](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_expose_assoc.htm) exposes a [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry"), a [CDS composition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_glosry.htm "Glossary Entry"), or a [CDS to-parent association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abento_parent_association_glosry.htm "Glossary Entry") from the [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). Exposed associations can be redirected to a new target when the [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") is also projected. The keyword REDIRECTED TO is introduced in topic [CDS DDL - CDS Projection View, expose\_assoc](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_expose_assoc.htm).
    
    All elements included in the ON clause of an exposed [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") must also be included in the projection list of the CDS projection view.
    
-   [path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_path_expr.htm).element exposes an element of an association target of the [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). If no alternative element name alias is defined, the element name is defined by the name of the element named by the path expression. The keyword LOCALIZED can be used to display text elements in the user's logon language. All associations that are part of the path expression must be filtered to 1. For details, see the topic about [path expressions in CDS projection views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_path_expr.htm).
-   A [cast\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm) can be used to assign a new data element to a field, for example to get additional semantic information. The addition PRESERVING TYPE is mandatory and must be used. For a cast expression, an alias name must be specified with the keyword AS.
    
    Caution: In CDS projection views, only a limited form of cast expressions is available. Cast expressions can only be used to assign a data element to a field, but not for type conversion.
    

Example

The following CDS projection view DEMO\_SALES\_PV\_SO\_I\_LIST is a projection of the CDS view DEMO\_SALES\_CDS\_SO\_I. It contains details about a sales order item.

@EndUserText.label: 'Projection View Sales Order Item List'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_PV\_SO\_I\_LIST
provider contract transactional\_query
  as projection on
    DEMO\_SALES\_CDS\_SO\_I
    {
      key so\_item\_key                   as SalesOrderItemKey,
          \_SalesOrder.id                as SalesOrderId,
          posnr                         as PositionNumber,
          @ObjectModel.text.element: \['MaterialName'\]
          material                      as MaterialId,
          \_Material.\_Text.material\_name as MaterialName : localized,
          @Semantics.amount.currencyCode: 'Currency'
          gross\_amount                  as GrossAmount,
          currency                      as Currency,
          @Semantics.quantity.unitOfMeasure: 'Unit'
          quantity                      as Quantity,
          unit                          as Unit
    }

Addition 1   

... KEY

Effect

The keyword KEY is used to define the current element as a key element of the [CDS projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). A CDS projection view must define exactly the same key elements in the same order as key elements as the underlying projected entity.

Caution: The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

Addition 2   

... AS alias

Effect

Defines an alternative element name for the projected element. The alternative element name replaces the actual name of the element from the [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). The view field is created under the alternative element name in the CDS projection view. Accordingly, the alternative element name must comply with the general syntax rules for [names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_general_syntax_rules.htm).

Addition 3   

... LOCALIZED

Effect

The keyword LOCALIZED can be used to display text elements in the current system language. As a prerequisite, you must establish a text association to a text provider view that contains text elements in different languages. It is mandatory that all association paths in the [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_path_expr.htm) must be filtered to 1. Then, by using the keyword LOCALIZED, the text elements are chosen in the user's logon language. So in the example shown above, the keyword LOCALIZED is a realization of the path expression \_Text\[1:Language=$session.system\_language\].material\_name.

Find out how to define a text association in the developer guide for the ABAP RESTful Programming Model, in the section about text associations.

Addition 4   

... VIRTUAL

Effect

Defines a [virtual element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") in the [projection list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_element_list.htm) of a [CDS projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). Virtual elements are read-only elements of a CDS projection view which are not part of the [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). For further details, see topic [CDS DDL - VIRTUAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_virtual_element.htm).

Continue
[CDS DDL - element\_annot, Transactional Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_element_annotations_pv.htm)
[CDS DDL - path\_expr, Transactional Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_path_expr.htm)
[CDS DDL - expose\_assoc, Transactional Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_expose_assoc.htm)
[CDS DDL - VIRTUAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_virtual_element.htm)