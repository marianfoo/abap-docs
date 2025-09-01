  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [ABAP Objects - Methods](javascript:call_link\('abenmethods.htm'\)) →  [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS-METHODS%2C%20FOR%20EVENT%2C%20ABAPCLASS-METHODS_EVENT_HANDLER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS-METHODS, FOR EVENT

[Short Reference](javascript:call_link\('abapclass-methods_shortref.htm'\))

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
   FOR EVENT evt OF *{*class*|*intf*}*
   *\[*IMPORTING p1 p2 ...*\[*sender*\]**\]*.

Effect

This statement declares the [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") meth as the [event handler](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") for the event evt of the class class or the interface intf. The syntax and meaning of the additions are identical to the declaration of [instance methods as event handlers](javascript:call_link\('abapmethods_event_handler.htm'\)).

Static event handlers can be called by the event evt independently of an instance of the class.

Example

The class dialog\_box defines a static event handler close\_box for the event that is raised when the user wants to close a [Control Frameworks](javascript:call_link\('abencontrol_framework_glosry.htm'\) "Glossary Entry") (CFW) dialog box.

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