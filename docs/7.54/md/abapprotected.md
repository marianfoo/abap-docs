  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) →  [CLASS - DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) → 

PROTECTED SECTION

[Quick Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

PROTECTED SECTION.

Effect

This statement can only be used in the [declaration part](javascript:call_link\('abapclass_definition.htm'\)) of a class. It defines the protected [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the class class.

All components of the class declared in the area behind the statement PROTECTED SECTION can be addressed directly only in the subclasses of the class and in the class itself (plus its [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry")), if allowed by the [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry"). In particular, protected methods in subclasses can be redefined.

Notes

-   The class is the smallest encapsulation unit in ABAP Objects. This is the reason why a method cannot only use the protected components of the own class but also all instances of the same class.
    
-   In subclasses, it is not possible to access the protected components of the superclasses using reference variables of the type of the superclass, because otherwise an attribute of an object of the dynamic type of the superclass or another subclass could be changed. In the last case, a warning is produced by the extended syntax check.
    
-   A subclass cannot access the protected components of a subclass of a different branch of the inheritance hierarchy even though they are inherited from a shared superclass.
    
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