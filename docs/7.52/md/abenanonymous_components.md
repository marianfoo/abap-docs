  

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