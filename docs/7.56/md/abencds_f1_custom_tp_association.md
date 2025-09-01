---
title: "CDS DDL - DEFINE CUSTOM ENTITY, to-parent association"
description: |
  Syntax ... ASSOCIATION TO PARENT target ON $projection.cds_cond(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v2.htm) ... Effect Defines a CDS to-parent association(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_g
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_tp_association.htm"
abapFile: "abencds_f1_custom_tp_association.htm"
keywords: ["do", "if", "try", "data", "abencds", "custom", "association"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_custom_entity.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element_list.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element.htm) → 

CDS DDL - DEFINE CUSTOM ENTITY, to-parent association

Syntax

... ASSOCIATION TO PARENT target ON $projection.[cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v2.htm) ...

Effect

Defines a [CDS to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") in the [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element_list.htm) of a [CDS custom entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_custom_entity.htm).

The CDS to-parent association associates the current CDS entity, as a [association source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_source_glosry.htm "Glossary Entry"), with the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") target specified in the definition of the CDS to-parent association.

CDS to-parent associations are specialized [CDS associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") and the same rules apply as described in topic [CDS DDL - CDS View Entity, ASSOCIATION TO PARENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_to_parent_assoc_v2.htm). The only difference is that the addition AS\_assoc is not used. The name of the CDS composition is declared using the name \_to\_parent in the [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element.htm) of the CDS custom entity.

Example

The following DDL source code shows a CDS custom entity that defines a CDS to-parent association to another CDS custom entity:

@EndUserText.label: 'Child custom entity'
define custom entity DEMO\_SALES\_CUSTOM\_CHILD
  {
    key id          : abap.char(20);
        parent\_id   : abap.char(20);
        item\_number : abap.char(20);
        type\_code   : abap.char(5);
        \_items      :  
          association to parent demo\_sales\_custom\_composition
          on \_items.id = $projection.id;
  }