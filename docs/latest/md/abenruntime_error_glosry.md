---
title: "runtime_error_glosry"
description: |
  runtime_error_glosry - ABAP latest language reference documentation
version: "latest"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm"
abapFile: "abenruntime_error_glosry.htm"
keywords: ["do", "if", "try", "catch", "data", "abenruntime", "error", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20runtime%20error%2C%20ABENRUNTIME_ERROR_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

runtime error

Caused by uncatchable exceptions when a program is executed, or it can be forced by the language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm), [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm), or [ASSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassert.htm) or by [exit messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexit_message_glosry.htm "Glossary Entry"). Every runtime error terminates the program, which in turn raises a [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") and is documented by default in a [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennoncat_exceptions.htm)