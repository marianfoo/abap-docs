---
title: "test_class_glosry"
description: |
  test_class_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_class_glosry.htm"
abapFile: "abentest_class_glosry.htm"
keywords: ["do", "if", "try", "method", "class", "abentest", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: test class, ABENTEST_CLASS_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

test class

A test class in a narrower sense is a special local or global [class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_glosry.htm "Glossary Entry") in which tests for [ABAP Unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_unit_glosry.htm "Glossary Entry") are implemented in the form of test methods. [Test methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_method_glosry.htm "Glossary Entry") can be implemented in a test class. A test class groups together related tests that use the same [fixture](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfixture_glosry.htm "Glossary Entry"). Test classes are defined using the [FOR TESTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_for_testing.htm) addition of the [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) statement. Test classes can only be used as part of [test runs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_run_glosry.htm "Glossary Entry") and, by default, are not generated in production systems. Test doubles and other auxiliary classes required for testing should also be defined with [FOR TESTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_for_testing.htm) but do not contain any test methods and are not test classes in a narrower sense.