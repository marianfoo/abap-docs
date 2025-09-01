---
title: "SQL injection"
description: |
  Injection of malicious SQL(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_glosry.htm 'Glossary Entry') statements by an attacker. SQL injections are possible whenever programs use external statements or parts of statements that are then are transferred to the database system(
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_injection_glosry.htm"
abapFile: "abensql_injection_glosry.htm"
keywords: ["do", "if", "try", "data", "abensql", "injection", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SQL%20injection%2C%20ABENSQL_INJECTION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SQL injection

Injection of malicious [SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_glosry.htm "Glossary Entry") statements by an attacker. SQL injections are possible whenever programs use external statements or parts of statements that are then are transferred to the [database system](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_system_glosry.htm "Glossary Entry") without being checked or escaped. In ABAP, SQL injections must be prevented by appropriate checks or escaping whenever [tokens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentoken_glosry.htm "Glossary Entry") are specified dynamically in [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"), when [ADBC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_glosry.htm "Glossary Entry") is used, and during generic programming.

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_injections_scrty.htm)