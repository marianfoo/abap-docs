---
title: "resumable_exception_glosry"
description: |
  resumable_exception_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenresumable_exception_glosry.htm"
abapFile: "abenresumable_exception_glosry.htm"
keywords: ["do", "if", "try", "catch", "class", "abenresumable", "exception", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

resumable exception

[Class-based exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that is raised by the addition RESUMABLE of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) or by the addition [THROW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expressions.htm). When a resumable exception is handled in a [CATCH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcatch_try.htm) block, processing can be resumed using the statement [RESUME](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapresume.htm) directly after the raising statement if the context of the exception still exists. The property of resumability of an exception can be lost when the exception is propagated from [procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocedure_glosry.htm "Glossary Entry") if it is not marked as resumable in all relevant [parameter interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparameter_interface_glosry.htm "Glossary Entry") by the addition RESUMABLE in the RAISING declaration of the procedures.