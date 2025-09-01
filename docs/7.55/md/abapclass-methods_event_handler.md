  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethods.htm) →  [CLASS-METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-methods.htm) → 

CLASS-METHODS, FOR EVENT

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_default.htm)*\]*
   FOR EVENT evt OF *{*class*|*intf*}*
   *\[*IMPORTING p1 p2 ...*\[*sender*\]**\]*.

Effect

This statement declares the [static method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth as the [event handler](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_handler_glosry.htm "Glossary Entry") for the event evt of the class class or the interface intf. The syntax and meaning of the additions are identical to the declaration of [instance methods as event handlers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_event_handler.htm).

Static event handlers can be called by the event evt independently of an instance of the class.

Example

The class dialog\_box defines a static event handler close\_box for the event that is raised when the user wants to close a [Control Frameworks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontrol_framework_glosry.htm "Glossary Entry") (CFW) dialog box.

CLASS dialog\_box DEFINITION.
  PUBLIC SECTION.
    METHODS constructor.
    ...
  PRIVATE SECTION.
    CLASS-DATA open\_boxes TYPE i.
    CLASS-METHODS close\_box
      FOR EVENT close OF cl\_gui\_dialogbox\_container
      IMPORTING sender.
    ...
ENDCLASS.
CLASS dialog\_box IMPLEMENTATION.
  METHOD constructor.
    ... " create a dialogbox
    open\_boxes = open\_boxes + 1.
  ENDMETHOD.
  METHOD close\_box
    ... " close the dialogbox referred by sender
    open\_boxes = open\_boxes - 1.
  ENDMETHOD.
ENDCLASS.