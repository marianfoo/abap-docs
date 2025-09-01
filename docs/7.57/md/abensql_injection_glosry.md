---
title: "SQL injection"
description: |
  Injection of malicious SQL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_glosry.htm 'Glossary Entry') statements by an attacker. SQL injections are possible whenever programs use external statements or parts of statements that are then are transferred to the database system(
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_injection_glosry.htm"
abapFile: "abensql_injection_glosry.htm"
keywords: ["do", "if", "try", "data", "abensql", "injection", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SQL injection, ABENSQL_INJECTION_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

SQL injection

Injection of malicious [SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_glosry.htm "Glossary Entry") statements by an attacker. SQL injections are possible whenever programs use external statements or parts of statements that are then are transferred to the [database system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_system_glosry.htm "Glossary Entry") without being checked or escaped. In ABAP, SQL injections must be prevented by appropriate checks or escaping whenever [tokens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentoken_glosry.htm "Glossary Entry") are specified dynamically in [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"), when [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_glosry.htm "Glossary Entry") is used, and during generic programming.

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_injections_scrty.htm)