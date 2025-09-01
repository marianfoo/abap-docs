  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_unit.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Test%20Relations%2C%20ABENTEST_RELATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Test Relations

Syntax

"! @testing *\[*kind:*\]*name

This special [ABAP Doc comment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry") can be used in front of the declaration of a [test class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_class_glosry.htm "Glossary Entry") or a [test method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_method_glosry.htm "Glossary Entry") to define a [test relation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_relation_glosry.htm "Glossary Entry") that links the test class or test method with the repository object specified after @testing.

-   name is used to specify the name of a repository object and is not case-sensitive.
-   kind must be used to specify the type of some repository objects and must be omitted for others. The following can be used for kind:
    
    -   FUNC for [function modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_module_glosry.htm "Glossary Entry") in function pools
    -   FUGR for [function pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_pool_glosry.htm "Glossary Entry")
    -   XSLT for [XSLT programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxslt_program_glosry.htm "Glossary Entry") and [Simple Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensimple_transformation_glosry.htm "Glossary Entry")
    
    kind cannot and must not be specified for other repository objects such as global classes and [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry"). They are addressed by their names alone.
    

Defining a test relation between a test class or test method and a repository object has the effect that the test can be displayed and executed for this object in [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry").

Hints

-   Test relations are to be understood more as an annotation in an ABAP program than as ABAP Doc comment.
-   Test relations are used to link repository objects with external [unit tests](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunit_test_glosry.htm "Glossary Entry"). This is especially useful for repository objects that do not support test classes themselves.
-   The current program of the test class or test method cannot be specified.
-   Multiple test relations can be specified for a single test class or test method.
-   For more information, see [Writing ABAP Unit with Test Relations](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/12104d8c73224af78f5a04885809b30e).
-   Test relations are not considered, when starting the Unit tests of an ABAP program directly from the [repository browser](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_browser_glosry.htm "Glossary Entry") or an editor of the [ABAP Workbench](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_workbench_glosry.htm "Glossary Entry") in SAP GUI.

Example

Defining test relations between a test class and its test methods and various repository objects.

"! @testing cl\_demo1
"! @testing cl\_demo2
CLASS test\_demo\_cds\_association DEFINITION FOR TESTING.
  PRIVATE SECTION.
    METHODS:
      test\_class1 FOR TESTING,
      test\_class2 FOR TESTING,
      "! @testing demo\_cds\_view
      test\_cds\_view FOR TESTING,
      "! @testing XSLT:demo\_trafo
      test\_transformation FOR TESTING.
ENDCLASS.
CLASS test\_demo\_cds\_association IMPLEMENTATION.
  METHOD test\_cds\_view.
    ...
  ENDMETHOD.
  METHOD test\_class1.
    ...
  ENDMETHOD.
  METHOD test\_class2.
    ...
  ENDMETHOD.
  METHOD test\_transformation.
    ...
  ENDMETHOD.
ENDCLASS.