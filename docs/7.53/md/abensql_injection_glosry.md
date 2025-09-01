---
title: "SQL injection"
description: |
  Injection of malicious SQL(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_glosry.htm 'Glossary Entry') statements by an attacker. SQL injections are possible whenever programs use external statements (or parts of statements) that are then are passed to the database system(htt
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injection_glosry.htm"
abapFile: "abensql_injection_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "abensql", "injection", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

SQL injection

Injection of malicious [SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_glosry.htm "Glossary Entry") statements by an attacker. SQL injections are possible whenever programs use external statements (or parts of statements) that are then are passed to the [database system](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_system_glosry.htm "Glossary Entry") without being checked or escaped. In ABAP, SQL injections must be prevented by appropriate checks or escape methods whenever [tokens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentoken_glosry.htm "Glossary Entry") are specified dynamically in [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry"), when [ADBC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_glosry.htm "Glossary Entry") is used, and in generic programming.

[→ More](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injections_scrty.htm)