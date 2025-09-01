  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) → 

ABAP SQL - Client Handling

The term [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") means the handling of the application data of a [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry"). The aim of client handling is generally that a [user](javascript:call_link\('abenuser_glosry.htm'\) "Glossary Entry") can only have access to the application data of the client whose [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") was specified in the logon. ABAP SQL uses implicit client handling. This method of client handling has the effect that ABAP SQL statements handle the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") in a special way when [client-dependent](javascript:call_link\('abenclient_dependent_glosry.htm'\) "Glossary Entry") data sources are accessed:

-   The client column cannot be evaluated in the [SQL conditions](javascript:call_link\('abensql_cond_glosry.htm'\) "Glossary Entry") of the [SELECT](javascript:call_link\('abapselect.htm'\)) statements of [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") and of the write statements [UPDATE SET](javascript:call_link\('abapupdate.htm'\)) and [DELETE FROM](javascript:call_link\('abapdelete_dbtab.htm'\)).

-   Instead, the SQL statements passed to the database by the [ABAP SQL interface](javascript:call_link\('abenopen_sql_interface_glosry.htm'\) "Glossary Entry") contain an additional condition for the client column.

-   Furthermore, joins between client-dependent data sources insert an ON condition that checks the client columns for equality.

-   The variants of the write statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), which use data from work areas, internal tables, or subqueries specified after FROM, ignore their client columns and the value is set by ABAP SQL instead.

Implicit client handling uses the [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") of the current client by default. This ID is also contained in the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-mandt.

-   The condition passed implicitly in selections checks the content of the client column for equality with the client ID of the current client.

-   In write statements, ABAP SQL uses the client ID of the current client for the client column of the target instead of the values of the client column of the work areas, internal tables, or subqueries specified after FROM.

This means that ABAP SQL uses only the data of the current data by default and this does not need to be specified explicitly by the developer. Implicit client handling can, however, also be switched from the default current client to other clients using additions of the ABAP SQL statements. The cases described above must also be distinguished here:

-   The implicit condition of queries and the write statements UPDATE SET and DELETE FROM can be switched from the current client to other clients as follows:

-   The addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) of the SELECT statement and the addition [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\)) of the write statements are used to specify the client ID from the addition instead of the current client ID. Implicit client handling works as if the current user was logged on with the specified client ID.

-   The additions [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)) of the SELECT statement and [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapiumd_client.htm'\)) of the write statements are used to replace or remove the equality condition for a client with different conditions for multiple clients. The condition is then non-unique instead of unique.

In both cases, the joins of queries preserve the additional implicit ON condition.

-   The value set implicitly for the client column of the work areas, internal tables, or subqueries specified after FROM in write statements can be switched from the current client to other clients as follows:

-   ABAP SQL uses the addition [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\)) to specify the client ID from the addition instead of the current ID. Implicit client handling works as if the current user is logged on with the specified client ID.

-   If ABAP SQL specifies the addition [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)), no replacement takes place. The values of the client column of the work areas, internal tables, or subqueries specified after FROM are used. In internal tables and subqueries, there may be multiple client IDs.

In addition to the case described above, the addition CLIENT SPECIFIED can also be used instead of USING in the other cases for modifying statements with data sources after FROM. This use is [obsolete](javascript:call_link\('abapselect_client_obsolete.htm'\)) in queries and [obsolete](javascript:call_link\('abapud_client_obsolete.htm'\)) in the write statements UPDATE SET and DELETE FROM. The addition CLIENT SPECIFIED completely deactivates implicit client handling in these statements. This means that no implicit WHERE condition is created for the client column and no ON condition is created between the client columns in joins. The client column in the SQL conditions of the ABAP SQL statements, on the other hand, can or must itself be evaluated. Deactivating implicit client handling in this way is prone to errors and hence not recommended. The USING additions for switching implicit handling should be used instead.

Programming Guideline

[Client Handling](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline")

Hints

-   The client data from an AS ABAP is represented in self-contained units. No client-independent access to databases should take place in application programs. This is why the additions USING and CLIENT SPECIFIED should never be used here. If ABAP SQL is used, there is generally no need to access sy-mandt in application programs either.

-   For information about accessing client-dependent [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), see the following descriptions:

-   [Client Handling in CDS View Entities](javascript:call_link\('abencds_v2_view_client_handling.htm'\))

-   [Client Handling in CDS DDIC-Based Views](javascript:call_link\('abencds_view_client_handling_v1.htm'\))

-   [Client Handling in CDS Table Functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

-   The DDIC database table T000 contains the potential [client IDs](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") in [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). Client columns of application tables should contain only those client IDs specified in T000. This is not, however, checked by ABAP SQL.

-   True [multitenancy](javascript:call_link\('abenmegatenancy_glosry.htm'\) "Glossary Entry"), with which the system ensures that different tenants' application data is isolated from each other, is not supported by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") in the current release.

-   [Native SQL](javascript:call_link\('abennative_sql.htm'\)) and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") do not implement implicit client handling. The current client must always be specified explicitly here.