  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_gdl.htm'\)) →  [Data Storage](javascript:call_link\('abendata_storage_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Client%20Handling%2C%20ABENCLIENT_HANDLING_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Client Handling

Background   

A client indicates a data area in an AS ABAP database that contains independent application data. The application data of different clients use the same database tables, but are flagged with a three-figure client ID within these tables.

When logging on to AS ABAP, this client ID must be entered. This selects the client whose data is processed by the user session. The current client is entered in the system field sy-mandt.

-   [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statements work with implicit client handling, where the data of the current client is accessed by default. This is specified by passing an implicit condition for the current client to WHERE conditions, and ignoring clients specified in modifying statements in work areas. Implicit client handling in ABAP SQL can be switched to one more different clients by using the addition [USING](javascript:call_link\('abapselect_client.htm'\)) in queries or the additions [USING](javascript:call_link\('abapiumd_client.htm'\)) or [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)) in write statements.
-   [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [ADBC](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") do not apply implicit client handling. The client in question does not need to be selected explicitly when Native SQL or AMDP is used to access client-dependent database tables or views.

Rule   

Do not access the data of other clients

In the persistency services of business applications, access the data of the current client only.

Details   

Each client within the AS ABAP is to be viewed as a self-contained unit. The additions USING CLIENT and CLIENT SPECIFIED should not be used in ABAP SQL statements of business applications. When Native SQL or AMDP is used, only the current client should be selected.

The system field sy-mandt does not generally need to be evaluated, unless Native SQL or AMDP is used to access client-dependent database tables or views. The client ID is then needed to select the data of the current client explicitly.

Hints

-   Client-independent database tables (tables without client ID) are usually system tables. This means that client-independent access to these tables is also reserved for system programs.
-   The addition CLIENT SPECIFIED is fully [obsolete](javascript:call_link\('abapselect_client_obsolete.htm'\)) in queries and partially [obsolete](javascript:call_link\('abapud_client_obsolete.htm'\)) in write statements.

Bad Example

The following source code demonstrates ABAP SQL access on application data where implicit client handling is switched to a different client.

SELECT SINGLE ...
       FROM scarr USING '...'
       WHERE ...             ...
       INTO ...

Good Example

The following source code demonstrates the recommended use of ABAP SQL where implicit client handling accesses the current client by default.

SELECT SINGLE ...
       FROM scarr
       WHERE ...
       INTO ...