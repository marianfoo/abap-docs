---
title: "Syntax"
description: |
  ... BYPASSING BUFFER CONNECTION con(con_syntax) ... Additions: 1.... BYPASSING BUFFER(#!ABAP_ADDITION_1@1@) 2.... CONNECTION con(con_syntax)(#!ABAP_ADDITION_2@2@) Effect These ABAP-specific additions of a main query(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/e
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm"
abapFile: "abapselect_additions.htm"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "abapselect", "additions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, abap_options, ABAPSELECT_ADDITIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

SELECT, abap\_options

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_shortref.htm)

Syntax

... *\[*BYPASSING BUFFER*\]*
    *\[*CONNECTION con*|*(con\_syntax)*\]* ...

Additions:

[1.... BYPASSING BUFFER](#!ABAP_ADDITION_1@1@)
[2.... CONNECTION con*|*(con\_syntax)](#!ABAP_ADDITION_2@2@)

Effect

These ABAP-specific additions of a [main query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_connection_glosry.htm "Glossary Entry") of a standalone [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statement or [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) statement specify whether [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is bypassed, and define the [database connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_connection_glosry.htm "Glossary Entry").

If the [INTO clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) is specified as last clause of the SELECT statement, the additions must be after the INTO clause. Otherwise, they can also be after the [SELECT clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) or after the [FROM clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm).

Addition 1   

... BYPASSING BUFFER

Effect

This addition causes the SELECT statement to bypass the [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") of buffered DDIC database tables or DDIC views. Any buffers on the current [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry") are not accessed and the database is accessed directly instead.

Hints

-   The addition BYPASSING BUFFER can be used if it is vital that the current data is accessed for a buffered table instead of the buffer.
-   The addition BYPASSING BUFFER can be specified for unbuffered DDIC database tables or views in which case it describes the regular behavior.
-   The addition BYPASSING BUFFER does not ensure that data in an internal table is transported to the database when reads are performed on the table using [FROM ... @itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm).

Example

Access to the most current data of the fully buffered DDIC database table SPFLI.

SELECT \*
       FROM spfli
       INTO TABLE @FINAL(result)
       BYPASSING BUFFER.

Addition 2   

... CONNECTION con*|*(con\_syntax)

Effect

The ABAP SQL statement is executed on the specified [database connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). The database connection can be specified as follows:

-   con
    
    Specified directly and statically as con.
    
-   (con\_syntax)
    
    Specified as the content of a parenthesized data object con\_syntax of type c or string. The following can be specified for con\_syntax:
    
    -   Literal or constant
        
        If the data object con\_syntax is specified as a character literal or as a constant, it can be evaluated statically, and the database connection is recognized as the used object.
        
    -   Variable
        
        If the data object con\_syntax is specified as a variable, it is specified only dynamically and the content is not evaluated statically.
        

The following can be specified for con or in con\_syntax, all of which are converted to uppercase letters internally:

-   default specified statically or DEFAULT specified dynamically for the [standard connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") of the current work process. The ABAP SQL statement uses the standard connection to access the [ABAP database schema](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry").
-   The name of [secondary connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") specified statically or dynamically. The name must exist in the column CON\_NAME of the database table DBCON. The following applies to the secondary connection:
    
    -   It is used in its current database LUW if already open actively in the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").
    -   If it is not yet open actively in the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"), it is either opened for the current work process or, if already open, it is reused and set to an active state,
    
    The ABAP SQL statement uses the secondary connection to access the [database schema](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_schema_glosry.htm "Glossary Entry") of the [database user](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_user_glosry.htm "Glossary Entry") of the [secondary database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_glosry.htm "Glossary Entry") that is defined for the secondary connection in the database table DBCON. All subsequent ABAP SQL statements in the same [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") for which the same secondary connection is specified use the active connection.
    
-   The name of a [service connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenservice_connection_glosry.htm "Glossary Entry") to the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry") specified statically or dynamically. The name of a service connection must consist of the prefix R/3\* followed by a maximum of 26 alphanumeric characters in uppercase letters. The following applies to the service connection:
    
    -   It is used in its current database LUW if already open actively in the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").
    -   If it is not yet open actively in the current internal session, it is either opened for the current work process or, if already open, it is reused and set to an active state,
    
    The ABAP SQL statement uses the standard connection to access the [ABAP database schema](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry"). All subsequent ABAP SQL statements in the same [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") for which the same service connection is specified use the active connection.
    
-   A name granted for a secondary connection or service connection by the addition AS of the static Native SQL statement [CONNECT TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_connection.htm) in uppercase letters. The same rules apply here as to directly specified secondary connections or service connections. It should be noted, however, that a connection with a name of this kind is a standalone database connection that can exist in parallel with a connection without a name defined using AS.

A database connection is not evaluated until runtime, regardless of whether it is specified statically or dynamically, and any unknown database connections produce the runtime error DBSQL\_UNKNOWN\_CONNECTION.

The database tables or views specified in the current ABAP SQL statement must be active in the ABAP Dictionary in the current AS ABAP regardless of the specified database connection. In a [secondary database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_glosry.htm "Glossary Entry"), an identically named and usable object with a suitable structure must exist for each database table or view specified in the current ABAP SQL statement. If not, an exception is raised.

Hints

-   Detailed information about database connections can be found [here](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_connections.htm).
-   Any ABAP SQL statement that uses the standard connection accesses the [ABAP database schema](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") only.
-   Secondary database connections can be used to access all [views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenview_glosry.htm "Glossary Entry") that can be accessed using ABAP SQL, including [DDIC database views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_view_glosry.htm "Glossary Entry"), [DDIC projection views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_proj_view_glosry.htm "Glossary Entry"), [DDIC external views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexternal_view_glosry.htm "Glossary Entry"), and non-abstract [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry"). CDS views should be specified using the name of the [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry"), since the names of associated [CDS-managed DDIC views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") are an [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_cds_obsolete.htm) way of accessing views.
-   The type of a database object specified in an ABAP SQL statement does not necessarily need to match the type of the database object with the same name in the [secondary database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_glosry.htm "Glossary Entry"). For example, a view with the same name in the secondary database can be accessed by specifying a database table and vice versa if they have the same structure.
-   Unlike in ABAP SQL, any database connections specified in Native SQL and AMDP are case-sensitive. To access a database connection activated in ABAP SQL in Native SQL or AMDP, the connection must be specified in uppercase letters. Conversely, an ABAP SQL statement cannot use a database connection activated using Native SQL AMDP if its name contains lowercase letters.
-   The addition CONNECTION only bypasses [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") in case of real remote connections that are available in table DBCON.
-   The addition CONNECTION cannot be used together with the addition WITH HOLD of the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm).

Example

Reading of data using a [service connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenservice_connection_glosry.htm "Glossary Entry") to the standard database.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(itab)
       CONNECTION r/3\*my\_conn.
cl\_demo\_output=>display( itab ).