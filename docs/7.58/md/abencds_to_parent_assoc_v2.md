  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, Associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20ASSOCIATION%20TO%20PARENT%2C%20ABENCDS_TO_PARENT_ASSOC_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

CDS DDL - CDS View Entity, ASSOCIATION TO PARENT

Syntax

... ASSOCIATION TO PARENT target *\[*AS \_assoc*\]* ON $projection.[cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) ...

Effect

A [CDS to-parent association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_parent_association_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry") is a specialized [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry"). In combination with a [CDS to-child association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_child_association_glosry.htm "Glossary Entry"), they define a [CDS composition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") relationship. A CDS to-parent association in defined in the child entity and points to the parent entity. CDS compositions define the [CDS composition tree](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of a [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarap_glosry.htm "Glossary Entry").

A to-parent association is defined in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") using the keyword ASSOCIATION TO PARENT. A to-parent association associates the current CDS entity, as [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry"), with the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") target specified in the definition of the association.

The child entity must always define a to-parent association first and only afterwards can a to-child association be defined in the parent entity. The other way around results in a syntax error. The to-parent association cannot be deleted as long as the child entity is the target of the to-child association. The to-child association must be deleted first and then the to-parent association can be deleted.

Rules

CDS to-parent associations are defined similarly to CDS associations. Here are the similarities and differences:

-   Similarities
    -   For the name AS \_assoc, the same rules apply as for normal CDS associations, see topic [CDS DDL - CDS View Entity, ASSOCIATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_association_v2.htm).
    -   An ON condition must be defined. The rules for ON conditions of to-parent associations are listed below.
-   Differences
    -   A default filter cannot be defined for a to-parent association. The syntax ... WITH DEFAULT FILTER ... is not allowed.
    -   The [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") cannot be defined explicitly for to-parent associations and is generated as to-one.

The following applies to the association target target:

-   The association target can be another [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), an [abstract entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"), or a [custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry").
-   The [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") of a to-parent association cannot be the CDS entity in which the to-parent association is defined. This means that to-parent associations cannot be [self associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenself_association_glosry.htm "Glossary Entry").
-   The target entity of a CDS to-child association and a to-parent association defined in the same data definition must be different entities.

General rules for child entities:

-   A child entity must define exactly one to-parent association to its parent entity.
-   A child entity that is the target of a to-child association can itself be a parent entity and define further to-child associations.
-   A [root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_entity_glosry.htm "Glossary Entry") cannot define any to-parent associations.
-   The child entity in which the to-parent association is defined must have at least one [key field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkey_field_glosry.htm "Glossary Entry").

Exposure:

-   The name of the to-parent association \_assoc must be added exactly once to the [select\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm) of the CDS view entity it is defined in, without attributes and alias. If no name is defined for the to-parent association, the name of the to-parent association is the name of the target entity target and this name must be made available in the SELECT list.

Usage:

-   A to-parent association can be propagated in data definitions other than the one in which it is defined. In this case, the to-parent association uses its special semantics and is handled like a normal CDS association.
-   To-parent associations can be used in [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm) locally and also in other CDS entities in which they are propagated.
-   To-parent associations can be specified as values for [AssociationRef](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_annotation_type.htm) associations. These to-parent associations are then handled as associations.

To-parent associations and joins:

-   All use cases and details about join generation described in topic [CDS DDL - CDS View Entity, Associations and Joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_assoc_join_v2.htm) also apply to to-parent associations.

Restrictions:

-   To-parent associations cannot be defined in a CDS view extension, neither with [EXTEND VIEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_view.htm), nor with [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_view.htm).

ON Condition

A to-parent association must define an ON condition. This ON condition is automatically used for the respective CDS to-child association in the parent entity.

The following rules apply to the operands and syntax of the ON condition:

-   Only [key fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkey_field_glosry.htm "Glossary Entry") of the parent entity can be used in the ON condition.
-   The ON condition must use all key fields of the parent entity. Each one can be used only once in the ON condition.
-   Key fields of the parent entity can only be compared with fields of the child entity.
-   A field of the child entity can be used only once.
-   The fields of the association source must be prefixed by $projection.
-   The fields of the association target must be prefixed by the name of the CDS to-parent association (prefix \_assoc. separated by a period).
-   Only the [comparison operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_comp_v2.htm) \= is allowed. No other [relational operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrel_operator_glosry.htm "Glossary Entry") or comparison operator is allowed.
-   Only the [Boolean operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenboolean_operator_glosry.htm "Glossary Entry") AND is allowed. Negations using NOT are not allowed.
-   lhs can be a field of the association source or association target.
-   rhs can be a field of the association source or association target.
-   Path expressions, expressions, built-in functions, and elementary operands are not allowed.
-   All fields that are used in the ON condition must be listed in the SELECT list.

Special rules apply when the operands of the ON condition are [CDS enumerated elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_element_glosry.htm "Glossary Entry"). These rules are described in the topic [CDS TDL - Using CDS Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_use_enum_type.htm).

Hints

-   A node that defines a to-parent association is not automatically a child entity of the business object. A node is only a child entity of the business object when it is the target of a to-child association.
-   To-parent associations can be given annotations in the [element list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v2.htm) of the CDS entity in which they are defined.
-   In a CDS abstract entity, if the association target of a to-parent association is another CDS abstract entity, then the ON condition is not mandatory and can optionally be left out. See topic [CDS DDL - DEFINE ABSTRACT ENTITY, to-parent association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_absent_to_parent_assoc.htm).

Example

The CDS view entity DEMO\_SALES\_CDS\_SO\_I\_SL\_VE shown below returns information about schedule lines of sales order items. It defines a to-parent association to the CDS view entity DEMO\_SALES\_CDS\_SO\_I\_VE that contains information about sales orders.

In the SELECT list, the to-parent association \_SalesOrderItem is exposed, so it can be accessed from external CDS entities.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_I\_SL\_VE
  as select from demo\_sales\_so\_sl
  association to parent DEMO\_SALES\_CDS\_SO\_I\_VE as \_SalesOrderItem
    on $projection.parent\_key = \_SalesOrderItem.so\_item\_key
  association of many to one DEMO\_SALES\_CDS\_SO\_VE          as \_SalesOrder
    on $projection.parent\_key = \_SalesOrder.so\_key
  {
    key schedule\_line\_key,
        so\_item\_key as parent\_key,
        parent\_key  as root\_key,
        \_SalesOrderItem,
        \_SalesOrder
  }