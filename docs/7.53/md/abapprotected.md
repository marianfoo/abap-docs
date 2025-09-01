---
title: "PROTECTED SECTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_shortref.htm) Syntax PROTECTED SECTION. Effect This statement can only be used in the declaration part(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_definition.htm) of a class. It defines
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapprotected.htm"
abapFile: "abapprotected.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "field-symbol", "abapprotected"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass.htm) →  [CLASS - DEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_definition.htm) → 

PROTECTED SECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_shortref.htm)

Syntax

PROTECTED SECTION.

Effect

This statement can only be used in the [declaration part](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_definition.htm) of a class. It defines the protected [visibility section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the class class.

All components of the class declared in the area behind the statement PROTECTED SECTION can be addressed directly only in the subclasses of the class and in the class itself (plus its [friends](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfriend_glosry.htm "Glossary Entry")), if allowed by the [package concept](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpackage_concept_glosry.htm "Glossary Entry"). In particular, protected methods in subclasses can be redefined.

Notes

-   The class is the smallest encapsulation unit in ABAP Objects. This is the reason why a method cannot only use the protected components of the own class but also all instances of the same class.
    
-   In subclasses, it is not possible to access the protected components of the superclasses using reference variables of the type of the superclass, because otherwise an attribute of an object of the dynamic type of the superclass or another subclass could be changed. In the last case, a warning is produced by the extended syntax check.
    
-   A subclass cannot access the protected components of a subclass of a different branch of the inheritance hierarchy even though they are inherited from a shared superclass.
    
-   The declaration of attributes in the protected section does not prevent methods in subclasses or in the class itself from passing [references](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_glosry.htm "Glossary Entry") to these attributes in the form of [reference variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_variable_glosry.htm "Glossary Entry") or [field symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_symbol_glosry.htm "Glossary Entry"), so that the attributes become visible and modifiable outside the protected section.
    

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