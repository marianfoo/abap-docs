# ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Declarations / Data Types and Data Objects

Included pages: 4


### abentypes_data_obsolete.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) → 

Data Types and Data Objects

-   [TYPES - implicit](javascript:call_link\('abaptypes_implicit.htm'\))

-   [Unnecessary Length Specifications](javascript:call_link\('abendeclaration_wrong_length.htm'\))

-   [Anonymous Components](javascript:call_link\('abenanonymous_components.htm'\))

This translation does not reflect the current version of the documentation.
Continue
[TYPES - implicit](javascript:call_link\('abaptypes_implicit.htm'\))
[Wrong Lengths](javascript:call_link\('abendeclaration_wrong_length.htm'\))
[Anonymous Components](javascript:call_link\('abenanonymous_components.htm'\))


### abaptypes_implicit.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

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

Obsolete short forms of the statement [TYPES](javascript:call_link\('abaptypes.htm'\)) with reference to a predefined elementary type [abap\_type](javascript:call_link\('abaptypes_simple.htm'\)).

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


### abendeclaration_wrong_length.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

Wrong Lengths

Obsolete Syntax

... dtype(len)*|*dobj(len) TYPE d*|*f*|*i*|*t ...

Effect

Lengths specified in [declarations](javascript:call_link\('abenabap_declarations.htm'\)) using the statements TYPES, DATA, STATICS, and CONSTANTS and the predefined ABAP types d, f, i, and t are ignored. Only the predefined [fixed lengths](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) can be specified. Lengths specified in this way produce syntax errors in classes and interfaces and syntax warnings elsewhere.

Note

This obsolete length specification is only possible with the obsolete parenthesis syntax and not with the recommended addition LENGTH.

Bad Example

DATA: f1(8) TYPE d,
      f2(4) TYPE i.

Good Example

DATA: f1 TYPE d,
      f2 TYPE i.


### abenanonymous_components.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

Anonymous Components

Obsolete Syntax

DATA: BEGIN OF struc,
        ...
        '...',
        ...
        space(len) *\[*TYPE c*\]*,
        ...
      END OF struc.

Effect

If [text field literals](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") or the constant [space](javascript:call_link\('abenspace.htm'\)) (the latter also with a length specified in parentheses) are specified within the [definition of a structure](javascript:call_link\('abapdata_struc.htm'\)) using DATA, CONSTANTS, or STATICS, nameless text fields are included at this position as anonymous components. For literals, the initial value and the length of these components correspond to the content. If space is specified, a text field filled with blanks is created. These anonymous text fields cannot be addressed explicitly in programs. In particular, structures never contain components with the name space. Anonymous components can only be accessed using the structure name and by specifying appropriate offsets/lengths.

Notes

-   Anonymous components must not be specified in classes or interfaces.

-   These anonymous components can be replaced easily by named components. Named components increase the function of anonymous components by allowing them to be accessed explicitly, without limiting their role as, for example, filler fields.
