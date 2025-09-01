---
title: "COMMIT, ROLLBACK CONNECTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_connection_shortref.htm) Syntax COMMITROLLBACK CONNECTION con(con_syntax). Effect This COMMIT or ROLLBACK statement performs a database commit(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abe
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_rollback_connection.htm"
abapFile: "abapcommit_rollback_connection.htm"
keywords: ["insert", "delete", "do", "if", "case", "try", "data", "abapcommit", "rollback", "connection"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_consistency.htm) →  [Database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_transaction.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COMMIT%2C%20ROLLBACK%20CONNECTION%2C%20ABAPCOMMIT_ROLLBACK_CONNECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

COMMIT, ROLLBACK CONNECTION

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_connection_shortref.htm)

Syntax

COMMIT*|*ROLLBACK CONNECTION con|(con\_syntax).

Effect

This COMMIT or ROLLBACK statement performs a [database commit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_commit.htm) or [database rollback](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_rollback.htm) on the specified [database connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). The database connection can be specified as follows:

-   con
    
    Specified directly and statically as con.
    
-   (con\_syntax)
    
    Specified as the content of a parenthesized data object con\_syntax of type c or string.
    

The following can be specified for con or in con\_syntax, all of which are transformed to uppercase letters internally:

-   default specified statically or DEFAULT specified dynamically for the [standard connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") of the current work process.
-   The name of [secondary connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") specified statically or dynamically. The name must exist in the column CON\_NAME of the DDIC database table DBCON.
-   The name of a [service connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenservice_connection_glosry.htm "Glossary Entry") to the [standard database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_glosry.htm "Glossary Entry") specified statically or dynamically. The name of the service connection must consist of the prefix R/3\* followed by a maximum of any 26 alphanumeric characters in uppercase letters.
-   A name (in uppercase letters) assigned for a secondary connection or service connection by the addition AS of the static Native SQL statement [CONNECT TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec_connection.htm). It should be noted here that a connection with a name of this type is a separate database connection that can exist in parallel with a connection not named using AS.

Hints

-   It is important to note that the statements COMMIT CONNECTION default and ROLLBACK CONNECTION default perform a pure database commit or rollback on the standard connection. Unlike [COMMIT WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprollback.htm), they do not close the current [SAP LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw_glosry.htm "Glossary Entry").
-   The statements COMMIT CONNECTION and ROLLBACK CONNECTION are suitable for a simple close of a database LUW. If database LUWs are monitored by the [application log](https://help.sap.com/docs/ABAP_PLATFORM_NEW/addb96cd90c945dfb3182865363bbc47/4e21012c35d44180e10000000a15822b), the function modules DB\_COMMIT and DB\_ROLLBACK are better suited because they raise an appropriate event.
-   With COMMIT CONNECTION and ROLLBACK CONNECTION, connections activated in Native SQL or AMDP can only be processed if their names do not contain lowercase letters. This affects [service connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenservice_connection_glosry.htm "Glossary Entry") and names defined using the addition AS of the statement [CONNECT TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec_connection.htm). The names of [secondary connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") do not contain any lowercase letters.
-   The statements COMMIT CONNECTION and ROLLBACK CONNECTION empty [global temporary tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_gtt.htm) on the specified secondary connection and prevent the runtime error COMMIT\_GTT\_ERROR in implicit [database commits](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_commit.htm) on this connection.
-   The statements COMMIT CONNECTION and ROLLBACK CONNECTION change the state of an active [secondary connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") or [service connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenservice_connection_glosry.htm "Glossary Entry") to inactive. The way the following connection is used in the same internal session opens a new database LUW.
-   For detailed information about database connections, see [Database Connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_connections.htm).

Example

Triggering a database commit and releasing the exclusive lock after modifying ABAP SQL statements by using COMMIT CONNECTION default on the standard connection.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
COMMIT CONNECTION default.