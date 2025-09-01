  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Setting%20Transaction%20Behavior%20for%20SAP%20HANA%2C%20ABENHANA_SET_TRANSACTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Setting Transaction Behavior for SAP HANA

[HANA-specific SQL](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f) contains the following statements for setting transaction behavior:

-   SET TRANSACTION AUTOCOMMIT DDL
-   SET TRANSACTION ISOLATION LEVEL
-   SET TRANSACTION LOCK WAIT TIMEOUT
-   SET TRANSACTION READ ONLY*|*WRITE

These statements modify the transaction behavior of the current [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"). They cannot be used directly by AS ABAP when accessing the SAP Hana database using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") ([ADBC](javascript:call_link\('abenadbc.htm'\)), [EXEC SQL](javascript:call_link\('abennativesql.htm'\))). This is because transaction behavior defined for the current database connection using these settings is persisted beyond its current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). If the database connection is then reused in ABAP SQL, Native SQL, or AMDP (see [Database Connections](javascript:call_link\('abendb_connections.htm'\))), unexpected or critical situations can arise. The following methods of the class CL\_SQL\_CONNECTION should be used instead:

-   AUTOCOMMIT\_DDL for SET TRANSACTION AUTOCOMMIT DDL
-   SET\_ISOLATION\_LEVEL for SET TRANSACTION ISOLATION LEVEL
-   SET\_LOCK\_WAIT\_TIMEOUT for SET TRANSACTION LOCK WAIT TIMEOUT
-   There is no current method available for SET TRANSACTION READ ONLY*|*WRITE

These methods wrap the SQL statements. The HANA-specific part (Client Library) of the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") registers any calls of these methods and resets the transaction behavior of the current database connection to the default behavior at the end of the current database LUW.

Hints

-   In [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") (and hence automatically in the corresponding [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry")), the SQL SET TRANSACTION statements for setting transaction behavior are not allowed in the syntax.
-   Currently, there are no automatic resets of the transaction behavior after method calls on any other database platforms.