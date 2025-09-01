  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

Database Access Types for SAP HANA in Release 7.40, SP02

In Release 7.40 and higher, special access types for entities in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") are possible (if this database is used as the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") for an AS ABAP).

[1\. Access to SAP HANA views](#!ABAP_MODIFICATION_1@1@)

[2\. SQLScript call](#!ABAP_MODIFICATION_2@2@)

Modification 1

Access to SAP HANA Views

[External views](javascript:call_link\('abenexternal_views.htm'\)) in ABAP Dictionary make [SAP HANA views](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") known in ABAP programs. They also allow type references and access using ABAP SQL.

Modification 2

SQLScript Call

The new statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) enables [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") to be called from ABAP programs.