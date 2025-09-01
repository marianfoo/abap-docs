---
title: "Calling Executable Programs"
description: |
  Executable programs(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm 'Glossary Entry') are only directly executable from the perspective of the end user. Whenever an executable program is started using System → Services → Reporting or a report transacti
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_submit_report.htm"
abapFile: "abenabap_submit_report.htm"
keywords: ["do", "if", "try", "abenabap", "submit", "report"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_call.htm) → 

Calling Executable Programs

[Executable programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry") are only directly executable from the perspective of the end user. Whenever an executable program is started using System → Services → Reporting or a [report transaction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreport_transaction_glosry.htm "Glossary Entry"), the statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm) is executed internally. Executable programs are the only programs that can be called using SUBMIT.

-   [Flow of an Executable Program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_process.htm)

-   The statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm)

Note

When the statement SUBMIT is executed, it is followed by an authorization check (using the [authorization object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_PROGRAM) for the [authorization group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_group_glosry.htm "Glossary Entry") specified in the [program attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_attribute_glosry.htm "Glossary Entry").

Continue
[Flow of an Executable Program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_process.htm)
[SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm)