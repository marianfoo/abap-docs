  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20CX_SQL_EXCEPTION%2C%20ABENCX_SQL_EXCEPTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - CX\_SQL\_EXCEPTION

Any errors that occur when using dynamic SQL statements with ADBC raise exceptions of the class CX\_SQL\_EXCEPTION. Alongside its [exception texts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_text_glosry.htm "Glossary Entry"), this class has the following instance attributes, whose content indicates the cause of the error:

Attribute

Meaning

DB\_ERROR

X, if an SQL statement was not executed by DBMS. SQL\_CODE and SQL\_MESSAGE contain further information in this case.

DBOBJECT\_EXISTS

X, if a database object that already exists is created. DB\_ERROR is also X in this case.

DBOBJECT\_NOT\_EXISTS

X, if a database object that does not exist is accessed. DB\_ERROR is also X in this case.

DUPLICATE\_KEY

X, if a DML statement would violate a unique table key. DB\_ERROR is also X in this case.

INTERNAL\_ERROR

Internal error code in the DBMS. Further troubleshooting is possible by reading the log files and trace files.

INVALID\_CURSOR

X, if an invalid or closed database cursor is used.

SQL\_CODE

Database-specific error code, if DB\_ERROR is X.

SQL\_MESSAGE

Database-specific error message, if DB\_ERROR is X.