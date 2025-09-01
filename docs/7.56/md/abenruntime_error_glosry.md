---
title: "runtime_error_glosry"
description: |
  runtime_error_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_glosry.htm"
abapFile: "abenruntime_error_glosry.htm"
keywords: ["do", "try", "catch", "data", "abenruntime", "error", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

runtime error

Caused by uncatchable exceptions when a program is executed, or it can be forced by the language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_shortdump.htm), [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm), or [ASSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassert.htm) or by [exit messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexit_message_glosry.htm "Glossary Entry"). Every runtime error terminates the program, which in turn raises a [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") and is documented by default in a [short dump](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshort_dump_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennoncat_exceptions.htm)