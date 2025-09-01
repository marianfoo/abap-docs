---
title: "Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository (Obsolete)"
description: |
  Note: SAP HANA XSA(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsa_glosry.htm 'Glossary Entry') replaces SAP HANA XSC(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm 'Glossary Entry'). The access methods(https://help.sap.com/doc/abapdocu_757_ind
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_script.htm"
abapFile: "abensql_script.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abensql", "script"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access to Objects in HANA XS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_xsc_obsolete.htm) →  [Access to SAP HANA XSC Objects (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_hana_access_xsc.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository \(Obsol
ete\), ABENSQL_SCRIPT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository (Obsolete)

Note: [SAP HANA XSA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsa_glosry.htm "Glossary Entry") replaces [SAP HANA XSC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm "Glossary Entry"). The [access methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_hana_access_xsc.htm) designed specifically for XSC objects are not suitable for XSA objects. After all XSC objects have been migrated to XSA, the access methods designed for XSC became mostly obsolete. Database Procedure Proxies represent one such access method and have become obsolete. More information can be found in SAP Notes [2465027](https://launchpad.support.sap.com/#/notes/2465027) and [3116165](https://launchpad.support.sap.com/#/notes/3116165).

When calling [SQLScript procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") in the [SAP HANA Repository](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_hana_repository_glosry.htm "Glossary Entry"), the [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp.htm) methods exist alongside the special statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_database_procedure.htm), which can be used to access the database procedure using a [database procedure proxy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry") stored in the ABAP Dictionary. The database procedure proxy maps the database types of the interface parameters of the database procedures to ABAP data types. A [database procedure interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_proc_intf_glosry.htm "Glossary Entry") is generated for these data types. The calling ABAP program can reference the types of this global interface.

-   [Database procedure proxy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_procedure_proxy.htm)
-   [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_database_procedure.htm)

Hints

-   [ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp.htm) (AMDP) offers an alternative way of managing and calling database procedures in ABAP. It is far easier to handle database procedures using AMDP than with the calls using database procedure proxies described here, which is why AMDP is recommended whenever the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the current AS ABAP is an SAP HANA database and no [secondary connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") to another SAP HANA database is needed.
-   Calling SQLScript procedures in [SAP HANA XS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxs_glosry.htm "Glossary Entry"):
    
    -   SQLScript procedures in [SAP HANA XSC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm "Glossary Entry") are stored in the SAP HANA Repository and database procedure proxies can be used to call them from ABAP.
    -   SQLScript procedures in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsa_glosry.htm "Glossary Entry"), the successor to [SAP HANA XSC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm "Glossary Entry"), are usually [HDI objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhdi_object_glosry.htm "Glossary Entry") for which no database procedure proxies can be created. Alternative methods such as [AMDP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_glosry.htm "Glossary Entry") or [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_glosry.htm "Glossary Entry") must be used for these calls instead.
    
    [SAP HANA XSC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm "Glossary Entry") is not supported by a [SAP HANA Cloud database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_hana_cloud_db_glosry.htm "Glossary Entry") and Database Procedure Proxies cannot be used there.
    
-   [Database procedure proxies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry") are obsolete, see SAP Note [3116165](https://launchpad.support.sap.com/#/notes/3116165).

Continue
[Database Procedure Proxy (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_procedure_proxy.htm)
[CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_database_procedure.htm)