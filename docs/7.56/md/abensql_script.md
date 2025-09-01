  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_hana.htm) →  [Access to Objects in SAP HANA XS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_access.htm) →  [Access to SAP HANA XSC Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_access_xsc.htm) → 

Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository

When calling [SQLScript procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") in the [SAP HANA Repository](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_repository_glosry.htm "Glossary Entry"), the [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp.htm) methods exist alongside the special statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_database_procedure.htm), which can be used to access the database procedure using a [database procedure proxy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry") stored in the ABAP Dictionary. The database procedure proxy maps the database types of the interface parameters of the database procedures to ABAP data types. A [database procedure interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_proc_intf_glosry.htm "Glossary Entry") is generated for these data types. The calling ABAP program can reference the types of this global interface.

-   [Database procedure proxy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_procedure_proxy.htm)
-   [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_database_procedure.htm)

Hints

-   [ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp.htm) (AMDP) offers an alternative way of managing and calling database procedures in ABAP. It is far easier to handle database procedures using AMDP than with the calls using database procedure proxies described here, which is why AMDP is recommended whenever the [standard database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the current AS ABAP is an SAP HANA database and no [secondary connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") to another SAP HANA database is needed.
-   Calling SQLScript procedures in [SAP HANA XS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxs_glosry.htm "Glossary Entry"):
    
    -   SQLScript procedures in [SAP HANA XSC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxsc_glosry.htm "Glossary Entry") are stored in the SAP HANA Repository and database procedure proxies can be used to call them from ABAP.
    -   SQLScript procedures in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxsa_glosry.htm "Glossary Entry"), the successor to [SAP HANA XSC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxsc_glosry.htm "Glossary Entry"), are usually [HDI objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhdi_object_glosry.htm "Glossary Entry") for which no database procedure proxies can be created. Alternative methods such as [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_glosry.htm "Glossary Entry") or [ADBC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_glosry.htm "Glossary Entry") must be used for these calls instead.
    
    [SAP HANA XSC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxsc_glosry.htm "Glossary Entry") is not supported by a [SAP HANA Cloud database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_cloud_db_glosry.htm "Glossary Entry") and Database Procedure Proxies cannot be used there.
    

Continue
[Database Procedure Proxy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_procedure_proxy.htm)
[CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_database_procedure.htm)