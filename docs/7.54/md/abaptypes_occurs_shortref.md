  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

TYPES - OCCURS - Quick reference

[Reference](javascript:call_link\('abaptypes_occurs.htm'\))

Syntax

TYPES dtype *{* *{*TYPE *\[*REF TO*\]* type*}*
            *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n.

Effect

Obsolete: Declares a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") type with a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") and the initial memory requirement n.

Additions

-   TYPE
    Defines the row type with a reference to a data type.
    
-   LIKE
    Defines the row type with a reference to a data object.
    
-   REF TO
    Creates the row type as a reference type.