---
title: "external_procedure_call_glosry"
description: |
  external_procedure_call_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexternal_procedure_call_glosry.htm"
abapFile: "abenexternal_procedure_call_glosry.htm"
keywords: ["do", "if", "try", "class", "abenexternal", "procedure", "call", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: external procedure call, ABENEXTERNAL_PROCEDURE_CALL_GLOSRY, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

external procedure call

[Procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry") call from a different ABAP program of the same [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"). The first time one of its procedures is called, the required program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the calling program, if not already there, and, apart from [class pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_pool_glosry.htm "Glossary Entry"), the [event](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_glosry.htm "Glossary Entry") [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm) is raised. See also [program group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_group_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_procedures_extern.htm)