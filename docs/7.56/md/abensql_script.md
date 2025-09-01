  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [Access to Objects in SAP HANA XS](javascript:call_link\('abensap_hana_access.htm'\)) →  [Access to SAP HANA XSC Objects](javascript:call_link\('abensap_hana_access_xsc.htm'\)) → 

Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository

When calling [SQLScript procedures](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") in the [SAP HANA Repository](javascript:call_link\('abensap_hana_repository_glosry.htm'\) "Glossary Entry"), the [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [AMDP](javascript:call_link\('abenamdp.htm'\)) methods exist alongside the special statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)), which can be used to access the database procedure using a [database procedure proxy](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry") stored in the ABAP Dictionary. The database procedure proxy maps the database types of the interface parameters of the database procedures to ABAP data types. A [database procedure interface](javascript:call_link\('abendatabase_proc_intf_glosry.htm'\) "Glossary Entry") is generated for these data types. The calling ABAP program can reference the types of this global interface.

-   [Database procedure proxy](javascript:call_link\('abendatabase_procedure_proxy.htm'\))
-   [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\))

Hints

-   [ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) (AMDP) offers an alternative way of managing and calling database procedures in ABAP. It is far easier to handle database procedures using AMDP than with the calls using database procedure proxies described here, which is why AMDP is recommended whenever the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the current AS ABAP is an SAP HANA database and no [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") to another SAP HANA database is needed.
-   Calling SQLScript procedures in [SAP HANA XS](javascript:call_link\('abenxs_glosry.htm'\) "Glossary Entry"):
    
    -   SQLScript procedures in [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") are stored in the SAP HANA Repository and database procedure proxies can be used to call them from ABAP.
    -   SQLScript procedures in [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry"), the successor to [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry"), are usually [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") for which no database procedure proxies can be created. Alternative methods such as [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") or [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") must be used for these calls instead.
    
    [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") is not supported by a [SAP HANA Cloud database](javascript:call_link\('abensap_hana_cloud_db_glosry.htm'\) "Glossary Entry") and Database Procedure Proxies cannot be used there.
    

Continue
[Database Procedure Proxy](javascript:call_link\('abendatabase_procedure_proxy.htm'\))
[CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\))