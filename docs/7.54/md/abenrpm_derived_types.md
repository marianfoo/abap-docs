  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) → 

Derived Types

ABAP Compiler makes it possible to create derived types for type-secure parameters of a business object provider. Data types like this are known as derived types, since the compiler derives them from CDS entity types and their behavior definition implicitly.

Derived types contain at least the instance key (in accordance with the CDS definition) and possibly also the full row type, plus any other components produced by the model (for example, the parameters of an action).

When a business object provider is implemented, certain derived types can be used in method signatures in the context of the behavior implementation. This means the syntax can be used to create both local and global derived data types, which are used to declare input parameters or output parameters.

Continue
[Input Parameter Type](javascript:call_link\('abenrpm_input_parameters.htm'\))
[Type of the Output Parameter](javascript:call_link\('abenrpm_export_parameters.htm'\))
[Specific Derived Types](javascript:call_link\('abenspecific_derived_types.htm'\))
[Variables with Derived Types](javascript:call_link\('abenvariables_derived_types.htm'\))
[Component of the Derived Types](javascript:call_link\('abencomponents_derived_types.htm'\))