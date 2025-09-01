# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP for RAP Business Objects / ABAP for Consuming RAP Business Objects / ABAP EML - Testing RAP Business Objects

Included pages: 2


### abenrpm_testing.htm

---
title: "ABAP EML - Testing RAP Business Objects"
description: |
  -   CREATE OBJECT FOR TESTING(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object_for_testing.htm) CREATE OBJECT, FOR TESTING(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object_for_testing.htm)
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_testing.htm"
abapFile: "abenrpm_testing.htm"
keywords: ["do", "if", "abenrpm", "testing"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - Testing RAP Business Objects, ABENRPM_TESTING, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - Testing RAP Business Objects

-   [CREATE OBJECT FOR TESTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object_for_testing.htm)

Continue
[CREATE OBJECT, FOR TESTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object_for_testing.htm)


### abapcreate_object_for_testing.htm

---
title: "CREATE OBJECT, FOR TESTING"
description: |
  Syntax CREATE OBJECT ... FOR TESTING. Effect RAP-specific variant of CREATE OBJECT(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object.htm). For unit tests(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_test_glosry.htm 'Glossary Entry') of an ABAP b
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object_for_testing.htm"
abapFile: "abapcreate_object_for_testing.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abapcreate", "object", "for", "testing"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Testing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_testing.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CREATE OBJECT, FOR TESTING, ABAPCREATE_OBJECT_FOR_TESTING, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CREATE OBJECT, FOR TESTING

Syntax

CREATE OBJECT ... FOR TESTING.

Effect

RAP-specific variant of [CREATE OBJECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object.htm).

For [unit tests](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_test_glosry.htm "Glossary Entry") of an [ABAP behavior implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_implement_glosry.htm "Glossary Entry"), an [object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_glosry.htm "Glossary Entry") of the corresponding [class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") must be created using a [reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_variable_glosry.htm "Glossary Entry") declared beforehand. The addition FOR TESTING enables the instantiation of [RAP handler classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class_glosry.htm "Glossary Entry").

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Test.

Executable Example

The [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_2 contains a test include. The variable class\_under\_test is defined in the private section of the class ltc\_managed as follows:

CLASS-DATA: class\_under\_test TYPE REF TO lhc\_demo\_managed\_root2,
...

The method class\_setup includes a CREATE OBJECT ... FOR TESTING. statement:

CREATE OBJECT class\_under\_test FOR TESTING.

Find more details on the unit test implementation, the methods used in this test include, and so on, via the link to the development guide for the ABAP RESTful Application Programming Model provided above.

The CCIMP include contains the validation validate\_field. This validation checks the value of a specific field. If the value is greater than specified in the validation implementation, a [RAP BO instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") cannot be saved. The test class contains a basic [unit test](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_test_glosry.htm "Glossary Entry") which includes the method validate\_field. The method is provided with mock data. In this case, the field value that is checked with the validation validate\_field is set that the saving of an instance does not fail.

To show the unit test result, execute the unit test.

Note: To show a failed unit test, you can set the value of data\_field4\_root provided in the validate\_field method implementation to a value greater than the specified threshold in the behavior pool or uncomment the definition and implementation of method validate\_field\_fails.
