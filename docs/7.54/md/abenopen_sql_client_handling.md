  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_oview.htm) → 

ABAP SQL - Client Handling

As a term, [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_glosry.htm "Glossary Entry") describes the way application data in a [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") is handled. Client handling is generally employed to restrict [user](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_glosry.htm "Glossary Entry") access to the application data to only the client whose [client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry") was specified in the logon. ABAP SQL uses implicit client handling. This method of client handling dictates that ABAP SQL statements handle the [client column](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_column_glosry.htm "Glossary Entry") in a special way when [client-specific](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_dependence_glosry.htm "Glossary Entry") data sources are accessed:

-   The client column cannot be evaluated in the [SQL conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cond_glosry.htm "Glossary Entry") of the [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statements of [queries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry") and of the write statements [UPDATE SET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm) and [DELETE FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_dbtab.htm).

-   Instead, the SQL statements passed to the database by the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_interface_glosry.htm "Glossary Entry") contain an additional condition for the client column.

-   Furthermore, joins between client-specific data sources insert an ON condition that checks the client columns for equality.

-   The variants of the write statements [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm), [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm), and [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_dbtab.htm), which use data from work areas, internal tables, or subqueries specified after FROM, ignore their client columns and the value is set by ABAP SQL instead.

Implicit client handling uses the [client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of the current client by default. This ID is also in the [system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-mandt.

-   The condition passed implicitly in selections checks the content of the client column for equality with the client ID of the current client.

-   In write statements, ABAP SQL uses the client ID of the current client for the client column of the target instead of the values of the client column of the work areas, internal tables, or subqueries specified after FROM.

This means that ABAP SQL uses only the data of the current data by default and this does not need to be specified explicitly by the developer. Implicit client handling can, however, also be switched from the default current client to other clients using additions of the ABAP SQL statements. The cases described above must also be distinguished here:

-   The implicit condition of queries and the write statements UPDATE SET and DELETE FROM can be switched from the current client to other clients as follows:

-   The addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) of the SELECT statement and the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm) of the write statements are used to specify the client ID from the addition instead of the current client ID. Implicit client handling works as if the current user is logged on with the specified client ID.

-   The additions [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) of the SELECT statement and [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm) of the write statements are used to replace the equality condition for a client with different conditions for multiple clients (or remove it completely). The condition is then polyvalent instead of monovalent.

In both cases, the joins of queries preserve the additional implicit ON condition.

-   The value set implicitly for the client column of the work areas, internal tables, or subqueries specified after FROM in write statements can be switched from the current client to other clients as follows:

-   ABAP SQL uses the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm) to specify the client ID from the addition instead of the current ID. Implicit client handling works as if the current user is logged on with the specified client ID.

-   If ABAP SQL specifies the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm), no replacement takes place. The values of the client column of the work areas, internal tables, or subqueries specified after FROM are used. In internal tables and subqueries, there may be multiple client IDs.

Alongside the case of write statements with data sources after FROM (described above), the addition CLIENT SPECIFIED can also be used instead of USING in the other cases. This use is [obsolete](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) in queries and [obsolete](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapud_client_obsolete.htm) in the write statements UPDATE SET and DELETE FROM. The addition CLIENT SPECIFIED disables implicit client handling in full in these statements. This means that no implicit WHERE condition is created for the client column and no ON condition is created between the client columns in joins. The client column in the SQL conditions of the ABAP SQL statements, on the other hand, can or must itself be evaluated. Disabling implicit client handling in this way is prone to errors and hence not recommended. The USING additions for switching implicit handling should be used instead.

Programming Guideline

[Client Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_guidl.htm "Guideline")

Notes

-   The client data from an AS ABAP is depicted in closed units. No cross-client access to databases should take place in application programs. This is why the additions USING and CLIENT SPECIFIED should never be used here. If ABAP SQL is used, there is generally no need to access sy-mandt in application programs either.

-   For information about accessing client-specific [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry"), see the following descriptions:

-   [Client Handling in CDS Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm)

-   [Client Handling in CDS Table Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

-   The database table T000 contains the potential [client IDs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry") in [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"). Client columns of application tables should contain only those client IDs specified in T000. This is not, however, checked by ABAP SQL.

-   True [multitenancy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmegatenancy_glosry.htm "Glossary Entry"), with which the system ensures that different tenants' application data is isolated from each other, is not supported by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") in the current release.

-   [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql.htm) and [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_glosry.htm "Glossary Entry") do not implement implicit client handling. The current client must always be specified explicitly here.