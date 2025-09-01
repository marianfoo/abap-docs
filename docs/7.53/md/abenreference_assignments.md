  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

Assigning References

This section discusses the assignments and special statements that set the references (or pointers) used in data references and field symbols.

-   [Setting Reference Variables](javascript:call_link\('abenset_references.htm'\))

-   [Setting Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\))

When using field symbols and data references that contain references to data objects, the following should be noted:

-   In a regular assignment between field symbols, as occurs in an [assignment of data objects](javascript:call_link\('abapmove.htm'\)), each field symbol is handled as a dereferenced pointer ([value semantics](javascript:call_link\('abenvalue_semantics_glosry.htm'\) "Glossary Entry")).

-   In a regular assignment between data references, as occurs in an [up cast or down cast](javascript:call_link\('abapmove_cast.htm'\)), the references are copied ([reference semantics](javascript:call_link\('abenreference_semantics_glosry.htm'\) "Glossary Entry")). The corresponding rules can be found in the [assignment rules for reference variables](javascript:call_link\('abenconversion_references.htm'\)).

Programming Guideline

[Use field symbols and data references in appropriate ways](javascript:call_link\('abendyn_access_data_obj_guidl.htm'\) "Guideline")

Note

For the [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry") (strings, internal tables, and [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry")) which are also managed internally using references, value semantics apply. This means that the internal management is not visible for the developers.

Continue
[Setting Reference Variables](javascript:call_link\('abenset_references.htm'\))
[Setting Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\))