---
title: "OS - Transaction Service, Overview"
description: |
  The classic SAP transaction concept is based on SAP LUWs in which changes to the database are bundled into a single database LUW. The bundling techniques used here include programming database changes in procedures and registering them in a database LUW for later execution instead of performing them
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_transaction_terms.htm"
abapFile: "abenos_transaction_terms.htm"
keywords: ["update", "do", "if", "case", "class", "data", "abenos", "transaction", "terms"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) →  [OS - Transaction Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_transact.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Transaction%20Service%2C%20Overview%2C%20ABENOS_TRANSACTION_TERMS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Transaction Service, Overview

The classic SAP transaction concept is based on SAP LUWs in which changes to the database are bundled into a single database LUW. The bundling techniques used here include programming database changes in procedures and registering them in a database LUW for later execution instead of performing them immediately. Possible procedures include subroutines (registered using PERFORM ON COMMIT) and update function modules (registered using CALL FUNCTION IN UPDATE TASK). In both cases, the registered procedures are executed using the statement COMMIT WORK.

The Transaction Service of the Object Services is also based on SAP LUWs and does not introduce a new transaction concept. However, it encapsulates the bundling before the developer, so that the developer does not have to explicitly create and register procedures that change the database. Internally, the transaction service still works with the classic update function modules.

This concept allows interaction between classic and object-oriented transactions, controlled using a [transaction mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_transaction_mode.htm) that can be set for a given program.