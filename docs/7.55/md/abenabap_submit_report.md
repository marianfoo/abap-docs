---
title: "Calling Executable Programs"
description: |
  Executable programs(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm 'Glossary Entry') can only be executed directly from the perspective of the end user. Whenever an executable program is started using System → Services → Reporting or a report transact
version: "7.55"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_submit_report.htm"
abapFile: "abenabap_submit_report.htm"
keywords: ["do", "if", "try", "abenabap", "submit", "report"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_call.htm) → 

Calling Executable Programs

[Executable programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry") can only be executed directly from the perspective of the end user. Whenever an executable program is started using System → Services → Reporting or a [report transaction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreport_transaction_glosry.htm "Glossary Entry"), the statement [SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm) is executed internally. Executable programs are the only programs that can be called using SUBMIT.

-   [Sequence of an Executable Program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreporting_process.htm)

-   [The statement SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm)

Hint

When the statement SUBMIT is executed, an authorization check is performed using the [authorization object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_PROGRAM for the [authorization group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_group_glosry.htm "Glossary Entry") specified in the [program attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_attribute_glosry.htm "Glossary Entry").

Continue
[Processing of an Executable Program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreporting_process.htm)
[SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm)