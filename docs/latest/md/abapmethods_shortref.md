  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  M

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20ABAPMETHODS_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm)

Syntax

METHODS meth *\[*ABSTRACT*|*FINAL*\]*
            *|**\[*DEFAULT IGNORE*|*FAIL*\]*
             *\[*FOR EVENT evt OF *{*class*|*intf*}**\]*
  *\[* IMPORTING *{**{*VALUE(p1)*|*REFERENCE(p1)*|*p1*}* [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_shortref.htm) *\[*OPTIONAL*|*DEFAULT def1*\]*
               *{*VALUE(p2)*|*REFERENCE(p2)*|*p2*}* [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_shortref.htm) *\[*OPTIONAL*|*DEFAULT def2*\]*
               ... *}*
              *\[*PREFERRED PARAMETER p*\]* *\]*
  *\[* EXPORTING *{**{*VALUE(p1)*|*REFERENCE(p1)*|*p1*}* [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_shortref.htm)
               *{*VALUE(p2)*|*REFERENCE(p2)*|*p2*}* [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_shortref.htm)
              ... *}* *\]*
  *\[* CHANGING  *{**{*VALUE(p1)*|*REFERENCE(p1)*|*p1*}* [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_shortref.htm) *\[*OPTIONAL*|*DEFAULT def1*\]*
               *{*VALUE(p2)*|*REFERENCE(p2)*|*p2*}* [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_shortref.htm) *\[*OPTIONAL*|*DEFAULT def2*\]*
              ... *}* *\]*
  *\[* RETURNING *{*VALUE(r)*}* [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_shortref.htm) *\]*
  *\[* *{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|* *{*EXCEPTIONS exc1 exc2 ...*}* *\]*.

Effect

Declares an [instance method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_method_glosry.htm "Glossary Entry") meth in the declaration part of a class or in an interface.

Additions   

-   [ABSTRACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)
    Declares an abstract method that cannot be implemented in the same class.
-   [FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)
    Declares a final method that cannot be redefined in a subclass.
-   [DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm)
    Declares an optional interface method.
-   [FOR EVENT evt OF *{*class*|*intf*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm)
    Declares an [event handler](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_handler_glosry.htm "Glossary Entry") that can handle the event evt of the class class or of the interface intf. Only input parameters are possible.
-   [AMDP OPTIONS ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm)
    Declares attributes of [AMDP methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry")
-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)
    Defines input parameters p1, p2, ...
-   [EXPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)
    Defines output parameters p1, p2, ...
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)
    Defines input/output parameters p1, p2, ...
-   [RETURNING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_functional.htm)
    Declares a [functional method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry") with a completely typed return value r.
-   [VALUE(p1) ... VALUE(p2) ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)
    Defines the [pass by value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_value_glosry.htm "Glossary Entry") for a formal parameter.
-   [REFERENCE(p1)*|*p1 ... REFERENCE(p2)*|*p2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)
    Defines the [pass by reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") for a formal parameter.
-   [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_syntax.htm)
    Types the formal parameters.
-   [OPTIONAL*|*DEFAULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)
    Defines optional input or input/output parameters either with or without the replacement parameters def1, def2, ...
-   [PREFERRED PARAMETER p](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)
    Declares a parameter p of exclusively optional input parameters as preferred parameters.
-   [RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2)  ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)
    Declares class-based exceptions exc1, exc2, ... that can be propagated from the method either with or without resumability.
-   [EXCEPTIONS exc1 exc2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)
    Defines non-class-based exceptions exc1, exc2, ...