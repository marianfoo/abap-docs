  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) →  [CLASS, DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) → 

PROTECTED SECTION

[Short Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

PROTECTED SECTION.

Effect

This statement can only be used in the [declaration part](javascript:call_link\('abapclass_definition.htm'\)) of a class and defines the protected [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the class class.

All components of the class that are declared in the area behind the statement PROTECTED SECTION can be addressed directly only in the subclasses of the class and in the class itself, as well as its [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry"), if allowed by the [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry"). In particular, protected methods in subclasses can be redefined.

Hints

-   The class is the smallest encapsulation unit in ABAP Objects. Therefore, a method cannot use the protected components of its own class, but all protected components of all instances of the same class.
    

-   In subclasses, it is not possible to access the protected components of superclasses using reference variables of the type of the superclass, because otherwise an attribute of an object of the dynamic type of the superclass or another subclass could be changed. However, the latter only produces a warning from the extended syntax check.
    

-   A subclass cannot access the protected components of a subclass of a different branch of the inheritance hierarchy inherited from a shared superclass.
    

-   The declaration of attributes in the protected section does not prevent methods in subclasses or in the class itself from passing [references](javascript:call_link\('abenreference_glosry.htm'\) "Glossary Entry") to these attributes in the form of [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") or [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry"), so that the attributes become visible and modifiable outside the protected section.

Example

Declaration of a protected constant const in a superclass cls1 and its use as a start value of a public attribute of a subclass cls2.

CLASS cls1 DEFINITION.
  PROTECTED SECTION.
    CONSTANTS const TYPE string VALUE \`I'm protected\`.
ENDCLASS.
CLASS cls2 DEFINITION INHERITING FROM cls1.
  PUBLIC SECTION.
    CLASS-DATA attr TYPE string VALUE cls1=>const.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display( cls2=>attr ).