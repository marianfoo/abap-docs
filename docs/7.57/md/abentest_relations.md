  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Test Relations, ABENTEST_RELATIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

Test Relations

Syntax

"! @testing *\[*kind:*\]*name

This special [ABAP Doc comment](javascript:call_link\('abenabap_doc_comment_glosry.htm'\) "Glossary Entry") can be used in front of the declaration of a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") or a [test method](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") to define a [test relation](javascript:call_link\('abentest_relation_glosry.htm'\) "Glossary Entry") that links the test class or test method with the repository object specified after @testing.

-   name is used to specify the name of a repository object, which is not case-sensitive.
-   kind is used to specify the type of the repository object. The following repository objects are possible and kind must be specified as shown:
    
    -   FUNC for [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") in function pools
    -   FUGR for [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry")
    -   XSLT for [XSLT programs](javascript:call_link\('abenxslt_program_glosry.htm'\) "Glossary Entry") and [Simple Transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry")
    
    kind cannot and must not be specified for global classes and [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). They are addressed by their names alone.
    

Defining a test relation between a test class or test method and a repository object has the effect that the test can be displayed and executed for this object in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Hints

-   Test relations are used to link repository objects with external [unit tests](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry"). This is especially useful for repository objects that do not support test classes themselves.
-   The current program of the test class or test method cannot be specified.
-   Multiple test relations can be specified for a single test class or test method.
-   For more information, see Writing ABAP Unit with Test Relations.

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