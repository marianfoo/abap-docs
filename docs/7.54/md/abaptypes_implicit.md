  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

TYPES - implicit

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

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
    
-   If len or dec is not specified for the ABAP types c, n, p, and x, the length is set to the [type-friendly standard length](javascript:call_link\('abenbuilt_in_types_complete.htm'\)). No decimal places are set for p. This is only permitted outside of classes or interfaces.
    

Note

All additions should be specified in full, to make them easier to read.

Bad Example

TYPES: t1,
       t2 TYPE p.

Good Example

TYPES: t1 TYPE c LENGTH 1,
       t2 TYPE p LENGTH 8 DECIMALS 0.