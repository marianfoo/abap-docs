  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: METHODS, ABAPMETHODS_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

METHODS - Short Reference

[Reference](javascript:call_link\('abapmethods.htm'\))

Syntax

METHODS meth *\[*ABSTRACT*|*FINAL*\]*
            *|**\[*DEFAULT IGNORE*|*FAIL*\]*
             *\[*FOR EVENT evt OF *{*class*|*intf*}**\]*
  *\[* IMPORTING *{**{*VALUE(p1)*|*REFERENCE(p1)*|*p1*}* [typing](javascript:call_link\('abentyping_shortref.htm'\)) *\[*OPTIONAL*|*DEFAULT def1*\]*
               *{*VALUE(p2)*|*REFERENCE(p2)*|*p2*}* [typing](javascript:call_link\('abentyping_shortref.htm'\)) *\[*OPTIONAL*|*DEFAULT def2*\]*
               ... *}*
              *\[*PREFERRED PARAMETER p*\]* *\]*
  *\[* EXPORTING *{**{*VALUE(p1)*|*REFERENCE(p1)*|*p1*}* [typing](javascript:call_link\('abentyping_shortref.htm'\))
               *{*VALUE(p2)*|*REFERENCE(p2)*|*p2*}* [typing](javascript:call_link\('abentyping_shortref.htm'\))
              ... *}* *\]*
  *\[* CHANGING  *{**{*VALUE(p1)*|*REFERENCE(p1)*|*p1*}* [typing](javascript:call_link\('abentyping_shortref.htm'\)) *\[*OPTIONAL*|*DEFAULT def1*\]*
               *{*VALUE(p2)*|*REFERENCE(p2)*|*p2*}* [typing](javascript:call_link\('abentyping_shortref.htm'\)) *\[*OPTIONAL*|*DEFAULT def2*\]*
              ... *}* *\]*
  *\[* RETURNING *{*VALUE(r)*}* [typing](javascript:call_link\('abentyping_shortref.htm'\)) *\]*
  *\[* *{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|* *{*EXCEPTIONS exc1 exc2 ...*}* *\]*.

Effect

Declares an [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") meth in the declaration part of a class or in an interface.

Additions   

-   [ABSTRACT](javascript:call_link\('abapmethods_abstract_final.htm'\))
    Declares an abstract method that cannot be implemented in the same class.
-   [FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))
    Declares a final method that cannot be redefined in a subclass.
-   [DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))
    Declares an optional interface method.
-   [FOR EVENT evt OF *{*class*|*intf*}*](javascript:call_link\('abapmethods_event_handler.htm'\))
    Declares an [event handler](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") that can handle the event evt of the class class or of the interface intf. Only input parameters are possible.
-   [AMDP OPTIONS ...](javascript:call_link\('abapmethods_amdp_options.htm'\))
    Declares attributes of [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry")
-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\))
    Defines input parameters p1, p2, ...
-   [EXPORTING](javascript:call_link\('abapmethods_general.htm'\))
    Defines output parameters p1, p2, ...
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\))
    Defines input/output parameters p1, p2, ...
-   [RETURNING](javascript:call_link\('abapmethods_functional.htm'\))
    Declares a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") with a completely typed return value r.
-   [VALUE(p1) ... VALUE(p2) ...](javascript:call_link\('abapmethods_parameters.htm'\))
    Defines the [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") for a formal parameter.
-   [REFERENCE(p1)*|*p1 ... REFERENCE(p2)*|*p2 ...](javascript:call_link\('abapmethods_parameters.htm'\))
    Defines the [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") for a formal parameter.
-   [typing](javascript:call_link\('abentyping_syntax.htm'\))
    Types the formal parameters.
-   [OPTIONAL*|*DEFAULT](javascript:call_link\('abapmethods_parameters.htm'\))
    Defines optional input or input/output parameters either with or without the replacement parameters def1, def2, ...
-   [PREFERRED PARAMETER p](javascript:call_link\('abapmethods_general.htm'\))
    Declares a parameter p of exclusively optional input parameters as preferred parameters.
-   [RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2)  ...](javascript:call_link\('abapmethods_general.htm'\))
    Declares class-based exceptions exc1, exc2, ... that can be propagated from the method either with or without resumability.
-   [EXCEPTIONS exc1 exc2 ...](javascript:call_link\('abapmethods_general.htm'\))
    Defines non-class-based exceptions exc1, exc2, ...