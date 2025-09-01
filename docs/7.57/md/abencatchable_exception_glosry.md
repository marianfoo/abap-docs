---
title: "catchable_exception_glosry"
description: |
  catchable_exception_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencatchable_exception_glosry.htm"
abapFile: "abencatchable_exception_glosry.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "abencatchable", "exception", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: catchable exception, ABENCATCHABLE_EXCEPTION_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

catchable exception

[Exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_glosry.htm "Glossary Entry") that can be handled in the program using the statements [TRY - CATCH - ENDTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry.htm) without causing a [runtime error](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenruntime_error_glosry.htm "Glossary Entry"). Catchable exceptions are based on [exception classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_class_glosry.htm "Glossary Entry") and are implemented by [exception objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_object_glosry.htm "Glossary Entry"). A catchable exception is raised either by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") or by the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception.htm) in a program, or by the addition [THROW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_glosry.htm "Glossary Entry"). Before the introduction of [class-based exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_based_exception_glosry.htm "Glossary Entry"), catchable exceptions could be self-defined only in the interfaces of [function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_module_glosry.htm "Glossary Entry") and [methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_glosry.htm "Glossary Entry") and raised using [RAISE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception.htm). Predefined catchable exceptions occurred as [catchable runtime errors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"), now they are obsolete.

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_exceptions.htm)