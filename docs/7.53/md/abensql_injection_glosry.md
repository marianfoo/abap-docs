  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

SQL injection

Injection of malicious [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") statements by an attacker. SQL injections are possible whenever programs use external statements (or parts of statements) that are then are passed to the [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry") without being checked or escaped. In ABAP, SQL injections must be prevented by appropriate checks or escape methods whenever [tokens](javascript:call_link\('abentoken_glosry.htm'\) "Glossary Entry") are specified dynamically in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), when [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") is used, and in generic programming.

[→ More](javascript:call_link\('abensql_injections_scrty.htm'\))