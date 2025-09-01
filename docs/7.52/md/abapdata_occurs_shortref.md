  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

DATA - OCCURS - Quick reference

[Reference](javascript:call_link\('abapdata_occurs.htm'\))

Syntax

DATA itab *{* *{*TYPE *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n
          *\[*WITH HEADER LINE*\]*.

Effect

Obsolete: Declares a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") and the initial memory requirement n.

Additions

-   TYPE
    Defines the row type with a reference to a data type.
    
-   LIKE
    Defines the row type with a reference to a data object.
    
-   REF TO
    Creates the row type as a reference type.
    
-   [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\))
    Defines a header line with the same name.