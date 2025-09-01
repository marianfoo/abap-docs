  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass.htm) →  [CLASS - DEFINITION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_definition.htm) → 

PRIVATE SECTION

Syntax

PRIVATE SECTION.

Effect

This statement can only be used in the [declaration part](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_definition.htm) of a class. It defines the private [visibility section](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the class class. All components of the class defined in the area after the statement PRIVATE SECTION can only be addressed in the class itself, and in its [friends](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfriend_glosry.htm "Glossary Entry").

Notes

-   The class is the smallest encapsulation unit in ABAP Objects. This means that a method can use all private components of all instances of the same class, apart from the private components of its own class. An exception to this rule are subclasses that cannot access the private components of superclasses if they are not their [friends](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfriend_glosry.htm "Glossary Entry").
    
-   The declaration of attributes in the private section does not stop methods of the [references](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_glosry.htm "Glossary Entry") class from exposing these attributes in the form of [reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_variable_glosry.htm "Glossary Entry") or [field symbol](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield_symbol_glosry.htm "Glossary Entry"), which makes the attributes visible and modifiable outside the private section.
    
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