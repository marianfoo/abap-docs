  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP05](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Managed%20Database%20Procedures%20in%20ABAP%20Release%207.40%2C%20SP05%2C%20ABENNEWS-740_SP05-AMDP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion%20for%20improvement:)

ABAP Managed Database Procedures in ABAP Release 7.40, SP05

[1\. Tag Interface for AMDP Classes](#!ABAP_MODIFICATION_1@1@)
[2\. Implementation of AMDP Methods](#!ABAP_MODIFICATION_2@2@)

[ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_managed_db_proc_glosry.htm "Glossary Entry") is a framework that was introduced in ABAP release 7.40, SP05 that makes it possible to manage and call [stored procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstored_procedure_glosry.htm "Glossary Entry") or [database procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") as [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") procedures. In the first phase, database procedures programmed in [SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_glosry.htm "Glossary Entry") are supported in the [SAP HANA database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry").

Modification 1   

Tag Interface for AMDP Classes

The new tag interface IF\_AMDP\_MARKER\_HDB flags a class as an [AMDP class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry"), which can contain AMDP methods for SAP HANA database.

Modification 2   

Implementation of AMDP Methods

The new addition [BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm) for the statement METHOD turns a method of an [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry") class into an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry"). This is implemented in the SQLScript language of the SAP HANA database and not in ABAP. The ABAP runtime framework creates a corresponding database procedure in SAP HANA database. This procedure is executed when the AMDP method is called.