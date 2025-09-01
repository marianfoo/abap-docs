---
title: "Error Handling"
description: |
  Error situations are always a possibility when a program is being executed. These can be caused by: -   internal errors produced by faulty implementations or incorrect use of services -   external errors produced by incorrect user input or unexpected resource bottlenecks ABAP offers various method f
version: "7.52"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenerror_handling_guidl.htm"
abapFile: "abenerror_handling_guidl.htm"
keywords: ["do", "method", "class", "abenerror", "handling", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) → 

Error Handling

Error situations are always a possibility when a program is being executed. These can be caused by:

-   internal errors produced by faulty implementations or incorrect use of services

-   external errors produced by incorrect user input or unexpected resource bottlenecks

ABAP offers various method for responding to error situations like these.

-   [Reaction to Error Situations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreaction_error_guidl.htm "Guideline")

-   [Classical and Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_exception_guidl.htm "Guideline")

-   [Exception Categories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_category_guidl.htm "Guideline")

-   [Exception Texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts_guidl.htm "Guideline")

-   [Using Exception Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_exception_class_guidl.htm "Guideline")

-   [Handling and Propagating Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhandl_prop_except_guidl.htm "Guideline")

-   [Cleanups After Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencleanup_guidl.htm "Guideline")

-   [Assertions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassertions_guidl.htm "Guideline")

-   [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessages_guidl.htm "Guideline")

Continue
[Reaction to Error Situations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreaction_error_guidl.htm)
[Classic and Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_exception_guidl.htm)
[Exception Categories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_category_guidl.htm)
[Exception Texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts_guidl.htm)
[Using Exception Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_exception_class_guidl.htm)
[Handling and Propagating Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhandl_prop_except_guidl.htm)
[Cleanups After Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencleanup_guidl.htm)
[Assertions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassertions_guidl.htm)
[Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessages_guidl.htm)