---
title: "Checking Agents"
description: |
  A checking agent makes it possible to check the consistency of a persistent object that is to be stored, prior to the update. It is a class that implements the interface IF_OS_CHECK. The interface has a method IS_CONSISTENT with a return value RESULT of type OS_BOOLEAN. In the simplest case, the
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenos_transaction_check.htm"
abapFile: "abenos_transaction_check.htm"
keywords: ["update", "do", "if", "case", "method", "class", "data", "abenos", "transaction", "check"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services.htm) →  [Transaction Service](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services_transact.htm) → 

Checking Agents

A checking agent makes it possible to check the consistency of a persistent object that is to be stored, prior to the update. It is a class that implements the interface IF\_OS\_CHECK. The interface has a method IS\_CONSISTENT with a return value RESULT of type OS\_BOOLEAN.

In the simplest case, the interface is implemented in the persistent class itself since all the attributes are known there and can be checked. If an inconsistency is detected, the system tries to repair it or sets the output value to OSCON\_FALSE.

The method IF\_OS\_TRANSACTION~REGISTER\_CHECK\_AGENT can be used to register the required checking agent for a transaction. This causes the transaction service to call the method IS\_CONSISTENT automatically before the update. An exception is raised if a checking agent has the return value OSCON\_FALSE.