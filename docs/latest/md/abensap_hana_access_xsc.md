  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access to Objects in HANA XS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_xsc_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Access%20to%20SAP%20HANA%20XSC%20Objects%20%28Obsolete%29%2C%20ABENSAP_HANA_ACCESS_XSC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

Access to SAP HANA XSC Objects (Obsolete)

[SAP HANA XSC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsc_glosry.htm "Glossary Entry") (SAP HANA extended application services, classic model) is the predecessor version of [SAP HANA XSA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsa_glosry.htm "Glossary Entry"). SAP HANA XSC is not supported by a [SAP HANA Cloud database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_hana_cloud_db_glosry.htm "Glossary Entry").

The development and administration perspective of the Eclipse-based tool [SAP HANA Studio](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_studio_glosry.htm "Glossary Entry") are used to develop and manage the HANA objects in XSC. The development objects are stored in the [SAP HANA Repository](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_hana_repository_glosry.htm "Glossary Entry"). Objects from the SAP HANA Repository are transported (deployed) using special transport tools.

ABAP provides special access methods for the following XSC objects in the SAP HANA Repository:

-   [DDIC external views for SAP HANA views in SAP HANA Repository](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexternal_views.htm) (obsolete)
-   [Database procedure proxies for SQLScript Procedures in the SAP HANA Repository](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script.htm) (obsolete)

These access methods are not suitable for objects in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsa_glosry.htm "Glossary Entry") and they have been declared obsolete. Alternative methods such as [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry") or [ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_glosry.htm "Glossary Entry") are used instead.

Hints

-   Instead of calling [SQLScript procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") using [database procedure proxies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script.htm), [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) are recommended. AMDP can be used to create and manage custom database procedures and also [database functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_function_glosry.htm "Glossary Entry"). Existing database procedures can be called from AMDP. Database procedure proxies are required only if a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") is used to access an SAP HANA database that is not the [standard database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the current AS ABAP (side-by-side scenario). For AMDP, only [service connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_connection_glosry.htm "Glossary Entry") to the standard database of the current AS ABAP can be used.
-   [DDIC external Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexternal_views.htm) and [Database procedure proxies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script.htm) are not possible when working with a [SAP HANA Cloud database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_hana_cloud_db_glosry.htm "Glossary Entry").
-   [DDIC external views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexternal_view_glosry.htm "Glossary Entry") and [Database procedure proxies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry") are obsolete. See SAP Note [3116165](https://launchpad.support.sap.com/#/notes/3116165).

Continue
[DDIC External Views for SAP HANA Views in SAP HANA Repository (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexternal_views.htm)
[Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script.htm)