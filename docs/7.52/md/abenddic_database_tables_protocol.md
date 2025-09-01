  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [Table-Specific Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

Logging Database Tables

If logging is activated, any changes to table entries are logged in the log table DBTABLOG. This also require the profile parameter rec/client to be set accordingly. This profile parameter can have the following values:

-   ALL

Logging is cross-client.

-   clnt1, clnt2, ...

Changes are logged only in the specified clients clnt1, clnt2, ...

-   OFF

No logging.

The logs can be analyzed using the transaction "Table History" (transaction SCU3). Logging takes place independently of updates.

If there are more than 250 characters in the table key or if a full table row has more than 16000 bytes, the table cannot be logged. The lengths of fields with the predefined types STRING, RAWSTRING, LCHR, and LRAW are counted in full here.

Notes

-   If logging is activated, access to the database table slows down accordingly. If logging is activated for many database tables, lock situations can arise for the log table.

-   No data can be written to a database table with enabled logging using the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) with [subquery](javascript:call_link\('abapinsert_source.htm'\)).

-   The documented method IS\_LOGGING\_ON of the system class CL\_DBI\_UTILITIES can be used to verify whether logging is currently switched on for a database table.