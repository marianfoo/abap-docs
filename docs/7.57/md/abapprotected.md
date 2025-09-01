  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass.htm) →  [CLASS, DEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PROTECTED SECTION, ABAPPROTECTED, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

PROTECTED SECTION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_shortref.htm)

Syntax

PROTECTED SECTION.

Effect

This statement can only be used in the [declaration part](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) of a class and defines the protected [visibility section](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the class class.

All components of the class that are declared in the area behind the statement PROTECTED SECTION can be addressed directly only in the subclasses of the class and in the class itself, as well as its [friends](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfriend_glosry.htm "Glossary Entry"), if allowed by the [package concept](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpackage_concept_glosry.htm "Glossary Entry"). In particular, protected methods in subclasses can be redefined.

Hints

-   The class is the smallest encapsulation unit in ABAP Objects. Therefore a method can use all protected components of all instances of its class besides the protected components of its own class.
-   In subclasses, it is not possible to access the protected components of superclasses using reference variables of the type of the superclass, because otherwise an attribute of an object of the dynamic type of the superclass or another subclass could be changed. However, the latter only produces a warning from the extended syntax check.
-   A subclass cannot access the protected components of a subclass of a different branch of the inheritance hierarchy inherited from a shared superclass.
-   The declaration of attributes in the protected section does not prevent methods in subclasses or in the class itself from passing [references](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_glosry.htm "Glossary Entry") to these attributes in the form of [reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_variable_glosry.htm "Glossary Entry") or [field symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield_symbol_glosry.htm "Glossary Entry"), so that the attributes become visible and modifiable outside the protected section.

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