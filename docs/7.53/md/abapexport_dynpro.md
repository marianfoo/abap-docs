  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Dynpro](javascript:call_link\('abenabap_generic_dynpro.htm'\)) →  [Internal Statements for Editing Dynpros](javascript:call_link\('abengeneric_dynpro_internal.htm'\)) → 

EXPORT DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

EXPORT DYNPRO h f e m ID id.

Effect

Exports the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") with the name in the id. The dynpro information is taken from the structure h (dynpro header, dictionary structure D020S) and the internal tables f (field list, structure D021S), e (flow logic, structure D022S), and m (matchcode information, structure D023S). Standard tables without secondary keys can be specified for f, e, and m.