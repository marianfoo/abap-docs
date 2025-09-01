  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Screen](javascript:call_link\('abenabap_generic_dynpro.htm'\)) →  [Internal Statements for Editing Dynpros](javascript:call_link\('abengeneric_dynpro_internal.htm'\)) → 

DELETE DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

DELETE DYNPRO f.

Effect

Deletes the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") with the name specified in the field f.

System Fields

sy-subrc

Meaning

0

The dynpro was deleted.

4

The dynpro does not exist.

The content of f consists of the 40 character program name and the four character [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry").

Example

DATA DYNPRONAME(44) VALUE 'SAPTEST'.
DYNPRONAME+40 = '0100'.
DELETE DYNPRO DYNPRONAME.