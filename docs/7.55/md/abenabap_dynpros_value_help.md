  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) → 

dynpro - Input Help

Dynpros use input helps to support interactive input. This can be done in three different ways.

-   [Input helps from ABAP Dictionary](javascript:call_link\('abenabap_dynpros_value_help_auto.htm'\))

The associated [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") is provided automatically for dynpro fields from ABAP Dictionary. If a field has no search help defined, ABAP Dictionary still offers the content of a check table, the fixed values of the underlying domain, or static calendar help or clock help.

-   [Input helps on the dynpro](javascript:call_link\('abenabap_dynpros_value_help_dynp.htm'\))

ABAP Dictionary search helps can be associated with individual dynpro fields.

-   [Input helps in dialog modules](javascript:call_link\('abenabap_dynpros_value_help_mod.htm'\))

In dynpro flow logic, dialog modules providing self-programmed input help can be called at POV time.

These three options are ordered by priority. If you use more than one technique at the same time, the POV module calls override any definition on the dynpro, which in turn overrides the binding to ABAP Dictionary.

These three options should, however, be applied in the given order. If possible, a search help from ABAP Dictionary should always be defined for the input help and input help should only be defined in dialog modules if no other option is available. In particular, you should consider using a search help exit to enhance a search help before writing your own dialog modules.

Continue
[dynpro - Input Helps in ABAP Dictionary](javascript:call_link\('abenabap_dynpros_value_help_auto.htm'\))
[dynpro - Input Helps on Dynpros](javascript:call_link\('abenabap_dynpros_value_help_dynp.htm'\))
[dynpro - Input Help in Dialog Modules](javascript:call_link\('abenabap_dynpros_value_help_mod.htm'\))