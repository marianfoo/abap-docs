  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, Associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm) → 

CDS DDL - CDS View Entity, COMPOSITION

Syntax

... COMPOSITION *\[* \[min..max\] *\]* OF target *\[*AS \_compos*\]* ...

Additions:

[1\. ... *\[*min..max*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... AS \_compos](#!ABAP_ADDITION_2@2@)

Effect

Defines a [CDS composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry") with the name \_compos in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). A CDS composition associates the current CDS entity, as a [composition source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_source_glosry.htm "Glossary Entry"), with the [composition target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_target_glosry.htm "Glossary Entry") target specified in the definition of the composition. Compositions are specialized [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm) that are characterized by an existential dependency: the composition source represents the [child entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchild_entity_glosry.htm "Glossary Entry") and it cannot exist without the composition target, which represents the [parent entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchild_entity_glosry.htm "Glossary Entry"). For example, in sales, a sales order item (child entity) is always part of a sales order (parent entity).

The node in which a composition is defined is a parent entity. The target of a composition target is a child entity. The relationship always starts with the child: you first define a [to-parent relationship](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_to_parent_assoc_v2.htm) in the child entity and afterwards, you define a composition in the parent entity. The other way around results in syntax errors. No ON condition is defined explicitly for a composition. The ON condition is generated automatically using the ON condition of the to-parent association of the [composition target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_target_glosry.htm "Glossary Entry").

The [composition target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_target_glosry.htm "Glossary Entry") cannot be specified using a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm) and it must be a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"). If target is a CDS abstract entity, the way the composition can be used is restricted.

The following applies to the nodes of a composition:

-   The target of a composition target cannot be the CDS entity in which this composition is defined.

-   The target of a composition cannot be a root entity.

-   Unless it is a root entity, a parent entity can itself be the target of a composition.

-   A child entity can be the target of exactly one composition. This means that a child entity can have exactly one parent entity.

-   A child entity can itself be a parent entity and define further compositions.

The name of the composition \_compos must be added exactly once to the [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm) of the CDS view entity it is defined in, without attributes and alias. If no name is defined for the composition, the name of the composition is the name of the target entity target and this name must be made available in the SELECT list. It is not allowed to use a composition in a path expression to include a field from the composition target in the same CDS view entity where it is defined.

A composition can be accessed as follows:

-   If a CDS composition whose [composition target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_target_glosry.htm "Glossary Entry") is not abstract is exposed by a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm) in the SELECT list of the current SELECT statement, other CDS views or ABAP SQL statement can use it in their path expressions.

-   This is not possible for CDS abstract entities.

The following applies to the compositions:

-   Compositions cannot be used locally in a SELECT list, WHERE clause, HAVING clause of the CDS view entity that defines them, or in EXTEND VIEW ENTITY if this produces a join. This restriction is necessary to guarantee that the ON condition for the composition can always be generated from the ON condition of the to-parent association.

-   Compositions can be used in annotations (such as AnnotationRef or ElementRef) in the CDS entities that define them, since this does not produce a join.

-   Compositions can be passed in other data definitions by specifying the name of the composition in the SELECT list. In this case, the composition is propagated without the semantics of the composition definition. Compositions can be passed using an alias in the SELECT list and the same rules apply as to associations.

-   Compositions can be passed using a filter in the SELECT list. The same rules apply as to associations.

-   Compositions and joins: the use cases and generation of joins described in topic [CDS DDL - CDS View Entity, Associations and Joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_assoc_join_v2.htm) also apply to CDS compositions, with the exception of use cases 3 and 4.

Hints

-   Cyclical dependencies should be avoided when using compositions to prevent problems occurring in mass activations of CDS entities.

-   Unlike in associations, no DEFAULT FILTER can be defined for a composition.

-   Compositions can be given annotations in the element list element\_list of the CDS entity in which they are defined.
    

Example

The CDS view entity DEMO\_SALES\_CDS\_SO\_I\_VE shown below returns information about sales order items. It defines three associations, one of them being a composition. The composition target (i.e. the child entity) is the CDS view entity DEMO\_SALES\_CDS\_SO\_I\_SL\_VE.

Explanation: Each sales order item can have one or several schedule lines, but schedule lines can exist only in connection with sales order items.

In the SELECT list, the composition \_ScheduleLine is exposed, so it can be accessed from external CDS entities.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_I\_VE
  as select from demo\_sales\_so\_i
  association        to parent DEMO\_SALES\_CDS\_SO\_VE as \_SalesOrder
    on $projection.parent\_key = \_SalesOrder.so\_key
  composition \[0..\*\] of DEMO\_SALES\_CDS\_SO\_I\_SL\_VE   as \_ScheduleLine
  association \[0..1\] to DEMO\_SALES\_CDS\_MATERIAL\_VE  as \_Material
    on $projection.material = \_Material.material
  {
    key so\_item\_key,
        parent\_key,
        posnr,
        material,
        @Semantics.amount.currencyCode: 'currency'
        gross\_amount,
        currency,
        @Semantics.quantity.unitOfMeasure: 'unit'
        quantity,
        unit,
        \_SalesOrder,
        \_ScheduleLine,
        \_Material.material as mat
  }

Addition 1

... *\[*min..max*\]*

Effect

This addition works in the same way as the addition [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm).

Addition 2

... AS \_compos

Effect

This addition works in the same way as the addition [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm).