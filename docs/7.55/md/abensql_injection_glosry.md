  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

SQL injection

Injection of malicious [SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_glosry.htm "Glossary Entry") statements by an attacker. SQL injections are possible whenever programs use external statements or parts of statements that are then are transferred to the [database system](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_system_glosry.htm "Glossary Entry") without being checked or escaped. In ABAP, SQL injections must be prevented by appropriate checks or masking whenever [tokens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentoken_glosry.htm "Glossary Entry") are specified dynamically in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry"), when [ADBC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_glosry.htm "Glossary Entry") is used, and during generic programming.

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_injections_scrty.htm)