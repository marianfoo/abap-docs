  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) → 

ABAP SQL - Client Handling

ABAP SQL by default uses automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry"). When a [client-specific](javascript:call_link\('abenclient_dependence_glosry.htm'\) "Glossary Entry") database table , classic view , or non-abstract CDS entity is accessed, automatic client handling dictates that only the data of the current client is accessed implicitly or the data of a client specified explicitly after the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The current [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") is the content of the system field sy-mandt.

-   When client-specific database tables or classic views are accessed, the [conditions](javascript:call_link\('abenwhere_logexp.htm'\)) that are passed from ABAP SQL to the database contain an implicit condition for the current client in the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry").

-   In work areas that are used as data sources in write statements, clients here are ignored and the current client is used implicitly.

-   The addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) can be used to switch client handling to a different client.

-   For information about accessing client-specific [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), see the following descriptions:

-   [Client Handling in CDS Views](javascript:call_link\('abencds_client_handling.htm'\))

-   [Client Handling in CDS Table Functions](javascript:call_link\('abencds_func_client_handling.htm'\))

When accessing client-specific data sources, [table columns](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") cannot be specified explicitly in [conditions](javascript:call_link\('abenwhere_logexp.htm'\)).

Automatic client handling can be switched off using the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)). If client handling is switched off:

-   The client column can be specified in [conditions](javascript:call_link\('abenwhere_logexp.htm'\)).

-   In work areas that are used as data sources in write statements, the specified clients are taken into account.

Programming Guideline

[Client Handling](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline")

Notes

-   The client data from an AS ABAP is depicted in closed units. No cross-client access to databases should take place in application programs. This is why the additions USING CLIENT and CLIENT SPECIFIED should never be used here. If ABAP SQL is used, there is generally no need to access sy-mandt in application programs either.

-   True [multitenancy](javascript:call_link\('abenmegatenancy_glosry.htm'\) "Glossary Entry"), with which the system ensures that different tenants' application data is isolated from each other, is not supported by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") in the current release.

-   [Native SQL](javascript:call_link\('abennative_sql.htm'\)) and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") do not implement automatic client handling. The current client must always be specified explicitly here.