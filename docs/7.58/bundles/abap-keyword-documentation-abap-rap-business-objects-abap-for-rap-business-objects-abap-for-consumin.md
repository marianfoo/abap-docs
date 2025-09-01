# ABAP - Keyword Documentation / ABAP - RAP Business Objects / ABAP for RAP Business Objects / ABAP for Consuming RAP Business Objects / ABAP EML - Testing RAP Business Objects

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenrpm_testing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_testing.htm)
- [abapcreate_object_for_testing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_for_testing.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:29.011Z

---

### abenrpm_testing.htm

> **📖 Official SAP Documentation**: [abenrpm_testing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_testing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenrpm_testing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_testing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20Testing%20RAP%20Business%20Objects%2C%20ABENRPM_TESTING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - Testing RAP Business Objects

The following topics are covered in this section:

-   [CREATE OBJECT, FOR TESTING](javascript:call_link\('abapcreate_object_for_testing.htm'\))

Continue
[CREATE OBJECT, FOR TESTING](javascript:call_link\('abapcreate_object_for_testing.htm'\))



**📖 Source**: [abenrpm_testing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_testing.htm)

### abapcreate_object_for_testing.htm

> **📖 Official SAP Documentation**: [abapcreate_object_for_testing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_for_testing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapcreate_object_for_testing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_for_testing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapcreate_object_for_testing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_for_testing.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Testing RAP Business Objects](javascript:call_link\('abenrpm_testing.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CREATE%20OBJECT%2C%20FOR%20TESTING%2C%20ABAPCREATE_OBJECT_FOR_TESTING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CREATE OBJECT, FOR TESTING

Syntax

CREATE OBJECT ... FOR TESTING.

Effect

RAP-specific variant of [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)).

For [unit tests](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry") of an [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"), an [object](javascript:call_link\('abenobject_glosry.htm'\) "Glossary Entry") of the corresponding [class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") must be created using a [reference variable](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") declared beforehand. The addition FOR TESTING enables the instantiation of [RAP handler classes](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry").

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Test](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1fa88de357464d98a08165cb5830c0ad?version=sap_cross_product_abap).

Executable Example

The [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_2 contains a test include. The variable class\_under\_test is defined in the private section of the class ltc\_managed as follows:

CLASS-DATA: class\_under\_test TYPE REF TO lhc\_demo\_managed\_root2,
...

The method class\_setup includes a CREATE OBJECT ... FOR TESTING. statement:

CREATE OBJECT class\_under\_test FOR TESTING.

Find more details on the unit test implementation, the methods used in this test include, and so on, via the link to the development guide for the ABAP RESTful Application Programming Model provided above.

The CCIMP include contains the validation validate\_field. This validation checks the value of a specific field. If the value is greater than specified in the validation implementation, a [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") cannot be saved. The test class contains a basic [unit test](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry") which includes the method validate\_field. The method is provided with mock data. In this case, the field value that is checked with the validation validate\_field is set that the saving of an instance does not fail.

To show the unit test result, execute the unit test.

Note: To show a failed unit test, you can set the value of data\_field4\_root provided in the validate\_field method implementation to a value greater than the specified threshold in the behavior pool or uncomment the definition and implementation of method validate\_field\_fails.
