  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table%20Buffering%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_BUFFER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

DDIC - Table Buffering of Database Tables

It is possible to define whether and how [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry") of a DDIC database table is allowed in the [table buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffer_glosry.htm "Glossary Entry") of an AS instance.

-   [Buffering Permission](#@@ITOC@@ABENDDIC_DATABASE_TABLES_BUFFER_1)
-   [Buffering Type](#@@ITOC@@ABENDDIC_DATABASE_TABLES_BUFFER_2)

The table buffer is managed by the [database interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_interface_glosry.htm "Glossary Entry"). When tables with active buffering are accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") or from classic [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry"), the table buffer is used implicitly.

Buffering Permission   

Table buffering can be configured for a DDIC database table as follows:

-   Buffering not allowed
    
    The table is not buffered. The database interface always passes the accesses to the DDIC database table and the current data is used directly. This setting also specifies that table buffering should not be activated for this table in any other systems due to the way the table is used.
    
-   Buffering allowed, but switched off
    
    The table is not buffered when delivered. This setting indicates, however, that buffering is possible in principle and can be activated in other systems depending on how the table is used.
    
-   Buffering switched on
    
    The table is buffered. The database interface redirects any reads to the [table buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffer_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current AS instance, if possible.
    

Hint

Certain [prerequisites](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_restrictions.htm), some of which depend on the buffering type, must be met before ABAP SQL can access the table buffer instead of accessing the DDIC database table directly.

Buffering Type   

The buffering type determines which data is loaded from the table to the table buffer when a table entry is accessed and buffering is switched on. The possible buffering types are:

-   [Single record buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_single_buffering.htm)
-   [Generic buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_generic_buffering.htm)
-   [Full buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_complete_buffering.htm)