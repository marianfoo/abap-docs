  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Further Security Risks](javascript:call_link\('abenother_programming_scrty.htm'\)) → 

Cross-Client Database Access

Each [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") is a self-contained unit. The automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") function in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") ensures that application programs can only access the business data in the current client. In ABAP SQL, switching off automatic client handling using the addition CLIENT SPECIFIED or switching to a different client using the addition USING CLIENT can be regarded as access to foreign data that is critical for security.

In [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"), there is no automatic client handling and the client in question must be specified explicitly in the access conditions. Here, specifying a client other than the current client entails accessing foreign data.

Cross-client access to database tables is permitted only in [system programs](javascript:call_link\('abensystem_program_glosry.htm'\) "Glossary Entry") in the [system client](javascript:call_link\('abensystem_client_glosry.htm'\) "Glossary Entry").

Note

See also the programming guidelines for [client handling](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline").

Example

The following program excerpts permit a user to access customer data in any client. This should be avoided at all costs.

DATA client TYPE sy-mandt.
client = sy-mandt.
cl\_demo\_input=>request( CHANGING field = client ).
SELECT \*
       FROM scustom USING CLIENT @client
       INTO TABLE @DATA(customers1).
cl\_demo\_output=>display( customers1 ).
SELECT \*
       FROM scustom CLIENT SPECIFIED
       WHERE mandt = @client
       INTO TABLE @DATA(customers2).
cl\_demo\_output=>display( customers2 ).