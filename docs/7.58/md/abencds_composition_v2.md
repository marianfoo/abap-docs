  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, Associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20COMPOSITION%2C%20ABENCDS_COMPOSITION_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

CDS DDL - CDS View Entity, COMPOSITION

Syntax

... COMPOSITION *\[* [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cardinality_v2.htm)*\]* *\[*OF*\]* target *\[*AS \_compos*\]* ...

Effect

Defines a [to-child association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_child_association_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry"). A to-child association is a specialized [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") that defines the current [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") as [parent entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparent_entity_glosry.htm "Glossary Entry") of the [composition target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomposition_target_glosry.htm "Glossary Entry"). The composition target is the [child entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_entity_glosry.htm "Glossary Entry") and it must define a [to-parent association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_parent_association_glosry.htm "Glossary Entry") to its parent entity. [To-child associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_child_association_glosry.htm "Glossary Entry") and [to-parent associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_parent_association_glosry.htm "Glossary Entry") together define [CDS compositions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") that in turn define the [CDS composition tree](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of a [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarap_glosry.htm "Glossary Entry").

A to-child association is defined in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) of a CDS view entity using the keyword COMPOSITION. A to-child association associates the current CDS entity, as a [composition source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomposition_source_glosry.htm "Glossary Entry"), with the [composition target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomposition_target_glosry.htm "Glossary Entry") target specified in the definition of the to-child association.

Prerequisite

The child entity (composition target) must already have a [to-parent association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_to_parent_assoc_v2.htm) to the composition parent before a to-child association can be defined in the parent.

Rules

To-child associations are defined similarly to CDS associations. Here are the similarities and differences:

-   Similarities
    -   For the name of the to-child association AS \_compos, the same rules apply as for a regular CDS association, see topic [CDS DDL - CDS View Entity, ASSOCIATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_association_v2.htm).
    -   The [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") can be specified written in words or using numeric syntax, as described in topic [CDS DDL - CDS View Entity, cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cardinality_v2.htm). If the cardinality syntax written in words is used, the [source cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_cardinality_glosry.htm "Glossary Entry") must be EXACT ONE. It can also be left out and is then implicitly set to EXACT ONE.
-   Differences:
    -   No ON condition is defined explicitly for a to-child association. The ON condition is generated automatically using the ON condition of the to-parent association of the composition target.
    -   A default filter cannot be defined for a to-child association. The syntax ... WITH DEFAULT FILTER ... is not allowed.

The following applies to the composition target target:

-   The composition target can be another [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), an [abstract entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"), or a [custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry").
-   A child entity can be the target of exactly one to-child association. This means that a child entity can have exactly one parent entity.
-   The target of a to-child association must not be a [root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_entity_glosry.htm "Glossary Entry").
-   The composition target cannot be specified using a [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm). The following is not allowed:
    
    COMPOSITION OF \_path.\_to\_child
    
-   It must be a [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry"). If target is a [non-SQL CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry"), the way the to-child association can be used is restricted.
-   Self-to-child associations are not allowed. The target of a to-child association cannot be the CDS entity in which this to-child association is defined.

Exposure:

-   The name of the to-child association \_compos must be added exactly once to the [select\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm) of the CDS view entity it is defined in, without attributes and alias. If no name is defined for the to-child association, the name of the to-child association is the name of the target entity target and this name must be made available in the SELECT list.

Usage:

-   Caution: Fields from a composition target cannot be used locally in path expressions. Fields from the composition target cannot be used in the SELECT list, WHERE clause, or any other position of the view entity in which it is defined.
    
    This also applies to CDS view extensions. A field from a composition target cannot be added to a CDS view entity via [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_view_entity.htm).
    
-   A to-child association can be propagated in data definitions other than the one in which it is defined. In this case, the to-child association loses its special semantics and is handled like a regular CDS association.
-   When a to-child association is used in another data definition, metadata extension, or view extension other than the one in which it is defined, then it can be used in a path expression. Parameter passing and defining attributes is also possible in this case.
-   To-child associations can be used in annotation values (such as AnnotationRef or ElementRef) in the CDS entities that define them, since this does not lead to an SQL join.

Compositions and joins:

-   The use cases and generation of joins described in topic [CDS DDL - CDS View Entity, Associations and Joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_assoc_join_v2.htm) also apply to to-child associations, with the exception of use cases 3 and 4.

Hints

-   [Cyclical dependencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cycle_problems.htm) should be avoided when using to-child associations to prevent problems occurring in mass activations of CDS entities.
-   To-child associations can be given annotations in the element list element\_list of the CDS entity in which they are defined.
-   Defining new to-child associations is not supported in views with [set operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators.htm).

Example

The CDS view entity DEMO\_SALES\_CDS\_SO\_I\_VE shown below returns information about sales order items. It defines three associations, one of them being a to-child association. The composition target (i.e. the child entity) is the CDS view entity DEMO\_SALES\_CDS\_SO\_I\_SL\_VE.

Explanation: Each sales order item can have one or more schedule lines, but schedule lines can exist only in connection with sales order items.

In the SELECT list, the to-child association \_ScheduleLine is exposed, so it can be accessed from external CDS entities.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_I\_VE
  as select from
    demo\_sales\_so\_i
    association        to parent DEMO\_SALES\_CDS\_SO\_VE as \_SalesOrder
      on $projection.parent\_key = \_SalesOrder.so\_key
    composition of exact one to many DEMO\_SALES\_CDS\_SO\_I\_SL\_VE    
                                                      as \_ScheduleLine
    association of many to one DEMO\_SALES\_CDS\_MATERIAL\_VE  
                                                      as \_Material
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