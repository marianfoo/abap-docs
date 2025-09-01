  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [Access to Objects in SAP HANA XS](javascript:call_link\('abensap_hana_access.htm'\)) →  [Access to SAP HANA XSC Objects](javascript:call_link\('abensap_hana_access_xsc.htm'\)) → 

Database Procedure Proxies for SQLScript Procedures in XSC

When calling [SQLScript procedures](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") in the [SAP HANA repository](javascript:call_link\('abensap_hana_repository_glosry.htm'\) "Glossary Entry") in [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry"), the [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [AMDP](javascript:call_link\('abenamdp.htm'\)) methods exist alongside the special statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)), which can be used to access the database procedure using a [database procedure proxy](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry") saved in ABAP Dictionary. The database procedure proxy maps the database types of the interface parameters of the database procedures to ABAP data types. A [database procedure interface](javascript:call_link\('abendatabase_proc_intf_glosry.htm'\) "Glossary Entry") is generated for these data types. The calling ABAP program can reference the types of this global interface.

-   [Database procedure proxy](javascript:call_link\('abendatabase_procedure_proxy.htm'\))

-   [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\))

Notes

-   [ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) (AMDP) offers an alternative way of managing and calling database procedures in ABAP. It is far easier to handle database procedures using AMDP than with the calls using database procedure proxies described here, which is why AMDP is recommended whenever the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the current AS ABAP is an SAP HANA database and no [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") to another SAP HANA database is needed.

-   Database procedure proxies are not suitable for [SQLScript procedures](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") in [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry"). Alternative methods such as [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") or [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") must be used instead.

Continue
[Database Procedure Proxy](javascript:call_link\('abendatabase_procedure_proxy.htm'\))
[CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\))