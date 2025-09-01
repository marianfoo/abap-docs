---
title: "CDS DDL - DEFINE CUSTOM ENTITY, composition"
description: |
  Syntax ... COMPOSITION  min..max  OF target ... Effect Defines a CDS composition(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_glosry.htm 'Glossary Entry') in the element list(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custo
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_composition.htm"
abapFile: "abencds_f1_custom_composition.htm"
keywords: ["do", "if", "try", "data", "abencds", "custom", "composition"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_custom_entity.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_element_list.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_element.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE CUSTOM ENTITY, composition, ABENCDS_F1_CUSTOM_COMPOSITION, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE CUSTOM ENTITY, composition

Syntax

... COMPOSITION *\[* \[min..max\] *\]* OF target ...

Effect

Defines a [CDS composition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_glosry.htm "Glossary Entry") in the [element list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_custom_element_list.htm) of a [CDS custom entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_custom_entity_glosry.htm "Glossary Entry").

The CDS composition associates the current CDS entity, as a [composition source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomposition_source_glosry.htm "Glossary Entry"), with the [composition target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomposition_target_glosry.htm "Glossary Entry") target specified in the definition of the CDS composition.

CDS compositions are specialized [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") and they work in the same way as described in topic [CDS DDL - CDS View Entity, COMPOSITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_v2.htm). The only difference is that in CDS compositions in CDS custom entities, the addition AS is not used. The name of the CDS composition is declared using the name \_compos in the element list of the CDS custom entity.

Example

The following DDL source code shows a CDS custom entity that defines a CDS composition to another CDS custom entity:

@EndUserText.label: 'SO Custom Entity with association'
define root custom entity DEMO\_SALES\_CUSTOM\_COMPOSITION
  {
    key id            : abap.char(20);
        seller\_id     : abap.char(20);
        buyer\_id      : abap.char(20);
        act\_indicator : abap.char( 1 );
        type\_code     : abap.char( 5 );
        \_items        : composition\[0..1\] of DEMO\_SALES\_CUSTOM\_CHILD;
  }