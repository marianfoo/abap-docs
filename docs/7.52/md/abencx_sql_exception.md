  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql.htm) →  [ADBC - ABAP Database Connectivity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc.htm) → 

ADBC - CX\_SQL\_EXCEPTION

Any errors that occur when using dynamic SQL statements with ADBC raise exceptions of the class CX\_SQL\_EXCEPTION. Alongside its [exception texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_text_glosry.htm "Glossary Entry"), this class has the following instance attributes, whose contents indicate the cause of the error:

Attribute

Meaning

DB\_ERROR

"X", if an SQL statement was not executed by DBMS. SQL\_CODE and SQL\_MESSAGE contain further information in this case.

DBOBJECT\_EXISTS

"X", if a database object that already exists is created. DB\_ERROR is also "X" in this case.

DBOBJECT\_NOT\_EXISTS

"X", if a database object that does not exist is accessed. DB\_ERROR is also "X" in this case.

DUPLICATE\_KEY

"X", if a DML statement would violate a unique table key. DB\_ERROR is also "X" in this case.

INTERNAL\_ERROR

Internal error code in the DBMS. Further troubleshooting is possible by reading the log files and trace files.

INVALID\_CURSOR

"X", if an invalid or closed database cursor is used.

SQL\_CODE

Database-specific error code, if DB\_ERROR is "X".

SQL\_MESSAGE

Database-specific error message, if DB\_ERROR is "X".