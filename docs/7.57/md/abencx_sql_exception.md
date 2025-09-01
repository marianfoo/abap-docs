  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ABAP Database Connectivity (ADBC)](javascript:call_link\('abenadbc.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ADBC - CX_SQL_EXCEPTION, ABENCX_SQL_EXCEPTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

ADBC - CX\_SQL\_EXCEPTION

Any errors that occur when using dynamic SQL statements with ADBC raise exceptions of the class CX\_SQL\_EXCEPTION. Alongside its [exception texts](javascript:call_link\('abenexception_text_glosry.htm'\) "Glossary Entry"), this class has the following instance attributes, whose content indicates the cause of the error:

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