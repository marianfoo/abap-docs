  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction.htm) →  [Database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_transaction.htm) → 

Database Rollback

Database rollbacks are triggered implicitly or explicitly in [AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_nw_abap_glosry.htm "Glossary Entry").

-   [Implicit Database Rollbacks](#@@ITOC@@ABENDB_ROLLBACK_1)

-   [Explicit Database Rollbacks](#@@ITOC@@ABENDB_ROLLBACK_2)

Note

A database rollback closes all opened [database cursors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). It is particularly important that database rollbacks are not triggered (in one of the ways listed here) in [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) loops and after the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm).

Implicit Database Rollbacks

The following exceptions trigger an implicit database rollback:

-   A [runtime error](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenruntime_error_glosry.htm "Glossary Entry").

-   A [termination message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentermination_message_glosry.htm "Glossary Entry") is sent.

-   A program is terminated when a [message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_glosry.htm "Glossary Entry") is sent.

The implicit database rollback takes place on all currently open [database connections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_connection_glosry.htm "Glossary Entry").

Notes

-   A termination message also produces a database rollback if the message is handled by the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_parameter.htm) when a function module is called.

-   Termination and [exit messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexit_message_glosry.htm "Glossary Entry") always terminate the program. Other message types can also terminate a program in certain [contexts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontext_2_glosry.htm "Glossary Entry").

Explicit Database Rollbacks

Explicit database rollbacks in ABAP programs can be triggered in the following ways:

-   The relevant database-specific [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") statement is used.

-   In [ADBC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_glosry.htm "Glossary Entry"), only the method [ROLLBACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_transaction.htm) of the class [CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_sql_connection.htm) can be used to do this. In other cases, the database interface does not detect the end of the transaction and might not be able to perform certain actions.

-   Any ROLLBACK statement embedded statically between [EXEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec.htm) and [ENDEXEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendexec.htm) is detected by the database interface and any required actions performed.

-   The [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit_rollback_connection.htm) is executed. The database rollback takes place on the specified [database connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_connection_glosry.htm "Glossary Entry").

-   Calling the function module DB\_ROLLBACK. This function module encapsulates the corresponding Native SQL statement. By default, the database rollback is triggered on the [connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec_connection.htm) currently open for [EXEC SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec.htm). The rollback is triggered explicitly on the standard connection by passing the value of abap\_true to the input parameter IV\_DEFAULT. The function module DB\_ROLLBACK raises the event DB\_TRANSACTION\_FINISHED of the class CL\_DBI\_TRANSACTION\_STATE, which is handled by the application log framework.

-   The [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprollback.htm) is executed. The database rollback takes place on all currently open [database connections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). The statement ROLLBACK WORK also closes the current [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw.htm) and performs the associated actions.

ROLLBACKs are not allowed in [AMDP methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_method_glosry.htm "Glossary Entry").

Notes

-   A simple database rollback in an ABAP program is is usually triggered using the statement [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit_rollback_connection.htm) (the standard connection can be specified here using default). The database LUW can be monitored by the application log by using the function module DB\_ROLLBACK. Apart from the database rollback itself, using the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprollback.htm) also has certain other consequences with respect to the [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry").

-   An explicit database rollback in an ABAP program is is best triggered using the statement [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit_rollback_connection.htm) (the standard connection can be specified here using default).

-   All the methods specified here for explicit database rollbacks clear any [global temporary tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_gtt.htm) and prevent the runtime error COMMIT\_GTT\_ERROR in the case of implicit [database commits](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit.htm).