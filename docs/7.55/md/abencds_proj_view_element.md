  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\)) →  [CDS DDL - projection\_view, element\_list](javascript:call_link\('abencds_proj_view_element_list.htm'\)) → 

CDS DDL - projection\_view, projected element

Syntax

... *\[*[@element\_annot1](javascript:call_link\('abencds_element_annotations_v2.htm'\))*\]*
    *\[*[@element\_annot2](javascript:call_link\('abencds_element_annotations_v2.htm'\))*\]*
    ...
      *\[*KEY*\]*   *{*proj\_element        *\[*AS alias*\]**}*
            *|* *{*[expose\_assoc](javascript:call_link\('abencds_select_list_association_v2.htm'\))        *\[*AS alias*\]**}*
            *|* *{*[path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)).element   *\[*AS alias*\]**\[*: LOCALIZED*\]**}*
            *|* *{*[cast\_expr](javascript:call_link\('abencds_cast_expression_v2.htm'\))            AS alias*}*

Additions:

[1\. ... @element\_annot ...](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)
[3\. ... AS alias](#!ABAP_ADDITION_3@3@)
[4\. ... LOCALIZED](#!ABAP_ADDITION_4@4@)

Effect

Specifies individual elements in the element list of a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").

-   proj\_element exposes an element from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). AS can be used to define an alternative element name alias.

-   [expose\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) exposes a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), a [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), or a [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). Exposed associations can be redirected to a new target when the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is also projected. The keyword REDIRECTED TO is introduced in topic [CDS DDL - projection\_view, expose\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)).

-   [path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)).element exposes an element of an association of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). If no alternative element name alias is defined, the element name is defined by the name of the element named by the path expression.

-   A [cast\_expr](javascript:call_link\('abencds_cast_expression_v2.htm'\)) can be used to assign a new data element to a field, for example to get additional semantic information. The addition PRESERVING TYPE is obligatory and must be used. For a cast expression, an alias name must be specified with the keyword AS.
    Caution: In CDS projection views, only a limited form of cast expressions is available. Cast expressions can only be used to assign a data element to a field, but not for type conversion.

Example

The following CDS projection view DEMO\_SALES\_PV\_SO\_I\_LIST is a projection of the CDS view DEMO\_SALES\_CDS\_SO\_I. It contains details about a sales order item.

@EndUserText.label: 'Projection View Sales Order Item List'
@AccessControl.authorizationCheck: #CHECK
define view entity DEMO\_SALES\_PV\_SO\_I\_LIST
  as projection on DEMO\_SALES\_CDS\_SO\_I
  {
    key so\_item\_key                   as SalesOrderItemKey,
        \_SalesOrder.id                as SalesOrderId,
        posnr                         as PositionNumber,
        @ObjectModel.text.element: \['MaterialName'\]
        material                      as MaterialId,
        \_Material.\_Text.material\_name as MaterialName : localized,
        @Semantics.amount.currencyCode: 'Currency'
        gross\_amount                  as GrossAmount,
        currency                      as Currency,
        @Semantics.quantity.unitOfMeasure: 'Unit'
        quantity                      as Quantity,
        unit                          as Unit
  }

Addition 1

... @element\_annot ...

Effect

Specifies an annotation for an element of a projection view. All annotations must be specified before the element using [@element\_annot](javascript:call_link\('abencds_proj_view_annotations.htm'\)).

Projected elements inherit the element annotations from the projected entity. Any annotations defined in the CDS entity view\_entity at element level are passed to the CDS projection view projection\_view. This means that the CDS projection view has the same annotation values as the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). Only if an annotation is defined explicitly for the same element in the CDS projection view, the values are overwritten and only the new values are valid for the element in question. [Framework-specific annotations](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") can be used to give the element specific semantic attributes for other SAP frameworks.

Caution: if you use an annotation with an element reference in the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") and the reference element is aliased in the projection entity, the reference is not drawn to the element in the projection view, due to the name change. In such a case, you have to redefine the annotation in the projection view and use the alias name of the element in the annotation value.

Hints

-   An annotation can be used to assign further technical and semantic attributes to an element for evaluation by the ABAP runtime environment. [Framework-specific annotations](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") can be used to give the element specific semantic attributes for other SAP frameworks.

-   With respect to the element annotations, publications of a CDS association [association](javascript:call_link\('abencds_select_list_association_v2.htm'\)) are handled like any regular element. When a CDS association defined in a different CDS view is exposed, the annotations of preceding publications are inherited when [annotations are evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
    

Example

The CDS projection view DEMO\_SALES\_PV\_SO\_I\_LIST (see example above) is a projection of the CDS view DEMO\_SALES\_CDS\_SO\_I. Even though the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") uses a semantics annotation to connect the gross amount to the currency and the quantity field to the respective unit, the projection view repeats these annotations. This is required because of the alias name of the currency and unit fields.

Addition 2

... KEY

Effect

The keyword KEY is used to define the current element as the key element of the [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"). This is possible only if the element is a key in the underlying CDS entity view\_entity. All key elements of the underlying CDS entity must be projected as keys in the CDS projection view in the order in which they are defined in view\_entity.

Addition 3

... AS alias

Effect

Defines an alternative element name for the projected element. The alternative element name replaces the actual name of the element from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). The view field is created under the alternative element name in the CDS projection view. Accordingly, the alternative element name must comply with the general naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)).

Addition 4

...association *\[*AS alias*\]* : LOCALIZED

Effect

The keyword LOCALIZED can be used to display text elements in the current system language. As a prerequisite, you must establish a text association to a text provider view that contains text elements in different languages. With the keyword LOCALIZED, the text elements are chosen in the user's logon language. So the keyword LOCALIZED is a realization of the path expression \_Text\[1:Language=$session.system\_language\].material\_name.

Find out how to define a text association in the developer guide for the ABAP RESTful Programming Model, in the section about text associations.