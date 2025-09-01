  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

TYPES, OCCURS - Short Reference

[Reference](javascript:call_link\('abaptypes_occurs.htm'\))

Syntax

TYPES dtype *{* *{*TYPE *\[*REF TO*\]* type*}*
            *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n.

Effect

Obsolete: Declares a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") type with a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") and the initial memory requirement n.

Additions

-   TYPE
    Defines the line type with a reference to a data type.
-   LIKE
    Defines the line type with a reference to a data object.
-   REF TO
    Creates the line type as a reference type.