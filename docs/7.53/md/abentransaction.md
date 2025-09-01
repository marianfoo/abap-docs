  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) → 

Data Consistency

When data in database tables is modified by application programs, it must be ensured that the data is consistent after the changes have been made. This is particularly important when data is edited in the database. The time span in which a consistent data state is transferred to another consistent state is known as an LUW (Logical Unit of Work). If an error occurs in an LUW, it is possible to undo all changes made up to this point and roll the data back to its original consistent state (rollback). When a new consistent state has been reached, this new state can be committed and a new LUW can be opened.

[AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") has two types of LUWs:

-   [Database LUWs](javascript:call_link\('abendb_transaction.htm'\)) realized by the database system

-   [SAP LUWs](javascript:call_link\('abensap_luw.htm'\)) realized using special ABAP programming techniques

Accordingly, there are two lock types that are of significance:

-   [Database locks](javascript:call_link\('abendb_lock.htm'\)) set by the system

-   [SAP locks](javascript:call_link\('abensap_lock.htm'\)) set using special ABAP programming techniques

Note

The [authorizations](javascript:call_link\('abenbc_authority_check.htm'\)) of a user when accessing data are also relevant for data consistency. The statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) is used for explicit authorization checks in ABAP programs. Alongside this, the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") offers its own [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") based on implicit evaluations of [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry").

Continue
[Database LUW](javascript:call_link\('abendb_transaction.htm'\))
[SAP LUW](javascript:call_link\('abensap_luw.htm'\))
[Database Locks](javascript:call_link\('abendb_lock.htm'\))
[SAP Locks](javascript:call_link\('abensap_lock.htm'\))