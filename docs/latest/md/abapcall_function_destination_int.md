---
title: "CALL FUNCTION DESTINATION, Internal Addition"
description: |
  This addition is for internal use only. It must not be used in application programs. Addition: ... KEEPING LOGICAL UNIT OF WORK Effect This addition has the effect that the work process(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwork_process_glosry.htm 'Glossary Entry') of
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination_int.htm"
abapFile: "abapcall_function_destination_int.htm"
keywords: ["do", "if", "case", "try", "data", "abapcall", "function", "destination", "int"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION DESTINATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20FUNCTION%20DESTINATION%2C%20Internal%20Addition%2C%20ABAPCALL_FUNCTION_DESTINATION_INT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

CALL FUNCTION DESTINATION, Internal Addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

... KEEPING LOGICAL UNIT OF WORK

Effect

This addition has the effect that the [work process](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwork_process_glosry.htm "Glossary Entry") of the caller is kept, and no [database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is performed.

Hint

When this addition is used incorrectly, the worst-case scenario is a system shutdown.