---
title: "ABAP SQL - Overview"
description: |
  ABAP SQL defines the subset of ABAP statements that enable direct access to data in the standard database(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm 'Glossary Entry') of the current AS ABAP(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/aben
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_oview.htm"
abapFile: "abenabap_sql_oview.htm"
keywords: ["select", "do", "if", "try", "data", "abenabap", "sql", "oview"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) → 

ABAP SQL - Overview

ABAP SQL defines the subset of ABAP statements that enable direct access to data in the [standard database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the current [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry"). The ABAP SQL statements represent the [DML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendml_glosry.htm "Glossary Entry") part of [SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_glosry.htm "Glossary Entry") in ABAP, which is supported by all database systems. The statements of ABAP SQL are converted to database-specific SQL in the ABAP SQL interface of the [database interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_interface_glosry.htm "Glossary Entry"). They are then transferred to the database system and executed there. By default, ABAP SQL statements use [implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm) to access only the data of the current client. To improve performance when accessing the database, [table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_puffering.htm) can be activated for individual DDIC database tables, [DDIC database views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_view_glosry.htm "Glossary Entry"), or CDS views to avoid accessing the database directly each time.

ABAP SQL is closely linked with the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") and [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry"). ABAP SQL statements can be used only to access [DDIC database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) of the ABAP Dictionary, [DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_views.htm), and non-abstract [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm). These are specified directly in ABAP SQL statements without specifying a [database schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_schema_glosry.htm "Glossary Entry"). By default, the ABAP SQL interface of the database interface accesses the associated database objects in the [ABAP database schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the [standard database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry").

The ABAP SQL interface of the database interface respects the fact the order of the columns in the data source in the database system can differ from the order in the definition of the data source in the ABAP Dictionary. If ABAP SQL is used, the order in the ABAP Dictionary applies and the database interface performs a transformation if necessary. The function [SQL Trace](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_trace_glosry.htm "Glossary Entry") of the [Performance Trace](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenperformance_trace_glosry.htm "Glossary Entry") tool (transaction ST05) can be used to analyze the SQL statements actually passed to the database by the database interface.

Each non-buffered ABAP SQL statement has the same meaning as an access to the database. This applies in particular to [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statements that end with [ENDSELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendselect.htm). Data to be read and to be modified is transported in packages between the database server and the current AS instance. The size of the packages can be configured using [profile parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") (for example, the default value for Oracle is 65 KB).

-   [ABAP SQL - Client Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm)
-   [ABAP SQL - Null Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_null_values.htm)
-   [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_puffering.htm)
-   [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strict_modes.htm)

Hint

If more than approximately 2^32 entries are addressed in a single database access, the behavior of the database is undefined.

Continue
[ABAP SQL - Client Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm)
[ABAP SQL - Null Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_null_values.htm)
[ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_puffering.htm)
[ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strict_modes.htm)