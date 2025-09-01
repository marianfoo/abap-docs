---
title: "test_class_glosry"
description: |
  test_class_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_class_glosry.htm"
abapFile: "abentest_class_glosry.htm"
keywords: ["do", "try", "method", "class", "abentest", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

test class

Special local or global [class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_glosry.htm "Glossary Entry") in which tests for [ABAP Unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_unit_glosry.htm "Glossary Entry") are implemented in the form of test methods. [Test methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_method_glosry.htm "Glossary Entry") can be implemented in a test class. A test class groups together related tests that use the same [fixture](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixture_glosry.htm "Glossary Entry"). Furthermore, test dummies and other auxiliary classes required for testing should also be defined as test classes. These objects do not contain any test methods. Test classes are defined using the [FOR TESTING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_for_testing.htm) addition of the [CLASS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_definition.htm) statement. Test classes can only be used as part of [test runs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_run_glosry.htm "Glossary Entry") and, by default, are not generated in production systems.