  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Further Security Risks](javascript:call_link\('abenother_programming_scrty.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Client-Independent Database Access, ABENCLIENT_DEPENDENT_SCRTY, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Client-Independent Database Access

Each [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") is a self-contained unit. [Implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") ensures that application programs can only access the business data in the current client by default. In ABAP SQL, using the addition [USING](javascript:call_link\('abapselect_client.htm'\)) to switch to different clients or using the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) to disable implicit client handling can be viewed as a critical attack on the security of data in other clients.

In [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"), there is no implicit client handling and the client in question must be specified explicitly in the access conditions. Here, specifying a client other than the current client entails accessing foreign data.

Client-independent access to database tables is allowed only in [system programs](javascript:call_link\('abensystem_program_glosry.htm'\) "Glossary Entry") in the [system client](javascript:call_link\('abensystem_client_glosry.htm'\) "Glossary Entry").

Hint

See also the programming guidelines for [client handling](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline").

Example

The following program section allows a user to access customer data in any client. This should be avoided at all costs.

DATA client TYPE sy-mandt.
client = sy-mandt.
cl\_demo\_input=>request( CHANGING field = client ).
SELECT \*
       FROM scustom USING CLIENT @client
       INTO TABLE @FINAL(customers).
cl\_demo\_output=>display( customers ).