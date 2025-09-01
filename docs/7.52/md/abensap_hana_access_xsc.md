  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_hana.htm) →  [Access to Objects in SAP HANA XS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_hana_access.htm) → 

Access to SAP HANA XSC Objects

[SAP HANA XSC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsc_glosry.htm "Glossary Entry") (SAP HANA Extended Application Services Classic Model) is the predecessor version of [SAP HANA XSA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsa_glosry.htm "Glossary Entry").

The development and administration perspective of the Eclipse-based tool [SAP HANA Studio](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_studio_glosry.htm "Glossary Entry") are used to develop and manage the HANA objects in XSC. The development objects are stored in the [SAP HANA repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_hana_repository_glosry.htm "Glossary Entry"). Objects from the SAP HANA repository are transported (and deployed) using special transport tools.

ABAP provides the following special access methods for the following objects in the SAP HANA repository in XSC:

-   [External views for SAP HANA views in XSC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexternal_views.htm)

-   [Database procedure proxies for SQLScript procedures in XSC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_script.htm)

These access methods are not suitable for objects in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsa_glosry.htm "Glossary Entry"). Alternative methods such as [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry") or [ADBC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_glosry.htm "Glossary Entry") are used instead.

Note

Instead of calling [SQLScript procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") using [database procedure proxies](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_script.htm), [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp.htm) are recommended. AMDP can be used to create and manage new database procedures and also [database functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_function_glosry.htm "Glossary Entry"). Existing database procedures can be called from AMDP. Database procedure proxies are required only if a [secondary connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") is used to access an SAP HANA database that is not the [standard database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the current AS ABAP (side-by-side scenario). For AMDP, only [service connections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenservice_connection_glosry.htm "Glossary Entry") to the standard database of the current AS ABAP can be used.

Continue
[External Views for SAP HANA Views in XSC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexternal_views.htm)
[Database Procedure Proxies for SQLScript Procedures in XSC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_script.htm)