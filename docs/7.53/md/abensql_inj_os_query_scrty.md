  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injections_scrty.htm) → 

SQL Injections Using Object Services

[Filter conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenos_query_filter_cond.htm) are passed to a query as character strings in the [query service](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_service_glosry.htm "Glossary Entry") in the [Object Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_services_glosry.htm "Glossary Entry"). If a filter condition like this (or part of it) originates outside the program, the same risk of an SQL injection is incurred as when a dynamic WHERE condition is manipulated in [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_dyn_tokens_scrty.htm). To prevent SQL injections of this nature, either parameters from a parameter list or must be used or parts escaped using the class CL\_ABAP\_DYN\_PRG.

Example

The executable example [DEMO\_QUERY\_SERVICE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenos_query_abexa.htm) is secure, since the interactive input is passed to the query using parameter bindings. If the source code after the statement TRY is replaced as follows, however, SQL injections are possible:

TRY.
    query\_manager = cl\_os\_system=>get\_query\_manager( ).
    query = query\_manager->create\_query(
              i\_filter  = \`AIRPFROM = '\` &&  airpfrom  &&
                           \`' AND AIRPTO = '\` && airpto  && \`'\` ).
    connections =
      agent->if\_os\_ca\_persistency~get\_persistent\_by\_query(
               i\_query = query ).
    ...

If airpfrom and airpto contain the values "FRA' OR AIRPFROM <> '" and "SIN' OR AIRPTO <> '", for example, all existing data is read. If no parameter bindings are used, therefore, airpfrom and airpto must be escaped.

   query = query\_manager->create\_query(
      i\_filter  = \`AIRPFROM = \` &&
                  cl\_abap\_dyn\_prg=>quote( airpfrom ) &&
                  \`  AND AIRPTO = \` &&
                  cl\_abap\_dyn\_prg=>quote( airpto ) ).