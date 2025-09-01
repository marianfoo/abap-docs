---
title: "SQL Injections Using Object Services"
description: |
  Filter conditions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm) are passed to a query as character strings in the query service(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenquery_service_glosry.htm 'Glossary Entry') in the O
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_os_query_scrty.htm"
abapFile: "abensql_inj_os_query_scrty.htm"
keywords: ["do", "if", "try", "class", "data", "abensql", "inj", "query", "scrty"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_injections_scrty.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SQL%20Injections%20Using%20Object%20Services%2C%20ABENSQL_INJ_OS_QUERY_SCRTY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

SQL Injections Using Object Services

[Filter conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_filter_cond.htm) are passed to a query as character strings in the [query service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenquery_service_glosry.htm "Glossary Entry") in the [Object Services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_services_glosry.htm "Glossary Entry"). If a filter condition like this (or part of it) originates outside the program, the same risk of an SQL injection is incurred as when a dynamic WHERE condition is manipulated in [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_dyn_tokens_scrty.htm). To prevent SQL injections of this nature, either parameters from a parameter list or must be used or parts escaped using the class CL\_ABAP\_DYN\_PRG.

Example

The executable example [CL\_DEMO\_QUERY\_SERVICE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_query_abexa.htm) is secure, since the interactive input is passed to the query using parameter bindings. If the source code after the statement TRY is replaced as follows, however, SQL injections are possible:

TRY.
    query\_manager = cl\_os\_system=>get\_query\_manager( ).
    query = query\_manager->create\_query(
              i\_filter  = \`AIRPFROM = '\` &&  airpfrom  &&
                           \`' AND AIRPTO = '\` && airpto  && \`'\` ).
    connections =
      agent->if\_os\_ca\_persistency~get\_persistent\_by\_query(
               i\_query = query ).
    ...

If airpfrom and airpto contain the values FRA' OR AIRPFROM <> ' and SIN' OR AIRPTO <> ', for example, all existing data is read. If no parameter bindings are used, therefore, airpfrom and airpto must be escaped.

   query = query\_manager->create\_query(
      i\_filter  = \`AIRPFROM = \` &&
                  cl\_abap\_dyn\_prg=>quote( airpfrom ) &&
                  \`  AND AIRPTO = \` &&
                  cl\_abap\_dyn\_prg=>quote( airpto ) ).