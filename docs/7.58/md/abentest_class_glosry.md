  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20test%20class%2C%20ABENTEST_CLASS_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

test class

A test class in a narrower sense is a special local or global [class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_glosry.htm "Glossary Entry") in which tests for [ABAP Unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_unit_glosry.htm "Glossary Entry") are implemented in the form of test methods. [Test methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_method_glosry.htm "Glossary Entry") can be implemented in a test class. A test class groups together related tests that use the same [fixture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixture_glosry.htm "Glossary Entry"). Test classes are defined using the [FOR TESTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_for_testing.htm) addition of the [CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) statement. Test classes can only be used as part of [test runs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_run_glosry.htm "Glossary Entry") and, by default, are not generated in production systems. Test doubles and other auxiliary classes required for testing should also be defined with [FOR TESTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_for_testing.htm) but do not contain any test methods and are not test classes in a narrower sense.