---
title: "Client-Independent Database Access"
description: |
  Each client(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_glosry.htm 'Glossary Entry') is a self-contained unit. Implicit client handling(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_client_handling.htm) in ABAP SQL(https://help.sap.
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_dependent_scrty.htm"
abapFile: "abenclient_dependent_scrty.htm"
keywords: ["select", "do", "if", "try", "data", "abenclient", "dependent", "scrty"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenother_programming_scrty.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Client-Independent%20Database%20Access%2C%20ABENCLIENT_DEPENDENT_SCRTY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Client-Independent Database Access

Each [client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_glosry.htm "Glossary Entry") is a self-contained unit. [Implicit client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_client_handling.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") ensures that application programs can only access the business data in the current client by default. In ABAP SQL, using the addition [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) to switch to different clients or using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client_obsolete.htm) to disable implicit client handling can be viewed as a critical attack on the security of data in other clients.

In [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry"), there is no implicit client handling and the client in question must be specified explicitly in the access conditions. Here, specifying a client other than the current client entails accessing foreign data.

Client-independent access to database tables is allowed only in [system programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_program_glosry.htm "Glossary Entry") in the [system client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_client_glosry.htm "Glossary Entry").

Hint

See also the programming guidelines for [client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_guidl.htm "Guideline").

Example

The following program section allows a user to access customer data in any client. This should be avoided at all costs.

DATA client TYPE sy-mandt.
client = sy-mandt.
cl\_demo\_input=>request( CHANGING field = client ).
SELECT \*
       FROM scustom USING CLIENT @client
       INTO TABLE @FINAL(customers).
cl\_demo\_output=>display( customers ).