  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) →  [CLASS - DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) → 

PRIVATE SECTION

Syntax

PRIVATE SECTION.

Effect

This statement can only be used in the [declaration part](javascript:call_link\('abapclass_definition.htm'\)) of a class. It defines the private [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the class class. All components of the class defined in the area after the statement PRIVATE SECTION can only be addressed in the class itself, and in its [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry").

Notes

-   The class is the smallest encapsulation unit in ABAP Objects. This means that a method can use all private components of all instances of the same class, apart from the private components of its own class. An exception to this rule are subclasses that cannot access the private components of superclasses if they are not their [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry").
    
-   The declaration of attributes in the private section does not stop methods of the [references](javascript:call_link\('abenreference_glosry.htm'\) "Glossary Entry") class from exposing these attributes in the form of [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") or [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry"), which makes the attributes visible and modifiable outside the private section.
    
-   Private components declared in a class but not used statically there produce a warning in the extended program check.
    

Example

Declares a private constant const in a class cls1 and uses it as a start value of a public attribute of a friend cls2.

CLASS cls2 DEFINITION DEFERRED.
CLASS cls1 DEFINITION FRIENDS cls2.
  PRIVATE SECTION.
    CONSTANTS const TYPE string VALUE \`I'm private\`.
ENDCLASS.
CLASS cls2 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA attr TYPE string VALUE cls1=>const.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display( cls2=>attr ).