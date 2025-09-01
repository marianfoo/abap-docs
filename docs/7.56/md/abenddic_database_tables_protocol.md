  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Dependent Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

DDIC - Logging Database Tables

If logging is activated, any changes to table entries in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") are logged in the log table DBTABLOG. This also requires the profile parameter rec/client to be set accordingly. This profile parameter can have the following values:

-   ALL
    
    Logging is client-independent.
    
-   clnt1, clnt2, ...
    
    Changes are logged only in the specified clients clnt1, clnt2, ...
    
-   OFF
    
    No logging.
    

The logs can be evaluated using the transaction Table History (transaction SCU3). Logging is independent of updates.

If a table row has more than 16000 bytes, logging is not possible for the table. The lengths of fields with the built-in types STRING, RAWSTRING, LCHR, LRAW, and GEOM\_EWKB are counted completely here.

Hints

-   If logging is activated, access to the DDIC database table slows down accordingly. If logging is activated for many DDIC database tables, lock situations can occur for the log table.
-   No data can be written to a DDIC database table with enabled logging using the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) with [subquery](javascript:call_link\('abapinsert_source.htm'\)).
-   The documented method IS\_LOGGING\_ON of the system class CL\_DBI\_UTILITIES can be used to check whether logging is currently switched on for a DDIC database table.