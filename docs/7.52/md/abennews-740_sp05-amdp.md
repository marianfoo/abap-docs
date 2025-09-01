  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740_sp05.htm) → 

ABAP Managed Database Procedures in Release 7.40, SP05

[1\. Tag interface for AMDP classes](#!ABAP_MODIFICATION_1@1@)

[2\. Implementation of AMDP methods](#!ABAP_MODIFICATION_2@2@)

[ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_managed_db_proc_glosry.htm "Glossary Entry") is a framework that was introduced in Release 7.40, SP05 that makes it possible to manage and call [stored procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstored_procedure_glosry.htm "Glossary Entry") or [database procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") as [AMDP procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_procedure_glosry.htm "Glossary Entry"). In the first expansion phase, database procedures programmed in [SQLScript](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_script_glosry.htm "Glossary Entry") are supported in the [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry").

Modification 1

Tag Interface for AMDP Classes

The new tag interface IF\_AMDP\_MARKER\_HDB flags a class as an [AMDP class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_class_glosry.htm "Glossary Entry"), which can contain AMDP methods for SAP HANA database.

Modification 2

Implementation of AMDP Methods

The new addition [BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethod_by_db_proc.htm) for statement METHOD converts a method of an [AMDP class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_class_glosry.htm "Glossary Entry") to an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry"). This is not implemented in ABAP. Instead it is implemented in language SQLScript of SAP HANA database. The ABAP runtime environment creates a corresponding database procedure in SAP HANA database. This procedure is executed when the AMDP method is called.