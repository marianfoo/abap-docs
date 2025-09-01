  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [Access to Objects in SAP HANA XS](javascript:call_link\('abensap_hana_access.htm'\)) → 

Access to SAP HANA XSC Objects

[SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") (SAP HANA Extended Application Services Classic Model) is the predecessor version of [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry"). SAP HANA XSC is not supported by a [SAP HANA Cloud database](javascript:call_link\('abensap_hana_cloud_db_glosry.htm'\) "Glossary Entry").

The development and administration perspective of the Eclipse-based tool [SAP HANA Studio](javascript:call_link\('abenhana_studio_glosry.htm'\) "Glossary Entry") are used to develop and manage the HANA objects in XSC. The development objects are stored in the [SAP HANA Repository](javascript:call_link\('abensap_hana_repository_glosry.htm'\) "Glossary Entry"). Objects from the SAP HANA Repository are transported (deployed) using special transport tools.

ABAP provides special access methods for the following XSC objects in the SAP HANA Repository:

-   [DDIC external views for SAP HANA views in SAP HANA Repository](javascript:call_link\('abenexternal_views.htm'\))
-   [Database procedure proxies for SQLScript Procedures in the SAP HANA Repository](javascript:call_link\('abensql_script.htm'\))

These access methods are not suitable for objects in [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry"). Alternative methods such as [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") or [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") are used instead.

Hints

-   Instead of calling [SQLScript procedures](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") using [database procedure proxies](javascript:call_link\('abensql_script.htm'\)), [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) are recommended. AMDP can be used to create and manage custom database procedures and also [database functions](javascript:call_link\('abendatabase_function_glosry.htm'\) "Glossary Entry"). Existing database procedures can be called from AMDP. Database procedure proxies are required only if a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") is used to access an SAP HANA database that is not the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the current AS ABAP (side-by-side scenario). For AMDP, only [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") to the standard database of the current AS ABAP can be used.
-   [DDIC external Views](javascript:call_link\('abenexternal_views.htm'\)) and [Database procedure proxies](javascript:call_link\('abensql_script.htm'\)) are not possible when working with a [SAP HANA Cloud database](javascript:call_link\('abensap_hana_cloud_db_glosry.htm'\) "Glossary Entry").

Continue
[DDIC External Views for SAP HANA Views in SAP HANA Repository](javascript:call_link\('abenexternal_views.htm'\))
[Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository](javascript:call_link\('abensql_script.htm'\))