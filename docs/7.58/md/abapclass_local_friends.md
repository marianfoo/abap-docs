  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS%2C%20LOCAL%20FRIENDS%2C%20ABAPCLASS_LOCAL_FRIENDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS, LOCAL FRIENDS

Syntax

CLASS class DEFINITION
            LOCAL FRIENDS class1 class2 ...
                          intf1  intf2  ...

Effect

This statement makes the local classes and interfaces class1 class2 ... and intf1 intf2 ... of a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") of its global class class. At least one class or one interface must be specified.

This statement does not introduce a declaration part and must not be closed using the ENDCLASS statement.

Hints

-   The declaration of local classes of a class pool as friends of the global class is particularly necessary for local [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") that test the private components of the global class.
-   This variant of the statement CLASS can also only be listed in the context described under [CLASS](javascript:call_link\('abapclass.htm'\)).
-   If the local classes and interfaces class1 class2 ... and intf1 intf2 ... are to have access to all components of the global class class in their declaration part, the statement must first be specified in the class pool, for which the local classes and interfaces must first be registered using [CLASS -](javascript:call_link\('abapclass_deferred.htm'\)) or [INTERFACE - DEFERRED](javascript:call_link\('abapinterface_deferred.htm'\)).

Example

In the CL\_DEMO\_AMDP\_MESH class, the cl\_test\_selects class from the [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") is declared in the [CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry") as a local friend of the global class, so that its private methods can be tested.

CLASS cl\_test\_selects DEFINITION DEFERRED.
CLASS cl\_demo\_amdp\_mesh DEFINITION LOCAL FRIENDS cl\_test\_selects.