  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740_sp05.htm) → 

ABAP Managed Database Procedures in Release 7.40, SP05

[1\. Tag interface for AMDP classes](#!ABAP_MODIFICATION_1@1@)
[2\. Implementation of AMDP methods](#!ABAP_MODIFICATION_2@2@)

[ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_proc_glosry.htm "Glossary Entry") is a framework that was introduced in Release 7.40, SP05 that makes it possible to manage and call [stored procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstored_procedure_glosry.htm "Glossary Entry") or [database procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") as [AMDP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") procedures. In the first phase, database procedures programmed in [SQLScript](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_script_glosry.htm "Glossary Entry") are supported in the [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry").

Modification 1

Tag Interface for AMDP Classes

The new tag interface IF\_AMDP\_MARKER\_HDB flags a class as an [AMDP class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_class_glosry.htm "Glossary Entry"), which can contain AMDP methods for SAP HANA database.

Modification 2

Implementation of AMDP Methods

The new addition [BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethod_by_db_proc.htm) for the statement METHOD turns a method of an [AMDP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_class_glosry.htm "Glossary Entry") class into an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry"). This is implemented in the SQLScript language of the SAP HANA database and not in ABAP. The ABAP runtime environment creates a corresponding database procedure in SAP HANA database. This procedure is executed when the AMDP method is called.