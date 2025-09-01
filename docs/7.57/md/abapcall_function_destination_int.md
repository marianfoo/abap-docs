---
title: "CALL FUNCTION DESTINATION, Internal Addition"
description: |
  This addition is for internal use only. It must not be used in application programs. Addition: ... KEEPING LOGICAL UNIT OF WORK Effect This addition has the effect that the work process(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwork_process_glosry.htm 'Glossary Entry') of the
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination_int.htm"
abapFile: "abapcall_function_destination_int.htm"
keywords: ["do", "if", "case", "try", "data", "abapcall", "function", "destination", "int"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION DESTINATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL FUNCTION DESTINATION, Internal Addition, ABAPCALL_FUNCTION_DESTINATION_INT, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL FUNCTION DESTINATION, Internal Addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

... KEEPING LOGICAL UNIT OF WORK

Effect

This addition has the effect that the [work process](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwork_process_glosry.htm "Glossary Entry") of the caller is kept, and no [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is performed.

Hint

When this addition is used incorrectly, the worst-case scenario is a system shutdown.