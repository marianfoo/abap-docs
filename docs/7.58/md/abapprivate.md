  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) →  [CLASS, DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PRIVATE%20SECTION%2C%20ABAPPRIVATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PRIVATE SECTION

Syntax

PRIVATE SECTION.

Effect

This statement can only be used in the [declaration part](javascript:call_link\('abapclass_definition.htm'\)) of a class and defines the private [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the class class. All components of the class that are declared in the area after the statement PRIVATE SECTION can only be addressed in the class itself and in its [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry").

Hints

-   The class is the smallest encapsulation unit in ABAP Objects. Therefore, a method can use all private components of all instances of the same class, apart from the private components of its own class. An exception to this rule are subclasses that cannot access the private components of superclasses if they are not their [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry").
-   The declaration of attributes in the private section does not prevent methods of the class from passing [references](javascript:call_link\('abenreference_glosry.htm'\) "Glossary Entry") to these attributes to the outside in the form of [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") or [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry"), which makes the attributes visible and modifiable outside the private section.
-   Private components declared in a class but not used statically there produce a warning in the extended program check.

Example

Declaration of a private constant const in a class cls1 and uses it as a start value of a public attribute of a friend cls2.

CLASS cls2 DEFINITION DEFERRED.
CLASS cls1 DEFINITION FRIENDS cls2.
  PRIVATE SECTION.
    CONSTANTS const TYPE string VALUE \`I'm private\`.
ENDCLASS.
CLASS cls2 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA attr TYPE string VALUE cls1=>const.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>display( cls2=>attr ).
  ENDMETHOD.
ENDCLASS.