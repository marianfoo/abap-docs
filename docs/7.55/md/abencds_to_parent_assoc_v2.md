  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, Associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm) → 

CDS DDL - CDS View Entity, ASSOCIATION TO PARENT

Syntax

... ASSOCIATION TO PARENT target *\[*AS \_assoc*\]* ON $projection.[cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v2.htm) ...

Additions:

[1\. ... AS \_assoc](#!ABAP_ADDITION_1@1@)
[2\. ... ON cds\_cond](#!ABAP_ADDITION_2@2@)

Effect

Defines a CDS to-parent association with the name \_assoc in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). A to-parent association associates the current CDS entity as [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry") with the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") target. To-parent associations are specialized CDS associations and they are characterized by an existential dependency: the association source represents the [parent entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchild_entity_glosry.htm "Glossary Entry") and the association target represents the [child entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchild_entity_glosry.htm "Glossary Entry"). The child entity cannot exist without the parent entity.

The node in which a to-parent association is defined is a child entity. The target of a to-parent association target is a parent entity. The child entity must always define a to-parent association first and only afterwards can a [CDS composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_v2.htm) be defined in the parent entity. The other way around results in a syntax error. The to-parent association cannot be deleted as long as the child entity is the target of the composition.

The following applies to the nodes of a to-parent association:

-   A child entity must define exactly one to-parent association to its parent entity.

-   A child entity can have exactly one parent entity.

-   A child entity that is the target of a CDS composition can itself be a parent entity and define further CDS compositions.

The name of the to-parent association \_assoc must be added exactly once to the [select\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm) of the CDS it is defined in, without attributes and alias. If no name is defined for the to-parent association, the name of the to-parent association is the name of the target entity target and this name must be made available in the SELECT list.

To-parent associations are used in a similar way to CDS associations, but with some restrictions:

-   The [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") cannot be defined explicitly for to-parent associations and is generated as \[1..1\].

-   The [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of a to-parent association cannot be the CDS entity in which the to-parent association is defined. This means that to-parent associations cannot be [self associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenself_association_glosry.htm "Glossary Entry").

-   No DEFAULT FILTER can be defined for to-parent associations.

-   A [root entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_entity_glosry.htm "Glossary Entry") cannot define any to-parent associations.

-   The target entity of a CDS composition and a to-parent association defined in the same data definition must be different entities.

-   The child entity in which the to-parent association is defined must have at least one [key field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkey_field_glosry.htm "Glossary Entry").

The following applies to to-parent associations:

-   To-parent associations can be given annotations in the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm) of the CDS entity in which they are defined.

-   They can be specified as values for [AssociationRef](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation_type.htm) associations. These to-parent associations are then handled as associations.

-   They can be used like associations in path expressions, including paths in annotations.

-   All use cases and details about join generation described in topic [CDS DDL - CDS View Entity, Associations and Joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_assoc_join_v2.htm) also apply to to-parent associations.

-   They can be forwarded in other data definitions by being specified in the SELECT list. They are then forwarded as associations without the semantics of a to-parent association.

-   They cannot be defined in a [CDS view extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extend_glosry.htm "Glossary Entry"), neither with [EXTEND VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view.htm), nor with [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view.htm).

Hints

-   A node that defines a to-parent association is not automatically a child entity of the business object. A node is only a child entity of the business object when it is the target of a composition.

-   A to-parent association can also be defined in a CDS entity that is not a child entity of a business object. In this case, a syntax warning appears.
    

Example

The CDS view entity DEMO\_SALES\_CDS\_SO\_I\_SL\_VE shown below returns information about schedule lines of sales order items. It defines a to-parent association to the CDS view entity DEMO\_SALES\_CDS\_SO\_I\_VE that contains information about sales orders.

In the SELECT list, the to-parent association \_SalesOrderItem is exposed, so it can be accessed from external CDS entities.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_I\_SL\_VE
  as select from demo\_sales\_so\_sl
  association to parent DEMO\_SALES\_CDS\_SO\_I\_VE as \_SalesOrderItem
    on $projection.parent\_key = \_SalesOrderItem.so\_item\_key
  {
    key schedule\_line\_key,
        so\_item\_key as parent\_key,
        parent\_key  as root\_key,
        \_SalesOrderItem
  }

Addition 1

... AS \_assoc

Effect

This addition works in the same way as the addition [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm).

Addition 2

... ON cds\_cond

Effect

The following rules apply to the operands and syntax of the ON condition:

-   Only key fields of the parent entity can be used in the ON condition.

-   The ON condition must use all key fields of the parent entity. Each one can be used only once in the ON condition.

-   The ON condition can contain only the Boolean operator AND. Negations using NOT are not allowed.

-   In the ON condition, each key field of the parent entity can only be used in a [comparison expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_expression.htm) "=".

-   Key fields of the parent entity can only be compared with fields of the child entity in the ON. It is not possible to compare the key fields of the parent entity with a [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v2.htm), a parameter, a [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry"), or another field of the parent entity.

-   A field of the child entity can be used only once in the ON.

-   Aggregate functions, arithmetic functions, and built-in functions cannot be used in the ON condition.

-   Path expressions that generate a join are not allowed in the ON condition.

-   All fields that are used in the ON condition must be listed in the SELECT list.

-   The fields of the association source must be prefixed by $projection.

-   The fields of the association target must be prefixed by the name of the CDS to-parent association (prefix \_assoc. separated by a period).