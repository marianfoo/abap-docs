  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_hana.htm) → 

Setting Transaction Behavior for SAP HANA

[HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) contains the following statements for setting transaction behavior:

-   SET TRANSACTION AUTOCOMMIT DDL

-   SET TRANSACTION ISOLATION LEVEL

-   SET TRANSACTION LOCK WAIT TIMEOUT

-   SET TRANSACTION READ ONLY*|*WRITE

These statements modify the transaction behavior of the current [database connection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). They cannot be used directly by AS ABAP when accessing the SAP Hana database using [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry") ([ADBC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc.htm), [EXEC SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennativesql.htm)). This is because transaction behavior defined for the current database connection using these settings is persisted beyond its current [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). If the database connection is then reused in ABAP SQL, Native SQL, or AMDP (see [Database Connections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_multiconnect.htm)), unexpected or critical situations can arise. The following methods of the class CL\_SQL\_CONNECTION should be used instead:

-   AUTOCOMMIT\_DDL for SET TRANSACTION AUTOCOMMIT DDL

-   SET\_ISOLATION\_LEVEL for SET TRANSACTION ISOLATION LEVEL

-   SET\_LOCK\_WAIT\_TIMEOUT for SET TRANSACTION LOCK WAIT TIMEOUT

-   There is no current method available for SET TRANSACTION READ ONLY*|*WRITE

These methods are wrappers for the SQL statements. The HANA-specific part (Client Library) of the [Native SQL interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") registers any calls of these methods and resets the transaction behavior of the current database connection to the default behavior at the end of the current database LUW.

Notes

-   In [SQLScript](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_script_glosry.htm "Glossary Entry") (and hence also in the corresponding [AMDP methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_method_glosry.htm "Glossary Entry")), the SQL SET TRANSACTION statements for setting transaction behavior are not allowed in the syntax.

-   Currently, there are no automatic resets of the transaction behavior after method calls on any other database platforms.