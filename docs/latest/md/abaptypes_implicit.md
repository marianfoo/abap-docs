  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20implicit%2C%20ABAPTYPES_IMPLICIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, implicit

[Short Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Obsolete Syntax

TYPES *{* dtype *}*
    *|* *{* dtype(len) *}*
    *|* *{* dtype LENGTH len *}*
    *|* *{* dtype TYPE c*|*n*|*p*|*x *}*
    *|* *{* dtype(len) TYPE p*}*
    *|* *{* dtype TYPE p LENGTH len*}*
    *|* *{* dtype TYPE p DECIMALS dec*}*.

Effect

Obsolete short forms of the statement [TYPES](javascript:call_link\('abaptypes.htm'\)) with reference to a built-in elementary type [abap\_type](javascript:call_link\('abaptypes_simple.htm'\)).

-   If TYPE abap\_type is not specified, the type is set implicitly to the standard type c.
-   If len or dec is not specified for the ABAP types c, n, p, and x, the length is set to the [type-friendly standard length](javascript:call_link\('abenbuilt_in_types_complete.htm'\)). No decimal places are set for p. This is only allowed outside of classes or interfaces.

Hint

For reasons of readability, all additions should be specified completely.

Bad Example

TYPES: t1,
       t2 TYPE p.

Good Example

TYPES: t1 TYPE c LENGTH 1,
       t2 TYPE p LENGTH 8 DECIMALS 0.