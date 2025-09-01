  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethods.htm) →  [CLASS-METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLASS-METHODS, FOR EVENT, ABAPCLASS-METHODS_EVENT_HANDLER, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CLASS-METHODS, FOR EVENT

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_default.htm)*\]*
   FOR EVENT evt OF *{*class*|*intf*}*
   *\[*IMPORTING p1 p2 ...*\[*sender*\]**\]*.

Effect

This statement declares the [static method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth as the [event handler](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_handler_glosry.htm "Glossary Entry") for the event evt of the class class or the interface intf. The syntax and meaning of the additions are identical to the declaration of [instance methods as event handlers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_event_handler.htm).

Static event handlers can be called by the event evt independently of an instance of the class.

Example

The class dialog\_box defines a static event handler close\_box for the event that is raised when the user wants to close a [Control Frameworks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontrol_framework_glosry.htm "Glossary Entry") (CFW) dialog box.

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