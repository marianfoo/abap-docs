  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CREATE DATA, REF TO, ABAPCREATE_DATA_REFERENCE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

CREATE DATA, REF TO

[Short Reference](javascript:call_link\('abapcreate_data_shortref.htm'\))

Syntax

CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                 TYPE REF TO *{*type*|*(name)*}*.

Effect

The addition TYPE REF TO is used by the statement CREATE DATA to create a reference variable. The static type of the reference variable can be specified either directly as type or dynamically in name.

When type is specified, the same rules apply as to the definition of reference types using the statement [TYPES](javascript:call_link\('abaptypes.htm'\)). For data reference variables, either the generic type data or a completely specified data type can be specified. For object reference variables, either a class or an interface can be specified.

For name, a character-like field can be specified that must contain the name of a class, an interface, or a data type when the statement is executed. The name of the reference type in name can also be specified as an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry").

Hint

Object types in name can also be specified dynamically in lowercase letters.

Example

Creation of an anonymous data object as reference variable of the static type of a class. The dereferenced reference variable can be used to create an object of the class and to access its components.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string VALUE \`Oh my ...\`.
ENDCLASS.
TYPES reftype TYPE REF TO cls.
DATA dref TYPE REF TO reftype.
CREATE DATA dref TYPE REF TO cls.
CREATE OBJECT dref->\*.
cl\_demo\_output=>display( dref->\*->attr ).

Executable Example

[Creating Reference Variables](javascript:call_link\('abencreate_reference_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Creating Reference Variables](javascript:call_link\('abencreate_reference_abexa.htm'\))