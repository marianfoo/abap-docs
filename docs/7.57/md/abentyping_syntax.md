  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: typing Addition, ABENTYPING_SYNTAX, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

typing Addition

[Short Reference](javascript:call_link\('abentyping_shortref.htm'\))

Syntax

... [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) *|* [complete\_type](javascript:call_link\('abentyping_complete.htm'\))  ...

Effect

The addition typing is part of the definition of formal parameters and field symbols in the following statements:

-   [*\[*CLASS-*\]*METHODS](javascript:call_link\('abapmethods.htm'\))
-   [*\[*CLASS-*\]*EVENTS](javascript:call_link\('abapevents.htm'\))
-   [FORM](javascript:call_link\('abapform.htm'\))
-   [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\))

The addition allows generic typing with [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) and complete typing with [complete\_type](javascript:call_link\('abentyping_complete.htm'\)). In positions where the addition typing does not have to be specified, implicit typing with the generic type [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) takes place if no typing is specified explicitly.

Hints

-   In classes, the formal parameters of methods or events and field symbols must be typed explicitly. The formal parameters of methods or events of global classes and the formal parameters of function modules are typed in the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") or [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"). For a typing of system wide visible public interface parameters to be carried out in the Function Builder or Class Builder, only the types in the ABAP Dictionary may be referenced.
-   For more information about typing parameters of function modules, see [Function Module Interface](javascript:call_link\('abenfunction_parameters.htm'\)).
-   When formal parameters are typed, the addition LIKE can be used to reference formal parameters of the same procedure that have already been declared.

Continue
[typing Addition, generic\_type](javascript:call_link\('abentyping_generic.htm'\))
[typing Addition, complete\_type](javascript:call_link\('abentyping_complete.htm'\))