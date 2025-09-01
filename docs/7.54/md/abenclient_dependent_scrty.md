---
title: "Cross-Client Database Access"
description: |
  Each client(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm 'Glossary Entry') is a self-contained unit. Implicit client handling(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) in ABAP SQL(https://help.sap.com/doc/ab
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_dependent_scrty.htm"
abapFile: "abenclient_dependent_scrty.htm"
keywords: ["select", "do", "if", "try", "data", "abenclient", "dependent", "scrty"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenother_programming_scrty.htm) → 

Cross-Client Database Access

Each [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") is a self-contained unit. [Implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") ensures that application programs can only access the business data in the current client by default. In ABAP SQL, using the addition [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) to switch to different clients or using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) to disable implicit client handling can be viewed as a critical attack on the security of data in other clients.

In [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_glosry.htm "Glossary Entry"), there is no implicit client handling and the client in question must be specified explicitly in the access conditions. Here, specifying a client other than the current client entails accessing foreign data.

Cross-client access to database tables is permitted only in [system programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_program_glosry.htm "Glossary Entry") in the [system client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_client_glosry.htm "Glossary Entry").

Note

See also the programming guidelines for [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_guidl.htm "Guideline").

Example

The following program section permits a user to access customer data in any client. This should be avoided at all costs.

DATA client TYPE sy-mandt.
client = sy-mandt.
cl\_demo\_input=>request( CHANGING field = client ).
SELECT \*
       FROM scustom USING CLIENT @client
       INTO TABLE @DATA(customers).
cl\_demo\_output=>display( customers ).