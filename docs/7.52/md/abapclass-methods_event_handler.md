  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Methods](javascript:call_link\('abenmethods.htm'\)) →  [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) → 

CLASS-METHODS - FOR EVENT

[Quick Reference](javascript:call_link\('abapclass-methods_shortref.htm'\))

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
   FOR EVENT evt OF *{*class*|*intf*}*
   *\[*IMPORTING p1 p2 ...*\[*sender*\]**\]*.

Effect

This statement declares the [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") meth as the [event handler](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") for the event evt of the class class or the interface intf. The syntax and meaning of the additions are identical to the declaration of [instance methods as event handlers](javascript:call_link\('abapmethods_event_handler.htm'\)).

Static event handlers can be called by the event evt independently of an instance of the class.

Example

The class dialog\_box defines a static event handler close\_box for the event raised when the user chooses to close a [Control Framework](javascript:call_link\('abencontrol_framework_glosry.htm'\) "Glossary Entry") (CFW) dialog box.

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