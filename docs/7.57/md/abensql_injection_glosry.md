  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SQL injection, ABENSQL_INJECTION_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

SQL injection

Injection of malicious [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") statements by an attacker. SQL injections are possible whenever programs use external statements or parts of statements that are then are transferred to the [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry") without being checked or escaped. In ABAP, SQL injections must be prevented by appropriate checks or escaping whenever [tokens](javascript:call_link\('abentoken_glosry.htm'\) "Glossary Entry") are specified dynamically in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), when [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") is used, and during generic programming.

[→ More about](javascript:call_link\('abensql_injections_scrty.htm'\))