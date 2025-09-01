---
title: "Calling Executable Programs"
description: |
  Executable programs(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm 'Glossary Entry') can only be executed directly from the perspective of the end user. Whenever an executable program is started using System → Services → Reporting or a report tra
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_submit_report.htm"
abapFile: "abenabap_submit_report.htm"
keywords: ["do", "if", "try", "abenabap", "submit", "report"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Calling%20Executable%20Programs%2C%20ABENABAP_SUBMIT_REPORT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Calling Executable Programs

[Executable programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry") can only be executed directly from the perspective of the end user. Whenever an executable program is started using System → Services → Reporting or a [report transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreport_transaction_glosry.htm "Glossary Entry"), the statement [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm) is executed internally. Executable programs are the only programs that can be called using SUBMIT.

-   [Flow of an Executable Program After SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreporting_process.htm)
-   [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm)

Hint

When the statement SUBMIT is executed, an authorization check is performed using the [authorization object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_PROGRAM for the [authorization group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_group_glosry.htm "Glossary Entry") specified in the [program properties](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_property_glosry.htm "Glossary Entry").

Continue
[Flow of an Executable Program After SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreporting_process.htm)
[SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm)