---
title: "DDIC - Table Buffering of Database Tables"
description: |
  It is possible to define whether and how table buffering(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm 'Glossary Entry') is allowed in the table buffer(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm 'Glossary Ent
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_buffer.htm"
abapFile: "abenddic_database_tables_buffer.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddic", "database", "tables", "buffer"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Table Buffering of Database Tables, ABENDDIC_DATABASE_TABLES_BUFFER, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Table Buffering of Database Tables

It is possible to define whether and how [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is allowed in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry") of an AS instance is allowed for a DDIC database table.

-   [Buffering Permission](#abenddic-database-tables-buffer-1-------buffering-type---@ITOC@@ABENDDIC_DATABASE_TABLES_BUFFER_2)

The table buffer is managed by the [database interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_interface_glosry.htm "Glossary Entry"). When [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") reads are made on tables with activated buffering or if these tables are accessed from classic [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry"), the table buffer is used implicitly.

Buffering Permission   

Table buffering can be allowed for a DDIC database table as follows:

-   Buffering not allowed
    
    Table buffering is not performed for the table. The database interface always passes the accesses to the DDIC database table, where they can use the current data directly. This setting also specifies that table buffering should not be activated for this table in any other systems due to the way the table is used.
    
-   Buffering allowed, but switched off
    
    Table buffering is not performed for the table when delivered. This setting indicates, however, that buffering is possible in principle and can be activated in other systems depending on how the table is used.
    
-   Buffering switched on
    
    Table buffering is performed for the table. If possible, the database interface redirects any reads to the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current AS instance.
    

Hint

Certain [prerequisites](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_restrictions.htm), some of which depend on the buffering type, must be met before ABAP SQL can access the table buffer instead of accessing the DDIC database table directly.

Buffering Type   

The buffering type determines which data is loaded from the table to the table buffer when a table entry is accessed and buffering is switched on. The possible buffering types are:

-   [Single record buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_single_buffering.htm)
-   [Generic buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_generic_buffering.htm)
-   [Full buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_complete_buffering.htm)