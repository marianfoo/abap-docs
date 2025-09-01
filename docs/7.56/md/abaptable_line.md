  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

TYPES, DATA ..., TABLE LINE

Obsolete Syntax

[TYPES](javascript:call_link\('abaptypes_itab.htm'\)) ... [WITH](javascript:call_link\('abaptypes_keydef.htm'\)) ... [KEY](javascript:call_link\('abaptypes_primary_key.htm'\)) TABLE LINE.
[DATA](javascript:call_link\('abapdata_itab.htm'\))  ... [WITH](javascript:call_link\('abapdata_keydef.htm'\)) ... [KEY](javascript:call_link\('abapdata_primary_key.htm'\)) TABLE LINE.
...

Effect

The addition TABLE LINE can also be specified outside of classes in the declaration statements TYPES, DATA, and so on, instead of the pseudo component table\_line in the definition of the primary table key.

Hint

The ABAP Compiler should consider this addition an error, retained only for reasons of downward compatibility. The pseudo component table\_line should always be specified instead of TABLE LINE.

Bad Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY TABLE LINE.

Good Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.