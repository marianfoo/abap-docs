---
title: "SQL Injections"
description: |
  An SQL injection(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_injection_glosry.htm 'Glossary Entry') is a widely used attack method on insufficiently secure input from outside. An SQL injection passes malicious SQL code injected into a program to the database system, unchecke
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_injections_scrty.htm"
abapFile: "abensql_injections_scrty.htm"
keywords: ["do", "if", "try", "method", "data", "abensql", "injections", "scrty"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_programming_scrty.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SQL Injections, ABENSQL_INJECTIONS_SCRTY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

SQL Injections

An [SQL injection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_injection_glosry.htm "Glossary Entry") is a widely used attack method on insufficiently secure input from outside. An SQL injection passes malicious SQL code injected into a program to the database system, unchecked and unescaped. In ABAP, this can occur when the following programming techniques are used:

-   [Dynamically specified tokens in ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_dyn_tokens_scrty.htm)
-   [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_dyn_tokens_scrty.htm)
-   [SQL Injections Using ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_adbc_scrty.htm)
-   [SQL Injections Using AMDP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_amdp_scrty.htm)
-   [SQL Injections Using Object Services](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_os_query_scrty.htm)
-   [SQL Injections Using Generic Programming](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_gen_prog_scrty.htm)

Continue
[SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_dyn_tokens_scrty.htm)
[SQL Injections Using ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_adbc_scrty.htm)
[SQL Injections Using AMDP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_amdp_scrty.htm)
[SQL Injections Using Object Services](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_os_query_scrty.htm)
[SQL Injections Using Generic Programming](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_inj_gen_prog_scrty.htm)