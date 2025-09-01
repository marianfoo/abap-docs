---
title: "CDS DDL - DEFINE CUSTOM ENTITY, COMPOSITION"
description: |
  Syntax ... COMPOSITION cardinality(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cardinality_v2.htm) OF target ... Effect Defines a to-child association(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_child_association_glosry.htm 'Glossary Entry') i
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_composition.htm"
abapFile: "abencds_f1_custom_composition.htm"
keywords: ["do", "if", "try", "data", "abencds", "custom", "composition"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_custom_entity.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_element_list.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_element.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20CUSTOM%20ENTITY%2C%20COMPOSITION%2C%20ABENCDS_F1_CUSTOM_COMPOSITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

CDS DDL - DEFINE CUSTOM ENTITY, COMPOSITION

Syntax

... COMPOSITION *\[*[cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cardinality_v2.htm)*\]* OF target ...

Effect

Defines a [to-child association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_child_association_glosry.htm "Glossary Entry") in the [element list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_element_list.htm) of a [CDS custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry").

The to-child association associates the current CDS entity, as a [composition source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomposition_source_glosry.htm "Glossary Entry"), with the [composition target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomposition_target_glosry.htm "Glossary Entry") target specified in the definition of the to-child association.

To-child associations are specialized [CDS associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") and they work in the same way as described in topic [CDS DDL - CDS View Entity, COMPOSITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_v2.htm). The only difference is that in CDS to-child associations in CDS custom entities, the addition AS is not used. The name of the to-child association is declared using the name \_compos in the element list of the CDS custom entity.

Example

The following DDL source code shows a CDS custom entity that defines a CDS to-child association to another CDS custom entity:

@EndUserText.label: 'SO Custom Entity with association'
define root custom entity DEMO\_SALES\_CUSTOM\_COMPOSITION
  {
    key id            : abap.char(20);
        seller\_id     : abap.char(20);
        buyer\_id      : abap.char(20);
        act\_indicator : abap.char( 1 );
        type\_code     : abap.char( 5 );
        \_items        : composition of exact one to one  
                          DEMO\_SALES\_CUSTOM\_CHILD;
  }