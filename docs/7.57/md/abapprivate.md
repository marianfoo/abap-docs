---
title: "PRIVATE SECTION"
description: |
  Syntax PRIVATE SECTION. Effect This statement can only be used in the declaration part(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) of a class and defines the private visibility section(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvisibil
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprivate.htm"
abapFile: "abapprivate.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "field-symbol", "abapprivate"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass.htm) →  [CLASS, DEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PRIVATE SECTION, ABAPPRIVATE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

PRIVATE SECTION

Syntax

PRIVATE SECTION.

Effect

This statement can only be used in the [declaration part](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) of a class and defines the private [visibility section](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the class class. All components of the class that are declared in the area after the statement PRIVATE SECTION can only be addressed in the class itself and in its [friends](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfriend_glosry.htm "Glossary Entry").

Hints

-   The class is the smallest encapsulation unit in ABAP Objects. Therefore, a method can use all private components of all instances of the same class, apart from the private components of its own class. An exception to this rule are subclasses that cannot access the private components of superclasses if they are not their [friends](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfriend_glosry.htm "Glossary Entry").
-   The declaration of attributes in the private section does not prevent methods of the class from passing [references](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_glosry.htm "Glossary Entry") to these attributes to the outside in the form of [reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_variable_glosry.htm "Glossary Entry") or [field symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield_symbol_glosry.htm "Glossary Entry"), which makes the attributes visible and modifiable outside the private section.
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
START-OF-SELECTION.
  cl\_demo\_output=>display( cls2=>attr ).