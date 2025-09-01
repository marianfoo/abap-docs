---
title: "Return Code"
description: |
  Background The most prominent system field is probably the return code(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreturn_code_glosry.htm 'Glossary Entry') sy-subrc, which signals the successful execution of an ABAP statement or, if you are using classic exceptions(https://hel
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreturn_value_guidl.htm"
abapFile: "abenreturn_value_guidl.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenreturn", "value", "guidl"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_fields_guidl.htm) → 

Return Code

Background

The most prominent system field is probably the [return code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreturn_code_glosry.htm "Glossary Entry") sy-subrc, which signals the successful execution of an ABAP statement or, if you are [using classic exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_exception_class_guidl.htm "Guideline"), of a procedure. A return code of 0 generally indicates successful execution.

Rule

Evaluate the return code sy-subrc

Evaluate the return code sy-subrc after every ABAP statement that sets the value according to the documentation. However, sy-subrc should never be set after statements are executed for which the setting of a return code is not documented.

Details

The system field sy-subrc indicates whether a statement was successfully executed. If the execution was not successful, the program should usually react accordingly. If this does not happen, the program's response will probably be unexpected.

This rule is a specialization of the more general rule [evaluate system fields in the correct place](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevaluation_guidl.htm "Guideline"). It is specified here again separately due to the prominent role of the return code sy-subrc. The system field sy-subrc must always be evaluated immediately and, if necessary, assigned to a help variable. An evaluation cannot occur after statements that set sy-subrc not defined, because otherwise wrong conclusions could easily be drawn.

Hint

Special care must be taken in [functional method calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_functional.htm). If executed successfully, each method call sets the return code sy-subrc to 0, which means that functional method calls overwrite the return code when used in statements where the setting of the return code is not documented. The same applies to the instance operator [NEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_new.htm) when instances of classes are created.

Exception

If a handling action seems unnecessary because, in the developer's opinion, the statement is always executed successfully, the assumption should at least be saved and documented using an [assertion](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassertions_guidl.htm "Guideline").

Bad Example

The following source code shows how further processing of data is performed using the work area of a SELECT statement, without a request from sy-subrc. However, the content of wa is usually undefined here, if a request from sy-subrc does not guarantee that database access will be successful.

SELECT ...
       INTO wa
       ...
... "work with wa

Good Example

The following source code corrects the above example. This means the successful execution of the SELECT statement is checked.

SELECT ...
       INTO wa
       ...
IF sy-subrc <> 0.
  ...
ENDIF
... "work with wa