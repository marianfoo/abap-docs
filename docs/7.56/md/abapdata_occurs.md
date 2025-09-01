  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

DATA, OCCURS

[Short Reference](javascript:call_link\('abapdata_occurs_shortref.htm'\))

Obsolete Syntax

DATA itab *{* *{*TYPE *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n
          [*\[*WITH HEADER LINE*\]*](javascript:call_link\('abapdata_header_line.htm'\)).

Effect

This statement is forbidden in classes. It has exactly the same function as the following [DATA](javascript:call_link\('abapdata_itab.htm'\)) statement for the declaration of a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") and is replaced by this:

DATA itab *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
          *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
          WITH NON-UNIQUE DEFAULT KEY
          INITIAL SIZE n
          *\[*WITH HEADER LINE*\]*.

The use of the addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) is obsolete