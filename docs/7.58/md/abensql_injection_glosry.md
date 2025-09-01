  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SQL%20injection%2C%20ABENSQL_INJECTION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SQL injection

Injection of malicious [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") statements by an attacker. SQL injections are possible whenever programs use external statements or parts of statements that are then are transferred to the [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry") without being checked or escaped. In ABAP, SQL injections must be prevented by appropriate checks or escaping whenever [tokens](javascript:call_link\('abentoken_glosry.htm'\) "Glossary Entry") are specified dynamically in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), when [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") is used, and during generic programming.

[→ More about](javascript:call_link\('abensql_injections_scrty.htm'\))