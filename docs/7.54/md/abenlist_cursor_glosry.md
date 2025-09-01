  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

list cursor

Current cursor position for output in a [list](javascript:call_link\('abenlist_glosry.htm'\) "Glossary Entry") in the [list buffer](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry"). Defined by the contents of the [system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") [sy-colno](javascript:call_link\('abensystem_fields.htm'\)) (position) and [sy-linno](javascript:call_link\('abensystem_fields.htm'\)) (line) and refers to the current page in the list. Since a single character may occupy more columns in the list than positions in the list buffer, only the horizontal position of the list cursor which also corresponds to the column in the displayed list is guaranteed for the lower and upper output limits.