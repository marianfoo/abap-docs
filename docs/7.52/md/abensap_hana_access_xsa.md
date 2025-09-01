  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_hana.htm) →  [Access to Objects in SAP HANA XS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_hana_access.htm) → 

Access to SAP HANA XSA Objects

[SAP HANA XSA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsa_glosry.htm "Glossary Entry") (SAP HANA Extended Application Services Advanced Model) is the successor version of [SAP HANA XSC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsc_glosry.htm "Glossary Entry").

[SAP Web IDE for SAP HANA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_web_ide_for_sap_han_glosry.htm "Glossary Entry") and [SAP HANA Cockpit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_hana_cockpit_glosry.htm "Glossary Entry") are used to develop and manage the native HANA objects in XSA. Deployment takes place (using [HDI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhdi_glosry.htm "Glossary Entry") (SAP HANA Deployment Infrastructure) as [HDI objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhdi_object_glosry.htm "Glossary Entry") in [HDI containers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhdi_container_glosry.htm "Glossary Entry") that usually represent [database schemas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_schema_glosry.htm "Glossary Entry") in the [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry").

Special [ABAP-managed HDI container (AMHCs)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamhc_glosry.htm "Glossary Entry") can be defined for [HDI objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhdi_object_glosry.htm "Glossary Entry") accessed from ABAP. [SAP HANA Transport for ABAP (HTA)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhta_glosry.htm "Glossary Entry") provides these containers with an interface to the [Change and Transport System](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencts_glosry.htm "Glossary Entry"). The definition of an AMHC includes a [logical HDI schema](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_hdi_glosry.htm "Glossary Entry") specified directly as a [logical schema](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") in the [AMDP macro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.schema](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_logical_db_schemas.htm). This makes simple access to [HDI objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhdi_object_glosry.htm "Glossary Entry") possible from [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp.htm).

Notes

-   [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp.htm) methods should be the preferred way of accessing the HDI objects in SAP HANA XSA.

-   If the [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry") methods are not enough, [ADBC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_glosry.htm "Glossary Entry") can also be used to access [HDI objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhdi_object_glosry.htm "Glossary Entry"). In this case, however the physical name of the HDI container is not provided automatically.

-   The [access methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_hana_access_xsc.htm) designed specifically for XSC objects are not suitable for XSA objects.