---
title: "SQL Injections"
description: |
  An SQL injection(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_injection_glosry.htm 'Glossary Entry') is a widely used attack method on insufficiently secure input from outside. An SQL injection passes malicious SQL code injected into a program to the database system, unc
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_injections_scrty.htm"
abapFile: "abensql_injections_scrty.htm"
keywords: ["do", "if", "try", "method", "data", "abensql", "injections", "scrty"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_programming_scrty.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SQL%20Injections%2C%20ABENSQL_INJECTIONS_SCRTY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SQL Injections

An [SQL injection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_injection_glosry.htm "Glossary Entry") is a widely used attack method on insufficiently secure input from outside. An SQL injection passes malicious SQL code injected into a program to the database system, unchecked and unescaped. In ABAP, this can occur when the following programming techniques are used:

-   [Dynamically specified tokens in ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_dyn_tokens_scrty.htm)
-   [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_dyn_tokens_scrty.htm)
-   [SQL Injections Using ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_adbc_scrty.htm)
-   [SQL Injections Using AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_amdp_scrty.htm)
-   [SQL Injections Using Object Services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_os_query_scrty.htm)
-   [SQL Injections Using Generic Programming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_gen_prog_scrty.htm)

Continue
[SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_dyn_tokens_scrty.htm)
[SQL Injections Using ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_adbc_scrty.htm)
[SQL Injections Using AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_amdp_scrty.htm)
[SQL Injections Using Object Services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_os_query_scrty.htm)
[SQL Injections Using Generic Programming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_gen_prog_scrty.htm)