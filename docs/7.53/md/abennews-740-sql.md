  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP02](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740_sp02.htm) → 

Database Access Types for SAP HANA in Release 7.40, SP02

In Release 7.40 and higher, special access types for entities in the [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry") are possible (if this database is used as the [standard database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_db_glosry.htm "Glossary Entry") for an AS ABAP).

[1\. Access to SAP HANA views](#!ABAP_MODIFICATION_1@1@)

[2\. SQLScript call](#!ABAP_MODIFICATION_2@2@)

Modification 1

Access to SAP HANA Views

[External views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexternal_views.htm) in ABAP Dictionary make [SAP HANA views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_view_glosry.htm "Glossary Entry") known in ABAP programs. They also allow type references and access using ABAP SQL.

Modification 2

SQLScript Call

The new statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_database_procedure.htm) enables [SQLScript](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_script_glosry.htm "Glossary Entry") to be called from ABAP programs.