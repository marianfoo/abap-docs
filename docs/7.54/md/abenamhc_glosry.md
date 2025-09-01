---
title: "ABAP-managed HDI container"
description: |
  AMHC for short. Special (https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhta_glosry.htm 'Glossary Entry')HDI(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm 'Glossary Entry') container managed by AS ABAP(https://help.sap.com/doc/abapdocu_754
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamhc_glosry.htm"
abapFile: "abenamhc_glosry.htm"
keywords: ["do", "if", "try", "data", "abenamhc", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

ABAP-managed HDI container

AMHC for short. Special [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhta_glosry.htm "Glossary Entry")[HDI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") container managed by [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhdi_container_glosry.htm "Glossary Entry"). An AMHC is created and modified using transaction SCTS\_AMHC. [SAP HANA Transport for ABAP (HTA)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_schema_glosry.htm "Glossary Entry") provides an [AMHC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhdi_object_glosry.htm "Glossary Entry") and its [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_schema_glosry.htm "Glossary Entry")[HDI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhta_glosry.htm "Glossary Entry") objects with an interface to the [Change and Transport System](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencts_glosry.htm "Glossary Entry"). When an AMHC is created, a [logical HDI container](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_hdi_container_glosry.htm "Glossary Entry") is defined. A physical HDI container is then created for this container in the [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") when it is activated. The logical HDI container can be used as a [logical schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_schema_glosry.htm "Glossary Entry") in an [AMDP macro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_schema_glosry.htm "Glossary Entry"). Here it stands for the [database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_schema_glosry.htm "Glossary Entry") of the physical HDI container.