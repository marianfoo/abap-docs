---
title: "runtime_error_glosry"
description: |
  runtime_error_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenruntime_error_glosry.htm"
abapFile: "abenruntime_error_glosry.htm"
keywords: ["do", "if", "try", "catch", "data", "abenruntime", "error", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: runtime error, ABENRUNTIME_ERROR_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

runtime error

Caused by uncatchable exceptions when a program is executed, or it can be forced by the language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_shortdump.htm), [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_result.htm), or [ASSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassert.htm) or by [exit messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_message_glosry.htm "Glossary Entry"). Every runtime error terminates the program, which in turn raises a [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") and is documented by default in a [short dump](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshort_dump_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennoncat_exceptions.htm)