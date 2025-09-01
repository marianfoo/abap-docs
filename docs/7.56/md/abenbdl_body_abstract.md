---
title: "CDS BDL - entity behavior body, abstract BDEF"
description: |
  Syntax ... field characteristics(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_abstract.htm); associations(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association_abstract.htm); mapping(https://help.sap.com/doc/abapdocu_7
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body_abstract.htm"
abapFile: "abenbdl_body_abstract.htm"
keywords: ["do", "if", "try", "data", "types", "abenbdl", "body", "abstract"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [CDS BDL - CDS abstract behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_abstract.htm) →  [CDS BDL - entity behavior definition, abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh_abstract.htm) → 

CDS BDL - entity behavior body, abstract BDEF

Syntax

... *{**\[*[field characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_abstract.htm)*\]*;
     *\[*[associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association_abstract.htm)*\]*;
     *\[*[mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping_abstract.htm)*\]*;*}*
...

Effect

In the [entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_body_glosry.htm "Glossary Entry") of an [abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry"), the following elements can be specified:

-   [field characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_abstract.htm): there's only one field characteristic available: field(suppress).
-   [Associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association_abstract.htm) can be included in the hierarchical BDEF derived type.
-   [Mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping_abstract.htm): data types of the abstract BDEF can be mapped to DDIC partner types. There are two possibilities: type mapping or deep mapping.

Continue
[CDS BDL - field characteristics, abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_abstract.htm)
[CDS BDL - associations, abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association_abstract.htm)
[CDS BDL - mapping, abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping_abstract.htm)