  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Access to Objects in HANA XS](javascript:call_link\('abenhana_xsc_obsolete.htm'\)) →  [Access to SAP HANA XSC Objects (Obsolete)](javascript:call_link\('abensap_hana_access_xsc.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Procedure%20Proxies%20for%20SQLScript%20Procedures%20in%20the%20SAP%20HANA%20Repository%20%28Obsolete%29%2C%20ABENSQL_SCRIPT%2C%20758%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository (Obsolete)

Note: [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry") replaces [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry"). The [access methods](javascript:call_link\('abensap_hana_access_xsc.htm'\)) designed specifically for XSC objects are not suitable for XSA objects. After all XSC objects have been migrated to XSA, the access methods designed for XSC became mostly obsolete. Database procedure proxies represent one such access method and have become obsolete. More information can be found in SAP Notes [2465027](https://launchpad.support.sap.com/#/notes/2465027) and [3116165](https://launchpad.support.sap.com/#/notes/3116165).

When calling [SQLScript procedures](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") in the [SAP HANA Repository](javascript:call_link\('abensap_hana_repository_glosry.htm'\) "Glossary Entry"), the [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [AMDP](javascript:call_link\('abenamdp.htm'\)) methods exist alongside the special statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)), which can be used to access the database procedure using a [database procedure proxy](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry") stored in the ABAP Dictionary. The database procedure proxy maps the database types of the interface parameters of the database procedures to ABAP data types. A [database procedure interface](javascript:call_link\('abendatabase_proc_intf_glosry.htm'\) "Glossary Entry") is generated for these data types. The calling ABAP program can reference the types of this global interface.

-   [Database procedure proxy](javascript:call_link\('abendatabase_procedure_proxy.htm'\))
-   [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\))

Hints

-   [ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) (AMDP) offers an alternative way of managing and calling database procedures in ABAP. It is far easier to handle database procedures using AMDP than with the calls using database procedure proxies described here, which is why AMDP is recommended whenever the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the current AS ABAP is an SAP HANA database and no [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") to another SAP HANA database is needed.
-   Calling SQLScript procedures in [SAP HANA XS](javascript:call_link\('abenxs_glosry.htm'\) "Glossary Entry"):
    
    -   SQLScript procedures in [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") are stored in the SAP HANA Repository and database procedure proxies can be used to call them from ABAP.
    -   SQLScript procedures in [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry"), the successor to [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry"), are usually [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") for which no database procedure proxies can be created. Alternative methods such as [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") or [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") must be used for these calls instead.
    
    [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") is not supported by a [SAP HANA Cloud database](javascript:call_link\('abensap_hana_cloud_db_glosry.htm'\) "Glossary Entry") and database procedure proxies cannot be used there.
    
-   [Database procedure proxies](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry") are obsolete, see SAP Note [3116165](https://launchpad.support.sap.com/#/notes/3116165).

Continue
[Database Procedure Proxy (Obsolete)](javascript:call_link\('abendatabase_procedure_proxy.htm'\))
[CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\))