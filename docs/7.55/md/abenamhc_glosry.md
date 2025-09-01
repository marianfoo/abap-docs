  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

ABAP-managed HDI container

AMHC for short. Special [HDI container](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhdi_container_glosry.htm "Glossary Entry") managed by [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry"). An AMHC is created and changed using transaction SCTS\_AMHC. An AMHC and the contained [HDI objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhdi_object_glosry.htm "Glossary Entry") are connected to the [Change and Transport System](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencts_glosry.htm "Glossary Entry") using [SAP HANA Transport for ABAP (HTA)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhta_glosry.htm "Glossary Entry"). When an AMHC is created, a [logical HDI container](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_hdi_container_glosry.htm "Glossary Entry") is defined and during its activation a physical HDI container is created in the [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry"). The logical HDI container can be a [logical schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_schema_glosry.htm "Glossary Entry") in an [AMDP macro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_macro_glosry.htm "Glossary Entry") where it represents the [database schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_schema_glosry.htm "Glossary Entry") of the physical HDI container.