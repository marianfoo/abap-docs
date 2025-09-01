---
title: "CDS DDL - DEFINE CUSTOM ENTITY, composition"
description: |
  Syntax ... COMPOSITION  min..max  OF target ... Effect Defines a CDS composition(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm 'Glossary Entry') in the element list(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custo
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_composition.htm"
abapFile: "abencds_f1_custom_composition.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "custom", "composition"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_custom_entity.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element_list.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element.htm) → 

CDS DDL - DEFINE CUSTOM ENTITY, composition

Syntax

... COMPOSITION *\[* \[min..max\] *\]* OF target ...

Effect

Defines a [CDS composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry") in the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element_list.htm) of a [CDS custom entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_custom_entity.htm).

The CDS composition associates the current CDS entity, as a [composition source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_source_glosry.htm "Glossary Entry"), with the [composition target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomposition_target_glosry.htm "Glossary Entry") target specified in the definition of the CDS composition.

CDS compositions are specialized [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry"). The meaning of the CDS composition of the CDS custom entity is basically the same as that of the addition COMPOSITION in the SELECT statement [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry") with the same features as for the CDS associations of the CDS custom entity.

For further details, see:

-   [COMPOSITION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_v2.htm), CDS view entity

-   [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_association.htm), CDS custom entity.