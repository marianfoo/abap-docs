---
title: "catchable_exception_glosry"
description: |
  catchable_exception_glosry - ABAP latest language reference documentation
version: "latest"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatchable_exception_glosry.htm"
abapFile: "abencatchable_exception_glosry.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "abencatchable", "exception", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20catchable%20exception%2C%20ABENCATCHABLE_EXCEPTION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

catchable exception

[Exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_glosry.htm "Glossary Entry") that can be handled in the program using the statements [TRY - CATCH - ENDTRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptry.htm) without causing a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry"). Catchable exceptions are based on [exception classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_class_glosry.htm "Glossary Entry") and are implemented by [exception objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_object_glosry.htm "Glossary Entry"). A catchable exception is raised either by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") or by the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception.htm) in a program, or by the addition [THROW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_glosry.htm "Glossary Entry"). Before the introduction of [class-based exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_based_exception_glosry.htm "Glossary Entry"), catchable exceptions could be user-defined only in the interfaces of [function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_glosry.htm "Glossary Entry") and [methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_glosry.htm "Glossary Entry") and raised using [RAISE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception.htm). Predefined catchable exceptions occurred as [catchable runtime errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"), now they are obsolete.

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_exceptions.htm)