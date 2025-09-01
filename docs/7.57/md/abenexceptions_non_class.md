---
title: "Non-Class-Based Exceptions"
description: |
  Non-class-based exceptions are the predecessors of class-based exceptions and should not be defined any more in new developments. -   Definition(#abenexceptions-non-class-1-------raising---@ITOC@@ABENEXCEPTIONS_NON_CLASS_2) -   Handling(#abenexceptions-non-class-3---programming-guideline---using
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_non_class.htm"
abapFile: "abenexceptions_non_class.htm"
keywords: ["select", "do", "if", "try", "method", "class", "types", "exception-handling", "abenexceptions", "non"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_exceptions.htm) →  [Exceptions Before Class-Based Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_pre_610.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Non-Class-Based Exceptions, ABENEXCEPTIONS_NON_CLASS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Non-Class-Based Exceptions

Non-class-based exceptions are the predecessors of class-based exceptions and should not be defined any more in new developments.

-   [Definition](#abenexceptions-non-class-1-------raising---@ITOC@@ABENEXCEPTIONS_NON_CLASS_2)
-   [Handling](#abenexceptions-non-class-3---programming-guideline---using-class-based-exceptions--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenclass-exception-guidl-htm--guideline----definition-----non-class-based-exceptions-can-be-defined-in-the--parameter-interfaces--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenparameter-interface-glosry-htm--glossary-entry---of-function-modules-and-methods--these-definitions-take-place-as-follows-------in-methods-of-local-classes--by-assigning-a-name-for-the-exception-after-the-addition--exceptions--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abapmethods-general-htm--of-the-statement------class-------https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abapclass-methods-htm--methods--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abapmethods-htm-------in-methods-of-global-classes--global-interfaces-or-function-modules--by-assigning-a-name-for-the-exception-in--class-builder--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenclass-builder-glosry-htm--glossary-entry---or--function-builder--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenfunction-builder-glosry-htm--glossary-entry----whereby-the-checkbox-for-exception-classes-is-not-selected---the-statement--raise-exception--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abapraise-exception-class-htm--or-the-addition--throw--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenconditional-expression-result-htm--in-a--conditional-expression--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenconditional-expressions-htm--cannot-be-used-to-raise-class-based-exceptions-in-a-method-or-a-function-module-in-whose-interface-non-class-based-exceptions-are-defined---hint--before-class-based-exceptions-were-introduced--all-exceptions-defined-in-the--parameter-interface--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenparameter-interface-glosry-htm--glossary-entry---of-methods-or-function-modules-were-non-class-based---raising-----non-class-based-exceptions-are-raised-by-the-following-statements--------raise--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abapraise-exception-htm-------message-----raising--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abapmessage-raising-htm---handling-----the-handling-of-non-class-based-exceptions-is-made-possible-by-the-addition-exceptions-in--method-calls--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenmethod-calls-htm--and--function-module-calls--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abapcall-function-htm--by-assigning-numeric-values-to-the-exceptions--which-are-used-to-fill-the-system-field-sy-subrc-when-the-exception-is-raised--the-actual-error-handling-takes-place-after-the-call--when-sy-subrc-is-evaluated---hints------the-exceptions-that-can-be-defined-in-the-interfaces-of-methods-and-function-modules-are-not-real-exceptions--since-they-do-not-change-the-control-flow--but-simply-end-the-processing-of-the--procedure--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenprocedure-glosry-htm--glossary-entry---prematurely-and-set-the-return-code-sy-subrc-instead-------rfc--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenrfc-glosry-htm--glossary-entry---currently-allows-only-classic-exception-handling--class-based-exception-handling-is-only-possible-in-a-different-release-track------a-predefined-exception--error--message--abapcall-function-parameter-htm--abap-addition-66@) can be used when calling function modules to handle [messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages.htm) of types E and A sent during the processing of the function module as non-class-based exceptions.

Continue
[RAISE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception.htm)
[MESSAGE, RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm)