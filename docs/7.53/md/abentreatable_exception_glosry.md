---
title: "Handleable Exception"
description: |
  Exception(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexception_glosry.htm 'Glossary Entry') that can be handled in the program using the statements TRY - CATCH - ENDTRY(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptry.htm) without causing a runtime error(h
version: "7.53"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentreatable_exception_glosry.htm"
abapFile: "abentreatable_exception_glosry.htm"
keywords: ["do", "try", "catch", "method", "class", "abentreatable", "exception", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

Handleable Exception

[Exception](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexception_glosry.htm "Glossary Entry") that can be handled in the program using the statements [TRY - CATCH - ENDTRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptry.htm) without causing a [runtime error](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenruntime_error_glosry.htm "Glossary Entry"). Handleable exceptions are based on [exception classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexception_class_glosry.htm "Glossary Entry") and are realized by [exception objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexception_object_glosry.htm "Glossary Entry"). A handleable exception is raised either by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") or by the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception.htm) in a program, or by the addition [THROW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_glosry.htm "Glossary Entry"). Before the introduction of [class-based exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_based_exception_glosry.htm "Glossary Entry"), handleable exceptions could be defined only in the interfaces of [function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_module_glosry.htm "Glossary Entry") and [methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_glosry.htm "Glossary Entry") themselves and raised using [RAISE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception.htm). Predefined handleable exceptions were raised as [catchable runtime errors](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") (now obsolete).

[→ More](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_exceptions.htm)