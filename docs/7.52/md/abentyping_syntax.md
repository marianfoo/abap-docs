  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

typing Addition

[Quick Reference](javascript:call_link\('abentyping_shortref.htm'\))

Syntax

... [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) *|* [complete\_type](javascript:call_link\('abentyping_complete.htm'\))  ...

Effect

The addition typing is part of the definition of formal parameters and field symbols in the following statements:

-   [*\[*CLASS-*\]*METHODS](javascript:call_link\('abapmethods.htm'\))

-   [*\[*CLASS-*\]*EVENTS](javascript:call_link\('abapevents.htm'\))

-   [FORM](javascript:call_link\('abapform.htm'\))

-   [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\))

The addition allows generic typing with [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) and full typing with [complete\_type](javascript:call_link\('abentyping_complete.htm'\)). In positions where the addition typing is not necessary, implicit typing with the generic type [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) takes place (if no typing is specified explicitly).

Notes

-   In classes, the formal parameters of methods or events and field symbols must be typed explicitly. The formal parameters of methods or events of global classes and the formal parameters of function modules are typed in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") or [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"). Only the types in ABAP Dictionary may be used for typings of public interface parameters visible across the system in Function Builder or Class Builder,

-   More information about typing parameters of function modules can be found under [Function Module Interface](javascript:call_link\('abenfunction_parameters.htm'\)).

Continue
[typing Addition - generic\_type](javascript:call_link\('abentyping_generic.htm'\))
[typing - Addition - complete\_type](javascript:call_link\('abentyping_complete.htm'\))