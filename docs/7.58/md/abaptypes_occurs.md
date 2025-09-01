  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20OCCURS%2C%20ABAPTYPES_OCCURS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, OCCURS

[Short Reference](javascript:call_link\('abaptypes_occurs_shortref.htm'\))

Obsolete Syntax

TYPES dtype *{* *{*TYPE *\[*REF TO*\]* type*}*
            *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n.

Effect

This statement is forbidden in classes. The statement has the same function as the following [TYPES](javascript:call_link\('abaptypes_itab.htm'\)) statement for defining [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") types, and is replaced by the following:

TYPES dtype *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
            *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
            WITH NON-UNIQUE DEFAULT KEY
            INITIAL SIZE n.